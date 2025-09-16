import { Button } from "@/components/actions";
import { Label } from "@/components/font";
import { Page } from "@/components/layouts/page/page.layout.component";
import { SignUpForm } from "@/components/screens/auth/sign-up/sign.up.form.component";
import { router } from "expo-router";
import React, { useRef } from "react";

const SignUpScreen = () => {
  const signUpFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  return (
    <Page header="Sign Up">
      <SignUpForm ref={signUpFormRef} />
      <Button
        onPress={() => {
          console.log(signUpFormRef.current);
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

      <Label
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        Have an account?{" "}
        <Button variant="link" to={"/(auth)/sign.in.screen"}>
          Sign In
        </Button>
      </Label>
    </Page>
  );
};

export default SignUpScreen;
