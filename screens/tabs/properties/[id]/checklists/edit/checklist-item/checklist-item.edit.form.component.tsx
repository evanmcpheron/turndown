import useAuth from "@/src/contexts/auth/auth.context";
import { checklistItemApi } from "@/src/services";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { removeUndefined } from "@/src/shared/lib/object";
import { TurndownCheckbox } from "@/src/shared/ui/forms/checkbox";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { TurndownObject } from "@/src/types";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { formValidationSchema } from "./checklist-item.edit.form.logic";
import { ChecklistItemEditFormProps } from "./checklist-item.edit.form.types";

export const ChecklistItemEditForm = forwardRef<
  {
    submitData: (callback: (success: boolean) => void) => void;
  },
  ChecklistItemEditFormProps
>(({ itemId }, ref) => {
  const { user } = useAuth();

  const [submittingData, setSubmittingData] = useState(false);
  const { submitForm, setValue } = useForm({
    formName: "frmEditChecklistItem",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  useEffect(() => {
    checklistItemApi.getById(itemId).then((response) => {
      setValue("text", response.text);
      setValue("photo_required", response.photo_required);
    });
  }, [itemId]);

  const saveData = async (data: TurndownObject) => {
    try {
      if (!user) return false;
      const cleaned = removeUndefined(data);

      await checklistItemApi.update(cleaned, itemId);

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
    <Form name="frmEditChecklistItem">
      <Input name="text" placeholder="Text" label="Text" />
      <TurndownCheckbox name={"photo_required"} label="Is a photo required?" />
    </Form>
  );
});
