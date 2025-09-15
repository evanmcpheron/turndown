import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const EllipsisIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M8 256a56 56 0 1 1 112 0 56 56 0 1 1-112 0m160 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M432 256a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-160 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0M64 304a48 48 0 1 1 0-96 48 48 0 1 1 0 96" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M416 256a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-160 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0M64 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M368 256a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-128 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0M96 272a16 16 0 1 1 0-32 16 16 0 1 1 0 32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M168 256a56 56 0 1 1 112 0 56 56 0 1 1-112 0"
                />
                <Path d="M64 312a56 56 0 1 0 0-112 56 56 0 1 0 0 112m320 0a56 56 0 1 0 0-112 56 56 0 1 0 0 112" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
