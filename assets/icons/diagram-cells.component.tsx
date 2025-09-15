import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const DiagramCellsIcon: React.FC<
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
                <Path d="M512 160c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64zm-64 256v-64H64v64zm0 64H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M448 224c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64zm16 128v64c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16m48 64v-64c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M480 160c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32zm-32 64c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64zm64 192v-64c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64m-64 32H64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M496 160c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48zm-48 64c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64zm64 192v-64c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64m-64 48H64c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M448 480c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64z"
                />
                <Path d="M448 224c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
