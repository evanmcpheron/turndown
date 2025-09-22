import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowUpLeftFromCircleIcon: React.FC<
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
                <Path d="M192 0H32C14.3 0 0 14.3 0 32v160c0 17.7 14.3 32 32 32s32-14.3 32-32v-82.7l233.4 233.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 64H192c17.7 0 32-14.3 32-32S209.7 0 192 0m133.3 67.1c-17.4-2.9-33.9 8.8-36.9 26.3s8.8 33.9 26.3 36.9C390.4 142.9 448 208.8 448 288c0 88.4-71.6 160-160 160-79.2 0-145.1-57.6-157.8-133.3-2.9-17.4-19.4-29.2-36.9-26.3S64.1 307.8 67 325.3C84.9 431.3 177 512 288 512c123.7 0 224-100.3 224-224 0-111-80.7-203.1-186.7-220.9" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M184 0H24C10.7 0 0 10.7 0 24v160c0 13.3 10.7 24 24 24s24-10.7 24-24V81.9L295 329c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L81.9 48H184c13.3 0 24-10.7 24-24S197.3 0 184 0m104 64c-13.3 0-24 10.7-24 24s10.7 24 24 24c97.2 0 176 78.8 176 176s-78.8 176-176 176-176-78.8-176-176c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 123.7 100.3 224 224 224s224-100.3 224-224S411.7 64 288 64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M176 0H16C7.2 0 0 7.2 0 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16V54.6l268.7 268.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 32H176c8.8 0 16-7.2 16-16s-7.2-16-16-16m112 64c-8.8 0-16 7.2-16 16s7.2 16 16 16c106 0 192 86 192 192s-86 192-192 192S96 394 96 288c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 123.7 100.3 224 224 224s224-100.3 224-224S411.7 64 288 64" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M184 0H8C3.6 0 0 3.6 0 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8V27.3l298.3 298.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L27.3 16H184c4.4 0 8-3.6 8-8s-3.6-8-8-8m104 64c-4.4 0-8 3.6-8 8s3.6 8 8 8c114.9 0 208 93.1 208 208s-93.1 208-208 208S80 402.9 80 288c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 123.7 100.3 224 224 224s224-100.3 224-224S411.7 64 288 64" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M288.4 93.4c2.9-17.4 19.4-29.2 36.9-26.3C431.3 84.9 512 177 512 288c0 123.7-100.3 224-224 224-111 0-203.1-80.7-220.9-186.7-2.9-17.4 8.8-33.9 26.3-36.9s33.9 8.8 36.9 26.3C142.9 390.4 208.8 448 288 448c88.4 0 160-71.6 160-160 0-79.2-57.6-145.1-133.3-157.8-17.4-2.9-29.2-19.4-26.3-36.9z"
                />
                <Path d="M32 0h160c17.7 0 32 14.3 32 32s-14.3 32-32 32h-82.7l233.3 233.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L64 109.3V192c0 17.7-14.3 32-32 32S0 209.7 0 192V32C0 14.3 14.3 0 32 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
