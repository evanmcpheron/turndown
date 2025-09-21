import { PropertyProvider } from "@/context/property/property.context";
import { useTheme } from "@/context/theme/theme.context";
import { Stack } from "expo-router";

export default function PropertyStackLayout() {
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
