import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const GlassHalfIcon: React.FC<
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
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M32 0C23.1 0 14.6 3.7 8.6 10.2S-.6 25.4.1 34.3l28.8 403.4c3 41.9 37.8 74.3 79.8 74.3h166.6c42 0 76.8-32.4 79.8-74.3l28.8-403.4c.6-8.9-2.4-17.6-8.5-24.1S360.9 0 352 0zm45.8 224L66.4 64h251.2l-11.4 160z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M24 0C17.3 0 10.9 2.8 6.3 7.8S-.5 19.4.1 26.1l36.2 420.1C39.5 483.4 70.7 512 108 512h168c37.4 0 68.5-28.6 71.7-65.8l36.2-420.1c.6-6.7-1.7-13.3-6.2-18.3S366.7 0 360 0zm42.7 240L50.2 48h283.6l-16.5 192zm4.1 48h242.4l-13.3 154.1c-1.1 12.4-11.5 21.9-23.9 21.9H108c-12.5 0-22.8-9.5-23.9-21.9z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M32.1 40.7c-.4-4.7 3.3-8.7 8-8.7h303.7c4.7 0 8.4 4 8 8.7L336 228.1V224H48v5.1zM50.3 256h283.3l-16.4 194.7c-1.4 16.6-15.2 29.3-31.8 29.3H98.6c-16.6 0-30.5-12.7-31.9-29.3zM40.1 0C16.7 0-1.7 20 .2 43.4l34.6 410c2.8 33.1 30.5 58.6 63.8 58.6h186.8c33.3 0 61-25.5 63.8-58.6l34.6-410C385.6 20 367.2 0 343.8 0z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M16.1 33.3C15.4 24 22.7 16 32.1 16H352c9.4 0 16.7 8 15.9 17.3L351.1 240H33zM34.3 256h315.4l-16.5 203.2c-1.7 20.8-19 36.8-39.9 36.8H90.7c-20.8 0-38.2-16-39.9-36.8zM32.1 0C13.4 0-1.3 16 .2 34.6l34.7 426c2.4 29 26.7 51.4 55.8 51.4h202.6c29.2 0 53.4-22.4 55.8-51.4l34.7-426C385.4 16 370.7 0 352 0z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M8.6 10.2C14.6 3.7 23.1 0 32 0h320c8.9 0 17.4 3.7 23.4 10.2s9.1 15.2 8.5 24.1l-28.8 403.4c-3 41.9-37.8 74.3-79.8 74.3H108.7c-42 0-76.8-32.4-79.8-74.3L.1 34.3c-.6-8.9 2.4-17.6 8.5-24.1M66.4 64l26.3 369.1c.6 8.4 7.6 14.9 16 14.9h166.6c8.4 0 15.4-6.5 16-14.9L317.6 64z"
                />
                <Path d="M306.2 224H77.8l14.9 209.1c.6 8.4 7.6 14.9 16 14.9h166.6c8.4 0 15.4-6.5 16-14.9z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
