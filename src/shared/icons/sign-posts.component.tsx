import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const SignPostsIcon: React.FC<
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
                <Path d="M96 0C78.3 0 64 14.3 64 32H48C21.5 32 0 53.5 0 80v288c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-16c0-17.7-14.3-32-32-32s-32 14.3-32 32H128c0-17.7-14.3-32-32-32m32 448H64v32c0 17.7 14.3 32 32 32s32-14.3 32-32zm320 0v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M64 24v8H48C21.5 32 0 53.5 0 80v288c0 26.5 21.5 48 48 48h16v72c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h352v72c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h16c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-16v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H112v-8c0-13.3-10.7-24-24-24S64 10.7 64 24m464 56v288H48V80z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M48 64c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H48m464-32h16c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48h-16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H96v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h16V16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h384V16c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M80 32V8c0-4.4 3.6-8 8-8s8 3.6 8 8v24h384V8c0-4.4 3.6-8 8-8s8 3.6 8 8v24h32c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48h-32v88c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88H96v88c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm448 16H48c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h480c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M128 32H64C64 14.3 78.3 0 96 0s32 14.3 32 32M64 416h64v64c0 17.7-14.3 32-32 32s-32-14.3-32-32zm384 0h64v64c0 17.7-14.3 32-32 32s-32-14.3-32-32zm0-384c0-17.7 14.3-32 32-32s32 14.3 32 32z"
                />
                <Path d="M0 80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
