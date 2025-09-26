// masonry.image.styled.ts

import { AppTheme } from "@/src/shared/styles";
import { StyleSheet } from "react-native";

export const masonryImageComponentStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      margin: 4,
      borderRadius: 8,
      overflow: "hidden",
    },
  });
};
