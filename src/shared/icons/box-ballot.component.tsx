import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const BoxBallotIcon: React.FC<
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
                <Path d="M128 32c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v192H128zM0 352h576v112c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm48-192h48v96h384v-96h48c26.5 0 48 21.5 48 48v112H0V208c0-26.5 21.5-48 48-48" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M176 208h224V48H176zM128 32c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zM48 160h48v48H48v112h480V208h-48v-48h48c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V208c0-26.5 21.5-48 48-48m480 208H48v96h480z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M160 32v192h256V32zm-32 0c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zM48 160h48v32H48c-8.8 0-16 7.2-16 16v112h512V208c0-8.8-7.2-16-16-16h-48v-32h48c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V208c0-26.5 21.5-48 48-48m496 192H32v112c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M160 16c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V32c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zM48 160h48v16H48c-17.7 0-32 14.3-32 32v112h544V208c0-17.7-14.3-32-32-32h-48v-16h48c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V208c0-26.5 21.5-48 48-48m512 176H16v128c0 17.7 14.3 32 32 32h480c17.7 0 32-14.3 32-32z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M48 160h80v64H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-64h80c26.5 0 48 21.5 48 48v112H0V208c0-26.5 21.5-48 48-48"
                />
                <Path d="M160 0h256c17.7 0 32 14.3 32 32v224H128V32c0-17.7 14.3-32 32-32M32 512c-17.7 0-32-14.3-32-32V320h576v160c0 17.7-14.3 32-32 32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
