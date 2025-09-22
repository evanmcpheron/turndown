import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const ChessPawnIcon: React.FC<
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
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88 0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32 0 16.5 12.5 30 28.5 31.8L80 400h160l-12.5-112.2c16-1.8 28.5-15.3 28.5-31.8 0-17.7-14.3-32-32-32zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16 0 12.5 10.1 22.6 22.6 22.6h242.8c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16L256 432H64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M232 152a72 72 0 1 0-144 0 72 72 0 1 0 144 0m24 120h-12.6l10.7 80h-48.4L195 272h-70l-10.7 80H65.9l10.7-80H64c-13.3 0-24-10.7-24-24s10.7-24 24-24c-15.1-20.1-24-45-24-72C40 85.7 93.7 32 160 32s120 53.7 120 120c0 27-8.9 51.9-24 72 13.3 0 24 10.7 24 24s-10.7 24-24 24M52.7 464h214.6l-16.6-32H69.2zm207.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7 0 22.5-18.2 40.8-40.8 40.8H40.8C18.2 512 0 493.8 0 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2c5.4-10.6 16.4-17.3 28.4-17.3h201z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M240 144a80 80 0 1 0-160 0 80 80 0 1 0 160 0m16 112h-20.6l18.6 96h-32.6l-18.6-96h-85.6l-18.6 96H66l18.6-96H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h17.6C60.9 203.7 48 175.3 48 144 48 82.1 98.1 32 160 32s112 50.1 112 112c0 31.3-12.9 59.7-33.6 80H256c8.8 0 16 7.2 16 16s-7.2 16-16 16M65.8 416l-32.7 52.7c-.7 1.2-1.1 2.5-1.1 3.9 0 4.1 3.3 7.4 7.4 7.4h241.2c4.1 0 7.4-3.3 7.4-7.4 0-1.4-.4-2.7-1.1-3.9L254.2 416zm188.4-32c11.1 0 21.4 5.7 27.2 15.1l32.7 52.7c3.9 6.2 5.9 13.4 5.9 20.8 0 21.8-17.7 39.4-39.4 39.4H39.4C17.7 512 0 494.3 0 472.6c0-7.3 2.1-14.5 5.9-20.8l32.7-52.7c5.8-9.4 16.1-15.1 27.2-15.1z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M256 144a96 96 0 1 0-192 0 96 96 0 1 0 192 0m16 0c0 40.7-21.8 76.4-54.3 96H256c4.4 0 8 3.6 8 8s-3.6 8-8 8h-30.3l24.8 128h-16.3l-24.8-128h-98.8L85.8 384H69.5l24.8-128H64c-4.4 0-8-3.6-8-8s3.6-8 8-8h38.3C69.8 220.4 48 184.7 48 144 48 82.1 98.1 32 160 32s112 50.1 112 112M50.4 437.3l-30.6 33.9c-2.5 2.7-3.8 6.3-3.8 9.9 0 8.2 6.6 14.8 14.8 14.8h258.4c8.2 0 14.8-6.6 14.8-14.8 0-3.7-1.4-7.2-3.8-9.9l-30.6-33.9c-3-3.4-7.4-5.3-11.9-5.3H62.3c-4.5 0-8.9 1.9-11.9 5.3m261.7 23.2c5.1 5.7 7.9 13 7.9 20.6 0 17-13.8 30.8-30.8 30.8H30.8C13.8 512 0 498.2 0 481.2c0-7.6 2.8-15 7.9-20.6l30.6-33.9c6.1-6.7 14.7-10.6 23.8-10.6h195.4c9.1 0 17.7 3.8 23.8 10.6l30.6 33.9z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 432H64l-41.4 41.4c-4.2 4.2-6.6 10-6.6 16 0 12.5 10.1 22.6 22.6 22.6h242.8c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16z"
                />
                <Path d="M264 136c0 37.1-19.4 69.6-48.5 88h8.5c17.7 0 32 14.3 32 32 0 15.7-11.3 28.8-26.3 31.5L256 432H64l26.3-144.5C75.3 284.8 64 271.7 64 256c0-17.7 14.3-32 32-32h8.5C75.4 205.6 56 173.1 56 136c0-57.4 46.6-104 104-104s104 46.6 104 104" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
