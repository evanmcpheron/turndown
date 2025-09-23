// hr.styled.ts

import { StyleSheet } from "react-native";

export const hrComponentStyles = (color: string) =>
  StyleSheet.create({
    container: {
      borderBottomColor: color,
      borderBottomWidth: 1,
      width: "100%",
      height: 1,
      margin: 0,
      padding: 0,
    },
  });
