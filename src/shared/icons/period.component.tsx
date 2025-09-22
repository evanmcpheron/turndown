import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const PeriodIcon: React.FC<
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
              <Svg viewBox="0 0 192 512" fill={colors[colorName || "text"]}>
                <Path d="M32 416a64 64 0 1 1 128 0 64 64 0 1 1-128 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 192 512" fill={colors[colorName || "text"]}>
                <Path d="M96 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 96a72 72 0 1 0 0-144 72 72 0 1 0 0 144" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 192 512" fill={colors[colorName || "text"]}>
                <Path d="M96 384a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 192 512" fill={colors[colorName || "text"]}>
                <Path d="M96 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 192 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M32 416a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
