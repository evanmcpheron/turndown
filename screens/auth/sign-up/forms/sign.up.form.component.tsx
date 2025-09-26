import useAuth from "@/src/contexts/auth/auth.context";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { TurndownObject } from "@/src/types";
import { forwardRef, useImperativeHandle, useState } from "react";
import { formValidationSchema } from "./sign.up.form.logic";
import { SignUpFormProps } from "./sign.up.form.types";

export const SignUpForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  SignUpFormProps
>((_props, ref) => {
  const { signUp } = useAuth();

  const [submittingData, setSubmittingData] = useState(false);
  const { submitForm } = useForm({
    formName: "frmSignUp",
    validationModel: formValidationSchema,
    onFormErrors: (_errors) => {
      // console.error('Form Errors:', errors)
    },
  });

  const saveData = async (data: TurndownObject) => {
    try {
      await signUp(data.email.trim(), data.password, data.name);

      return true;
    } catch (e: TurndownObject) {
      showErrorNotification(
        e.code === "auth/email-already-in-use"
          ? "That email is already in use."
          : "Something went wrong signing up."
      );
      return false;
    }
  };

  useImperativeHandle(ref, () => ({
    submitData(callback: (success: boolean) => void) {
      if (submittingData) {
        return;
      }
      setSubmittingData(true);

      submitForm(async (data, errors) => {
        const allErrors = { ...errors };

        if (data.password !== data.confirmPassword)
          allErrors.matchingPasswords = "Both passwords must match";

        if (Object.keys(allErrors).length !== 0) {
          showErrorNotification(getFirstPropertyValue(allErrors));
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
      name="frmSignUp"
      editValues={{
        name: "Evan",
        email: "evan.mcpheron@icloud.com",
        password: "password",
        confirmPassword: "password",
      }}
    >
      <Input name="name" placeholder="name" label="name" />
      <Input name="email" placeholder="email" label="email" />
      <Input
        name="password"
        type="password"
        placeholder="password"
        label="Confirm Password"
      />
      <Input
        name="confirmPassword"
        type="password"
        placeholder="confirm password"
        label="Confirm Password"
      />
    </Form>
  );
});

SignUpForm.displayName = "SignUpForm";
