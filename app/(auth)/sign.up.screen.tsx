import { Button } from "@/components/actions";
import { Label } from "@/components/font";
import { Page } from "@/components/layouts/page/page.layout.component";
import { SignUpForm } from "@/components/screens/auth/sign-up/sign.up.form.component";
import { router } from "expo-router";
import React, { useRef } from "react";

const SignUpScreen = () => {
  const [page, setPage] = React.useState(0);
  const signUpFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  const onPageChange = (index: number) => {
    setPage(index);
  };

  return (
    <Page
      headerButton={
        <Button onPress={() => router.replace("/(auth)/sign.in.screen")}>
          Sign In
        </Button>
      }
      header="Sign Up"
      stepperPlacement="header"
    >
      <Page.Step scrollable>
        <Label>This step scrolls</Label>
      </Page.Step>
      <Page.Step>
        <Label>This step doesn't scroll</Label>
      </Page.Step>

      <SignUpForm ref={signUpFormRef} page={page} />
      {page === 2 && (
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
      )}
    </Page>
  );
};

export default SignUpScreen;
