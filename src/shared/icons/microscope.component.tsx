import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const MicroscopeIcon: React.FC<
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
                <Path d="M160 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32 17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32 0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32M32 448h288c70.7 0 128-57.3 128-128s-57.3-128-128-128v-64c106 0 192 86 192 192 0 49.2-18.5 94-48.9 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32m80-64h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M192 0c-17.7 0-32 14.3-32 32-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32 0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32 17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32 0-17.7-14.3-32-32-32zm-16 272V80h64v192zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24h-41c39.9-35.2 65-86.7 65-144 0-106-86-192-192-192v48c79.5 0 144 64.5 144 144s-64.5 144-144 144zm72-56c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.3 0-24 10.7-24 24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M192 0c-17.7 0-32 14.3-32 32-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V160c88.4 0 160 71.6 160 160s-71.6 160-160 160H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16H394.2c51.7-34.4 85.8-93.2 85.8-160 0-106-86-192-192-192V64c0-17.7-14.3-32-32-32 0-17.7-14.3-32-32-32zm0 32h32v16c0 8.8 7.2 16 16 16h16v224h-96V64h16c8.8 0 16-7.2 16-16zm-32 336c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m-64 64c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M176 24v16c0 4.4-3.6 8-8 8h-8c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16h-8c-4.4 0-8-3.6-8-8V24c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8m112 120v144c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32v-8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v8c17.7 0 32 14.3 32 32v64c106 0 192 86 192 192 0 78.7-47.4 146.4-115.1 176H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h280c97.2 0 176-78.8 176-176s-78.8-176-176-176M160 360c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8m-64 64c0-4.4 3.6-8 8-8h208c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M192 0c-17.7 0-32 14.3-32 32h96c0-17.7-14.3-32-32-32zm-80 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
                <Path d="M128 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32 0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32-17.7 0-32-14.3-32-32zm384 256c0 49.2-18.5 94-48.9 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h288c70.7 0 128-57.3 128-128s-57.3-128-128-128v-64c106 0 192 86 192 192" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
