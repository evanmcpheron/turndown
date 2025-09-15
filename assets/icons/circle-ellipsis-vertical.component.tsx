import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleEllipsisVerticalIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-288a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-32-64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-32-64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-24-72a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 168a24 24 0 1 1 0 48 24 24 0 1 1 0-48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-16-80a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 176a16 16 0 1 1 0 32 16 16 0 1 1 0-32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M512 256a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-288 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-32-128a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
                />
                <Path d="M256 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-32-128a32 32 0 1 1 64 0 32 32 0 1 1-64 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
