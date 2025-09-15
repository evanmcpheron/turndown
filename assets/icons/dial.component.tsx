import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const DialIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone";
  }
> = ({ type, size, color, active, style, opacity, haptic, ...more }) => {
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
    color,
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64M175.1 174.2c56.7-56.7 145.4-62 208-15.7L271.3 270.4c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l111.9-111.9c46.2 62.6 41 151.3-15.7 208-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3zM512 288a32 32 0 1 1 64 0 32 32 0 1 1-64 0M32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 480a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M288 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-79.2 144.8c37.9-37.9 96.2-43 139.6-15.1L271 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l77.4-77.4c27.8 43.4 22.8 101.7-15.1 139.6-43.7 43.7-114.7 43.7-158.4 0s-43.7-114.7 0-158.4zm192.3-33.9a160 160 0 1 0-226.2 226.2 160 160 0 1 0 226.2-226.2M576 288a32 32 0 1 0-64 0 32 32 0 1 0 64 0M32 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96-224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M128 480a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m11.3 243.3 89.8-89.8c39.1 50.2 35.5 122.9-10.6 169-50 50-131 50-181 0s-50-131 0-181c46.2-46.2 118.8-49.7 169-10.6l-89.8 89.8c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0m101.8-124.4a160 160 0 1 0-226.2 226.2 160 160 0 1 0 226.2-226.2M568 288a24 24 0 1 0-48 0 24 24 0 1 0 48 0M32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48m88-216a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M120 480a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M272 32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M186.2 186.2c54.3-54.3 141.3-56.2 197.8-5.5L282.3 282.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L395.3 192c50.7 56.5 48.8 143.5-5.5 197.8-56.2 56.2-147.4 56.2-203.6 0s-56.2-147.4 0-203.6m215-11.3a160 160 0 1 0-226.3 226.2 160 160 0 1 0 226.2-226.2zM544 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64M16 288a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m368-32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 464a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m368-32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M256 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0M32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 480a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <Path d="M383.2 158.5c-62.6-46.2-151.3-41-208 15.7-62.5 62.5-62.5 163.8 0 226.3s163.8 62.5 226.3 0c56.7-56.7 61.9-145.4 15.7-208l-112 111.8c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
