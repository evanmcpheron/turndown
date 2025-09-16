import { useTheme } from "@/context/theme/theme.context";
import { Stack } from "expo-router";

export default function SettingsStackLayout() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: colors.background,
        headerStyle: { backgroundColor: colors.background },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      {/* Hide header on the main settings list; show on subpages */}
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Settings" }}
      />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
      <Stack.Screen name="contact" options={{ title: "Phone & Email" }} />
      <Stack.Screen name="password" options={{ title: "Change Password" }} />
      <Stack.Screen name="biometric" options={{ title: "App Lock" }} />
      <Stack.Screen name="properties/index" options={{ title: "Properties" }} />
      <Stack.Screen name="properties/new" options={{ title: "New Property" }} />
      <Stack.Screen name="team/index" options={{ title: "Team" }} />
    </Stack>
  );
}
