// bottom.drawer.styled.ts

import { AppTheme, withOpacity } from "@/src/shared/styles";
import { StyleSheet } from "react-native";

export const bottomDrawerComponentStyles = (theme: AppTheme) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const iosShadow = {
    shadowColor: theme.colors.onBackground,
    shadowOpacity: theme.elevation[2].ios.opacity,
    shadowRadius: theme.elevation[2].ios.radius,
    shadowOffset: theme.elevation[2].ios.offset,
  };

  return StyleSheet.create({
    backdrop: {
      backgroundColor: theme.colors.background,
    },
    sheet: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      backgroundColor: theme.colors.navCard,
      overflow: "hidden",
      shadowOpacity: 0.15,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: -4 },
      elevation: 10,
    },
    handleWrap: {
      alignItems: "center",
      paddingTop: 8,
      paddingBottom: 4,
    },
    handle: {
      width: 40,
      height: 5,
      borderRadius: 3,
      backgroundColor: withOpacity(theme.colors.background, 0.3),
    },
    content: {
      flex: 1,
      padding: 16,
    },
  });
};
