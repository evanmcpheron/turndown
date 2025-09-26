import { PropertyProvider } from "@/screens";
import { useManagementMode } from "@/src/contexts/management-mode";
import { useTheme } from "@/src/contexts/theme";
import { Stack } from "expo-router";

export default function PropertiesStackLayout() {
  const { managementMode } = useManagementMode();
  const { colors } = useTheme();

  return (
    <PropertyProvider>
      {managementMode && (
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "none",
            headerTintColor: colors.background,
            headerStyle: { backgroundColor: colors.background },
            contentStyle: { backgroundColor: colors.background },
          }}
        />
      )}
    </PropertyProvider>
  );
}
