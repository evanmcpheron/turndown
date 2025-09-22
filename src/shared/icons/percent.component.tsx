import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const PercentIcon: React.FC<
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
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0zM128 128a64 64 0 1 0-128 0 64 64 0 1 0 128 0m256 256a64 64 0 1 0-128 0 64 64 0 1 0 128 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M369 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 399c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zm-257 15a48 48 0 1 0-96 0 48 48 0 1 0 96 0m256 256a48 48 0 1 0-96 0 48 48 0 1 0 96 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m256 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m59.3-356.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-352 352c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M64 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m256 144a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m53.7-362.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-352 352c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M374.6 73.4c12.5 12.5 12.5 32.8 0 45.3l-320 320c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l320-320c12.5-12.5 32.8-12.5 45.3 0"
                />
                <Path d="M64 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128m256 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
