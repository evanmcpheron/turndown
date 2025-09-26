import "react-native-reanimated";

import {
  CustomThemeProvider as ThemeProvider,
  useTheme,
} from "@/src/contexts/theme";
import { Stack } from "expo-router";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AuthProvider from "@/src/contexts/auth/auth.provider";
import { ManagementModeProvider } from "@/src/contexts/management-mode";
import { NoticeHost } from "@/src/shared";
import React from "react";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ManagementModeProvider>
        <AuthProvider>
          <ThemeProvider>
            <GestureHandlerRootView>
              <NoticeHost />
              <StackLayout />
            </GestureHandlerRootView>
          </ThemeProvider>
        </AuthProvider>
      </ManagementModeProvider>
    </SafeAreaProvider>
  );
}

const StackLayout = () => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: colors.background },
          headerBackVisible: false,
          animation: "none",
          headerShown: false,
        }}
      />
    </View>
  );
};
