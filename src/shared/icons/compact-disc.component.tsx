import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const CompactDiscIcon: React.FC<
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
                <Path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-96-32a96 96 0 1 0 192 0 96 96 0 1 0-192 0m-64-16c0-35 17.5-71.1 45.2-98.8S205 96 240 96c8.8 0 16-7.2 16-16s-7.2-16-16-16c-45.4 0-89.2 22.3-121.5 54.5S64 194.6 64 240c0 8.8 7.2 16 16 16s16-7.2 16-16" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-160a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0-120a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-14.2-103.2c8.8-1 15.1-8.9 14.1-17.7S247 96 238.2 97c-74.1 8.2-133 67.1-141.2 141.2-1 8.8 5.4 16.7 14.1 17.7s16.7-5.4 17.7-14.1c6.6-59.3 53.7-106.4 113-113" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m320 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-160 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m72 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-120 0c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-97.2 78.8-176 176-176 8.8 0 16 7.2 16 16s-7.2 16-16 16c-79.5 0-144 64.5-144 144" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m336 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-176 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0m80 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-152 0c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-101.6 82.4-184 184-184 4.4 0 8 3.6 8 8s-3.6 8-8 8c-92.8 0-168 75.2-168 168" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-160a96 96 0 1 1 0-192 96 96 0 1 1 0 192M96 240c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-45.4 22.3-89.2 54.5-121.5S194.6 64 240 64c8.8 0 16 7.2 16 16s-7.2 16-16 16c-35 0-71.1 17.5-98.8 45.2S96 205 96 240"
                />
                <Path d="M256 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 32a96 96 0 1 1-192 0 96 96 0 1 1 192 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
