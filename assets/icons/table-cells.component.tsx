import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const TableCellsIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone";
  }
> = ({
  type,
  size,
  color: colorName,
  active,
  style,
  opacity,
  haptic,
  ...more
}) => {
  const { colors } = useTheme();

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
    color: colors[colorName || "text"],
  });


  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm88 64v64H64V96zm56 0h88v64h-88zm240 0v64h-88V96zM64 224h88v64H64zm232 0v64h-88v-64zm64 0h88v64h-88zM152 352v64H64v-64zm56 0h88v64h-88zm240 0v64h-88v-64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M360 80v88h104V96c0-8.8-7.2-16-16-16zm-48 0H200v88h112zm-160 0H64c-8.8 0-16 7.2-16 16v72h104zM48 216v80h104v-80zm0 128v72c0 8.8 7.2 16 16 16h88v-88zm152 88h112v-88H200zm160 0h88c8.8 0 16-7.2 16-16v-72H360zm104-136v-80H360v80zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm200 200h112v-80H200z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M352 64v96h128V96c0-17.7-14.3-32-32-32zm-32 0H192v96h128zm-160 0H64c-17.7 0-32 14.3-32 32v64h128zM32 192v128h128V192zm0 160v64c0 17.7 14.3 32 32 32h96v-96zm160 96h128v-96H192zm160 0h96c17.7 0 32-14.3 32-32v-64H352zm128-128V192H352v128zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm192 224h128V192H192z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M352 48v128h144V96c0-26.5-21.5-48-48-48zm-16 0H176v128h160zm-176 0H64c-26.5 0-48 21.5-48 48v80h144zM16 192v128h144V192zm0 144v80c0 26.5 21.5 48 48 48h96V336zm160 128h160V336H176zm176 0h96c26.5 0 48-21.5 48-48v-80H352zm144-144V192H352v128zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm176 224h160V192H176z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M144 160V96h64v64h96V96h64v64h80v64h-80v64h80v64h-80v64h-64v-64h-96v64h-64v-64H64v-64h80v-64H64v-64zm64 64v64h96v-64z"
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
