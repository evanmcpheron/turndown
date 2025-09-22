import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const FolderBookmarkIcon: React.FC<
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
                <Path d="M448 480H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h128c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8h160c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64M288 176v160c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L368 308l54.4 40.8c4.8 3.6 11.3 4.2 16.8 1.5s8.8-8.2 8.8-14.3V176c0-8.8-7.2-16-16-16H304c-8.8 0-16 7.2-16 16" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H289.9L247 53.1A71.98 71.98 0 0 0 196.1 32zM48 96c0-8.8 7.2-16 16-16h132.1c6.4 0 12.5 2.5 17 7l42.9 42.9V304c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L336 276l54.4 40.8c4.8 3.6 11.3 4.2 16.8 1.5S416 310 416 304V144h32c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M32 96v320c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-32v176c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6.7L336 289.9l-56.8 28.4c-5 2.5-10.9 2.2-15.6-.7s-7.6-8.1-7.6-13.6V117c-3.3-2.3-6.5-4.8-9.4-7.7l-35.9-35.9c-6-6-14.1-9.4-22.6-9.4H64c-17.7 0-32 14.3-32 32m352 32h-92.1c-1.3 0-2.6 0-3.9-.1v150.2l40.8-20.4c4.5-2.3 9.8-2.3 14.3 0l40.9 20.4zm16-32h48c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h124.1c17 0 33.3 6.7 45.3 18.7l35.9 35.9c6 6 14.1 9.4 22.6 9.4z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M448 464c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48h-8v232c0 3.1-1.8 5.9-4.5 7.2s-6.1 1-8.5-1l-75-60-75 60c-2.4 1.9-5.7 2.3-8.5 1s-4.5-4.1-4.5-7.2V96c0-.4 0-.9.1-1.3l-32.7-32.6c-9-9-21.2-14.1-33.9-14.1H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48zm-24-352H301.3c-7.4 0-14.7-1.7-21.3-5v220.4l67-53.6c2.9-2.3 7.1-2.3 10 0l67 53.6zm8-16h16c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h133.5c17 0 33.3 6.7 45.3 18.7l35.9 35.9c6 6 14.1 9.4 22.6 9.4z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M448 480H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h128c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8v240c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L368 308l54.4 40.8c4.8 3.6 11.3 4.2 16.8 1.5s8.8-8.2 8.8-14.3V96c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64"
                />
                <Path d="M288 96v240c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L368 308l54.4 40.8c4.8 3.6 11.3 4.2 16.8 1.5s8.8-8.2 8.8-14.3V96z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
