import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const TachographDigitalIcon: React.FC<
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
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm32 64h224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32M64 368c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16m320 0c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16M80 288a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h512c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zM0 128c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm112 16h224c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32M80 352c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16m320 0c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H416c-8.8 0-16-7.2-16-16M96 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zM0 128c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 32v64h224v-64zm-32 0c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 208c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16m320 0c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16M80 288a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 80c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h512c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zM0 128c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm0 216c0-4.4 3.6-8 8-8h272c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8m320 0c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8s-3.6 8-8 8H392c-4.4 0-8-3.6-8-8M80 288a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm32 64h224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32M64 368c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16m320 0c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16M80 288a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                />
                <Path d="M96 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zM80 352c-8.8 0-16 7.2-16 16s7.2 16 16 16h256c8.8 0 16-7.2 16-16s-7.2-16-16-16zm320 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
