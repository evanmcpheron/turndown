import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const WatchSmartIcon: React.FC<
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
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M64 48h256c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48m16 32c-44.2 0-80 35.8-80 80v192c0 44.2 35.8 80 80 80h224c44.2 0 80-35.8 80-80V160c0-44.2-35.8-80-80-80zm136 80v86.1l41 41c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-4.5-4.5-7-10.6-7-17v-96c0-13.3 10.7-24 24-24s24 10.7 24 24zM112 512h160c26.5 0 48-21.5 48-48H64c0 26.5 21.5 48 48 48" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M64 48.3C64 21.6 85.6 0 112.3 0h159.4C298.4 0 320 21.6 320 48.3v17.3c36.5 7.4 64 39.7 64 78.4v224c0 38.7-27.5 71-64 78.4V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48v-17.6C27.5 439 0 406.7 0 368V144c0-38.7 27.5-71 64-78.4zM80 112c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm136 72v60.8l39.4 32.8c10.2 8.5 11.6 23.6 3.1 33.8s-23.6 11.6-33.8 3.1l-48-40c-5.5-4.6-8.6-11.3-8.6-18.4V184c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M96 48v16h192V48c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16M64 65.6V48c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v17.6c36.5 7.4 64 39.7 64 78.4v224c0 38.7-27.5 71-64 78.4V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48v-17.6C27.5 439 0 406.7 0 368V144c0-38.7 27.5-71 64-78.4M96 464c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-16H96zM80 96c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zm128 80v71.4l40.9 27.2c7.4 4.9 9.3 14.8 4.4 22.2s-14.8 9.3-22.2 4.4l-48-32c-4.5-3-7.1-8-7.1-13.3V176c0-8.8 7.2-16 16-16s16 7.2 16 16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M80 40v24h224V40c0-13.3-10.7-24-24-24H104c-13.3 0-24 10.7-24 24M64 65.6V40c0-22.1 17.9-40 40-40h176c22.1 0 40 17.9 40 40v25.6c36.5 7.4 64 39.7 64 78.4v224c0 38.7-27.5 71-64 78.4V472c0 22.1-17.9 40-40 40H104c-22.1 0-40-17.9-40-40v-25.6C27.5 439 0 406.7 0 368V144c0-38.7 27.5-71 64-78.4M80 472c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24v-24H80zm224-40c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H80c-35.3 0-64 28.7-64 64v224c0 35.3 28.6 64 63.9 64H304M200 160v92l60.8 45.6c3.5 2.7 4.3 7.7 1.6 11.2s-7.7 4.3-11.2 1.6l-64-48c-2-1.5-3.2-3.9-3.2-6.4v-96c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M80 64C35.8 64 0 99.8 0 144v224c0 44.2 35.8 80 80 80h224c44.2 0 80-35.8 80-80V144c0-44.2-35.8-80-80-80zm136 96v86.1l41 41c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-4.5-4.5-7-10.6-7-17v-96c0-13.3 10.7-24 24-24s24 10.7 24 24z"
                />
                <Path d="M112.3 0C85.6 0 64 21.6 64 48.3v17.3c5.2-1 10.5-1.6 16-1.6h224c5.5 0 10.8.6 16 1.6V48.3C320 21.6 298.4 0 271.7 0zM64 464c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-17.6c-5.2 1-10.5 1.6-16 1.6H80c-5.5 0-10.8-.6-16-1.6zm152-304c0-13.3-10.7-24-24-24s-24 10.7-24 24v96c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41V160z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
