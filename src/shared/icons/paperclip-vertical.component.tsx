import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const PaperclipVerticalIcon: React.FC<
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
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M32 128C32 57.3 89.3 0 160 0s128 57.3 128 128v192c0 44.2-35.8 80-80 80s-80-35.8-80-80V160c0-17.7 14.3-32 32-32s32 14.3 32 32v160c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-35.3-28.7-64-64-64s-64 28.7-64 64v208c0 61.9 50.1 112 112 112s112-50.1 112-112V160c0-17.7 14.3-32 32-32s32 14.3 32 32v176c0 97.2-78.8 176-176 176S32 433.2 32 336z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M48 108C48 48.4 96.4 0 156 0s108 48.4 108 108v236c0 39.8-32.2 72-72 72s-72-32.2-72-72V152c0-13.3 10.7-24 24-24s24 10.7 24 24v192c0 13.3 10.7 24 24 24s24-10.7 24-24V108c0-33.1-26.9-60-60-60s-60 26.9-60 60v260c0 53 43 96 96 96s96-43 96-96V152c0-13.3 10.7-24 24-24s24 10.7 24 24v216c0 79.5-64.5 144-144 144S48 447.5 48 368z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M64 96c0-53 43-96 96-96s96 43 96 96v256c0 35.3-28.7 64-64 64s-64-28.7-64-64V144c0-8.8 7.2-16 16-16s16 7.2 16 16v208c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-35.3-28.7-64-64-64S96 60.7 96 96v288c0 53 43 96 96 96s96-43 96-96V144c0-8.8 7.2-16 16-16s16 7.2 16 16v240c0 70.7-57.3 128-128 128S64 454.7 64 384z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M80 88c0-48.6 39.4-88 88-88s88 39.4 88 88v264c0 35.3-28.7 64-64 64s-64-28.7-64-64V136c0-4.4 3.6-8 8-8s8 3.6 8 8v216c0 26.5 21.5 48 48 48s48-21.5 48-48V88c0-39.8-32.2-72-72-72S96 48.2 96 88v312c0 53 43 96 96 96s96-43 96-96V136c0-4.4 3.6-8 8-8s8 3.6 8 8v264c0 61.9-50.1 112-112 112S80 461.9 80 400z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M32 128C32 57.3 89.3 0 160 0s128 57.3 128 128v192c0 44.2-35.8 80-80 80s-80-35.8-80-80V160c0-17.7 14.3-32 32-32s32 14.3 32 32v160c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-35.3-28.7-64-64-64s-64 28.7-64 64v208c0 61.9 50.1 112 112 112s112-50.1 112-112V160c0-17.7 14.3-32 32-32s32 14.3 32 32v176c0 97.2-78.8 176-176 176S32 433.2 32 336z"
                />
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
