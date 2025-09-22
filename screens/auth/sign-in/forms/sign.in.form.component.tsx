import { useAuth } from "@/src/contexts/auth";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { TurndownObject } from "@/src/types";
import { forwardRef, useImperativeHandle, useState } from "react";
import { formValidationSchema } from "./sign.in.form.logic";
import { SignInFormProps } from "./sign.in.form.types";

export const SignInForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  SignInFormProps
>((_props, ref) => {
  const { signIn } = useAuth();

  const [submittingData, setSubmittingData] = useState(false);
  const { submitForm } = useForm({
    formName: "frmSignIn",
    validationModel: formValidationSchema,
    onFormErrors: (_errors) => {
      // console.error('Form Errors:', errors)
    },
  });

  const saveData = async (data: TurndownObject) => {
    try {
      await signIn(data.email.trim(), data.password);
      return true;
    } catch (_e: TurndownObject) {
      showErrorNotification("Your email or password is incorrect");
      return false;
    } finally {
    }
  };

  useImperativeHandle(ref, () => ({
    submitData(callback: (success: boolean) => void) {
      if (submittingData) {
        return;
      }
      setSubmittingData(true);

      submitForm(async (data, errors) => {
        if (errors) {
          showErrorNotification(getFirstPropertyValue(errors));
          setSubmittingData(false);
          return;
        }

        const saveResult = await saveData(data);

        if (saveResult) {
          callback(saveResult);
        }
        setSubmittingData(false);
      });
    },
  }));

  return (
    <Form
      name="frmSignIn"
      editValues={{ email: "evan.mcpheron@icloud.com", password: "password" }}
    >
      <Input name="email" placeholder="email" label="email" />
      <Input
        name="password"
        type="password"
        placeholder="password"
        label="password"
      />
    </Form>
  );
});
