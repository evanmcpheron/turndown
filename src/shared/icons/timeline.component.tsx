import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const TimelineIcon: React.FC<
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
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m32 97.3c28.3-12.3 48-40.5 48-73.3 0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h256v54.7c-28.3 12.3-48 40.5-48 73.3 0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64v-54.7c28.3-12.3 48-40.5 48-73.3 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160zM488 96a24 24 0 1 1 48 0 24 24 0 1 1-48 0M320 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M128 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m24 108.3c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S48 51.8 48 96c0 35.8 23.5 66.1 56 76.3V232H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h272v59.7c-32.5 10.2-56 40.5-56 76.3 0 44.2 35.8 80 80 80s80-35.8 80-80c0-35.8-23.5-66.1-56-76.3V280h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80v-59.7c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 35.8 23.5 66.1 56 76.3V232H152zM320 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64M480 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M144 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m16 94c27.6-7.1 48-32.2 48-62 0-35.3-28.7-64-64-64S80 44.7 80 80c0 29.8 20.4 54.9 48 62v114H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h304v82c-27.6 7.1-48 32.2-48 62 0 35.3 28.7 64 64 64s64-28.7 64-64c0-29.8-20.4-54.9-48-62v-82h272c8.8 0 16-7.2 16-16s-7.2-16-16-16H512V142c27.6-7.1 48-32.2 48-62 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 29.8 20.4 54.9 48 62v114H160zm176 322a32 32 0 1 1 0-64 32 32 0 1 1 0 64M496 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M160 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96m8 111.5c31.6-3.9 56-30.9 56-63.5 0-35.3-28.7-64-64-64S96 44.7 96 80c0 32.6 24.4 59.6 56 63.5V256H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h304v96.5c-31.6 3.9-56 30.9-56 63.5 0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.6-24.4-59.6-56-63.5V272h304c4.4 0 8-3.6 8-8s-3.6-8-8-8H488V143.5c31.6-3.9 56-30.9 56-63.5 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 32.6 24.4 59.6 56 63.5V256H168zM432 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0M272 432a48 48 0 1 1 96 0 48 48 0 1 1-96 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M512 176c11.4 0 22.2-2.4 32-6.7V224h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H352v54.7c-9.8-4.3-20.6-6.7-32-6.7s-22.2 2.4-32 6.7V288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h64v-54.7c9.8 4.3 20.6 6.7 32 6.7s22.2-2.4 32-6.7V224h320v-54.7c9.8 4.3 20.6 6.7 32 6.7"
                />
                <Path d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160M512 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160M296 416a24 24 0 1 1 48 0 24 24 0 1 1-48 0m104 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
