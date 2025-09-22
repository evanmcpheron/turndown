import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const CircleThreeQuartersIcon: React.FC<
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
                <Path d="M256 32c0-17.7-14.4-32.2-31.9-30C97.8 17.7 0 125.4 0 256c0 141.4 114.6 256 256 256 130.6 0 238.3-97.8 254-224.1 2.2-17.5-12.4-31.9-30-31.9H256z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 304c-26.5 0-48-21.5-48-48V53.6C116.3 75.2 48 157.7 48 256c0 114.9 93.1 208 208 208 98.3 0 180.8-68.3 202.4-160zM224.1 2C241.6-.2 256 14.3 256 32v224h224c17.7 0 32.2 14.4 30 31.9C494.3 414.2 386.6 512 256 512 114.6 512 0 397.4 0 256 0 125.4 97.8 17.7 224.1 2" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 288c-17.7 0-32-14.3-32-32V34.3C115.5 49.8 32 143.2 32 256c0 123.7 100.3 224 224 224 112.8 0 206.2-83.5 221.7-192zM224.1 2C241.6-.2 256 14.3 256 32v224h224c17.7 0 32.2 14.4 30 31.9C494.3 414.2 386.6 512 256 512 114.6 512 0 397.4 0 256 0 125.4 97.8 17.7 224.1 2" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 272c-8.8 0-16-7.2-16-16V32c0-9.4-7.3-15-14-14.1C107.6 32.6 16 133.6 16 256c0 132.5 107.5 240 240 240 122.4 0 223.4-91.6 238.2-210 .8-6.7-4.7-14-14.2-14zM224.1 2C241.6-.2 256 14.3 256 32v224h224c17.7 0 32.2 14.4 30 31.9C494.3 414.2 386.6 512 256 512 114.6 512 0 397.4 0 256 0 125.4 97.8 17.7 224.1 2" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M512 256C512 114.6 397.4 0 256 0v256z"
                />
                <Path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256H256z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
