// pill.styled.ts

import { AppTheme } from "@/src/shared/styles/general.styles";
import { StyleSheet } from "react-native";

export const turndownPillComponentStyles = (theme: AppTheme) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const iosShadow = {
    shadowColor: theme.colors.onBackground,
    shadowOpacity: theme.elevation[2].ios.opacity,
    shadowRadius: theme.elevation[2].ios.radius,
    shadowOffset: theme.elevation[2].ios.offset,
  };

  return StyleSheet.create({
    container: {
      borderWidth: 1,
      paddingHorizontal: theme.spacing[2],
      paddingVertical: theme.spacing[1],
      borderRadius: theme.radii.pill,
      display: "flex",
      justifyContent: "center",
      minWidth: 50,
      height: 35,
      alignItems: "center",
    },
    label: {
      textAlign: "center",
    },
  });
};
