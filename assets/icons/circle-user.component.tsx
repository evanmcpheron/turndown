import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleUserIcon: React.FC<
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
                <Path d="M399 384.2c-22.1-38.4-63.6-64.2-111-64.2h-64c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M406.5 399.6c-19.1-46.7-65-79.6-118.5-79.6h-64c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256c0-114.9 93.1-208 208-208s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6m-40.1 32.7c-32 20.1-69.8 31.7-110.4 31.7s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80m-88-40a88 88 0 1 0 176 0 88 88 0 1 0-176 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M412.1 416.6c-14-55.5-64.2-96.6-124.1-96.6h-64c-59.9 0-110.1 41.1-124.1 96.6C58 375.9 32 319 32 256 32 132.3 132.3 32 256 32s224 100.3 224 224c0 63-26 119.9-67.9 160.6M383.6 440c-36.1 25.2-80.1 40-127.6 40s-91.5-14.8-127.7-39.9c4-49.3 45.3-88.1 95.7-88.1h64c50.4 0 91.6 38.8 95.7 88.1zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-256a48 48 0 1 1 0-96 48 48 0 1 1 0 96m-80-48a80 80 0 1 0 160 0 80 80 0 1 0-160 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 496c-54 0-103.9-17.9-144-48 0-61.9 50.1-112 112-112h64c61.9 0 112 50.1 112 112 5.3-4 10.4-8.2 15.4-12.6C409.1 370.6 354.5 320 288 320h-64c-66.5 0-121.1 50.6-127.4 115.4C47.2 391.5 16 327.4 16 256 16 123.5 123.5 16 256 16s240 107.5 240 240-107.5 240-240 240m0 16a256 256 0 1 0 0-512 256 256 0 1 0 0 512m80-304a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-80-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M399 384.2c-22.1-38.4-63.6-64.2-111-64.2h-64c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144"
                />
                <Path d="M256 272a72 72 0 1 0 0-144 72 72 0 1 0 0 144m0 176c56.8 0 107.8-24.7 143-63.8-22.1-38.4-63.6-64.2-111-64.2h-64c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
