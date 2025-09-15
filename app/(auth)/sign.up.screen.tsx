import { useAuth } from "@/context";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

const SignUpScreen = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = async () => {
    setErr(null);
    if (!email || !password) return setErr("Email and password are required.");
    if (password.length < 6)
      return setErr("Password must be at least 6 characters.");
    setSubmitting(true);
    try {
      await signUp(email.trim(), password);
      router.replace("/"); // enter the app, clear history
    } catch (e: any) {
      setErr(e?.message ?? "Failed to sign up");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center", gap: 14 }}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>Create account</Text>
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 1,
          borderRadius: 12,
          padding: 12,
        }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          borderRadius: 12,
          padding: 12,
        }}
      />

      {err ? <Text style={{ color: "crimson" }}>{err}</Text> : null}

      <Pressable
        onPress={onSubmit}
        disabled={submitting}
        style={{
          padding: 14,
          borderRadius: 12,
          alignItems: "center",
          opacity: submitting ? 0.7 : 1,
        }}
      >
        {submitting ? (
          <ActivityIndicator />
        ) : (
          <Text style={{ color: "white", fontWeight: "700" }}>Sign up</Text>
        )}
      </Pressable>

      <Text style={{ textAlign: "center", color: "red" }}>
        Have an account?{" "}
        <Link
          href="/(auth)/sign.in.screen"
          style={{ fontWeight: "700", color: "red" }}
        >
          Sign in
        </Link>
      </Text>
    </View>
  );
};
export default SignUpScreen;
