// safe.view.styled.ts

import { AppTheme } from "@/src/shared/styles/general.styles";
import { StyleSheet } from "react-native";

export const safeViewComponentStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });
};
