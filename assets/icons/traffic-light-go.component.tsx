import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const TrafficLightGoIcon: React.FC<
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
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 0C28.7 0 0 28.7 0 64v288c0 88.4 71.6 160 160 160s160-71.6 160-160V64c0-35.3-28.7-64-64-64zm96 416a48 48 0 1 1 0-96 48 48 0 1 1 0 96m0-200a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0 72a48 48 0 1 1 0-96 48 48 0 1 1 0 96m-24-176a24 24 0 1 0 48 0 24 24 0 1 0-48 0m72 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 48c-8.8 0-16 7.2-16 16v288c0 61.9 50.1 112 112 112s112-50.1 112-112V64c0-8.8-7.2-16-16-16zM0 64C0 28.7 28.7 0 64 0h192c35.3 0 64 28.7 64 64v288c0 88.4-71.6 160-160 160S0 440.4 0 352zm160 360a48 48 0 1 1 0-96 48 48 0 1 1 0 96m0-184a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0 64a48 48 0 1 1 0-96 48 48 0 1 1 0 96m-16-168a16 16 0 1 0 32 0 16 16 0 1 0-32 0m64 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 32c-17.7 0-32 14.3-32 32v288c0 70.7 57.3 128 128 128s128-57.3 128-128V64c0-17.7-14.3-32-32-32zM0 64C0 28.7 28.7 0 64 0h192c35.3 0 64 28.7 64 64v288c0 88.4-71.6 160-160 160S0 440.4 0 352zm160 384a56 56 0 1 1 0-112 56 56 0 1 1 0 112m0-216a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0 80a56 56 0 1 1 0-112 56 56 0 1 1 0 112m-24-192a24 24 0 1 0 48 0 24 24 0 1 0-48 0m80 0a56 56 0 1 1-112 0 56 56 0 1 1 112 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 16c26.5 0 48 21.5 48 48v288c0 79.5-64.5 144-144 144S16 431.5 16 352V64c0-26.5 21.5-48 48-48zM64 0C28.7 0 0 28.7 0 64v288c0 88.4 71.6 160 160 160s160-71.6 160-160V64c0-35.3-28.7-64-64-64zm96 432a40 40 0 1 1 0-80 40 40 0 1 1 0 80m0-96a56 56 0 1 0 0 112 56 56 0 1 0 0-112m40-80a40 40 0 1 1-80 0 40 40 0 1 1 80 0m-96 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0m56-96a40 40 0 1 1 0-80 40 40 0 1 1 0 80m0-96a56 56 0 1 0 0 112 56 56 0 1 0 0-112m0 312a16 16 0 1 0 0 32 16 16 0 1 0 0-32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M160 320a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
                />
                <Path d="M64 0C28.7 0 0 28.7 0 64v288c0 88.4 71.6 160 160 160s160-71.6 160-160V64c0-35.3-28.7-64-64-64zm96 416a48 48 0 1 1 0-96 48 48 0 1 1 0 96m48-176a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-80a48 48 0 1 1 0-96 48 48 0 1 1 0 96" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
