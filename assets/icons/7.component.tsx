import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const Icon7: React.FC<
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
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 64c0-17.7 14.3-32 32-32h256c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 56c0-13.3 10.7-24 24-24h272c8.6 0 16.6 4.7 20.9 12.2s4.1 16.8-.3 24.2l-240 400c-6.8 11.4-21.6 15-32.9 8.2s-15.1-21.6-8.2-32.9L253.6 80H24C10.7 80 0 69.3 0 56" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 48c0-8.8 7.2-16 16-16h288c5.8 0 11.1 3.1 14 8.2s2.7 11.3-.3 16.2l-256 416c-4.6 7.5-14.5 9.9-22 5.2s-9.9-14.5-5.2-22L275.4 64H16C7.2 64 0 56.8 0 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 40c0-4.4 3.6-8 8-8h304c2.9 0 5.6 1.6 7 4.1s1.3 5.7-.2 8.1l-272 432c-2.4 3.7-7.3 4.9-11 2.5s-4.9-7.3-2.5-11L297.5 48H8c-4.4 0-8-3.6-8-8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M0 64c0-17.7 14.3-32 32-32h256c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96H32C14.3 96 0 81.7 0 64"
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
