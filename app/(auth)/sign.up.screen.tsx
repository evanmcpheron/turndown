import { Button } from "@/components/actions";
import { Page } from "@/components/layouts/page/page.layout.component";
import { SignUpForm } from "@/components/screens/auth/sign-up/sign.up.form.component";
import { router } from "expo-router";
import React, { useRef } from "react";

const SignUpScreen = () => {
  const signUpFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  return (
    <Page
      padding={10}
      headerButton={
        <Button onPress={() => router.replace("/(auth)/sign.in.screen")}>
          Sign In
        </Button>
      }
      header="Sign Up"
      stepperPlacement="header"
    >
      <SignUpForm
        ref={signUpFormRef}
        onSubmit={() => {
          if (signUpFormRef.current) {
            signUpFormRef.current.submitData((success: boolean) => {
              router.replace("/");
              console.log("success: ", success);
            });
          }
        }}
      />
    </Page>
  );
};

export default SignUpScreen;
