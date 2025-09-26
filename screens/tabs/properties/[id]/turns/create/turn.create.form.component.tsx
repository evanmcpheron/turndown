// turn.create.form.component.tsx

import useAuth from "@/src/contexts/auth/auth.context";
import { companyMembersApi, turnsApi } from "@/src/services";
import { propertiesApi } from "@/src/services/api/properties";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { removeUndefined } from "@/src/shared/lib/object";
import { Card, Dropdown, FieldContainer, SelectOption } from "@/src/shared/ui";
import { DateTimePicker } from "@/src/shared/ui/forms/date-time-picker";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { Radio } from "@/src/shared/ui/forms/radio/radio.component";
import { TurndownSection } from "@/src/shared/ui/surface/section";
import { CompanyMember, READINESS_STATUS_OPTIONS, Turn } from "@/src/types";
import { useLocalSearchParams } from "expo-router";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { formValidationSchema } from "./turn.create.form.logic";
import { TurnCreateFormProps } from "./turn.create.form.types";

export const TurnCreateForm = forwardRef<
  { submitData: (callback: (success: boolean, id: string) => void) => void },
  TurnCreateFormProps
>((_props, ref) => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user } = useAuth();

  const [availbleCleaner, setAvailableCleaners] = useState<SelectOption[]>([]);
  const [submittingData, setSubmittingData] = useState(false);

  const { submitForm } = useForm({
    formName: "frmCreateTurn",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  useEffect(() => {
    propertiesApi.getById(id).then((response) => {
      companyMembersApi
        .getByCompanyId(response.company_id)
        .then((res: CompanyMember[]) => {
          setAvailableCleaners(() => {
            const cleaners = [] as SelectOption[];

            res.forEach((cl) => {
              cleaners.push({ value: cl.user_id, label: cl.user_id });
            });
            return cleaners;
          });
        });
    });
  }, []);

  const saveData = async (data: Turn) => {
    try {
      if (id && user?.company_id) {
        const cleaned = removeUndefined({
          ...data,
        }) as Turn;

        const response = await turnsApi.post(cleaned, id, user?.company_id);

        return { success: true, id: response?.id };
      } else {
        showErrorNotification("Something went wrong creating this turn");
        return { success: false, id: null };
      }
    } catch {
      showErrorNotification("Something went wrong creating this turn");
      return { success: false, id: null };
    }
  };

  useImperativeHandle(ref, () => ({
    submitData(callback: (success: boolean, id: string) => void) {
      if (submittingData) return;
      setSubmittingData(true);

      submitForm(async (data, errors) => {
        if (errors) {
          showErrorNotification(getFirstPropertyValue(errors));
          setSubmittingData(false);
          return;
        }
        const { success, id: turn_id } = await saveData(data);
        if (success && turn_id) callback(success, turn_id);
        setSubmittingData(false);
      });
    },
  }));

  return (
    <Form name="frmCreateTurn" editValues={{ readiness_status: "unknown" }}>
      <TurndownSection>
        <FieldContainer
          label="Start Time"
          required
          formInput={<DateTimePicker name={"scheduled_start_at"} />}
        />
        <FieldContainer
          label="End Time"
          required
          formInput={<DateTimePicker name={"scheduled_end_at"} />}
        />
        <FieldContainer
          label="Notes"
          formInput={<Input name="notes" multiline />}
        />
        <FieldContainer
          label="Assigned Cleaner"
          formInput={
            <Dropdown name={"assigned_user_id"} options={availbleCleaner} />
          }
        />
        <Card title="Readiness Status" secondary>
          <Radio name="readiness_status" options={READINESS_STATUS_OPTIONS} />
        </Card>
      </TurndownSection>
    </Form>
  );
});
