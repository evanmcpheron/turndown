import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowTurnLeftDownIcon: React.FC<
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
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M342.6 374.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7V96c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32S369.7 0 352 0h-96c-53 0-96 43-96 96v306.7l-73.4-73.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M337 377c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-87 87L216 88c0-22.1 17.9-40 40-40h104c13.3 0 24-10.7 24-24S373.3 0 360 0H256c-48.6 0-88 39.4-88 88v342.1L81 343c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L175 505c9.4 9.4 24.6 9.4 33.9 0z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M331.3 379.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 457.4V80c0-26.5 21.5-48 48-48h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H256c-44.2 0-80 35.8-80 80v377.4L75.3 356.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l128 128c6.2 6.2 16.4 6.2 22.6 0z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M349.7 357.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L200 484.7V72c0-30.9 25.1-56 56-56h120c4.4 0 8-3.6 8-8s-3.6-8-8-8H256c-39.8 0-72 32.2-72 72v412.7L45.7 346.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l152 152c3.1 3.1 8.2 3.1 11.3 0l152-152z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M224 402.7V96c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32S369.7 0 352 0h-96c-53 0-96 43-96 96v306.7l32 32z"
                />
                <Path d="M342.6 329.4c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 434.7l105.4-105.3c12.5-12.5 32.8-12.5 45.3 0z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
