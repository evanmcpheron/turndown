import { useTheme } from "@/context/theme/theme.context";
import { Stack } from "expo-router";

export default function InventoryStackLayout() {
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
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Inventory" }}
      />
    </Stack>
  );
}
