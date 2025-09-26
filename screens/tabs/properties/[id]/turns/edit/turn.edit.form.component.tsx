// turn.edit.form.component.tsx

import { companyMembersApi, turnsApi } from "@/src/services";
import { propertiesApi } from "@/src/services/api/properties";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { removeUndefined } from "@/src/shared/lib/object";
import { Dropdown, FieldContainer, SelectOption } from "@/src/shared/ui";
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
import { formValidationSchema } from "./turn.edit.form.logic";
import { TurnEditFormProps } from "./turn.edit.form.types";

export const TurnEditForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  TurnEditFormProps
>(({ selectedId }, ref) => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [availbleCleaner, setAvailableCleaners] = useState<SelectOption[]>([]);
  const [submittingData, setSubmittingData] = useState(false);

  const { submitForm, setValue } = useForm({
    formName: "frmEditTurn",
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

  useEffect(() => {
    turnsApi.getById(selectedId).then((response) => {
      setValue("notes", response?.notes);
      setValue("scheduled_start_at", response?.scheduled_start_at);
      setValue("scheduled_end_at", response?.scheduled_end_at);
      setValue("readiness_status", response?.readiness_status);
    });
  }, []);

  const saveData = async (data: Turn) => {
    try {
      const cleaned = removeUndefined({
        ...data,
      }) as Turn;

      await turnsApi.updateById(cleaned, selectedId);

      return true;
    } catch {
      showErrorNotification("Something went wrong creating this turn");
      return false;
    }
  };

  useImperativeHandle(ref, () => ({
    submitData(callback: (success: boolean) => void) {
      if (submittingData) return;
      setSubmittingData(true);

      submitForm(async (data, errors) => {
        if (errors) {
          showErrorNotification(getFirstPropertyValue(errors));
          setSubmittingData(false);
          return;
        }
        const success = await saveData(data);
        if (success) callback(success);
        setSubmittingData(false);
      });
    },
  }));

  return (
    <Form name="frmEditTurn">
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
        <Radio name="readiness_status" options={READINESS_STATUS_OPTIONS} />
      </TurndownSection>
    </Form>
  );
});
