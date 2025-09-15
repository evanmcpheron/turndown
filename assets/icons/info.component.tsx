import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const InfoIcon: React.FC<
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
              <Svg viewBox="0 0 192 512"  fill={colors[colorName || "text"]} >
                <Path d="M48 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0M0 224c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v224h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V256H32c-17.7 0-32-14.3-32-32" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 192 512"  fill={colors[colorName || "text"]} >
                <Path d="M56 72a40 40 0 1 1 80 0 40 40 0 1 1-80 0M16 200c0-13.3 10.7-24 24-24h56c13.3 0 24 10.7 24 24v264h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h48V224H40c-13.3 0-24-10.7-24-24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 192 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0M16 176c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v272h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V192H32c-8.8 0-16-7.2-16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 192 512"  fill={colors[colorName || "text"]} >
                <Path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-64a40 40 0 1 1 0 80 40 40 0 1 1 0-80M32 184c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v280h80c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h80V192H40c-4.4 0-8-3.6-8-8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 192 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M48 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
                />
                <Path d="M32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V224c0-17.7-14.3-32-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
