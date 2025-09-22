import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const Icon00: React.FC<
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
                <Path d="M144 32C64.5 32 0 96.5 0 176v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144M64 176c0-44.2 35.8-80 80-80s80 35.8 80 80v160c0 44.2-35.8 80-80 80s-80-35.8-80-80zM496 32c-79.5 0-144 64.5-144 144v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144m-80 144c0-44.2 35.8-80 80-80s80 35.8 80 80v160c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M144 32C64.5 32 0 96.5 0 176v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144M48 176c0-53 43-96 96-96s96 43 96 96v160c0 53-43 96-96 96s-96-43-96-96zM496 32c-79.5 0-144 64.5-144 144v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144m-96 144c0-53 43-96 96-96s96 43 96 96v160c0 53-43 96-96 96s-96-43-96-96z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M144 32C64.5 32 0 96.5 0 176v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144M32 176c0-61.9 50.1-112 112-112s112 50.1 112 112v160c0 61.9-50.1 112-112 112S32 397.9 32 336zM496 32c-79.5 0-144 64.5-144 144v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144M384 176c0-61.9 50.1-112 112-112s112 50.1 112 112v160c0 61.9-50.1 112-112 112s-112-50.1-112-112z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M144 32C64.5 32 0 96.5 0 176v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144M16 176c0-70.7 57.3-128 128-128s128 57.3 128 128v160c0 70.7-57.3 128-128 128S16 406.7 16 336zM496 32c-79.5 0-144 64.5-144 144v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144M368 176c0-70.7 57.3-128 128-128s128 57.3 128 128v160c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M352 176c0-79.5 64.5-144 144-144s144 64.5 144 144v160c0 79.5-64.5 144-144 144s-144-64.5-144-144zm144-80c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80s80-35.8 80-80V176c0-44.2-35.8-80-80-80"
                />
                <Path d="M0 176C0 96.5 64.5 32 144 32s144 64.5 144 144v160c0 79.5-64.5 144-144 144S0 415.5 0 336zm144-80c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80s80-35.8 80-80V176c0-44.2-35.8-80-80-80" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
