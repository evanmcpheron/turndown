import { Button } from "@/src/shared/ui/button";
import { Page } from "@/src/shared/ui/page/page.layout.component";
import { router } from "expo-router";
import React, { useRef } from "react";
import { SignUpForm } from "./forms";

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
