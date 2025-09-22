import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const SpinnerScaleIcon: React.FC<
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
                <Path d="M256 116a52 52 0 1 1 0-104 52 52 0 1 1 0 104m0 364a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192-192a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m399.4-96.2a56 56 0 1 1-79.2-79.2 56 56 0 1 1 79.2 79.2M97.6 414.4a32 32 0 1 1 45.3-45.3 32 32 0 1 1-45.3 45.3m271.5 0a32 32 0 1 1 45.3-45.3 32 32 0 1 1-45.3 45.3M86.3 86.3a48 48 0 1 1 67.9 67.9 48 48 0 1 1-67.9-67.9" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 52a12 12 0 1 1 0 24 12 12 0 1 1 0-24m-52 12a52 52 0 1 0 104 0 52 52 0 1 0-104 0m20 384a32 32 0 1 0 64 0 32 32 0 1 0-64 0m256-192a32 32 0 1 0-64 0 32 32 0 1 0 64 0M64 220a36 36 0 1 0 0 72 36 36 0 1 0 0-72m339.1-88.5a16 16 0 1 1-22.6-22.6 16 16 0 1 1 22.6 22.6m28.3-50.9a56 56 0 1 0-79.2 79.2 56 56 0 1 0 79.2-79.2M97.6 369.1a32 32 0 1 0 45.3 45.3 32 32 0 1 0-45.3-45.3m316.8 45.3a32 32 0 1 0-45.3-45.3 32 32 0 1 0 45.3 45.3M125.9 125.9a8 8 0 1 1-11.3-11.3 8 8 0 1 1 11.3 11.3m28.3-39.6a48 48 0 1 0-67.9 67.9 48 48 0 1 0 67.9-67.9" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 44a20 20 0 1 1 0 40 20 20 0 1 1 0-40m-52 20a52 52 0 1 0 104 0 52 52 0 1 0-104 0m28 384a24 24 0 1 0 48 0 24 24 0 1 0-48 0m240-192a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-396 0a12 12 0 1 1-24 0 12 12 0 1 1 24 0m-12-44a44 44 0 1 0 0 88 44 44 0 1 0 0-88m344.7-74.8a24 24 0 1 1-33.9-33.9 24 24 0 1 1 33.9 33.9m22.6-56.6a56 56 0 1 0-79.2 79.2 56 56 0 1 0 79.2-79.2M92.2 391.8a28 28 0 1 0 56 0 28 28 0 1 0-56 0M384 408a24 24 0 1 0 0-48 24 24 0 1 0 0 48M131.5 131.5a16 16 0 1 1-22.6-22.6 16 16 0 1 1 22.6 22.6m22.6-45.3a48 48 0 1 0-67.8 68 48 48 0 1 0 67.9-67.9z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 28a36 36 0 1 1 0 72 36 36 0 1 1 0-72m-52 36a52 52 0 1 0 104 0 52 52 0 1 0-104 0m52 368a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-32 16a32 32 0 1 0 64 0 32 32 0 1 0-64 0m224-176a16 16 0 1 1 0-32 16 16 0 1 1 0 32m32-16a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-392 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80m356-67.5A40 40 0 1 1 363.5 92a40 40 0 1 1 56.5 56.5m11.3-67.9a56 56 0 1 0-79.2 79.2 56 56 0 1 0 79.2-79.2M131.5 380.5a16 16 0 1 1-22.6 22.6 16 16 0 1 1 22.6-22.6m-33.9-11.4a32 32 0 1 0 45.3 45.3 32 32 0 1 0-45.3-45.3M380.4 403a16 16 0 1 1 22.6-22.6 16 16 0 1 1-22.6 22.6m33.9 11.3A32 32 0 1 0 369 369a32 32 0 1 0 45.3 45.3M142.9 142.9a32 32 0 1 1-45.3-45.3 32 32 0 1 1 45.3 45.3m11.3-56.6a48 48 0 1 0-67.9 67.9 48 48 0 1 0 67.9-67.9" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M431.4 80.6a56 56 0 1 0-79.2 79.2 56 56 0 1 0 79.2-79.2M142.9 369.1a32 32 0 1 0-45.3 45.3 32 32 0 1 0 45.3-45.3m271.5 0a32 32 0 1 0-45.3 45.3 32 32 0 1 0 45.3-45.3m-260.2-215a48 48 0 1 0-67.9-67.8 48 48 0 1 0 67.9 67.9z"
                />
                <Path d="M256 12a52 52 0 1 0 0 104 52 52 0 1 0 0-104m0 404a32 32 0 1 0 0 64 32 32 0 1 0 0-64m192-192a32 32 0 1 0 0 64 32 32 0 1 0 0-64M96 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
