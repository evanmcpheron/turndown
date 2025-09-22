import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const ChevronsUpIcon: React.FC<
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
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M278.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-192 192c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3l169.4 169.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-192-192zm192 384-192-192c-12.5-12.5-32.8-12.5-45.3 0l-192 192c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 301.3l169.4 169.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M273 47c-9.4-9.4-24.6-9.4-33.9 0L47 239c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l175-175L431 273c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm192 384L273 239c-9.4-9.4-24.6-9.4-33.9 0L47 431c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l175-175L431 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M267.3 52.7c-6.2-6.2-16.4-6.2-22.6 0l-192 192c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 86.6l180.7 180.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zm192 384-192-192c-6.2-6.2-16.4-6.2-22.6 0l-192 192c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 278.6l180.7 180.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M261.7 50.3c-3.1-3.1-8.2-3.1-11.3 0l-216 216c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L256 67.3l210.3 210.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-216-216zm216 408-216-216c-3.1-3.1-8.2-3.1-11.3 0l-216 216c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L256 259.3l210.3 210.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M233.4 233.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 301.3 86.6 470.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                />
                <Path d="M233.4 41.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3 86.6 278.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
