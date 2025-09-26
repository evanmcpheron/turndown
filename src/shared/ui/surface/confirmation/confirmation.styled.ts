// confirmation.styled.ts

import { AppTheme } from "@/src/shared/styles";
import { StyleSheet } from "react-native";

export const confirmationComponentStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.8)",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      width: "86%",
    },
  });
};
