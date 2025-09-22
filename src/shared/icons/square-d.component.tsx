import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const SquareDIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm88 96h72c70.7 0 128 57.3 128 128s-57.3 128-128 128h-72c-13.3 0-24-10.7-24-24V152c0-13.3 10.7-24 24-24m24 208h48c44.2 0 80-35.8 80-80s-35.8-80-80-80h-48z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm152 32h72c70.7 0 128 57.3 128 128s-57.3 128-128 128h-72c-13.3 0-24-10.7-24-24V152c0-13.3 10.7-24 24-24m24 208h48c44.2 0 80-35.8 80-80s-35.8-80-80-80h-48z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 256h64c53 0 96-43 96-96s-43-96-96-96h-64zm-1.2-224H224c70.7 0 128 57.3 128 128s-57.3 128-128 128h-65.2c-17 0-30.8-13.8-30.8-30.8V158.8c0-17 13.8-30.8 30.8-30.8" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 54.9v210.2c0 3.8 3.1 6.9 6.9 6.9H224c61.9 0 112-50.1 112-112s-50.1-112-112-112h-73.1c-3.8 0-6.9 3.1-6.9 6.9m6.9-22.9H224c70.7 0 128 57.3 128 128s-57.3 128-128 128h-73.1c-12.6 0-22.9-10.2-22.9-22.9V150.9c0-12.6 10.2-22.9 22.9-22.9" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm88 96h72c70.7 0 128 57.3 128 128s-57.3 128-128 128h-72c-13.3 0-24-10.7-24-24V152c0-13.3 10.7-24 24-24m24 208h48c44.2 0 80-35.8 80-80s-35.8-80-80-80h-48z"
                />
                <Path d="M128 152c0-13.3 10.7-24 24-24h72c70.7 0 128 57.3 128 128s-57.3 128-128 128h-72c-13.3 0-24-10.7-24-24zm48 24v160h48c44.2 0 80-35.8 80-80s-35.8-80-80-80z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
