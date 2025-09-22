import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const WeightHangingIcon: React.FC<
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
                <Path d="M224 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m122.5 32c3.5-10 5.5-20.8 5.5-32 0-53-43-96-96-96s-96 43-96 96c0 11.2 1.9 22 5.5 32H120c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512h416c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M216 88a40 40 0 1 1 80 0 40 40 0 1 1-80 0m118.4 40c6.1-12 9.6-25.6 9.6-40 0-48.6-39.4-88-88-88s-88 39.4-88 88c0 14.4 3.5 28 9.6 40H120c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512h416c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128zM256 176h136l72 288H48l72-288z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M208 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 48c10-13.4 16-30 16-48 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 18 6 34.6 16 48h-72c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512h416c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128zm-64 32h136c7.3 0 13.7 5 15.5 12.1l72 288c1.2 4.8.1 9.8-2.9 13.7s-7.7 6.2-12.6 6.2H48c-4.9 0-9.6-2.3-12.6-6.2s-4.1-8.9-2.9-13.7l72-288c1.8-7.1 8.2-12.1 15.5-12.1z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M200 72a56 56 0 1 1 112 0 56 56 0 1 1-112 0m101.3 56c16.3-13.2 26.7-33.4 26.7-56 0-39.8-32.2-72-72-72s-72 32.2-72 72c0 22.6 10.4 42.8 26.7 56H120c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512h416c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128zM256 144h136c14.7 0 27.5 10 31 24.2l72 288c2.4 9.6.2 19.7-5.8 27.5S473.8 496 464 496H48c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5l72-288c3.5-14.2 16.3-24.2 31-24.2z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M288 96.8V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v1c.4 13.9 9.7 26.6 22.4 31h-81c-3.5-10-5.5-20.8-5.5-32 0-53 43-96 96-96s96 43 96 96c0 11.2-1.9 22-5.5 32h-81c12.8-4.4 22.1-17.2 22.4-31.2z"
                />
                <Path d="M120 128c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512h416c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
