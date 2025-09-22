import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const GlassEmptyIcon: React.FC<
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
                <Path d="M8.6 10.2C14.6 3.7 23.1 0 32 0h320c8.9 0 17.4 3.7 23.4 10.2s9.1 15.2 8.5 24.1l-28.8 403.4c-3 41.9-37.8 74.3-79.8 74.3H108.7c-42 0-76.8-32.4-79.8-74.3L.1 34.3c-.6-8.9 2.4-17.6 8.5-24.1M66.4 64l26.3 369.1c.6 8.4 7.6 14.9 16 14.9h166.6c8.4 0 15.4-6.5 16-14.9L317.6 64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M6.3 7.8C10.9 2.8 17.3 0 24 0h336c6.7 0 13.1 2.8 17.7 7.8s6.8 11.6 6.2 18.3l-36.2 420.1c-3.2 37.2-34.4 65.8-71.7 65.8H108c-37.4 0-68.5-28.6-71.7-65.8L.1 26.1c-.6-6.7 1.7-13.4 6.2-18.3M50.2 48l34 394.1c1 12.4 11.4 21.9 23.8 21.9h168c12.5 0 22.8-9.5 23.9-21.9L333.8 48z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M40.1 32c-4.7 0-8.4 4-8 8.7l34.6 410c1.4 16.6 15.2 29.3 31.9 29.3h186.8c16.6 0 30.5-12.7 31.9-29.3l34.6-410c.4-4.7-3.3-8.7-8-8.7zM.2 43.4C-1.7 20 16.7 0 40.1 0h303.7c23.4 0 41.8 20 39.9 43.4l-34.6 410c-2.8 33.1-30.5 58.6-63.8 58.6H98.6c-33.3 0-61-25.5-63.8-58.6z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M32.1 16c-9.3 0-16.7 8-15.9 17.3l34.7 425.9c1.7 20.8 19 36.8 39.8 36.8h202.6c20.8 0 38.2-16 39.9-36.8l34.7-425.9C368.7 24 361.3 16 352 16zM.2 34.6C-1.3 16 13.4 0 32.1 0H352c18.7 0 33.4 16 31.9 34.6l-34.7 426c-2.4 29.1-26.7 51.4-55.8 51.4H90.7c-29.2 0-53.4-22.4-55.8-51.4z" />
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
