import { useTheme } from "@/context/theme/theme.context";
import { Stack } from "expo-router";

export default function SettingsStackLayout() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTintColor: colors.background,
        headerStyle: { backgroundColor: colors.background },
        contentStyle: { backgroundColor: colors.background },
      }}
    />
  );
}
