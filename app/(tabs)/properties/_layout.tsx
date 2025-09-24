import { PropertyProvider } from "@/screens";
import { useTheme } from "@/src/contexts/theme";
import { Stack } from "expo-router";

export default function PropertiesStackLayout() {
  const { colors } = useTheme();

  return (
    <PropertyProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          headerTintColor: colors.background,
          headerStyle: { backgroundColor: colors.background },
          contentStyle: { backgroundColor: colors.background },
        }}
      />
    </PropertyProvider>
  );
}
