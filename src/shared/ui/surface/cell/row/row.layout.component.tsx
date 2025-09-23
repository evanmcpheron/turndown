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

  const flexWrap = rowWrap === "initial" ? "nowrap" : rowWrap;

  const supportsGap = true;

  const containerStyle: StyleProp<ViewStyle> = [
    {
      flexDirection: rowDirection,
      ...(mappedAlignItems ? { alignItems: mappedAlignItems } : {}),
      ...(justifyContent ? { justifyContent } : {}),
      ...(flexWrap ? { flexWrap } : {}),
      ...(height !== undefined ? { height } : {}),
      ...(minWidth !== undefined ? { minWidth } : {}),
      ...(minHeight !== undefined ? { minHeight } : {}),
      ...(width !== undefined && typeof width !== "number"
        ? { width, flexGrow: 0, flexShrink: 0 }
        : width !== undefined
        ? { flexBasis: width as number, flexGrow: 0, flexShrink: 0 }
        : {}),
      ...(stretchRow ? { width: "100%" } : {}),
      ...(supportsGap ? { gap } : {}),
    },
    style,
  ];

  const spacedChildren = supportsGap
    ? children
    : React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const isRow = rowDirection.startsWith("row");
        const isColumn = rowDirection.startsWith("column");

        const childMarginStyle: ViewStyle = isRow
          ? { marginRight: gap }
          : isColumn
          ? { marginBottom: gap }
          : {};

        const existing = (child.props as any).style;
        return React.cloneElement(child as any, {
          style: [childMarginStyle, existing],
        });
      });

  return (
    <View style={containerStyle} {...rest}>
      {spacedChildren}
    </View>
  );
};
