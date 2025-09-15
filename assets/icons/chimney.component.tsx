import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ChimneyIcon: React.FC<
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
                <Path d="M0 64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm32 128h96v128H32zm384 0v128H160V192zM288 352v128H32V352zm128 0v128h-96V352z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M48 176h352V80H48zM0 64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32v240c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80h-80v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80H80v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V224c-17.7 0-32-14.3-32-32zm80 160v112h80V224zm128 0v112h160V224z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M32 64h384v64H32zm0 96v304c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h96v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h192v48c0 8.8 7.2 16 16 16s16-7.2 16-16V160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32m352 0v96H192v-96zm-224 0v96H64v-96zm16 224H64v-96h192v96zm112 0v-96h96v96z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M32 48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zM0 64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v312c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88H176v88c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88H48v88c0 4.4-3.6 8-8 8s-8-3.6-8-8V160c-17.7 0-32-14.3-32-32zm48 96v96h112v-96zm128 0v96h224v-96zm-8 208h104v-96H48v96zm120 0h112v-96H288z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M128 192H32v128h96zm288 0H160v128h256zM288 352H32v128h256zm128 0h-96v128h96z"
                />
                <Path d="M32 32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
