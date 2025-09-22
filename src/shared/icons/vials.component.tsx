import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const VialsIcon: React.FC<
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
                <Path d="M0 64c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32v304c0 44.2-35.8 80-80 80s-80-35.8-80-80V96C14.3 96 0 81.7 0 64m136 32H88v160h48zm152-32c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32v304c0 44.2-35.8 80-80 80s-80-35.8-80-80V96c-17.7 0-32-14.3-32-32m136 32h-48v160h48z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M0 56c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v320c0 44.2-35.8 80-80 80s-80-35.8-80-80V80h-8C10.7 80 0 69.3 0 56m80 24v176h64V80zm208-24c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v320c0 44.2-35.8 80-80 80s-80-35.8-80-80V80h-8c-13.3 0-24-10.7-24-24m80 24v176h64V80z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h16v336c0 44.2 35.8 80 80 80s80-35.8 80-80V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H16m48 224V64h96v192zm0 32h96v112c0 26.5-21.5 48-48 48s-48-21.5-48-48zM304 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v336c0 44.2 35.8 80 80 80s80-35.8 80-80V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H304m48 224V64h96v192zm0 32h96v112c0 26.5-21.5 48-48 48s-48-21.5-48-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M16 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h16v352c0 44.2 35.8 80 80 80s80-35.8 80-80V48h16c4.4 0 8-3.6 8-8s-3.6-8-8-8H16m32 224V48h128v208zm0 16h128v128c0 35.3-28.7 64-64 64s-64-28.7-64-64zM304 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h16v352c0 44.2 35.8 80 80 80s80-35.8 80-80V48h16c4.4 0 8-3.6 8-8s-3.6-8-8-8H304m32 224V48h128v208zm0 16h128v128c0 35.3-28.7 64-64 64s-64-28.7-64-64z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M0 64c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32v304c0 44.2-35.8 80-80 80s-80-35.8-80-80V96C14.3 96 0 81.7 0 64m136 32H88v304c0 13.3 10.7 24 24 24s24-10.7 24-24zm152-32c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32v304c0 44.2-35.8 80-80 80s-80-35.8-80-80V96c-17.7 0-32-14.3-32-32m136 32h-48v304c0 13.3 10.7 24 24 24s24-10.7 24-24z"
                />
                <Path d="M136 256H88v144c0 13.3 10.7 24 24 24s24-10.7 24-24zm288 0h-48v144c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
