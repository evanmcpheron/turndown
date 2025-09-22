import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const ChartPieSimpleIcon: React.FC<
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
                <Path d="M495.4 240H272V16.6c0-9 7-16.6 16-16.6 123.7 0 224 100.3 224 224 0 9-7.6 16-16.6 16M190.2 37.2c18.1-3.8 33.8 11 33.8 29.5V288h221.3c18.5 0 33.3 15.7 29.5 33.8C451.9 430.5 355.5 512 240 512 107.5 512 0 404.6 0 272 0 156.5 81.5 60.1 190.2 37.2" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M495.4 240c9 0 16.6-7 16.6-16C512 100.3 411.7 0 288 0c-9 0-16 7.6-16 16.6V240zM176 288c0 26.5 21.5 48 48 48h197.1c-26.4 74.6-97.5 128-181.1 128-106 0-192-86-192-192 0-83.6 53.4-154.7 128-181.1zm48-221.3c0-18.5-15.7-33.3-33.8-29.5C81.5 60.1 0 156.5 0 272c0 132.6 107.5 240 240 240 115.5 0 211.9-81.5 234.8-190.2 3.8-18.1-11-33.8-29.5-33.8H224V66.7" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 17.7V240c0 8.8 7.2 16 16 16h222.3c9.6 0 17.7-7.4 17.7-17.1C512 107 405 0 273.1 0 263.4 0 256 8.1 256 17.7m32 14.8c102.4 7.3 184.2 89.1 191.5 191.5H288zM192 288c0 17.7 14.3 32 32 32h218.4C420.8 411.7 338.3 480 240 480c-114.9 0-208-93.1-208-208 0-98.3 68.3-180.8 160-202.4zm32-221.3c0-18.5-15.7-33.3-33.8-29.5C81.5 60.1 0 156.5 0 272c0 132.5 107.5 240 240 240 115.5 0 211.9-81.5 234.8-190.2 3.8-18.1-11-33.8-29.5-33.8H224V66.7" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M259 7.6c-1.9 2.9-3 6.3-3 10V240c0 8.8 7.2 16 16 16h222.3c9.6 0 17.7-7.4 17.7-17.1C512 107 405 0 273.1 0c-5.9 0-11 3.1-14.1 7.6M494.3 240H272V17.7c0-.7.2-1.1.5-1.4.1-.1.2-.2.3-.2h.3C396.2 16 496 115.8 496 238.9v.3c0 .1-.1.2-.2.3-.3.3-.8.5-1.4.5zM208 288c0 8.8 7.2 16 16 16h221.3c10 0 15.3 8 13.9 14.5C437.8 419.9 347.7 496 240 496 116.3 496 16 395.7 16 272 16 164.3 92.1 74.2 193.5 52.8c6.5-1.4 14.5 3.9 14.5 13.9zm16-221.3c0-18.5-15.7-33.3-33.8-29.5C81.5 60.1 0 156.5 0 272c0 132.5 107.5 240 240 240 115.5 0 211.9-81.5 234.8-190.2 3.8-18.1-11-33.8-29.5-33.8H224V66.7" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M224 49.6c0-9.2-7.8-16.6-17-15.4C90.1 50.3 0 150.7 0 272c0 132.6 107.5 240 240 240 121.4 0 221.7-90.1 237.7-207 1.3-9.2-6.1-17-15.4-17H224z"
                />
                <Path d="M272 240h223.4c9 0 16.6-7 16.6-16C512 100.3 411.7 0 288 0c-9 0-16 7.6-16 16.6z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
