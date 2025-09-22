import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const Circle6Icon: React.FC<
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
                <Path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-16a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-96 48c0 53 43 96 96 96s96-43 96-96c0-44-29.6-81.1-70-92.4l29.6-25.4c10.1-8.6 11.2-23.8 2.6-33.8s-23.8-11.2-33.8-2.6l-81.6 70c-24.6 21-38.8 51.8-38.8 84.2" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-96-48c0-32.4 14.2-63.2 38.8-84.3l81.6-70c10.1-8.6 25.2-7.5 33.8 2.6s7.5 25.2-2.6 33.8L282 195.6c40.4 11.4 70 48.4 70 92.4 0 53-43 96-96 96s-96-43-96-96" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m43.7-378.9c-6-6.5-16.1-6.9-22.6-.8l-82.7 76.8c-22 20.4-34.4 49-34.4 78.9 0 53 43 96 96 96s96-43 96-96c0-51.8-41-94-92.3-95.9l39.1-36.3c6.5-6 6.9-16.1.8-22.6zM256 224a64 64 0 1 1 0 128 64 64 0 1 1 0-128" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m46-381.3c-2.9-3.3-8-3.7-11.3-.8l-97.9 85.7c-8.7 7.6-15.9 16.6-21.2 26.6-7.4 13.6-11.6 29.2-11.6 45.8 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-4.3 0-8.6.3-12.8.8l58.1-50.8c3.3-2.9 3.7-8 .8-11.3zM256.1 208a80 80 0 1 1-.1 160 80 80 0 1 1 .1-160" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-16a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-96 48c0 53 43 96 96 96s96-43 96-96c0-44-29.6-81.1-70-92.4l29.6-25.4c10.1-8.6 11.2-23.8 2.6-33.8s-23.8-11.2-33.8-2.6l-81.6 70c-24.6 21-38.8 51.8-38.8 84.2"
                />
                <Path d="M311.6 170.2c10.1-8.6 11.2-23.8 2.6-33.8s-23.8-11.2-33.8-2.6l-81.6 70c-24.6 21-38.8 51.8-38.8 84.2 0 53 43 96 96 96s96-43 96-96c0-44-29.6-81.1-70-92.4zM304 288a48 48 0 1 1-96 0 48 48 0 1 1 96 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
