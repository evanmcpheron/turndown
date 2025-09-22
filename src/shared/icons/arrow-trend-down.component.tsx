import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowTrendDownIcon: React.FC<
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
                <Path d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3 466.7 352z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M352 392c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v118.1L337 143c-9.4-9.4-24.6-9.4-33.9 0l-111 111L41 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L175 305c9.4 9.4 24.6 9.4 33.9 0l111-111 174.2 174H376c-13.3 0-24 10.7-24 24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M368 400c0 8.8 7.2 16 16 16h176c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16s-16 7.2-16 16v137.4L331.3 148.7c-6.2-6.2-16.4-6.2-22.6 0L192 265.4 27.3 100.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l176 176c6.2 6.2 16.4 6.2 22.6 0L320 182.6 521.4 384H384c-8.8 0-16 7.2-16 16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M368 408c0 4.4 3.6 8 8 8h192c4.4 0 8-3.6 8-8V216c0-4.4-3.6-8-8-8s-8 3.6-8 8v172.7L325.7 154.3c-3.1-3.1-8.2-3.1-11.3 0L192 276.7 13.7 98.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l184 184c3.1 3.1 8.2 3.1 11.3 0L320 171.3 548.7 400H376c-4.4 0-8 3.6-8 8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M466.7 352 320 205.3 214.6 310.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 242.7l105.4-105.3c12.5-12.5 32.8-12.5 45.3 0L512 306.7V352z"
                />
                <Path d="M352 384c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v128H384c-17.7 0-32 14.3-32 32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
