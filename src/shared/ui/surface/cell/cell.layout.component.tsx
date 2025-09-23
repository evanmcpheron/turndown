import React, { useRef } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { CellProperties } from "./cell.layout.types";

export const Cell = ({
  children,
  style,
  display,
  cellDirection,
  justifyContent,
  alignItems,
  cellWrap,
  width,
  height,
  gap,
}: CellProperties) => {
  const ref = useRef(null);

  const dynamicStyle: StyleProp<ViewStyle> = [
    display === "flex" && styles.flexContainer,
    cellDirection && { flexDirection: cellDirection },
    justifyContent && { justifyContent },
    alignItems && { alignItems },
    cellWrap && { flexWrap: cellWrap },
    width && { width },
    height && { height },
    gap && { gap },
    style,
  ];

  return (
    <View ref={ref} style={dynamicStyle}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    position: "relative",
  },
});
