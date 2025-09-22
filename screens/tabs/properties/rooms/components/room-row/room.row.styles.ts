import { AppTheme } from "@/src/shared/styles/general.styles";
import { StyleSheet } from "react-native";

export const roomRowStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    thumb: {
      width: 56,
      height: 56,
      marginRight: 10,
      borderRadius: theme.radii.lg,
      overflow: "hidden",
      backgroundColor: theme.colors.surface2,
    },
    thumbImg: { width: "100%", height: "100%" },
  });
};
