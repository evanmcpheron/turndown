import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ToggleOffIcon: React.FC<
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
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128zm192 128c0-106-86-192-192-192H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192m-384 96a96 96 0 1 0 0-192 96 96 0 1 0 0 192" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M384 112c79.5 0 144 64.5 144 144s-64.5 144-144 144H192c-79.5 0-144-64.5-144-144s64.5-144 144-144zm192 144c0-106-86-192-192-192H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192m-384 96a96 96 0 1 0 0-192 96 96 0 1 0 0 192" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M416 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H160c-70.7 0-128-57.3-128-128s57.3-128 128-128zm160 128c0-88.4-71.6-160-160-160H160C71.6 96 0 167.6 0 256s71.6 160 160 160h256c88.4 0 160-71.6 160-160m-352 0a64 64 0 1 1-128 0 64 64 0 1 1 128 0m-160 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M416 112c79.5 0 144 64.5 144 144s-64.5 144-144 144H160c-79.5 0-144-64.5-144-144s64.5-144 144-144zm160 144c0-88.4-71.6-160-160-160H160C71.6 96 0 167.6 0 256s71.6 160 160 160h256c88.4 0 160-71.6 160-160m-336 0a80 80 0 1 1-160 0 80 80 0 1 1 160 0m-176 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M192 128c-70.7 0-128 57.3-128 128s57.3 128 128 128h192c70.7 0 128-57.3 128-128s-57.3-128-128-128zm192-64c106 0 192 86 192 192s-86 192-192 192H192C86 448 0 362 0 256S86 64 192 64z"
                />
                <Path d="M96 256a96 96 0 1 0 192 0 96 96 0 1 0-192 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
