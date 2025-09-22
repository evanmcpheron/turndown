import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const GreaterThanEqualIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M52.1 93.7c-16.4-6.6-24.4-25.2-17.8-41.6s25.2-24.4 41.6-17.8l320 128C408 167.1 416 178.9 416 192s-8 24.9-20.1 29.7l-320 128c-16.4 6.6-35-1.4-41.6-17.8s1.4-35 17.8-41.6L297.8 192zM416 416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M47 78.2c-12.3-5-18.2-19-13.2-31.3s19-18.2 31.3-13.2l336 136c9.1 3.7 15 12.5 15 22.2s-5.9 18.6-15 22.2L65 350.2c-12.3 5-26.3-1-31.3-13.2s1-26.3 13.2-31.3L328 192zM424 432c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M41.9 62.8c-8.2-3.3-12.1-12.7-8.8-20.9S45.8 29.8 54 33.1l352 144c6 2.5 9.9 8.3 9.9 14.8s-3.9 12.3-9.9 14.8l-352 144c-8.2 3.3-17.5-.6-20.9-8.8s.6-17.5 8.8-20.9l315.8-129zM432 448c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M36.9 47.4c-4.1-1.7-6-6.4-4.3-10.4S39 31 43 32.7l368 152c3 1.2 4.9 4.2 4.9 7.4s-2 6.2-4.9 7.4l-368 152c-4.1 1.7-8.8-.3-10.4-4.3s.3-8.8 4.3-10.4L387 192zM440 464c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M34.3 52.1c-6.6 16.4 1.4 35 17.8 41.6L297.8 192 52.1 290.3c-16.4 6.6-24.4 25.2-17.8 41.6s25.2 24.4 41.6 17.8l320-128C408 216.9 416 205.1 416 192s-8-24.9-20.1-29.7l-320-128c-16.4-6.6-35 1.4-41.6 17.8"
                />
                <Path d="M448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
