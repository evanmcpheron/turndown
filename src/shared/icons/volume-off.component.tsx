import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const VolumeOffIcon: React.FC<
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
                <Path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8l134.9 119.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="m272 102.3-112.1 99.6c-4.4 3.9-10.1 6.1-15.9 6.1H56c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h88c5.9 0 11.6 2.2 15.9 6.1L272 409.7zm-1.6-62.8c5.5-4.8 12.5-7.5 19.8-7.5 16.5 0 29.8 13.3 29.8 29.8v388.4c0 16.5-13.3 29.8-29.8 29.8-7.3 0-14.3-2.7-19.8-7.5L134.9 352H56c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56h78.9z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M288 66.7 151.6 188c-2.9 2.6-6.7 4-10.6 4H56c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h85c3.9 0 7.7 1.4 10.6 4L288 445.3zm-17.6-27.2c5.5-4.8 12.5-7.5 19.8-7.5 16.5 0 29.8 13.3 29.8 29.8v388.4c0 16.5-13.3 29.8-29.8 29.8-7.3 0-14.3-2.7-19.8-7.5l10.6-12-10.6 12L134.9 352H56c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56h78.9z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M290.2 48c-3.4 0-6.6 1.2-9.2 3.5L143.2 174c-1.5 1.3-3.4 2-5.3 2H56c-22.1 0-40 17.9-40 40v80c0 22.1 17.9 40 40 40h81.9c2 0 3.9.7 5.3 2L281 460.5c2.5 2.2 5.8 3.5 9.2 3.5 7.6 0 13.8-6.2 13.8-13.8V61.8c0-7.6-6.2-13.8-13.8-13.8m-19.8-8.5c5.5-4.8 12.5-7.5 19.8-7.5 16.5 0 29.8 13.3 29.8 29.8v388.4c0 16.5-13.3 29.8-29.8 29.8-7.3 0-14.3-2.7-19.8-7.5L134.9 352H56c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56h78.9z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d=""
                />
                <Path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8l134.9 119.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
