import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const RulerVerticalIcon: React.FC<
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
              <Svg viewBox="0 0 256 512" fill={colors[colorName || "text"]}>
                <Path d="M0 48C0 21.5 21.5 0 48 0h160c26.5 0 48 21.5 48 48v48h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 256 512" fill={colors[colorName || "text"]}>
                <Path d="M192 48c8.8 0 16 7.2 16 16v32h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 256 512" fill={colors[colorName || "text"]}>
                <Path d="M192 32c17.7 0 32 14.3 32 32v32h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v64h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v64h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v64h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 256 512" fill={colors[colorName || "text"]}>
                <Path d="M192 16c26.5 0 48 21.5 48 48v40h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h80v80h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h80v80h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h80v80h-80c-4.4 0-8 3.6-8 8s3.6 8 8 8h80v40c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zm64 384V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 256 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M0 48C0 21.5 21.5 0 48 0h160c26.5 0 48 21.5 48 48v48h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"
                />
                <Path d="M176 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h80V96zm-16 112c0 8.8 7.2 16 16 16h80v-32h-80c-8.8 0-16 7.2-16 16m16 80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v-32zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
