import { TurndownButton } from "@/src/shared/ui/actions";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
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
        <TurndownButton
          onPress={() => router.replace("/(auth)/sign.in.screen")}
        >
          Sign In
        </TurndownButton>
      }
      header="Sign Up"
      footer={
        <TurndownButton
          onPress={() => {
            if (signUpFormRef.current) {
              signUpFormRef.current.submitData((success: boolean) => {
                router.replace("/(tabs)/properties");
                console.log("success: ", success);
              });
            }
          }}
        >
          Sign Up
        </TurndownButton>
      }
    >
      <SignUpForm ref={signUpFormRef} />
    </Page>
  );
};
