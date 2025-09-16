import { Button } from "@/components/actions";
import { Label } from "@/components/font";
import { Page } from "@/components/layouts/page/page.layout.component";
import { SignInForm } from "@/components/screens/auth";
import { router } from "expo-router";
import React, { useRef } from "react";

const SignInScreen = () => {
  const signInFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  return (
    <Page header="Sign In">
      <SignInForm ref={signInFormRef} />
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

      <Label
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        New here?{" "}
        <Button variant="link" to={"/(auth)/sign.up.screen"}>
          Create an account
        </Button>
      </Label>
    </Page>
  );
};

export default SignInScreen;
