import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const PopsicleIcon: React.FC<
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
                <Path d="M160 0C71.6 0 0 71.6 0 160v176c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V160C320 71.6 248.4 0 160 0m32 480v-64h-64v64c0 17.7 14.3 32 32 32s32-14.3 32-32" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M272 160c0-61.9-50.1-112-112-112S48 98.1 48 160v176h88V184c0-13.3 10.7-24 24-24s24 10.7 24 24v152h88zM136 384H48c-26.5 0-48-21.5-48-48V160C0 71.6 71.6 0 160 0s160 71.6 160 160v176c0 26.5-21.5 48-48 48h-88v104c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M288 160c0-70.7-57.3-128-128-128S32 89.3 32 160v176c0 8.8 7.2 16 16 16h96V192c0-8.8 7.2-16 16-16s16 7.2 16 16v160h96c8.8 0 16-7.2 16-16zM144 384H48c-26.5 0-48-21.5-48-48V160C0 71.6 71.6 0 160 0s160 71.6 160 160v176c0 26.5-21.5 48-48 48h-96v112c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M304 160c0-79.5-64.5-144-144-144S16 80.5 16 160v176c0 17.7 14.3 32 32 32h104V168c0-4.4 3.6-8 8-8s8 3.6 8 8v200h104c17.7 0 32-14.3 32-32zM152 384H48c-26.5 0-48-21.5-48-48V160C0 71.6 71.6 0 160 0s160 71.6 160 160v176c0 26.5-21.5 48-48 48H168v120c0 4.4-3.6 8-8 8s-8-3.6-8-8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M160 0C71.6 0 0 71.6 0 160v176c0 26.5 21.5 48 48 48h80V192c0-17.7 14.3-32 32-32s32 14.3 32 32v192h80c26.5 0 48-21.5 48-48V160C320 71.6 248.4 0 160 0"
                />
                <Path d="M128 192c0-17.7 14.3-32 32-32s32 14.3 32 32v288c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
