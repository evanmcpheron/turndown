import useAuth from "@/src/contexts/auth/auth.context";
import { companyMemberInvitesApi } from "@/src/services";
import { FieldContainer, TurndownSection } from "@/src/shared";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { removeUndefined } from "@/src/shared/lib/object";
import { DateTimePicker } from "@/src/shared/ui/forms/date-time-picker";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { TurndownObject } from "@/src/types";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { formValidationSchema } from "./invite.create.form.logic";
import { InviteCreateFormProps } from "./invite.create.form.types";

export const InviteCreateForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  InviteCreateFormProps
>((_props, ref) => {
  const { user } = useAuth();

  const [submittingData, setSubmittingData] = useState(false);

  const { submitForm } = useForm({
    formName: "frmCreateInvite",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  const saveData = async (data: TurndownObject) => {
    try {
      if (user?.id) {
        const cleaned = removeUndefined(data);
        cleaned.email = cleaned?.email.toLowerCase();

        const response = await companyMemberInvitesApi.post(
          cleaned,
          user.company_id
        );

        return { success: true, id: response.id };
      }
      return { success: false, id: null };
    } catch {
      showErrorNotification("Something went wrong creating this invite");
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
        const { success, id } = await saveData(data);
        if (success && id) callback(success, id);
        setSubmittingData(false);
      });
    },
  }));

  return (
    <Form name="frmCreateInvite" editValues={{ role: "cleaner" }}>
      <TurndownSection
        title="Create an Invite"
        hint="Add an email to send it directly to the user or just give them a code."
      >
        <FieldContainer
          label="Email"
          formInput={<Input name="email" placeholder="Email" label="Email" />}
        />
        <FieldContainer
          label="Expire Date"
          required
          formInput={
            <DateTimePicker name="expires_at" placeholder="Expire Date" />
          }
        />
        {/* <FieldContainer
          label="Role"
          required
          formInput={<Radio name="role" options={MEMBER_ROLE_OPTIONS} />}
        /> */}
      </TurndownSection>
    </Form>
  );
});
