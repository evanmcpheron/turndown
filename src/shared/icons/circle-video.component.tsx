import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const CircleVideoIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M128 192c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zm268.9 125.9L352 288v-64l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1 6.8 0 12.3 5.5 12.3 12.3v103.4c0 6.8-5.5 12.3-12.3 12.3-2.4 0-4.8-.7-6.8-2.1" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m144-56c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24h-96c-13.3 0-24-10.7-24-24zm220.9 117.9L320 288v-64l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1 6.8 0 12.3 5.5 12.3 12.3v103.4c0 6.8-5.5 12.3-12.3 12.3-2.4 0-4.8-.7-6.8-2.1" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m32-320v128H160V192zm32 9.8V192c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-9.8l74.9 25c4.9 1.6 10.2.8 14.4-2.2s6.6-7.8 6.6-13V192c0-5.1-2.5-10-6.6-13s-9.5-3.8-14.4-2.2zm0 33.7 64-21.3v83.6l-64-21.3z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m32-336c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16zm-128-16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-18.8l60.7 18.2c1.4.4 2.8.6 4.3.6 8.3 0 15-6.7 15-15v-98c0-8.3-6.7-15-15-15-1.5 0-2.9.2-4.3.6L320 210.8V192c0-17.7-14.3-32-32-32zm160 67.6 64-19.2v95.3l-64-19.2z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M128 192c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zm268.9 125.9L352 288v-64l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1 6.8 0 12.3 5.5 12.3 12.3v103.4c0 6.8-5.5 12.3-12.3 12.3-2.4 0-4.8-.7-6.8-2.1"
                />
                <Path d="M160 160c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm192 128 44.9 29.9c2 1.3 4.4 2.1 6.8 2.1 6.8 0 12.3-5.5 12.3-12.3V204.3c0-6.8-5.5-12.3-12.3-12.3-2.4 0-4.8.7-6.8 2.1L352 224z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
