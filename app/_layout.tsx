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

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <GestureHandlerRootView>
          <NoticeHost />
          <StackLayout />
        </GestureHandlerRootView>
      </ThemeProvider>
    </AuthProvider>
  );
}

const StackLayout = () => {
  const { colors } = useTheme();

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
