// turndown.checkbox.styled.ts

import { AppTheme } from "@/src/shared/styles";
import { StyleSheet } from "react-native";

export const turndownCheckboxComponentStyles = (theme: AppTheme) => {
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
      backgroundColor: theme.colors.background,
    },
  });
};
