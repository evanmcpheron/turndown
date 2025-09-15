import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ChartSimpleHorizontalIcon: React.FC<
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
                <Path d="M400 320c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48zM208 480c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48zm176-368V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v32c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M400 240H48v32h352zm48 32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM208 400H48v32h160zm48 32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48zm80-320V80H48v32zm0 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M416 240c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16zm32 32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM224 400c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16zm32 32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48zm96-320V80c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16m-16 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M432 240c0-17.7-14.3-32-32-32H48c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32zm16 32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM240 400c0-17.7-14.3-32-32-32H48c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32zm16 32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48zm112-320V80c0-17.7-14.3-32-32-32H48c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32m-32 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M400 320c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48z"
                />
                <Path d="M384 112c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48zM256 432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
