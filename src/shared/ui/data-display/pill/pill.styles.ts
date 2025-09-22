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
      flex: 1,
      minWidth: 50,
      height: 30,
      borderWidth: 2,
      borderColor: theme.colors.outline,
      paddingHorizontal: 5,
      borderRadius: 100,
      paddingVertical: 3,
    },
    label: {
      textAlign: "center",
    },
  });
};
