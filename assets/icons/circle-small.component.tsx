import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleSmallIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone";
  }
> = ({ type, size, color, active, style, opacity, haptic, ...more }) => {
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
    color,
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M0 256a160 160 0 1 1 320 0 160 160 0 1 1-320 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M272 256a112 112 0 1 0-224 0 112 112 0 1 0 224 0M0 256a160 160 0 1 1 320 0 160 160 0 1 1-320 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M288 256a128 128 0 1 0-256 0 128 128 0 1 0 256 0M0 256a160 160 0 1 1 320 0 160 160 0 1 1-320 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M160 112a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 304a160 160 0 1 0 0-320 160 160 0 1 0 0 320" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M0 256a160 160 0 1 1 320 0 160 160 0 1 1-320 0"
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
