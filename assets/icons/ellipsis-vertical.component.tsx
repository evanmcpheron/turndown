import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const EllipsisVerticalIcon: React.FC<
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
              <Svg viewBox="0 0 128 512" fill={color}>
                <Path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112m0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112m56-104A56 56 0 1 0 8 96a56 56 0 1 0 112 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 128 512" fill={color}>
                <Path d="M64 368a48 48 0 1 0 0 96 48 48 0 1 0 0-96m0-160a48 48 0 1 0 0 96 48 48 0 1 0 0-96m48-112a48 48 0 1 0-96 0 48 48 0 1 0 96 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 128 512" fill={color}>
                <Path d="M64 384a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-160a32 32 0 1 0 0 64 32 32 0 1 0 0-64M96 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 128 512" fill={color}>
                <Path d="M64 400a16 16 0 1 1 0-32 16 16 0 1 1 0 32m0-128a16 16 0 1 1 0-32 16 16 0 1 1 0 32M48 128a16 16 0 1 1 32 0 16 16 0 1 1-32 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 128 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M8 256a56 56 0 1 1 112 0 56 56 0 1 1-112 0"
                />
                <Path d="M120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0m0 320a56 56 0 1 0-112 0 56 56 0 1 0 112 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
