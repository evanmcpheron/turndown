import { Button } from "@/src/shared/ui/actions/button";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { router } from "expo-router";
import React, { useRef } from "react";
import { SignInForm } from "./forms";

export const SignInScreen = () => {
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
