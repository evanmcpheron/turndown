import useAuth from "@/src/contexts/auth/auth.context";
import { useTheme } from "@/src/contexts/theme";
import { companyApi } from "@/src/services/api/company";
import { FieldContainer } from "@/src/shared";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { removeUndefined } from "@/src/shared/lib/object";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { TurndownObject } from "@/src/types";
import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { formValidationSchema } from "./company.create.form.logic";
import { companyCreateFormStyles } from "./company.create.form.styles";
import { CompanyCreateFormProps } from "./company.create.form.types";

export const CompanyCreateForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  CompanyCreateFormProps
>((_props, ref) => {
  const { user } = useAuth();
  const { app } = useTheme();
  const styles = useMemo(() => companyCreateFormStyles(app), [app]);

  const [submittingData, setSubmittingData] = useState(false);

  const { submitForm } = useForm({
    formName: "frmCreateCompany",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  const saveData = async (data: TurndownObject) => {
    try {
      if (user?.id) {
        const cleaned = removeUndefined(data);

        await companyApi.post(cleaned, user?.id);
        return true;
      }
      return false;
    } catch {
      showErrorNotification("Something went wrong creating this company");
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
    <Form name="frmCreateCompany">
      <FieldContainer
        label="Name"
        required
        formInput={<Input name="name" placeholder="Name" label="Name" />}
      />
    </Form>
  );
});
