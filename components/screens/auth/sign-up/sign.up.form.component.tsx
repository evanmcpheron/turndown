import { Form, useForm } from "@/components/forms/form";
import { Input } from "@/components/forms/input";
import { ValidationResult } from "@/components/forms/validations/common.validations";
import { useAuth } from "@/context";
import { TurndownObject } from "@/helpers";
import { forwardRef, useImperativeHandle, useState } from "react";
import { View } from "react-native";

interface SignUpFormProps {
  page: number;
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
  const { signUp } = useAuth();

  const { page } = props;

  const [submittingData, setSubmittingData] = useState(false);
  const { submitForm } = useForm({
    formName: "frmSignUp",
    validationModel: formValidationSchema,
    onFormErrors: (_errors) => {
      // console.error('Form Errors:', errors)
    },
  });

  const saveData = async () => {
    try {
      await signUp("email".trim(), "password");
      // go to tabs root and remove back stack
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
        console.log(
          `🚀 ~ sign.up.form.component.tsx:63 ~ submitData ~ errors: \n`,
          errors
        );

        console.log(
          `🚀 ~ sign.up.form.component.tsx:68 ~ submitData ~ data: \n`,
          data
        );

        // if (errors) {
        //   // error notification here
        //   setSubmittingData(false);
        //   return;
        // }

        const saveResult = await saveData();

        console.log(
          `🚀 ~ sign.up.form.component.tsx:81 ~ submitData ~ saveResult: \n`,
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
    <Form name="frmSignUp" editValues={{ email: "" }}>
      <View style={{ display: page === 0 ? "flex" : "none", gap: 10 }}>
        <Input name="name" placeholder="name" label="name" />
      </View>
      <View style={{ display: page === 1 ? "flex" : "none", gap: 10 }}>
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
      </View>
    </Form>
  );
});

SignUpForm.displayName = "SignUpForm";
