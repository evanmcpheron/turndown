import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const Square8Icon: React.FC<
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
                <Path d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm232 32h-16c-39.8 0-72 32.2-72 72 0 15.7 5 30.1 13.5 42-18 14.7-29.5 37-29.5 62 0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80 0-25-11.5-47.4-29.5-62 8.5-11.8 13.5-26.3 13.5-42 0-39.8-32.2-72-72-72m-16 96c-13.2 0-24-10.8-24-24s10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24zm0 48h24c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm168 96h-16c-39.8 0-72 32.2-72 72 0 15.7 5 30.1 13.5 42-18 14.7-29.5 37-29.5 62 0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80 0-25-11.5-47.4-29.5-62 8.5-11.8 13.5-26.3 13.5-42 0-39.8-32.2-72-72-72m-16 96c-13.2 0-24-10.8-24-24s10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24zm0 48h24c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm172 96h-24c-37.6 0-68 30.4-68 68 0 20.2 8.8 38.4 22.9 50.9-18.8 13.8-30.9 36-30.9 61.1 0 42 34 76 76 76h24c42 0 76-34 76-76 0-25.1-12.1-47.3-30.9-61.1 14-12.5 22.9-30.6 22.9-50.9 0-37.6-30.4-68-68-68m-24 104c-19.9 0-36-16.1-36-36s16.1-36 36-36h24c19.9 0 36 16.1 36 36s-16.1 36-36 36zm0 32h24c24.3 0 44 19.7 44 44s-19.7 44-44 44h-24c-24.3 0-44-19.7-44-44s19.7-44 44-44" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm232 32c35.3 0 64 28.7 64 64 0 22.3-11.4 41.9-28.7 53.4 26.2 10.7 44.7 36.5 44.7 66.6 0 39.8-32.2 72-72 72h-32c-39.8 0-72-32.2-72-72 0-30.1 18.5-55.9 44.7-66.6-17.3-11.5-28.7-31.1-28.7-53.4 0-35.3 28.7-64 64-64zm0 128h-24c-30.9 0-56 25.1-56 56s25.1 56 56 56h32c30.9 0 56-25.1 56-56s-25.1-56-56-56zm48-64c0-26.5-21.5-48-48-48h-16c-26.5 0-48 21.5-48 48s21.5 48 48 48h16c26.5 0 48-21.5 48-48" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm232 32h-16c-39.8 0-72 32.2-72 72 0 15.7 5 30.1 13.5 42-18 14.7-29.5 37-29.5 62 0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80 0-25-11.5-47.4-29.5-62 8.5-11.8 13.5-26.3 13.5-42 0-39.8-32.2-72-72-72m-16 96c-13.2 0-24-10.8-24-24s10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24zm0 48h24c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                />
                <Path d="M304 200c0-39.8-32.2-72-72-72h-16c-39.8 0-72 32.2-72 72 0 15.7 5 30.1 13.5 42-18 14.7-29.5 37-29.5 62 0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80 0-25-11.5-47.4-29.5-62 8.5-11.8 13.5-26.3 13.5-42m-72 72h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h24m0-48h-16c-13.2 0-24-10.8-24-24s10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
