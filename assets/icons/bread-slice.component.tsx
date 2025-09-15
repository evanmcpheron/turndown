import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BreadSliceIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 32C192 32 0 64 0 192c0 35.3 28.7 64 64 64v176c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V256c35.3 0 64-28.7 64-64C512 64 320 32 256 32" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 208c-8.8 0-16-7.2-16-16 0-34.5 24.6-62.3 74.9-83.9C171.8 87.2 229.2 80 256 80s84.2 7.2 133.1 28.1c50.3 21.6 74.9 49.4 74.9 83.9 0 8.8-7.2 16-16 16-26.5 0-48 21.5-48 48v176H112V256c0-26.5-21.5-48-48-48m384 96v-48c35.3 0 64-28.7 64-64C512 64 320 32 256 32S0 64 0 192c0 35.3 28.7 64 64 64v176c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 224c-17.7 0-32-14.3-32-32 0-44.3 32.4-76.2 84.6-98.6C167.9 71.4 227.5 64 256 64s88.1 7.4 139.4 29.4c52.2 22.4 84.6 54.3 84.6 98.6 0 17.7-14.3 32-32 32s-32 14.3-32 32v176c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V256c0-17.7-14.3-32-32-32m384 64v-32c35.3 0 64-28.7 64-64C512 64 320 32 256 32S0 64 0 192c0 35.3 28.7 64 64 64v176c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 240c-26.5 0-48-21.5-48-48 0-54.2 40.2-90.1 94.3-113.3C163.9 55.7 225.7 48 256 48s92.1 7.7 145.7 30.7C455.8 101.9 496 137.8 496 192c0 26.5-21.5 48-48 48-8.8 0-16 7.2-16 16v176c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32V256c0-8.8-7.2-16-16-16m384 32v-16c35.3 0 64-28.7 64-64C512 64 320 32 256 32S0 64 0 192c0 35.3 28.7 64 64 64v176c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M0 192C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64v176c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V256c-35.3 0-64-28.7-64-64m128 208a16 16 0 1 0 32 0 16 16 0 1 0-32 0m0-96a16 16 0 1 0 32 0 16 16 0 1 0-32 0m96 96a16 16 0 1 0 32 0 16 16 0 1 0-32 0"
                />
                <Path d="M144 384a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-96a16 16 0 1 0 0 32 16 16 0 1 0 0-32m96 96a16 16 0 1 0 0 32 16 16 0 1 0 0-32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
