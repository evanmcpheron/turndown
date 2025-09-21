import { Button } from "@/components/actions";
import { Page } from "@/components/layouts/page/page.layout.component";
import { SignUpForm } from "@/components/screens/auth/sign-up/sign.up.form.component";
import { router } from "expo-router";
import React, { useRef } from "react";

export const SignUpScreen = () => {
  const signUpFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  return (
    <Page
      headerButton={
        <Button onPress={() => router.replace("/(auth)/sign.in.screen")}>
          Sign In
        </Button>
      }
      header="Sign Up"
      footer={
        <Button
          onPress={() => {
            if (signUpFormRef.current) {
              signUpFormRef.current.submitData((success: boolean) => {
                router.replace("/");
                console.log("success: ", success);
              });
            }
          }}
        >
          Sign Up
        </Button>
      }
    >
      <SignUpForm ref={signUpFormRef} />
    </Page>
  );
};
