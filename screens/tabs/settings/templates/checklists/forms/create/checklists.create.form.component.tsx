import { useAuth } from "@/src/contexts/auth";
import { useTheme } from "@/src/contexts/theme";
import { checklistApi } from "@/src/services";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { removeUndefined } from "@/src/shared/lib/object";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { TurndownSection } from "@/src/shared/ui/surface/section";
import { TurndownObject } from "@/src/types";
import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { ChecklistsFormRefHandler } from "../../checklists.template.types";
import { formValidationSchema } from "./checklists.create.form.logic";
import { checklistsCreateFormStyles } from "./checklists.create.form.styles";
import { ChecklistsCreateFormProps } from "./checklists.create.form.types";

export const ChecklistsTemplateCreateForm = forwardRef<
  ChecklistsFormRefHandler,
  ChecklistsCreateFormProps
>((_props, ref) => {
  const { user } = useAuth();
  const { app } = useTheme();

  const styles = useMemo(() => checklistsCreateFormStyles(app), [app]);

  const [submittingData, setSubmittingData] = useState(false);
  const { submitForm } = useForm({
    formName: "frmCreateChecklists",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  const saveData = async (data: TurndownObject) => {
    try {
      if (!user) return { success: false, id: null };
      const cleaned = removeUndefined(data);
      const response = await checklistApi.post(
        { ...cleaned, is_template: true },
        user?.id
      );

      return { success: true, id: response?.data.id };
    } catch {
      return { success: false, id: null };
    }
  };

  useImperativeHandle(ref, () => ({
    submitData(callback: (success: boolean, id?: string) => void) {
      if (submittingData) return;
      setSubmittingData(true);

      submitForm(async (data, errors) => {
        if (errors) {
          showErrorNotification(getFirstPropertyValue(errors));
          setSubmittingData(false);
          return;
        }
        const { success, id } = await saveData(data);
        if (success) callback(success, id);
        setSubmittingData(false);
      });
    },
  }));

  return (
    <Form name="frmCreateChecklists">
      <TurndownSection
        title="Checklist"
        hint="What is the name of this checklist template?"
      >
        <Input name="name" placeholder="Name" label="Name" />
      </TurndownSection>
    </Form>
  );
});
