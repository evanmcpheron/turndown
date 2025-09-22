import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const HeadphonesIcon: React.FC<
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
                <Path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6 26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48-44.2 0-80-35.8-80-80V288C0 146.6 114.6 32 256 32s256 114.6 256 256v112c0 44.2-35.8 80-80 80-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48 10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M49.6 262C62.4 159.4 149.9 80 256 80s193.6 79.4 206.4 182c-9.4-3.9-19.6-6-30.4-6-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48 44.2 0 80-35.8 80-80V288c0-141.4-114.6-256-256-256S0 146.6 0 288v112c0 44.2 35.8 80 80 80 26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48-10.8 0-21 2.1-30.4 6M48 336c0-17.7 14.3-32 32-32v128c-17.7 0-32-14.3-32-32v-64m416 0v64c0 17.7-14.3 32-32 32V304c17.7 0 32 14.3 32 32" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M32.6 271.6C41 155.5 137.8 64 256 64s215 91.5 223.4 207.6c-13.3-9.8-29.7-15.6-47.4-15.6-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48 44.2 0 80-35.8 80-80V288c0-141.4-114.6-256-256-256S0 146.6 0 288v112c0 44.2 35.8 80 80 80 26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48-17.7 0-34.1 5.8-47.4 15.6M32 336c0-26.5 21.5-48 48-48 8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16-26.5 0-48-21.5-48-48v-64m448 0v64c0 26.5-21.5 48-48 48-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16 26.5 0 48 21.5 48 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M16 288C16 155.4 123.5 48 256 48s240 107.4 240 240c-14.6-19.4-37.8-32-64-32-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48 44.2 0 80-35.8 80-80V288c0-141.4-114.6-256-256-256S0 146.6 0 288v112c0 44.2 35.8 80 80 80 26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48-26.2 0-49.4 12.6-64 32m0 48c0-35.3 28.7-64 64-64 17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32-35.3 0-64-28.7-64-64v-64m480 0v64c0 35.3-28.7 64-64 64-17.7 0-32-14.3-32-32V304c0-17.7 14.3-32 32-32 35.3 0 64 28.7 64 64" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M49.6 262C62.4 159.4 149.9 80 256 80s193.6 79.4 206.4 182c29.1 12 49.6 40.6 49.6 74v-48c0-141.4-114.6-256-256-256S0 146.6 0 288v48c0-33.4 20.5-62.1 49.6-74"
                />
                <Path d="M80 256c-44.2 0-80 35.8-80 80v64c0 44.2 35.8 80 80 80 26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48m352 0c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48 44.2 0 80-35.8 80-80v-64c0-44.2-35.8-80-80-80" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
