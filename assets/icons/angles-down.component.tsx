import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const AnglesDownIcon: React.FC<
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
                <Path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7l137.4-137.3c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M401 113 241 273c-9.4 9.4-24.6 9.4-33.9 0L47 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 79c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zm0 192L241 465c-9.4 9.4-24.6 9.4-33.9 0L47 305c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143L367 271c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M235.3 459.3c-6.2 6.2-16.4 6.2-22.6 0l-160-160c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 425.4l148.7-148.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm160-352-160 160c-6.2 6.2-16.4 6.2-22.6 0l-160-160c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 233.4 372.7 84.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="m405.7 93.7-176 176c-3.1 3.1-8.2 3.1-11.3 0l-176-176c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L224 252.7 394.3 82.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zm0 192-176 176c-3.1 3.1-8.2 3.1-11.3 0l-176-176c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L224 444.7l170.3-170.4c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M201.4 278.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 210.7 86.6 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                />
                <Path d="M201.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 86.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
