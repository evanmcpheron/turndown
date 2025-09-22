import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const OctagonIcon: React.FC<
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
                <Path d="M191.5.1c-19.1 0-37.4 7.6-50.9 21.1L21.2 140.6A71.98 71.98 0 0 0 .1 191.5v129c0 19.1 7.6 37.4 21.1 50.9l119.4 119.4c13.5 13.5 31.8 21.1 50.9 21.1h129c19.1 0 37.4-7.6 50.9-21.1l119.4-119.4c13.5-13.5 21.1-31.8 21.1-50.9v-129c0-19.1-7.6-37.4-21.1-50.9L371.4 21.2A71.98 71.98 0 0 0 320.5.1z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M170.5 57.4c6-6 14.1-9.4 22.6-9.4h125.8c8.5 0 16.6 3.4 22.6 9.4l113.1 113.1c6 6 9.4 14.1 9.4 22.6v125.8c0 8.5-3.4 16.6-9.4 22.6L341.5 454.6c-6 6-14.1 9.4-22.6 9.4H193.1c-8.5 0-16.6-3.4-22.6-9.4L57.4 341.5c-6-6-9.4-14.1-9.4-22.6V193.1c0-8.5 3.4-16.6 9.4-22.6zm-33.9-34L23.4 136.6C8.4 151.6 0 171.9 0 193.1v125.8c0 21.2 8.4 41.6 23.4 56.6l113.2 113.1c15 15 35.4 23.4 56.6 23.4h125.7c21.2 0 41.6-8.4 56.6-23.4l113.1-113.2c15-15 23.4-35.4 23.4-56.6V193.1c0-21.2-8.4-41.6-23.4-56.6L375.4 23.4C360.4 8.4 340.1 0 318.9 0H193.1c-21.2 0-41.6 8.4-56.6 23.4z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M161.5 43.7 43.7 161.5C36.2 169 32 179.2 32 189.8v132.4c0 10.6 4.2 20.8 11.7 28.3l117.8 117.8c7.5 7.5 17.7 11.7 28.3 11.7h132.4c10.6 0 20.8-4.2 28.3-11.7l117.8-117.8c7.5-7.5 11.7-17.7 11.7-28.3V189.8c0-10.6-4.2-20.8-11.7-28.3L350.5 43.7C343 36.2 332.8 32 322.2 32H189.8c-10.6 0-20.8 4.2-28.3 11.7M21.1 138.9 138.9 21.1C152.4 7.6 170.7 0 189.8 0h132.4c19.1 0 37.4 7.6 50.9 21.1l117.8 117.8c13.5 13.5 21.1 31.8 21.1 50.9v132.4c0 19.1-7.6 37.4-21.1 50.9L373.1 490.9a71.98 71.98 0 0 1-50.9 21.1H189.8c-19.1 0-37.4-7.6-50.9-21.1L21.1 373.1A71.98 71.98 0 0 1 0 322.2V189.8c0-19.1 7.6-37.4 21.1-50.9" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M151.9 32.5c10.5-10.5 24.7-16.4 39.6-16.4h129c14.9 0 29.1 5.9 39.6 16.4l119.4 119.4c10.5 10.5 16.4 24.7 16.4 39.6v129c0 14.9-5.9 29.1-16.4 39.6L360.1 479.5a55.92 55.92 0 0 1-39.6 16.4h-129c-14.9 0-29.1-5.9-39.6-16.4L32.5 360.1a56.1 56.1 0 0 1-16.4-39.6v-129c0-14.9 5.9-29.1 16.4-39.6zM191.5.1c-19.1 0-37.4 7.6-50.9 21.1L21.2 140.6A71.98 71.98 0 0 0 .1 191.5v129c0 19.1 7.6 37.4 21.1 50.9l119.4 119.4c13.5 13.5 31.8 21.1 50.9 21.1h129c19.1 0 37.4-7.6 50.9-21.1l119.4-119.4c13.5-13.5 21.1-31.8 21.1-50.9v-129c0-19.1-7.6-37.4-21.1-50.9L371.4 21.2A71.98 71.98 0 0 0 320.5.1z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M191.5.1c-19.1 0-37.4 7.6-50.9 21.1L21.2 140.6A71.98 71.98 0 0 0 .1 191.5v129c0 19.1 7.6 37.4 21.1 50.9l119.4 119.4c13.5 13.5 31.8 21.1 50.9 21.1h129c19.1 0 37.4-7.6 50.9-21.1l119.4-119.4c13.5-13.5 21.1-31.8 21.1-50.9v-129c0-19.1-7.6-37.4-21.1-50.9L371.4 21.2A71.98 71.98 0 0 0 320.5.1z"
                />
                <Path d="" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
