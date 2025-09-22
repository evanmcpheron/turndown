import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const NoteStickyIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h224V368c0-26.5 21.5-48 48-48h112V96c0-35.3-28.7-64-64-64zm384 320H336c-8.8 0-16 7.2-16 16v112l32-32 64-64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h224v-80c0-17.7 14.3-32 32-32h80V96c0-8.8-7.2-16-16-16zm224 400H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v229.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h208v-96c0-26.5 21.5-48 48-48h96V96c0-17.7-14.3-32-32-32zm240 370.7 98.7-98.7H320c-8.8 0-16 7.2-16 16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v213.5c0 17-6.7 33.3-18.7 45.3L322.7 461.3c-12 12-28.3 18.7-45.3 18.7H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h220.1c1.3 0 2.6-.1 3.9-.2V368c0-26.5 21.5-48 48-48h95.8c.2-1.3.2-2.6.2-3.9V96c0-26.5-21.5-48-48-48zm240 409.1q1.5-1.2 2.7-2.4l115.9-116q1.35-1.35 2.4-2.7h-89c-17.7 0-32 14.3-32 32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v220.1c0 12.7-5.1 24.9-14.1 33.9L318.1 465.9c-9 9-21.2 14.1-33.9 14.1H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h224V352c0-17.7 14.3-32 32-32h128V96c0-35.3-28.7-64-64-64z"
                />
                <Path d="M288 352v128h5.5c17 0 33.3-6.7 45.3-18.7l90.5-90.5c12-12 18.7-28.3 18.7-45.3V320H320c-17.7 0-32 14.3-32 32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
