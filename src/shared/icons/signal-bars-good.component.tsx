import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const SignalBarsGoodIcon: React.FC<
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
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M400 128c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48s48-21.5 48-48V176c0-26.5-21.5-48-48-48M192 304v160c0 26.5 21.5 48 48 48s48-21.5 48-48V304c0-26.5-21.5-48-48-48s-48 21.5-48 48M32 432v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48s-48 21.5-48 48" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M416 192v256c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16m-16-64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64s64-28.7 64-64V192c0-35.3-28.7-64-64-64M240 464c-8.8 0-16-7.2-16-16V320c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 8.8-7.2 16-16 16m0-208c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64s64-28.7 64-64V320c0-35.3-28.7-64-64-64M80 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 16a64 64 0 1 0 128 0 64 64 0 1 0-128 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M416 464c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16zm-16-336c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48s48-21.5 48-48V176c0-26.5-21.5-48-48-48M256 464c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm-16-208c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48s48-21.5 48-48V304c0-26.5-21.5-48-48-48M96 432v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16m-64 0v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48s-48 21.5-48 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M432 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v288c0 17.7 14.3 32 32 32s32-14.3 32-32zm-80 0c0-26.5 21.5-48 48-48s48 21.5 48 48v288c0 26.5-21.5 48-48 48s-48-21.5-48-48zm-80 128c0-17.7-14.3-32-32-32s-32 14.3-32 32v160c0 17.7 14.3 32 32 32s32-14.3 32-32zm-32-48c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48s-48-21.5-48-48V304c0-26.5 21.5-48 48-48M112 464v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32c0 17.7 14.3 32 32 32s32-14.3 32-32m-32-80c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48s-48-21.5-48-48v-32c0-26.5 21.5-48 48-48" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M512 48c0-26.5 21.5-48 48-48s48 21.5 48 48v416c0 26.5-21.5 48-48 48s-48-21.5-48-48z"
                />
                <Path d="M400 128c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48s48-21.5 48-48V176c0-26.5-21.5-48-48-48M192 304v160c0 26.5 21.5 48 48 48s48-21.5 48-48V304c0-26.5-21.5-48-48-48s-48 21.5-48 48M32 432v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48s-48 21.5-48 48" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
