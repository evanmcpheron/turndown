import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const RecordVinylIcon: React.FC<
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
                <Path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 224a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m160 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m120 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m128-256a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-128-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 120a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m128-256a128 128 0 1 0-256 0 128 128 0 1 0 256 0M256 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 128a16 16 0 1 0 0-32 16 16 0 1 0 0 32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 384a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-160a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-384a128 128 0 1 1 0 256 128 128 0 1 1 0-256" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
