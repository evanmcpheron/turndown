import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleHalfStrokeIcon: React.FC<
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
                <Path d="M448 256c0-106-86-192-192-192v384c106 0 192-86 192-192M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M464 256c0-114.9-93.1-208-208-208v416c114.9 0 208-93.1 208-208M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M240 479.4V32.6C123.8 40.8 32 137.7 32 256s91.8 215.2 208 223.4M480 256c0-118.3-91.8-215.2-208-223.4v446.8c116.2-8.2 208-105.1 208-223.4M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M264 495.9c128.8-4.2 232-110 232-239.9S392.8 20.4 264 16.1zm-16 0V16.1C119.2 20.4 16 126.1 16 256s103.2 235.6 232 239.9M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M512 256C512 114.6 397.4 0 256 0v64c106 0 192 86 192 192s-86 192-192 192v64c141.4 0 256-114.6 256-256"
                />
                <Path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
