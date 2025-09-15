import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CalendarWeekIcon: React.FC<
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
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M128 0c17.7 0 32 14.3 32 32v32h128V32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h48c26.5 0 48 21.5 48 48v48H0v-48c0-26.5 21.5-48 48-48h48V32c0-17.7 14.3-32 32-32M0 192h448v272c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm80 64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M128 0c13.3 0 24 10.7 24 24v40h144V24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h40c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h40V24c0-13.3 10.7-24 24-24m272 192H48v256c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16zm-288 64h224c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M128 16c0-8.8-7.2-16-16-16S96 7.2 96 16v48H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-32V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H128zM32 192h384v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm32-96h320c17.7 0 32 14.3 32 32v32H32v-32c0-17.7 14.3-32 32-32m40 160h240c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8m-40 8v80c0 22.1 17.9 40 40 40h240c22.1 0 40-17.9 40-40v-80c0-22.1-17.9-40-40-40H104c-22.1 0-40 17.9-40 40" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-48V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H128zM16 192h416v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm96-112v40c0 4.4 3.6 8 8 8s8-3.6 8-8V80h192v40c0 4.4 3.6 8 8 8s8-3.6 8-8V80h48c26.5 0 48 21.5 48 48v48H16v-48c0-26.5 21.5-48 48-48zM96 272h256c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16m-32 16v64c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M448 192H0v272c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48zM80 256h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"
                />
                <Path d="M96 32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h128V32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h48c26.5 0 48 21.5 48 48v80H0v-80c0-26.5 21.5-48 48-48h48z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
