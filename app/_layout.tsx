import "react-native-reanimated";

import { AuthProvider } from "@/context";
import { CustomThemeProvider as ThemeProvider } from "@/context/theme/theme.context";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "red",
      width: "100%",
      height: "100%",
    },
  });
  return (
    <View style={styles.container}>
      <AuthProvider>
        <ThemeProvider>
          <Stack screenOptions={{ contentStyle: { backgroundColor: "red" } }} />
        </ThemeProvider>
      </AuthProvider>
    </View>
  );
}
