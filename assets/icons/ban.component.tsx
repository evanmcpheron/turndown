import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BanIcon: React.FC<
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
                <Path d="M367.2 412.5 99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192 41.5 0 79.9-13.1 111.2-35.5m45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192-41.5 0-79.9 13.1-111.2 35.5zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M385.1 419.1 92.9 126.9C64.8 162.3 48 207.2 48 256c0 114.9 93.1 208 208 208 48.8 0 93.7-16.8 129.1-44.9m33.9-33.9c28.2-35.5 45-80.4 45-129.2 0-114.9-93.1-208-208-208-48.8 0-93.7 16.8-129.1 44.9l292.2 292.2zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="m402.7 425.3-316-316C52.6 148.6 32 199.9 32 256c0 123.7 100.3 224 224 224 56.1 0 107.4-20.6 146.7-54.7m22.6-22.6C459.4 363.4 480 312.1 480 256c0-123.7-100.3-224-224-224-56.1 0-107.4 20.6-146.7 54.7zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M420 431.3 80.7 92C40.6 134.9 16 192.6 16 256c0 132.5 107.5 240 240 240 63.4 0 121.1-24.6 164-64.7m11.3-11.3c40.1-42.9 64.7-100.6 64.7-164 0-132.5-107.5-240-240-240-63.4 0-121.1 24.6-164 64.7zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="m99.5 144.8 267.7 267.7c17.5-12.5 32.8-27.8 45.3-45.3L144.8 99.5c-17.5 12.5-32.8 27.8-45.3 45.3"
                />
                <Path d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384m0 448a256 256 0 1 0 0-512 256 256 0 1 0 0 512" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
