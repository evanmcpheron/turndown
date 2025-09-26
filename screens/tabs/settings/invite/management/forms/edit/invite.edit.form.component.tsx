import useAuth from "@/src/contexts/auth/auth.context";
import { FieldContainer } from "@/src/shared";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { removeUndefined } from "@/src/shared/lib/object";
import { DateTimePicker } from "@/src/shared/ui/forms/date-time-picker";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { CompanyInvite, TurndownObject } from "@/src/types";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { formValidationSchema } from "./invite.edit.form.logic";
import { InviteEditFormProps } from "./invite.edit.form.types";

export const InviteEditForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  InviteEditFormProps
>(({ inviteId }, ref) => {
  const { user } = useAuth();

  const [invite, setInvite] = useState<CompanyInvite | null>(null);

  useEffect(() => {
    // companyMemberInvitesApi.getById(inviteId).then((res) => {
    //   setInvite(res);
    // });
  }, [inviteId]);

  const [submittingData, setSubmittingData] = useState(false);

  const { submitForm } = useForm({
    formName: "frmEditInvite",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  const saveData = async (data: TurndownObject) => {
    try {
      if (user?.id) {
        const cleaned = removeUndefined(data);
        console.log(
          `🚀 ~ invite.edit.form.component.tsx:46 ~ saveData ~ cleaned: \n`,
          cleaned
        );

        // await companyMemberInvitesApi.updateById(cleaned, inviteId);
        return true;
      }
      return false;
    } catch {
      showErrorNotification("Something went wrong creating this invite");
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
    <Form name="frmEditInvite" editValues={invite || {}}>
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
        label="Expire Date"
        required
        formInput={<Radio name="role" options={MEMBER_ROLE_OPTIONS} />}
      /> */}
    </Form>
  );
});
