import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ClockOneThirtyIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m24-120V263.3l60-90c7.4-11 4.4-25.9-6.7-33.3s-25.9-4.4-33.3 6.7l-64 96c-2.6 3.9-4 8.6-4 13.3v136c0 13.3 10.7 24 24 24s24-10.7 24-24" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1-416 0m464 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M280 392V263.3l60-90c7.4-11 4.4-25.9-6.7-33.3s-25.9-4.4-33.3 6.7l-64 96c-2.6 3.9-4 8.6-4 13.3v136c0 13.3 10.7 24 24 24s24-10.7 24-24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M32 256a224 224 0 1 1 448 0 224 224 0 1 1-448 0m480 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M272 400V260.8l61.3-92c4.9-7.4 2.9-17.3-4.4-22.2s-17.3-2.9-22.2 4.4l-64 96c-1.8 2.6-2.7 5.7-2.7 8.9V400c0 8.8 7.2 16 16 16s16-7.2 16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M16 256a240 240 0 1 1 480 0 240 240 0 1 1-480 0m496 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M264 408V258.4l62.7-94c2.5-3.7 1.5-8.6-2.2-11.1s-8.6-1.5-11.1 2.2l-64 96c-.9 1.3-1.3 2.9-1.3 4.4V408c0 4.4 3.6 8 8 8s8-3.6 8-8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m24-120V263.3l60-90c7.4-11 4.4-25.9-6.7-33.3s-25.9-4.4-33.3 6.7l-64 96c-2.6 3.9-4 8.6-4 13.3v136c0 13.3 10.7 24 24 24s24-10.7 24-24"
                />
                <Path d="M256 416c13.3 0 24-10.7 24-24V263.3l60-90c7.4-11 4.4-25.9-6.7-33.3s-25.9-4.4-33.3 6.7l-64 96c-2.6 3.9-4 8.6-4 13.3v136c0 13.3 10.7 24 24 24" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
