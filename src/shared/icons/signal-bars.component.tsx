import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const SignalBarsIcon: React.FC<
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
                <Path d="M560 0c-26.5 0-48 21.5-48 48v416c0 26.5 21.5 48 48 48s48-21.5 48-48V48c0-26.5-21.5-48-48-48M352 176v288c0 26.5 21.5 48 48 48s48-21.5 48-48V176c0-26.5-21.5-48-48-48s-48 21.5-48 48m-112 80c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48s48-21.5 48-48V304c0-26.5-21.5-48-48-48M80 384c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M576 448V64c0-8.8-7.2-16-16-16s-16 7.2-16 16v384c0 8.8 7.2 16 16 16s16-7.2 16-16M496 64c0-35.3 28.7-64 64-64s64 28.7 64 64v384c0 35.3-28.7 64-64 64s-64-28.7-64-64zm-80 384V192c0-8.8-7.2-16-16-16s-16 7.2-16 16v256c0 8.8 7.2 16 16 16s16-7.2 16-16m-80-256c0-35.3 28.7-64 64-64s64 28.7 64 64v256c0 35.3-28.7 64-64 64s-64-28.7-64-64zm-96 272c8.8 0 16-7.2 16-16V320c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16m0-208c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64s-64-28.7-64-64V320c0-35.3 28.7-64 64-64M80 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32m64-16a64 64 0 1 1-128 0 64 64 0 1 1 128 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M576 464V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v416c0 8.8 7.2 16 16 16s16-7.2 16-16M512 48c0-26.5 21.5-48 48-48s48 21.5 48 48v416c0 26.5-21.5 48-48 48s-48-21.5-48-48zm-96 128c0-8.8-7.2-16-16-16s-16 7.2-16 16v288c0 8.8 7.2 16 16 16s16-7.2 16-16zm-64 0c0-26.5 21.5-48 48-48s48 21.5 48 48v288c0 26.5-21.5 48-48 48s-48-21.5-48-48zm-96 288V304c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16m-16-208c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48s-48-21.5-48-48V304c0-26.5 21.5-48 48-48M96 432c0-8.8-7.2-16-16-16s-16 7.2-16 16v32c0 8.8 7.2 16 16 16s16-7.2 16-16zm-64 0c0-26.5 21.5-48 48-48s48 21.5 48 48v32c0 26.5-21.5 48-48 48s-48-21.5-48-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M560 16c-17.7 0-32 14.3-32 32v416c0 17.7 14.3 32 32 32s32-14.3 32-32V48c0-17.7-14.3-32-32-32m-48 32c0-26.5 21.5-48 48-48s48 21.5 48 48v416c0 26.5-21.5 48-48 48s-48-21.5-48-48zm-80 416V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v288c0 17.7 14.3 32 32 32s32-14.3 32-32m-32-336c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48s-48-21.5-48-48V176c0-26.5 21.5-48 48-48M240 272c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32s32-14.3 32-32V304c0-17.7-14.3-32-32-32m-48 32c0-26.5 21.5-48 48-48s48 21.5 48 48v160c0 26.5-21.5 48-48 48s-48-21.5-48-48zm-80 128c0-17.7-14.3-32-32-32s-32 14.3-32 32v32c0 17.7 14.3 32 32 32s32-14.3 32-32zm-80 0c0-26.5 21.5-48 48-48s48 21.5 48 48v32c0 26.5-21.5 48-48 48s-48-21.5-48-48z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d=""
                />
                <Path d="M560 0c-26.5 0-48 21.5-48 48v416c0 26.5 21.5 48 48 48s48-21.5 48-48V48c0-26.5-21.5-48-48-48M352 176v288c0 26.5 21.5 48 48 48s48-21.5 48-48V176c0-26.5-21.5-48-48-48s-48 21.5-48 48m-112 80c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48s48-21.5 48-48V304c0-26.5-21.5-48-48-48M80 384c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
