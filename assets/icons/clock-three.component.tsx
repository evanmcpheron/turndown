import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ClockThreeIcon: React.FC<
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
                <Path d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512m-24 120v136c0 13.3 10.7 24 24 24h104c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80V120c0-13.3-10.7-24-24-24s-24 10.7-24 24" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M464 256a208 208 0 1 1-416 0 208 208 0 1 1 416 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m232-136v136c0 13.3 10.7 24 24 24h104c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80V120c0-13.3-10.7-24-24-24s-24 10.7-24 24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M480 256a224 224 0 1 1-448 0 224 224 0 1 1 448 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m240-144v144c0 8.8 7.2 16 16 16h112c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96V112c0-8.8-7.2-16-16-16s-16 7.2-16 16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M496 256a240 240 0 1 1-480 0 240 240 0 1 1 480 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m248-152v152c0 4.4 3.6 8 8 8h120c4.4 0 8-3.6 8-8s-3.6-8-8-8H264V104c0-4.4-3.6-8-8-8s-8 3.6-8 8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512m-24 120v136c0 13.3 10.7 24 24 24h104c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80V120c0-13.3-10.7-24-24-24s-24 10.7-24 24"
                />
                <Path d="M256 96c-13.3 0-24 10.7-24 24v136c0 13.3 10.7 24 24 24h104c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80V120c0-13.3-10.7-24-24-24" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
