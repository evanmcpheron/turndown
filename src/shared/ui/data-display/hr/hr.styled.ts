// hr.styled.ts

import { StyleSheet } from "react-native";

export const hrComponentStyles = (color: string) =>
  StyleSheet.create({
    container: {
      borderBottomColor: color,
      borderBottomWidth: 1,
      width: "100%",
    },
  });
