import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ToggleLargeOnIcon: React.FC<
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
                <Path d="M192 64C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm192 64a128 128 0 1 1 0 256 128 128 0 1 1 0-256" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M192 64C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm192 48a144 144 0 1 1 0 288 144 144 0 1 1 0-288" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M416 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256m0 288H160C71.6 416 0 344.4 0 256S71.6 96 160 96h256c88.4 0 160 71.6 160 160s-71.6 160-160 160m-96-32c-38.9-29.2-64-75.7-64-128s25.1-98.8 64-128H160c-70.7 0-128 57.3-128 128s57.3 128 128 128z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M416 112a144 144 0 1 0 0 288 144 144 0 1 0 0-288m0 304H160C71.6 416 0 344.4 0 256S71.6 96 160 96h256c88.4 0 160 71.6 160 160s-71.6 160-160 160m-69.8-16c-53.4-25.9-90.2-80.7-90.2-144s36.8-118.1 90.2-144H160c-79.5 0-144 64.5-144 144s64.5 144 144 144z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M192 64C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm192 64a128 128 0 1 1 0 256 128 128 0 1 1 0-256"
                />
                <Path d="M384 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
