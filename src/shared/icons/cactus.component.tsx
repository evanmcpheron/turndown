import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const CactusIcon: React.FC<
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
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M160 96c0-53 43-96 96-96s96 43 96 96v256h48c8.8 0 16-7.2 16-16v-64c0-26.5 21.5-48 48-48s48 21.5 48 48v64c0 61.9-50.1 112-112 112h-48v16c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V320h-48C50.1 320 0 269.9 0 208v-64c0-26.5 21.5-48 48-48s48 21.5 48 48v64c0 8.8 7.2 16 16 16h48zm80 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m48 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M304 448c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V96c0-26.5 21.5-48 48-48s48 21.5 48 48zM256 0c-53 0-96 43-96 96v128h-48c-8.8 0-16-7.2-16-16v-64c0-26.5-21.5-48-48-48S0 117.5 0 144v64c0 61.9 50.1 112 112 112h48v128c0 35.3 28.7 64 64 64h64c35.3 0 64-28.7 64-64h48c61.9 0 112-50.1 112-112v-64c0-26.5-21.5-48-48-48s-48 21.5-48 48v64c0 8.8-7.2 16-16 16h-48V96c0-53-43-96-96-96m0 144a16 16 0 1 0-32 0 16 16 0 1 0 32 0m16 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M320 464c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16V96c0-35.3 28.7-64 64-64s64 28.7 64 64v368m32-112V96c0-53-43-96-96-96s-96 43-96 96v128h-48c-8.8 0-16-7.2-16-16v-64c0-26.5-21.5-48-48-48S0 117.5 0 144v64c0 61.9 50.1 112 112 112h48v144c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-16h48c61.9 0 112-50.1 112-112v-64c0-26.5-21.5-48-48-48s-48 21.5-48 48v64c0 8.8-7.2 16-16 16zm0 32h48c26.5 0 48-21.5 48-48v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 44.2-35.8 80-80 80h-48zm-240-96c-44.2 0-80-35.8-80-80v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 26.5 21.5 48 48 48h48v32zm144-144a16 16 0 1 0-32 0 16 16 0 1 0 32 0m16 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M336 464c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32V96c0-44.2 35.8-80 80-80s80 35.8 80 80v368m16-112V96c0-53-43-96-96-96s-96 43-96 96v128h-48c-8.8 0-16-7.2-16-16v-64c0-26.5-21.5-48-48-48S0 117.5 0 144v64c0 61.9 50.1 112 112 112h48v144c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-16h48c61.9 0 112-50.1 112-112v-64c0-26.5-21.5-48-48-48s-48 21.5-48 48v64c0 8.8-7.2 16-16 16zm0 16h48c17.7 0 32-14.3 32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 53-43 96-96 96h-48zm-240-64c-53 0-96-43-96-96v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7 14.3 32 32 32h48v64zm144-160a16 16 0 1 0-32 0 16 16 0 1 0 32 0m16 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M96 144c0-26.5-21.5-48-48-48S0 117.5 0 144v64c0 61.9 50.1 112 112 112h48v-96h-48c-8.8 0-16-7.2-16-16zm320 128v64c0 8.8-7.2 16-16 16h-48v96h48c61.9 0 112-50.1 112-112v-64c0-26.5-21.5-48-48-48s-48 21.5-48 48"
                />
                <Path d="M160 96c0-53 43-96 96-96s96 43 96 96v368c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48zm80 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m48 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
