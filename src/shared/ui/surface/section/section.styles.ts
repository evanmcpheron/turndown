// section.styled.ts

import { AppTheme } from "@/src/shared/styles/general.styles";
import { StyleSheet } from "react-native";

export const turndownSectionComponentStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      borderRadius: theme.radii.xl,
      padding: 20,
      backgroundColor: theme.colors.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.outline,
      elevation: theme.elevation[1].android,
      gap: 10,
    },
  });
};
