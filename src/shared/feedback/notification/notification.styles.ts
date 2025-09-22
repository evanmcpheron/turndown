import { AppTheme } from "@/src/shared/styles";
import { Platform, StyleSheet } from "react-native";

export const notificationStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
    },
    top: {
      justifyContent: "flex-start",
      paddingTop: Platform.select({ ios: 40, android: 16 }) as number,
    },
    bottom: {
      justifyContent: "flex-end",
      paddingBottom: Platform.select({ ios: 24, android: 16 }) as number,
    },
    card: {
      borderRadius: 14,
      paddingVertical: 14,
      paddingHorizontal: 14,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 8,
    },
    row: { flexDirection: "row", alignItems: "center" },
    icon: { fontSize: 18, marginRight: 10 },
    texts: { flex: 1 },
    title: { fontSize: 16, fontWeight: "700" },
    message: { fontSize: 14, marginTop: 2, opacity: 0.9 },
    close: {
      fontSize: 22,
      marginLeft: 10,
      paddingHorizontal: 6,
      paddingVertical: 2,
    },
  });
};
