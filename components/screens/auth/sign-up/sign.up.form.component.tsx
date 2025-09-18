import { Button } from "@/components/actions";
import { showErrorNotification } from "@/components/actions/notification/notification.helper";
import { Form, useForm } from "@/components/forms/form";
import { getFirstPropertyValue } from "@/components/forms/form/form.helpers";
import { Input } from "@/components/forms/input";
import { ValidationResult } from "@/components/forms/validations/common.validations";
import { useAuth } from "@/context";
import { TurndownObject } from "@/helpers";
import { forwardRef, useImperativeHandle, useState } from "react";

interface SignUpFormProps {
  onSubmit: () => void;
}

const formValidationSchema = {
  email: (emailValue: string): ValidationResult => {
    const v = (emailValue ?? "").trim();
    if (!v) return "Email is required.";
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    return isEmail ? undefined : "Enter a valid email address.";
  },

  password: (passwordValue: string): ValidationResult => {
    const v = passwordValue ?? "";
    if (!v) return "Password is required.";
    return v.length >= 6
      ? undefined
      : "Password must be at least 6 characters.";
  },
};

export const SignUpForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  SignUpFormProps
>((props, ref) => {
  const { onSubmit } = props;
  const { signUp } = useAuth();

  const [submittingData, setSubmittingData] = useState(false);
  const { submitForm } = useForm({
    formName: "frmSignUp",
    validationModel: formValidationSchema,
    onFormErrors: (_errors) => {
      // console.error('Form Errors:', errors)
    },
  });

  const saveData = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await signUp(email.trim(), password);
    } catch (e: TurndownObject) {
      console.error(e);
    } finally {
    }
    return true;
  };

  useImperativeHandle(ref, () => ({
    submitData(callback: (success: boolean) => void) {
      if (submittingData) {
        return;
      }
      setSubmittingData(true);

      submitForm(async (data, errors) => {
        const allErrors = errors;

        if (data.password !== data.confirmPassword)
          allErrors.matchingPasswords = "Both passwords must match";

        if (allErrors) {
          showErrorNotification(getFirstPropertyValue(errors));
          setSubmittingData(false);
          return;
        }

        const saveResult = await saveData(data);

        console.log(
          `🚀 ~ sign.up.form.component.tsx:86 ~ submitData ~ saveResult: \n`,
          saveResult
        );
        if (saveResult) {
          callback(saveResult);
        }
        setSubmittingData(false);
      });
    },
  }));

  return (
    <Form name="frmSignUp" editValues={{ email: "" }} initialStep={0}>
      <Form.Step>
        <Input name="name" placeholder="name" label="name" />
        <Input name="email" placeholder="email" label="email" />
      </Form.Step>
      <Form.Step>
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
        <Button onPress={onSubmit}>Sign Up</Button>
      </Form.Step>
    </Form>
  );
});

SignUpForm.displayName = "SignUpForm";
