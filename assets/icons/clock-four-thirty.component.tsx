import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ClockFourThirtyIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m24-120v-91.2l58.7 39.2c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3l-96-64c-7.4-4.9-16.8-5.4-24.6-1.2S232 247.1 232 256v136c0 13.3 10.7 24 24 24s24-10.7 24-24" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1-416 0m464 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M280 392v-91.2l58.7 39.2c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3l-96-64c-7.4-4.9-16.8-5.4-24.6-1.2S232 247.1 232 256v136c0 13.3 10.7 24 24 24s24-10.7 24-24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M32 256a224 224 0 1 1 448 0 224 224 0 1 1-448 0m480 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M272 400V285.9l71.1 47.4c7.4 4.9 17.3 2.9 22.2-4.4s2.9-17.3-4.4-22.2l-96-64c-4.9-3.3-11.2-3.6-16.4-.8s-8.5 8.2-8.5 14.1v144c0 8.8 7.2 16 16 16s16-7.2 16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M16 256a240 240 0 1 1 480 0 240 240 0 1 1-480 0m496 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M264 408V270.9l83.6 55.7c3.7 2.5 8.6 1.5 11.1-2.2s1.5-8.6-2.2-11.1l-96-64c-2.5-1.6-5.6-1.8-8.2-.4s-4.2 4.1-4.2 7.1v152c0 4.4 3.6 8 8 8s8-3.6 8-8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m24-120v-91.2l58.7 39.2c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3l-96-64c-7.4-4.9-16.8-5.4-24.6-1.2S232 247.1 232 256v136c0 13.3 10.7 24 24 24s24-10.7 24-24"
                />
                <Path d="M256 416c13.3 0 24-10.7 24-24v-91.2l58.7 39.2c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3l-96-64c-7.4-4.9-16.8-5.4-24.6-1.2S232 247.1 232 256v136c0 13.3 10.7 24 24 24" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
