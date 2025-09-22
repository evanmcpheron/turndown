import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const GaugeSimpleMaxIcon: React.FC<
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
                <Path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m320 96q0-5.55-.9-10.8l117.5-72.8c11.3-7 14.7-21.8 7.8-33s-21.8-14.8-33-7.8l-117.6 72.8c-10.6-7.8-23.7-12.4-37.8-12.4-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416m0-464a256 256 0 1 1 0 512 256 256 0 1 1 0-512m-56 352c0-30.9 25.1-56 56-56 10.3 0 19.9 2.8 28.2 7.6l110.2-75.4c10.9-7.5 25.9-4.7 33.4 6.3s4.7 25.9-6.3 33.4l-110.2 75.3c.4 2.9.7 5.8.7 8.8 0 30.9-25.1 56-56 56s-56-25.1-56-56" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448m0-480a256 256 0 1 1 0 512 256 256 0 1 1 0-512m0 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 32c-35.3 0-64-28.7-64-64s28.7-64 64-64c17.5 0 33.4 7 44.9 18.4l106.9-64.1c7.6-4.5 17.4-2.1 22 5.5s2.1 17.4-5.5 22l-106.9 64c1.7 5.8 2.6 11.9 2.6 18.2 0 35.3-28.7 64-64 64" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480m0-496a256 256 0 1 1 0 512 256 256 0 1 1 0-512m0 400a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0 16c-35.3 0-64-28.7-64-64s28.7-64 64-64c18.8 0 35.7 8.1 47.4 21l108-75.6c3.6-2.5 8.6-1.7 11.1 2s1.7 8.6-2 11.1l-108 75.6c4.7 8.9 7.4 19.1 7.4 29.9 0 35.3-28.7 64-64 64z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m192 96c0-35.3 28.7-64 64-64 14.1 0 27.2 4.6 37.8 12.4l117.5-72.8c11.3-7 26.1-3.5 33 7.8s3.5 26.1-7.8 33l-117.4 72.8q.9 5.25.9 10.8c0 35.3-28.7 64-64 64s-64-28.7-64-64"
                />
                <Path d="M411.4 227.6c11.3-7 26.1-3.5 33 7.8s3.5 26.1-7.8 33l-117.5 72.8q.9 5.25.9 10.8c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64c14.1 0 27.2 4.6 37.8 12.4z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
