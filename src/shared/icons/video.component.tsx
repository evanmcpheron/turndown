import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const VideoIcon: React.FC<
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
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M0 128c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm559.1-28.2c10.4 5.6 16.9 16.4 16.9 28.2v256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64-14.2-9.5V174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M64 112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zM0 128c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm528 235.4V148.6L416 199v-52.6l104.3-46.9c5.1-2.3 10.6-3.5 16.2-3.5 21.8 0 39.5 17.7 39.5 39.5v241c0 21.8-17.7 39.5-39.5 39.5-5.6 0-11.1-1.2-16.2-3.5L416 365.6V313z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zM0 128c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm519.4 283.3L416 354.4v-36.5l118.8 65.4c.9.5 1.9.8 3 .8 3.4 0 6.2-2.8 6.2-6.2V134.2c0-3.4-2.8-6.2-6.2-6.2-1 0-2.1.3-3 .8L416 194.1v-36.5l103.4-56.9c5.6-3.1 12-4.7 18.4-4.7 21.1 0 38.2 17.1 38.2 38.2v243.6c0 21.1-17.1 38.2-38.2 38.2-6.4 0-12.8-1.6-18.4-4.7" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M64 80c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zm320 256.8V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v208.8m135.4 74.5L416 354.4v-18.3l111.1 61.1c3.3 1.8 7 2.7 10.7 2.7 12.3 0 22.2-9.9 22.2-22.2V134.2c0-12.3-9.9-22.2-22.2-22.2-3.7 0-7.4.9-10.7 2.7L416 175.9v-18.3l103.4-56.9c5.6-3.1 12-4.7 18.4-4.7 21.1 0 38.2 17.1 38.2 38.2v243.6c0 21.1-17.1 38.2-38.2 38.2-6.4 0-12.8-1.6-18.4-4.7" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M0 128c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
                />
                <Path d="M576 128c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6L384 196.2v119.6l142.2 94.8c9.8 6.5 22.4 7.2 32.9 1.6S576 395.8 576 384z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
