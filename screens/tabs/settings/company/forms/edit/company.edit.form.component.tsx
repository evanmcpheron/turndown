import useAuth from "@/src/contexts/auth/auth.context";
import { companyApi } from "@/src/services/api/company";
import { FieldContainer } from "@/src/shared";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { removeUndefined } from "@/src/shared/lib/object";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { Company, TurndownObject } from "@/src/types";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { formValidationSchema } from "./company.edit.form.logic";
import { CompanyEditFormProps } from "./company.edit.form.types";

export const CompanyEditForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  CompanyEditFormProps
>(({ companyId }, ref) => {
  const { user } = useAuth();

  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    companyApi.getById(companyId).then((res) => {
      setCompany(res);
    });
  }, [companyId]);

  const [submittingData, setSubmittingData] = useState(false);

  const { submitForm } = useForm({
    formName: "frmEditCompany",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  const saveData = async (data: TurndownObject) => {
    try {
      if (user?.id) {
        const cleaned = removeUndefined(data);

        await companyApi.updateById(cleaned, companyId);
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
    <Form name="frmEditCompany" editValues={company || {}}>
      <FieldContainer
        label="Name"
        required
        formInput={<Input name="name" placeholder="Name" label="Name" />}
      />
    </Form>
  );
});
