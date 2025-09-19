// hr.styled.ts

import { StyleSheet } from "react-native";

export const hrComponentStyles = StyleSheet.create({
  container: {
    borderBottomColor: "lightgray", // Or any color you prefer
    borderBottomWidth: StyleSheet.hairlineWidth, // For a thin line, or a specific number
    width: "100%", // Ensures the line spans the full width of its parent
    marginVertical: 10, // Optional: Adds vertical spacing around the line
  },
});
