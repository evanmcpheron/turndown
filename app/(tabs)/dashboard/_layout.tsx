import { useTheme } from "@/src/contexts/theme";
import { Stack } from "expo-router";

export default function DashboardStackLayout() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "none",
        headerTintColor: colors.background,
        headerStyle: { backgroundColor: colors.background },
        contentStyle: { backgroundColor: colors.background },
      }}
    />
  );
}
