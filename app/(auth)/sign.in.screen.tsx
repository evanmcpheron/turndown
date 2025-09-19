import { Button } from "@/components/actions";
import { Page } from "@/components/layouts/page/page.layout.component";
import { SignInForm } from "@/components/screens/auth";
import { router } from "expo-router";
import React, { useRef } from "react";

const SignInScreen = () => {
  const signInFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  return (
    <Page
      header="Sign In"
      headerButton={
        <Button onPress={() => router.replace("/(auth)/sign.up.screen")}>
          Sign Up
        </Button>
      }
      footer={
        <Button
          onPress={() => {
            if (signInFormRef.current) {
              signInFormRef.current.submitData((success: boolean) => {
                router.replace("/");
                console.log("success: ", success);
              });
            }
          }}
        >
          Sign in
        </Button>
      }
    >
      <SignInForm ref={signInFormRef} />
    </Page>
  );
};

export default SignInScreen;
