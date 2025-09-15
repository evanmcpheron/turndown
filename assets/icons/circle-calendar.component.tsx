import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleCalendarIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M208 96c8.8 0 16 7.2 16 16v16h64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h32c17.7 0 32 14.3 32 32v32H128v-32c0-17.7 14.3-32 32-32h32v-16c0-8.8 7.2-16 16-16m-80 256V224h256v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m208-144c8.8 0 16 7.2 16 16v16h64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h16c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48h16v-16c0-8.8 7.2-16 16-16m-32 208h160v-96H176z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M208 96c8.8 0 16 7.2 16 16v16h64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h16c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h16v-16c0-8.8 7.2-16 16-16m-48 80v16h192v-16c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16m192 48H160v112c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M200 96c4.4 0 8 3.6 8 8v24h96v-24c0-4.4 3.6-8 8-8s8 3.6 8 8v24h16c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h16v-24c0-4.4 3.6-8 8-8m-8 72v-24h-16c-17.7 0-32 14.3-32 32v32h224v-32c0-17.7-14.3-32-32-32h-16v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24h-96v24c0 4.4-3.6 8-8 8s-8-3.6-8-8m176 56H144v112c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M208 96c8.8 0 16 7.2 16 16v16h64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h32v-16c0-8.8 7.2-16 16-16"
                />
                <Path d="M192 112c0-8.8 7.2-16 16-16s16 7.2 16 16v16h64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h32c17.7 0 32 14.3 32 32v64H128v-64c0-17.7 14.3-32 32-32h32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
