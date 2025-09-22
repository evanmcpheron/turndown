import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const JarIcon: React.FC<
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
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M32 32C32 14.3 46.3 0 64 0h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32M0 160c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 64c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M32 24c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24S277.3 0 264 0H56C42.7 0 32 10.7 32 24m224 104c8.8 0 16 7.2 16 16v80H48v-80c0-8.8 7.2-16 16-16zm16 240v80c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-80zM64 80c-35.3 0-64 28.7-64 64v304c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M64 0h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-8.8 0-16-7.2-16-16S55.2 0 64 0m0 96c-17.7 0-32 14.3-32 32v64h256v-64c0-17.7-14.3-32-32-32zM32 224v128h256V224zm0 160v64c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-64zM0 128c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M80 16c-8.8 0-16 7.2-16 16v32h192V32c0-8.8-7.2-16-16-16zM48 66V32C48 14.3 62.3 0 80 0h160c17.7 0 32 14.3 32 32v34c27.6 7.1 48 32.2 48 62v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-29.8 20.4-54.9 48-62m208 14H64c-26.5 0-48 21.5-48 48v64h288v-64c0-26.5-21.5-48-48-48M16 368h288V208H16zm0 16v64c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-64z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M64 64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm32 128h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32"
                />
                <Path d="M64 0C46.3 0 32 14.3 32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32S273.7 0 256 0zm32 192c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
