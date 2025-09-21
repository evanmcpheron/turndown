import "react-native-reanimated";

import { NoticeHost } from "@/components/actions/notification/notification.host.component";
import { AuthProvider } from "@/context";
import {
  CustomThemeProvider as ThemeProvider,
  useTheme,
} from "@/context/theme/theme.context";
import { Stack } from "expo-router";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AuthProvider>
        <ThemeProvider>
          <GestureHandlerRootView>
            <NoticeHost />
            <StackLayout />
          </GestureHandlerRootView>
        </ThemeProvider>
      </AuthProvider>
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
          headerShown: false,
        }}
      />
    </View>
  );
};
