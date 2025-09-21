// turndown.loader.styled.ts

import { AppTheme } from "@/helpers/theme/general.styles";
import { StyleSheet } from "react-native";

export const turndownLoaderComponentStyles = (theme: AppTheme) => {
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
      alignItems: "center",
      justifyContent: "center",
    },
    row: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "center",
    },
    dot: {
      borderRadius: 9999,
    },
  });
};
