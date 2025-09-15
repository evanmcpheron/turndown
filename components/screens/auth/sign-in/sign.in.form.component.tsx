import { Form, useForm } from "@/components/forms/form";
import { Input } from "@/components/forms/input";
import { ValidationResult } from "@/components/forms/validations/common.validations";
import { useAuth } from "@/context";
import { forwardRef, useImperativeHandle, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SignInFormProps {}

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

export const SignInForm = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  SignInFormProps
>((props, ref) => {
  const { signIn } = useAuth();

  const [submittingData, setSubmittingData] = useState(false);
  const { submitForm } = useForm({
    formName: "frmSignIn",
    validationModel: formValidationSchema,
    onFormErrors: (_errors) => {
      // console.error('Form Errors:', errors)
    },
  });

  const saveData = async () => {
    try {
      await signIn("email".trim(), "password");
      // go to tabs root and remove back stack
    } catch (e: any) {
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
        console.log(`🚀 ~ test.tsx:60 ~ submitData ~ errors: \n`, errors);

        console.log(`🚀 ~ test.tsx:62 ~ submitData ~ data: \n`, data);

        // if (errors) {
        //   // error notification here
        //   setSubmittingData(false);
        //   return;
        // }

        const saveResult = await saveData();

        console.log(
          `🚀 ~ test.tsx:73 ~ submitData ~ saveResult: \n`,
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
    <Form name="frmSignIn">
      <Input name="email" placeholder="email" disabled />
      <Input name="password" type="password" placeholder="password" />
    </Form>
  );
});
