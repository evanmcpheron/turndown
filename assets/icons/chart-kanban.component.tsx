import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ChartKanbanIcon: React.FC<
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
                <Path d="M320 432c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48zM160 240c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48zM48 416h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v288c0 26.5 21.5 48 48 48" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M368 432V80h32v352zm-48 0c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48zM80 368H48V80h32zm-32 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v288c0 26.5 21.5 48 48 48m192-176h-32V80h32zm-32 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M368 448c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16zm-48-16c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48zM80 384H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16m-32 32h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v288c0 26.5 21.5 48 48 48m192-160h-32c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16m-32 32h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M368 464c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32zm-48-32c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48zM80 400H48c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32m-32 16h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v288c0 26.5 21.5 48 48 48m192-144h-32c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32m-32 16h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M160 240c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48z"
                />
                <Path d="M368 480c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM48 416c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
