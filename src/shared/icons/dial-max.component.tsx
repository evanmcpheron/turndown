import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const DialMaxIcon: React.FC<
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
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64m113.4 174.7c56.7 56.7 61.9 145.4 15.7 208L305.2 270.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l111.9 111.9c-62.6 46.2-151.3 41-208-15.7-62.5-62.5-62.5-163.8 0-226.3s163.8-62.5 226.3 0zM512 288a32 32 0 1 1 64 0 32 32 0 1 1-64 0M32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 480a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M288 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-17 241 77.4 77.4c-43.4 27.8-101.7 22.8-139.6-15.1-43.7-43.7-43.7-114.7 0-158.4s114.7-43.7 158.4 0c37.9 37.9 43 96.2 15.1 139.6L305 271c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9zm130.1 96.2a160 160 0 1 0-226.2-226.3 160 160 0 1 0 226.2 226.2zM576 288a32 32 0 1 0-64 0 32 32 0 1 0 64 0M32 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96-224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M128 480a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m90.5 322.5-.4.4.8-.8zm-79.2-101.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l89.8 89.8c-50.2 39.1-122.8 35.5-169-10.6-50-50-50-131 0-181s131-50 181 0c46.2 46.2 49.7 118.8 10.6 169zm101.8 124.4a160 160 0 1 0-226.2-226.2 160 160 0 1 0 226.2 226.2M568 288a24 24 0 1 0-48 0 24 24 0 1 0 48 0M32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48m88-216a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M120 480a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M272 32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-37.7 261.7L384 395.3c-56.5 50.7-143.5 48.8-197.8-5.5-56.2-56.2-56.2-147.4 0-203.6s147.4-56.2 203.6 0c54.3 54.3 56.2 141.3 5.5 197.8L293.7 282.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3zm118.8 107.4a160 160 0 1 0-226.2-226.2 160 160 0 1 0 226.2 226.2M544 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64M16 288a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m368-32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 464a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m368-32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0M32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 480a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <Path d="M417.1 382.8c46.2-62.6 41-151.3-15.7-208-62.5-62.5-163.8-62.5-226.3 0s-62.5 163.8 0 226.3c56.7 56.7 145.4 62 208 15.7L271.3 304.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
