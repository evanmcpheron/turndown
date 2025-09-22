import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const PIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone";
  }
> = ({
  type,
  size,
  color: colorName,
  active,
  style,
  opacity,
  haptic,
  ...more
}) => {
  const { colors } = useTheme();

  const domRef: TurndownObject = useRef(null);

  const { onPress, onMove, onUp, onDown, groupId } = more;
  const pointerEvents = {
    onPress,
    onMove,
    onUp,
    onDown,
    groupId,
  };

  usePointerEvent({ element: domRef, active: active, ...pointerEvents });

  const internalProperties = removeUndefined({
    style: style || {},
    pointerEvents,
    haptic,
    active,
    size,
    color: colors[colorName || "text"],
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M0 96c0-35.3 28.7-64 64-64h96c88.4 0 160 71.6 160 160s-71.6 160-160 160H64v96c0 17.7-14.3 32-32 32S0 465.7 0 448V96m64 192h96c53 0 96-43 96-96s-43-96-96-96H64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M56 80h112c57.4 0 104 46.6 104 104s-46.6 104-104 104H48V88c0-4.4 3.6-8 8-8m-8 256h120c83.9 0 152-68.1 152-152S251.9 32 168 32H56C25.1 32 0 57.1 0 88v368c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M48 64h128c61.9 0 112 50.1 112 112s-50.1 112-112 112H32V80c0-8.8 7.2-16 16-16M32 320h144c79.5 0 144-64.5 144-144S255.5 32 176 32H48C21.5 32 0 53.5 0 80v384c0 8.8 7.2 16 16 16s16-7.2 16-16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M24 48h160c66.3 0 120 53.7 120 120s-53.7 120-120 120H16V56c0-4.4 3.6-8 8-8m-8 256h168c75.1 0 136-60.9 136-136S259.1 32 184 32H24C10.7 32 0 42.7 0 56v416c0 4.4 3.6 8 8 8s8-3.6 8-8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M0 96c0-35.3 28.7-64 64-64h96c88.4 0 160 71.6 160 160s-71.6 160-160 160H64v96c0 17.7-14.3 32-32 32S0 465.7 0 448V96m64 192h96c53 0 96-43 96-96s-43-96-96-96H64z"
                />
                <Path d="" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
