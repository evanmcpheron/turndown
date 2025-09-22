import { withOpacity } from "@/src/shared/styles";
import { AppTheme } from "@/src/shared/styles/general.styles";
import { StyleSheet } from "react-native";

export const propertiesCreateFormStyles = (theme: AppTheme) => {
  const iosShadow = {
    shadowColor: "#000",
    shadowOpacity: theme.elevation[1].ios.opacity,
    shadowRadius: theme.elevation[1].ios.radius,
    shadowOffset: theme.elevation[1].ios.offset,
  };
  return StyleSheet.create({
    card: {
      borderRadius: theme.radii.xl,
      padding: 20,
      backgroundColor: theme.colors.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.outline,
      elevation: theme.elevation[1].android,
      ...iosShadow,
      gap: 10,
    },
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
