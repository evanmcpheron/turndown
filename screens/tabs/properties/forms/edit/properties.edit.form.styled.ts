import { withOpacity } from "@/src/shared/styles";
import { AppTheme } from "@/src/shared/styles/general.styles";
import { StyleSheet } from "react-native";

export const propertiesEditFormStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    segmentWrap: {
      borderRadius: theme.radii.lg,
      padding: 10,
      backgroundColor: withOpacity(
        theme.colors.primary,
        theme.isDark ? 0.1 : 0.06
      ),
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: withOpacity(theme.colors.primary, 0.25),
    },
  });
};
