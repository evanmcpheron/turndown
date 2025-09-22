import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const LessThanEqualIcon: React.FC<
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
                <Path d="M395.9 93.7c16.4-6.6 24.4-25.2 17.8-41.6s-25.2-24.4-41.6-17.8l-320 128C40 167.1 32 178.9 32 192s8 24.9 20.1 29.7l320 128c16.4 6.6 35-1.4 41.6-17.8s-1.4-35-17.8-41.6L150.2 192zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M401 78.2c12.3-5 18.2-19 13.2-31.3s-19-18.2-31.3-13.2L47 169.8c-9.1 3.7-15 12.5-15 22.2s5.9 18.6 15 22.2l336 136c12.3 5 26.3-1 31.3-13.2s-1-26.3-13.2-31.3L120 192zM24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M406.1 62.8c8.2-3.3 12.1-12.7 8.8-20.9s-12.7-12.1-20.9-8.8l-352 144c-6 2.5-9.9 8.3-9.9 14.8s3.9 12.3 9.9 14.8l352 144c8.2 3.3 17.5-.6 20.9-8.8s-.6-17.5-8.8-20.9L90.3 192zM16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M411.1 47.4c4.1-1.7 6-6.4 4.3-10.4s-6.4-6-10.4-4.3l-368 152c-3 1.2-4.9 4.2-4.9 7.4s2 6.2 4.9 7.4l368 152c4.1 1.7 8.8-.3 10.4-4.3s-.3-8.8-4.3-10.4L61 192zM8 464c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M413.7 52.1c6.6 16.4-1.4 35-17.8 41.6L150.2 192l245.7 98.3c16.4 6.6 24.4 25.2 17.8 41.6s-25.2 24.4-41.6 17.8l-320-128C40 216.9 32 205.1 32 192s8-24.9 20.1-29.7l320-128c16.4-6.6 35 1.4 41.6 17.8"
                />
                <Path d="M0 448c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
