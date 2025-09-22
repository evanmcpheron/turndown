import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const MobileRetroIcon: React.FC<
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
                <Path d="M0 64C0 28.7 28.7 0 64 0h192c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 96v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32m16 192a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0M128 48c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M256 48c8.8 0 16 7.2 16 16v384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 160v64c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32m16 192a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m40-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m40-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0M128 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M256 32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm160 160v64H96v-64zM96 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zM80 352a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0M128 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M240 16c26.5 0 48 21.5 48 48v384c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM80 0C44.7 0 16 28.7 16 64v384c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm144 144c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16zM96 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zM72 328a8 8 0 1 1 16 0 8 8 0 1 1-16 0m32 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 72a8 8 0 1 1 0 16 8 8 0 1 1 0-16m0 32a24 24 0 1 0 0-48 24 24 0 1 0 0 48m72-104a8 8 0 1 1 16 0 8 8 0 1 1-16 0m32 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 72a8 8 0 1 1 0 16 8 8 0 1 1 0-16m0 32a24 24 0 1 0 0-48 24 24 0 1 0 0 48m72-104a8 8 0 1 1 16 0 8 8 0 1 1-16 0m32 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 72a8 8 0 1 1 0 16 8 8 0 1 1 0-16m0 32a24 24 0 1 0 0-48 24 24 0 1 0 0 48M104 64c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M0 64C0 28.7 28.7 0 64 0h192c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 96v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32m16 192a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0M128 48c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
                <Path d="M64 160c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
