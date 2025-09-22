import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowDownBigSmallIcon: React.FC<
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
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M160 480c9 0 17.5-3.8 23.6-10.4l88-96c11.9-13 11.1-33.3-2-45.2s-33.3-11.1-45.2 2L192 365.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v301.7l-32.4-35.3c-11.9-13-32.2-13.9-45.2-2s-13.9 32.2-2 45.2l88 96c6.1 6.6 14.6 10.4 23.6 10.4m160-112v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48m48-336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="m143 473-96-96c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55V56c0-13.3 10.7-24 24-24s24 10.7 24 24v342.1l55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-96 96c-9.4 9.4-24.6 9.4-33.9 0zm225-105v64h64v-64zm-48 0c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48zm48-160h128V80H368zm-48 0V80c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="m171.3 475.3 96-96c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L176 425.4V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v377.4l-68.7-68.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0M352 432v-64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16m-32 0c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48zm32-352c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm-32 0v128c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="m165.7 477.7 104-104c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L168 452.7V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v412.7l-90.3-90.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l104 104c3.1 3.1 8.2 3.1 11.3 0zM336 432v-64c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32m-16 0c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48zm16-352c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H368c-17.7 0-32-14.3-32-32zm-16 0v128c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M368 32c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48z"
                />
                <Path d="M160 480c9 0 17.5-3.8 23.6-10.4l88-96c11.9-13 11.1-33.3-2-45.2s-33.3-11.1-45.2 2L192 365.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v301.7l-32.4-35.3c-11.9-13-32.2-13.9-45.2-2s-13.9 32.2-2 45.2l88 96c6.1 6.6 14.6 10.4 23.6 10.4" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
