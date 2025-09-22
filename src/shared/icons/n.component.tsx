import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const NIcon: React.FC<
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
                <Path d="M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 13.5-8.4 25.5-21.1 30.1s-26.9.7-35.5-9.6L64 152.4V448c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-13.5 8.4-25.5 21.1-30.1" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M15.8 33.4c9.5-3.5 20.1-.6 26.6 7.1L336 390.1V56c0-13.3 10.7-24 24-24s24 10.7 24 24v400c0 10.1-6.3 19.1-15.8 22.6s-20.1.6-26.6-7.1L48 121.9V456c0 13.3-10.7 24-24 24S0 469.3 0 456V56c0-10.1 6.3-19.1 15.8-22.6" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M10.5 33c6.3-2.3 13.4-.4 17.7 4.7L352 420.3V48c0-8.8 7.2-16 16-16s16 7.2 16 16v416c0 6.7-4.2 12.7-10.5 15s-13.4.4-17.7-4.7L32 91.7V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-6.7 4.2-12.7 10.5-15" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M5.2 32.5c3.1-1.2 6.7-.2 8.9 2.3L368 450.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8v432c0 3.4-2.1 6.3-5.2 7.5s-6.7.2-8.9-2.3L16 61.7V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-3.4 2.1-6.3 5.2-7.5" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 13.5-8.4 25.5-21.1 30.1s-26.9.7-35.5-9.6L64 152.4V448c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-13.5 8.4-25.5 21.1-30.1"
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
