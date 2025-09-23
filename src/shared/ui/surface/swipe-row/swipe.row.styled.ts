// swipe.row.styled.ts

import { AppTheme } from "@/src/shared/styles";
import { StyleSheet } from "react-native";

export const swipeRowComponentStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    actionsContainer: {
      flexDirection: "row",
      height: "100%",
    },
    action: {
      alignItems: "center",
      justifyContent: "center",
    },
    center: { alignItems: "center", justifyContent: "center" },
    fallbackDot: { color: "white", fontSize: 20, lineHeight: 20 },
  });
};
