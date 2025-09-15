import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BullseyeIcon: React.FC<
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
                <Path d="M448 256a192 192 0 1 0-384 0 192 192 0 1 0 384 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288m-32 144a32 32 0 1 1 64 0 32 32 0 1 1-64 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 112a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-272a160 160 0 1 1 0 320 160 160 0 1 1 0-320m0 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 128a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-288a160 160 0 1 1 0 320 160 160 0 1 1 0-320m0 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-408a152 152 0 1 1 0 304 152 152 0 1 1 0-304m0 320a168 168 0 1 0 0-336 168 168 0 1 0 0 336m-56-168a56 56 0 1 1 112 0 56 56 0 1 1-112 0m128 0a72 72 0 1 0-144 0 72 72 0 1 0 144 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M256 176a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 224a144 144 0 1 0 0-288 144 144 0 1 0 0 288"
                />
                <Path d="M448 256a192 192 0 1 0-384 0 192 192 0 1 0 384 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
