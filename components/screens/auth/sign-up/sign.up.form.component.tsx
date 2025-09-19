import { showErrorNotification } from "@/components/actions/notification/notification.helper";
import { Form, useForm } from "@/components/forms/form";
import { getFirstPropertyValue } from "@/components/forms/form/form.helpers";
import { Input } from "@/components/forms/input";
import { ValidationResult } from "@/components/forms/validations/common.validations";
import { useAuth } from "@/context";
import { TurndownObject } from "@/helpers";
import { forwardRef, useImperativeHandle, useState } from "react";

interface SignUpFormProps {}

const formValidationSchema = {
  name: (nameValue: string): ValidationResult =>
    !(nameValue ?? "").trim() && "You must enter a name to sign up",
  email: (emailValue: string): ValidationResult => {
    const v = (emailValue ?? "").trim();
    if (!v) return "Email is required.";
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    return !isEmail && "Enter a valid email address.";
  },

  password: (passwordValue: string): ValidationResult => {
    const v = passwordValue ?? "";
    if (!v) return "Password is required.";
    return v.length < 6 && "Password must be at least 6 characters.";
  },
};

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
