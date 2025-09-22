import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const SterlingSignIcon: React.FC<
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
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M112 160.4c0-35.5 28.8-64.4 64.4-64.4 6.9 0 13.8 1.1 20.4 3.3l81.2 27.1c16.8 5.6 34.9-3.5 40.5-20.2s-3.5-34.9-20.2-40.5L217 38.6c-13.1-4.4-26.8-6.6-40.6-6.6C105.5 32 48 89.5 48 160.4V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v44.5c0 17.4-4.7 34.5-13.7 49.4L4.6 431.5c-5.9 9.9-6.1 22.2-.4 32.2S20.5 480 32 480h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H88.5l.7-1.1c14.9-24.9 22.8-53.4 22.8-82.4V288h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H112z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M96 159.2c0-43.7 35.5-79.2 79.2-79.2 8.5 0 17 1.4 25.1 4.1l80.1 26.7c12.6 4.2 26.2-2.6 30.4-15.2s-2.6-26.2-15.2-30.4l-80.1-26.7c-13-4.3-26.6-6.5-40.2-6.5C105 32 48 89 48 159.2V224H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v63.4c0 17.4-4.4 34.5-12.7 49.8L2.9 444.5c-4.1 7.4-3.9 16.5.4 23.7S15.5 480 24 480h272c13.3 0 24-10.7 24-24s-10.7-24-24-24H64.4l13-23.9C89.6 385.8 96 360.8 96 335.4V272h136c13.3 0 24-10.7 24-24s-10.7-24-24-24H96z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M80 152c0-48.6 39.4-88 88-88h7.1c9.5 0 18.9 1.5 27.8 4.5l80 26.7c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-80-26.7c-12.2-4.1-25-6.2-37.9-6.2H168C101.7 32 48 85.7 48 152v104H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h31.9C46.3 346.2 31 403.1 3.1 454.3l-1.1 2c-2.7 5-2.6 11 .3 15.8S10.4 480 16 480h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H42.1c23.5-50.1 36.4-104.6 37.8-160H240c8.8 0 16-7.2 16-16s-7.2-16-16-16H80z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M80 143.2C80 90.6 122.6 48 175.2 48c10.2 0 20.4 1.7 30.1 4.9l80.1 26.7c4.2 1.4 8.7-.9 10.1-5.1s-.9-8.7-5.1-10.1l-80-26.7c-11.3-3.8-23.2-5.7-35.2-5.7C113.8 32 64 81.8 64 143.2V256H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h55.8c-2.1 69.6-23.7 137.4-62.4 195.5-.9 1.3-1.4 2.8-1.4 4.5 0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8H22.6c35.5-57.9 55.2-124.1 57.2-192H248c4.4 0 8-3.6 8-8s-3.6-8-8-8H80z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M48 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h16zm64 64h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H112z"
                />
                <Path d="M176.4 96c-35.5 0-64.4 28.8-64.4 64.4v172.1c0 29-7.9 57.5-22.8 82.3l-.7 1.1H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-11.5 0-22.2-6.2-27.8-16.2s-5.5-22.3.4-32.2l29.8-49.6c9-14.9 13.7-32 13.7-49.4V160.4C48 89.5 105.5 32 176.4 32c13.8 0 27.5 2.2 40.6 6.6l81.2 27.1c16.8 5.6 25.8 23.7 20.2 40.5s-23.7 25.8-40.5 20.2l-81.2-27.1q-9.9-3.3-20.4-3.3z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
