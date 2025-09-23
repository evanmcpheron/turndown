// row.action.styled.ts

import { AppTheme } from "@/src/shared/styles";
import { StyleSheet } from "react-native";

export const rowActionComponentStyles = (theme: AppTheme) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const iosShadow = {
    shadowColor: theme.colors.onBackground,
    shadowOpacity: theme.elevation[2].ios.opacity,
    shadowRadius: theme.elevation[2].ios.radius,
    shadowOffset: theme.elevation[2].ios.offset,
  };

  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.primary,
      borderRadius: theme.radii.lg,
      paddingRight: 0,
    },
    textWrap: {
      padding: theme.spacing[2],
      paddingLeft: theme.spacing[4],
      flex: 1,
    },

    actionsWrap: {
      flexDirection: "row",
      gap: 10,
      margin: theme.spacing[2],
      alignItems: "flex-end",
    },
  });
};
