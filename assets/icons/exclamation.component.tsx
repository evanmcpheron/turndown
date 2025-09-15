import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ExclamationIcon: React.FC<
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
              <Svg viewBox="0 0 64 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v256c0 17.7 14.3 32 32 32s32-14.3 32-32zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 64 512"  fill={colors[colorName || "text"]} >
                <Path d="M56 56c0-13.3-10.7-24-24-24S8 42.7 8 56v288c0 13.3 10.7 24 24 24s24-10.7 24-24zM32 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 64 512"  fill={colors[colorName || "text"]} >
                <Path d="M48 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v304c0 8.8 7.2 16 16 16s16-7.2 16-16zM32 472a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 64 512"  fill={colors[colorName || "text"]} >
                <Path d="M40 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v328c0 4.4 3.6 8 8 8s8-3.6 8-8zm-8 424a16 16 0 1 0 0-32 16 16 0 1 0 0 32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 64 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M-8 440a40 40 0 1 1 80 0 40 40 0 1 1-80 0"
                />
                <Path d="M32 32c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32S0 337.7 0 320V64c0-17.7 14.3-32 32-32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
