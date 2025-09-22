import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const SquareSlidersIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M384 480c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64zm0-144c0 17.7-14.3 32-32 32h-32v16c0 17.7-14.3 32-32 32s-32-14.3-32-32v-16H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h160v-16c0-17.7 14.3-32 32-32s32 14.3 32 32v16h32c17.7 0 32 14.3 32 32m-32-192c17.7 0 32 14.3 32 32s-14.3 32-32 32H192v16c0 17.7-14.3 32-32 32s-32-14.3-32-32v-16H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-16c0-17.7 14.3-32 32-32s32 14.3 32 32v16z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M48 416c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 80c0-13.3 10.7-24 24-24h32v-16c0-13.3 10.7-24 24-24s24 10.7 24 24v16h128c13.3 0 24 10.7 24 24s-10.7 24-24 24H200v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-32c-13.3 0-24-10.7-24-24m24 184c-13.3 0-24-10.7-24-24s10.7-24 24-24h128v-16c0-13.3 10.7-24 24-24s24 10.7 24 24v16h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M32 416c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 80c0-8.8 7.2-16 16-16h48v-24c0-8.8 7.2-16 16-16s16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-24h-48c-8.8 0-16-7.2-16-16m128 0c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16M96 336c0-8.8 7.2-16 16-16h112v-24c0-8.8 7.2-16 16-16s16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-24H112c-8.8 0-16-7.2-16-16m192 0c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M16 416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 72c0-4.4 3.6-8 8-8h56v-24c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-24H72c-4.4 0-8-3.6-8-8m80 0v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16zm80 0c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H232c-4.4 0-8-3.6-8-8M72 352c-4.4 0-8-3.6-8-8s3.6-8 8-8h152v-24c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-24zm168-40v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16m88 40c-4.4 0-8-3.6-8-8s3.6-8 8-8h48c4.4 0 8 3.6 8 8s-3.6 8-8 8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M384 480c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64zm0-144c0 17.7-14.3 32-32 32h-32v16c0 17.7-14.3 32-32 32s-32-14.3-32-32v-16H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h160v-16c0-17.7 14.3-32 32-32s32 14.3 32 32v16h32c17.7 0 32 14.3 32 32m-32-192c17.7 0 32 14.3 32 32s-14.3 32-32 32H192v16c0 17.7-14.3 32-32 32s-32-14.3-32-32v-16H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-16c0-17.7 14.3-32 32-32s32 14.3 32 32v16z"
                />
                <Path d="M192 224c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 160c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
