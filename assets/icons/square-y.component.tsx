import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SquareYIcon: React.FC<
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
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm74.1 120.3 85.9 99.1 85.9-99.1c8.7-10 23.8-11.1 33.9-2.4s11.1 23.8 2.4 33.9L248 297v79c0 13.3-10.7 24-24 24s-24-10.7-24-24v-79l-98.1-113.3c-8.7-10-7.6-25.2 2.4-33.9s25.2-7.6 33.9 2.4z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm138.1 56.3 85.9 99.1 85.9-99.1c8.7-10 23.8-11.1 33.9-2.4s11.1 23.8 2.4 33.9L248 297v79c0 13.3-10.7 24-24 24s-24-10.7-24-24v-79l-98.1-113.3c-8.7-10-7.6-25.2 2.4-33.9s25.2-7.6 33.9 2.4z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm124 53.5 100 114.2 100-114.2c5.8-6.7 15.9-7.3 22.6-1.5s7.3 15.9 1.5 22.6L240 294v90c0 8.8-7.2 16-16 16s-16-7.2-16-16v-90L100 170.5c-5.8-6.7-5.1-16.8 1.5-22.6s16.8-5.1 22.6 1.5z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm110 34.7 114 129.2 114-129.2c2.9-3.3 8-3.6 11.3-.7s3.6 8 .7 11.3L232 275v101c0 4.4-3.6 8-8 8s-8-3.6-8-8V275L98 141.3c-2.9-3.3-2.6-8.4.7-11.3s8.4-2.6 11.3.7" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm74.1 120.3 85.9 99.1 85.9-99.1c8.7-10 23.8-11.1 33.9-2.4s11.1 23.8 2.4 33.9L248 297v79c0 13.3-10.7 24-24 24s-24-10.7-24-24v-79l-98.1-113.3c-8.7-10-7.6-25.2 2.4-33.9s25.2-7.6 33.9 2.4z"
                />
                <Path d="M104.3 149.9c10-8.7 25.2-7.6 33.9 2.4l85.8 99.1 85.9-99.1c8.7-10 23.8-11.1 33.9-2.4s11.1 23.8 2.4 33.9L248 297v79c0 13.3-10.7 24-24 24s-24-10.7-24-24v-79l-98.1-113.3c-8.7-10-7.6-25.2 2.4-33.9z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
