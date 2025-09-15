import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const HourglassEndIcon: React.FC<
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
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32v11c0 42.4 16.9 83.1 46.9 113.1l67.8 67.9-67.8 67.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32m64 75V64h192v11c0 25.5-10.1 49.9-28.1 67.9L192 210.7l-67.9-67.9C106.1 124.9 96 100.4 96 75" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 24C0 10.7 10.7 0 24 0h336c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v19c0 40.3-16 79-44.5 107.5L225.9 256l81.5 81.5C336 366 352 404.7 352 445v19h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-19c0-40.3 16-79 44.5-107.5l81.6-81.5-81.6-81.5C48 146 32 107.3 32 67V48h-8C10.7 48 0 37.3 0 24m273.5 116.5C293 121 304 94.6 304 67V48H80v19c0 27.6 11 54 30.5 73.5l81.5 81.6 81.5-81.5z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 16C0 7.2 7.2 0 16 0h352c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v41.6c0 49.4-22.8 96-61.8 126.3L218.1 256l72.2 56.1c39 30.3 61.8 76.9 61.8 126.3V480h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-41.6c0-49.4 22.8-96 61.8-126.3l72.1-56.1-72.1-56.1c-39-30.3-61.8-77-61.8-126.3V32H16C7.2 32 0 24.8 0 16m64 16v41.6c0 39.5 18.2 76.8 49.4 101l78.6 61.1 78.6-61.1c31.2-24.3 49.4-61.5 49.4-101V32zm49.4 305.4c-5.7 4.5-11 9.3-15.8 14.6h188.8c-4.8-5.3-10.1-10.2-15.8-14.6L192 276.3zM76.1 384C68.2 400.8 64 419.4 64 438.4V480h256v-41.6c0-19.1-4.2-37.6-12.1-54.4z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 8c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v55.2c0 48.3-23 93.7-61.8 122.4L205.5 256l84.7 62.4C329 347 352 392.5 352 440.8V496h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-55.2c0-48.3 23-93.7 61.8-122.4l84.7-62.4-84.7-62.4C55 165 32 119.5 32 71.2V16H8c-4.4 0-8-3.6-8-8m48 8v55.2c0 43.2 20.5 83.9 55.3 109.5l88.7 65.4 88.7-65.3c34.8-25.7 55.3-66.4 55.3-109.6V16zm55.3 315.3C95 337.4 87.5 344.4 81 352h219.4c-6.6-7.6-14.1-14.6-22.4-20.7l-86-65.4-88.7 65.3zM69.1 368A136.2 136.2 0 0 0 48 440.8V496h288v-55.2c0-26.1-7.5-51.3-21.1-72.8H69.3z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M32 64v11c0 42.4 16.9 83.1 46.9 113.1l67.8 67.9-67.8 67.9C48.9 353.9 32 394.6 32 437v11h320v-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64H288v11c0 25.5-10.1 49.9-28.1 67.9L192 210.7l-67.9-67.9C106.1 124.9 96 100.4 96 75V64z"
                />
                <Path d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32S369.7 0 352 0zm0 448c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
