import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const ObjectsAlignRightIcon: React.FC<
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
                <Path d="M512 24v464c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24s24 10.7 24 24M336 64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48zm0 224c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M512 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24zM336 176H48v-64h288zm48-64c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zm-48 288H176v-64h160zm48-64c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M512 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v480c0 8.8 7.2 16 16 16s16-7.2 16-16zM352 176c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16zm32-64c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zm-32 288c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16zm32-64c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M512 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v496c0 4.4 3.6 8 8 8s8-3.6 8-8zM400 176c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32zm16-64c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48zm-16 288c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32zm16-64c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M384 112c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48zm0 224c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48z"
                />
                <Path d="M488 0c13.3 0 24 10.7 24 24v464c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
