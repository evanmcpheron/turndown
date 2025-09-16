import "react-native-reanimated";

import { AuthProvider } from "@/context";
import {
  CustomThemeProvider as ThemeProvider,
  useTheme,
} from "@/context/theme/theme.context";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <StackLayout />
      </ThemeProvider>
    </AuthProvider>
  );
}

const StackLayout = () => {
  const { colors } = useTheme();
  console.log(
    `🚀 ~ _layout.tsx:24 ~ StackLayout ~ colors: \n`,
    colors.background
  );

  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: colors.background },
          headerShown: false,
        }}
      />
    </View>
  );
};
