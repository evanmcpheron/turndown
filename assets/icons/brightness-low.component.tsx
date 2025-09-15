import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BrightnessLowIcon: React.FC<
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
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M224 80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-64 176a96 96 0 1 1 192 0 96 96 0 1 1-192 0m96 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64m176-176a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-320 32a32 32 0 1 1-64 0 32 32 0 1 1 64 0M96 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m0-256a32 32 0 1 1 64 0 32 32 0 1 1-64 0M160 384a32 32 0 1 1-64 0 32 32 0 1 1 64 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M288 80a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 128a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64m176-176a32 32 0 1 0 0-64 32 32 0 1 0 0 64M48 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m112-128a32 32 0 1 0-64 0 32 32 0 1 0 64 0m256 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-256a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 384a32 32 0 1 0 64 0 32 32 0 1 0-64 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M280 80a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 112a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48m176-176a24 24 0 1 0 0-48 24 24 0 1 0 0 48M56 256a24 24 0 1 0 48 0 24 24 0 1 0-48 0m96-128a24 24 0 1 0-48 0 24 24 0 1 0 48 0m256 256a24 24 0 1 0-48 0 24 24 0 1 0 48 0m0-256a24 24 0 1 0-48 0 24 24 0 1 0 48 0M104 384a24 24 0 1 0 48 0 24 24 0 1 0-48 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M272 80a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32m176-176a16 16 0 1 0 0-32 16 16 0 1 0 0 32M64 256a16 16 0 1 0 32 0 16 16 0 1 0-32 0m80-128a16 16 0 1 0-32 0 16 16 0 1 0 32 0m256 256a16 16 0 1 0-32 0 16 16 0 1 0 32 0m0-256a16 16 0 1 0-32 0 16 16 0 1 0 32 0M112 384a16 16 0 1 0 32 0 16 16 0 1 0-32 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M256 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64m176-176a32 32 0 1 0 0-64 32 32 0 1 0 0 64M48 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m112-128a32 32 0 1 0-64 0 32 32 0 1 0 64 0m256 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-256a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 384a32 32 0 1 0 64 0 32 32 0 1 0-64 0"
                />
                <Path d="M160 256a96 96 0 1 1 192 0 96 96 0 1 1-192 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
