import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SquareUIcon: React.FC<
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
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm96 136v120c0 35.3 28.7 64 64 64s64-28.7 64-64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v120c0 61.9-50.1 112-112 112s-112-50.1-112-112V168c0-13.3 10.7-24 24-24s24 10.7 24 24" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 64v120c0 35.3 28.7 64 64 64s64-28.7 64-64V160c0-13.3 10.7-24 24-24s24 10.7 24 24v120c0 61.9-50.1 112-112 112s-112-50.1-112-112V160c0-13.3 10.7-24 24-24s24 10.7 24 24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 64v128c0 44.2 35.8 80 80 80s80-35.8 80-80V160c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 61.9-50.1 112-112 112s-112-50.1-112-112V160c0-8.8 7.2-16 16-16s16 7.2 16 16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 56v136c0 53 43 96 96 96s96-43 96-96V152c0-4.4 3.6-8 8-8s8 3.6 8 8v136c0 61.9-50.1 112-112 112s-112-50.1-112-112V152c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm96 136v120c0 35.3 28.7 64 64 64s64-28.7 64-64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v120c0 61.9-50.1 112-112 112s-112-50.1-112-112V168c0-13.3 10.7-24 24-24s24 10.7 24 24"
                />
                <Path d="M136 144c13.3 0 24 10.7 24 24v120c0 35.3 28.7 64 64 64s64-28.7 64-64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v120c0 61.9-50.1 112-112 112s-112-50.1-112-112V168c0-13.3 10.7-24 24-24" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
