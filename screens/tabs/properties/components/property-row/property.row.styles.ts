import { AppTheme } from "@/src/shared/styles/general.styles";
import { StyleSheet } from "react-native";

export const propertyRowStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    card: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing[3],
      padding: theme.spacing[4],
      borderRadius: theme.radii.xl,
      backgroundColor: theme.colors.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.outline,
      elevation: theme.elevation[1].android,
    },
    thumb: {
      width: 56,
      height: 56,
      borderRadius: theme.radii.lg,
      overflow: "hidden",
      backgroundColor: theme.colors.surface2,
    },
    thumbImg: { width: "100%", height: "100%" },
    main: { flex: 1, gap: theme.spacing[1] },
    tags: {
      flexDirection: "row",
      gap: theme.spacing[2],
      marginTop: theme.spacing[1],
    },
    stats: {
      flexDirection: "row",
      gap: theme.spacing[2],
      marginTop: theme.spacing[1],
    },
    chevron: { marginLeft: theme.spacing[2] },
  });
};
