import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { RowProps } from "./row.layout.types";

export const Row = ({
  children,
  style,
  rowDirection = "row",
  stretchRow = true,
  gap = 10,
  alignItems,
  justifyContent,
  width,
  height,
  minWidth,
  minHeight,
  rowWrap = "nowrap",
  ...rest
}: RowProps) => {
  const mappedAlignItems =
    alignItems === "start"
      ? "flex-start"
      : alignItems === "end"
      ? "flex-end"
      : alignItems;

  const flexWrap = rowWrap === "initial" ? undefined : rowWrap;

  const containerStyle: StyleProp<ViewStyle> = [
    {
      display: "flex",
      gap,
      flexDirection: rowDirection,
      ...(mappedAlignItems ? { alignItems: mappedAlignItems } : {}),
      ...(justifyContent ? { justifyContent } : {}),
      ...(flexWrap ? { flexWrap } : {}),
      ...(height !== undefined ? { height } : {}),
      ...(minWidth !== undefined ? { minWidth } : {}),
      ...(minHeight !== undefined ? { minHeight } : {}),
    },
    style,
  ];

  // Apply half-gap margin to each child, casting to allow style prop
  const spacedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const childStyle = (child.props as any).style;
      return React.cloneElement<any>(child, {
        style: [{ gap }, childStyle || {}],
      });
    }
    return child;
  });

  return (
    <View style={containerStyle} {...rest}>
      {spacedChildren}
    </View>
  );
};
