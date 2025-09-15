import { EyeIcon } from "@/assets/icons/eye.component";
import { Label } from "@/components/font";
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

const SignInScreen = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = async () => {
    setErr(null);
    if (!email || !password) return setErr("Email and password are required.");
    setSubmitting(true);
    try {
      await signIn(email.trim(), password);
      router.replace("/"); // go to tabs root and remove back stack
    } catch (e: any) {
      setErr(e?.message ?? "Failed to sign in");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center", gap: 14 }}>
      <Label>Welcome back</Label>
      <EyeIcon
        onPress={() => console.log("pressed")}
        type="duotone"
        size="medium"
        haptic="strong"
        color="warning"
      />
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
        {submitting ? <ActivityIndicator /> : <Text>Sign in</Text>}
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
