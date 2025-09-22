import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const ChartScatter3dIcon: React.FC<
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
                <Path d="M32 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m256-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v209L43.5 423.4c-13.6 11.3-15.4 31.5-4.1 45.1s31.5 15.4 45.1 4.1L256 329.7l171.5 142.9c13.6 11.3 33.8 9.5 45.1-4.1s9.5-33.8-4.1-45.1L288 273zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32 160a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-320-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m192 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M32 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m248-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v220.8L40.6 437.6c-10.1 8.5-11.5 23.7-2.9 33.8s23.7 11.5 33.8 2.9l184.5-155 184.6 155c10.2 8.5 25.3 7.2 33.8-2.9s7.2-25.3-2.9-33.8L280 276.8zm104 40a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32 160a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-320-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m192 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M272 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v232.6L37.7 451.8c-6.7 5.7-7.6 15.8-1.9 22.6s15.8 7.6 22.5 1.9L256 309l197.7 167.2c6.7 5.7 16.8 4.9 22.6-1.9s4.9-16.8-1.9-22.6L272 280.6zm112 40a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 168a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72-72a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-328-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0M32 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 168a24 24 0 1 0-48 0 24 24 0 1 0 48 0m200 216a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M48 64a16 16 0 1 1-32 0 16 16 0 1 1 32 0M32 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m232 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v244.3L34.8 465.9c-3.4 2.9-3.8 7.9-.9 11.3s7.9 3.8 11.3.9L256 298.5l210.8 179.6c3.4 2.9 8.4 2.5 11.3-.9s2.5-8.4-.9-11.3L264 284.3zm136 24a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0 240a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0m144-96a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-352 48a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0M32 272a16 16 0 1 1 0-32 16 16 0 1 1 0 32M0 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m272 192a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 32c17.7 0 32 14.3 32 32v209l180.5 150.4c13.6 11.3 15.4 31.5 4.1 45.1s-31.5 15.4-45.1 4.1L256 329.7 84.5 472.6c-13.6 11.3-33.8 9.5-45.1-4.1s-9.5-33.8 4.1-45.1L224 273V64c0-17.7 14.3-32 32-32"
                />
                <Path d="M32 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m384-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0 192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-320-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m192 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
