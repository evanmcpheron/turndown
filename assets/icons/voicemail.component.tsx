import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const VoicemailIcon: React.FC<
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
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path d="M144 320a80 80 0 1 1 0-160 80 80 0 1 1 0 160m119.8 0c15.3-22.9 24.2-50.4 24.2-80 0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144h352c79.5 0 144-64.5 144-144S575.5 96 496 96s-144 64.5-144 144c0 29.6 8.9 57.1 24.2 80zM496 160a80 80 0 1 1 0 160 80 80 0 1 1 0-160" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path d="M144 144a96 96 0 1 1 0 192 96 96 0 1 1 0-192m107.3 192c22.8-25.5 36.7-59.1 36.7-96 0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144h352c79.5 0 144-64.5 144-144S575.5 96 496 96s-144 64.5-144 144c0 36.9 13.9 70.5 36.7 96zM496 144a96 96 0 1 1 0 192 96 96 0 1 1 0-192" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path d="M144 352a112 112 0 1 0 0-224 112 112 0 1 0 0 224m144-112c0 45.2-20.9 85.6-53.5 112h171c-32.6-26.4-53.5-66.8-53.5-112 0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144H144C64.5 384 0 319.5 0 240S64.5 96 144 96s144 64.5 144 144m208 112a112 112 0 1 0 0-224 112 112 0 1 0 0 224" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path d="M144 368a128 128 0 1 0 0-256 128 128 0 1 0 0 256m144-128c0 55.7-31.7 104.1-78 128h220c-46.3-23.9-78-72.3-78-128 0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144H144C64.5 384 0 319.5 0 240S64.5 96 144 96s144 64.5 144 144m208 128a128 128 0 1 0 0-256 128 128 0 1 0 0 256m-352-64a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160m416 80a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-144 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M144 288a48 48 0 1 0 0-96 48 48 0 1 0 0 96m352 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
                />
                <Path d="M144 320a80 80 0 1 1 0-160 80 80 0 1 1 0 160m119.8 0c15.3-22.9 24.2-50.4 24.2-80 0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144h352c79.5 0 144-64.5 144-144S575.5 96 496 96s-144 64.5-144 144c0 29.6 8.9 57.1 24.2 80zM496 160a80 80 0 1 1 0 160 80 80 0 1 1 0-160" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
