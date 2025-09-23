import { useAuth } from "@/src/contexts/auth";
import { checklistItemApi } from "@/src/services";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { removeUndefined } from "@/src/shared/lib/object";
import { TurndownCheckbox } from "@/src/shared/ui/forms/checkbox";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { TurndownObject } from "@/src/types";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { formValidationSchema } from "./checklist-item.create.form.logic";
import { ChecklistItemCreateFormProps } from "./checklist-item.create.form.types";

export const ChecklistItemCreateForm = forwardRef<
  {
    submitData: (callback: (success: boolean) => void) => void;
  },
  ChecklistItemCreateFormProps
>(({ checklistId }, ref) => {
  const { user } = useAuth();

  const [submittingData, setSubmittingData] = useState(false);
  const { submitForm } = useForm({
    formName: "frmCreateChecklistItem",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  const saveData = async (data: TurndownObject) => {
    try {
      if (!user) return false;
      const cleaned = removeUndefined(data);

      await checklistItemApi.post(
        { ...cleaned, checklist_id: checklistId },
        user?.id
      );

      return true;
    } catch {
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
    <Form name="frmCreateChecklistItem">
      <Input name="text" placeholder="Text" label="Text" />
      <TurndownCheckbox name={"photo_required"} label="Is a photo required?" />
    </Form>
  );
});
