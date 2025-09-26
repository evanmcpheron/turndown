// form.container.styled.ts

import { AppTheme } from "@/src/shared/styles";
import { StyleSheet } from "react-native";

export const fieldContainerComponentStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    label: {
      marginLeft: theme.spacing[3],
    },
  });
};
