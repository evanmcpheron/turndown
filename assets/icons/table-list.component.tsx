import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const TableListIcon: React.FC<
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
                <Path d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 0v64h64V96zm384 0H192v64h256zM64 224v64h64v-64zm384 0H192v64h256zM64 352v64h64v-64zm384 0H192v64h256z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M192 80v88h272V96c0-8.8-7.2-16-16-16zm-48 0H64c-8.8 0-16 7.2-16 16v72h96zM48 216v80h96v-80zm0 128v72c0 8.8 7.2 16 16 16h80v-88zm144 88h256c8.8 0 16-7.2 16-16v-72H192zm272-136v-80H192v80zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M192 64v96h288V96c0-17.7-14.3-32-32-32zm-32 0H64c-17.7 0-32 14.3-32 32v64h128zM32 192v128h128V192zm0 160v64c0 17.7 14.3 32 32 32h96v-96zm160 96h256c17.7 0 32-14.3 32-32v-64H192zm288-128V192H192v128zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M160 48v128h336V96c0-26.5-21.5-48-48-48zm-16 0H64c-26.5 0-48 21.5-48 48v80h128zM16 192v128h128V192zm0 144v80c0 26.5 21.5 48 48 48h80V336zm144 128h288c26.5 0 48-21.5 48-48v-80H160zm336-144V192H160v128zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M128 160V96h64v64h256v64H192v64h256v64H192v64h-64v-64H64v-64h64v-64H64v-64z"
                />
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm384 64v320H64V96z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
