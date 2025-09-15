import { SignInForm } from "@/components/screens/auth";
import { Link, router } from "expo-router";
import React, { useRef } from "react";
import { Pressable, Text, View } from "react-native";

const SignInScreen = () => {
  const signInFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center", gap: 14 }}>
      <SignInForm ref={signInFormRef} />

      <Pressable
        onPress={() => {
          console.log(signInFormRef.current);
          if (signInFormRef.current) {
            signInFormRef.current.submitData((success: boolean) => {
              router.replace("/");
              console.log("success: ", success);
            });
          }
        }}
      >
        <Text>Sign in</Text>
      </Pressable>

      <Text style={{ textAlign: "center" }}>
        New here?{" "}
        <Link href="/(auth)/sign.up.screen" style={{ fontWeight: "700" }}>
          Create an account
        </Link>
      </Text>
    </View>
  );
};

export default SignInScreen;
