import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";

export const Icon0: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone";
  }
> = ({ type, size, color, active, style, ...more }) => {
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
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160v128c0 88.4-71.6 160-160 160S0 408.4 0 320zm160-96c-53 0-96 43-96 96v128c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160v128c0 88.4-71.6 160-160 160S0 408.4 0 320zM160 80C98.1 80 48 130.1 48 192v128c0 61.9 50.1 112 112 112s112-50.1 112-112V192c0-61.9-50.1-112-112-112" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160v128c0 88.4-71.6 160-160 160S0 408.4 0 320zM160 64C89.3 64 32 121.3 32 192v128c0 70.7 57.3 128 128 128s128-57.3 128-128V192c0-70.7-57.3-128-128-128" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160v128c0 88.4-71.6 160-160 160S0 408.4 0 320zM160 48C80.5 48 16 112.5 16 192v128c0 79.5 64.5 144 144 144s144-64.5 144-144V192c0-79.5-64.5-144-144-144" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160v128c0 88.4-71.6 160-160 160S0 408.4 0 320zm160-96c-53 0-96 43-96 96v128c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96" />
                <Path d="" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
