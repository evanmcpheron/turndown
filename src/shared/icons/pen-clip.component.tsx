import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const PenClipIcon: React.FC<
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
                <Path d="m453.3 19.3 39.4 39.4c25 25 25 65.5 0 90.5l-52.1 52.1-1-1-16-16-96-96-17-17 52.1-52.1c25-25 65.5-25 90.5 0zM241 114.9c-9.4-9.4-24.6-9.4-33.9 0L105 217c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L173.1 81c28.1-28.1 73.7-28.1 101.8 0L288 94.1l17 17 96 96 16 16 1 1-17 17-171.5 171.4c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8L254.1 128z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="m320 62.1 42.7-42.7c25-25 65.5-25 90.5 0l39.4 39.4c25 25 25 65.5 0 90.5L229.5 412.5c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8L286.1 96 273 82.9c-9.4-9.4-24.6-9.4-33.9 0L137 185c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L205.1 49c28.1-28.1 73.7-28.1 101.8 0zm0 67.9L133.5 316.5c-38.8 38.8-66 87.5-78.6 140.7 53.2-12.7 101.9-39.9 140.7-78.6L382.1 192 320 129.9z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M385.4 41.9c12.5-12.5 32.8-12.5 45.3 0l39.4 39.4c12.5 12.5 12.5 32.8 0 45.3L421.7 175 337 90.3zm-93.7 48.4L99.5 282.5c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9.9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1l263.2-263.2c25-25 25-65.5 0-90.5l-39.4-39.5c-25-25-65.5-25-90.5 0l-48.5 48.4-13-13.1c-25-25-65.5-25-90.5 0L100.7 164.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l110.1-110c12.5-12.5 32.8-12.5 45.3 0l13.1 13.1zm22.6 22.7 84.7 84.7-192.1 192.1c-43.6 43.6-99 73.2-159.4 85.3l-13.2 2.6 2.6-13.2c12.1-60.4 41.8-115.9 85.3-159.4z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M374.1 30.6c18.7-18.7 49.1-18.7 67.9 0L481.4 70c18.7 18.7 18.7 49.1 0 67.9L427.3 192 320 84.7zm-76.7 54.1L99.5 282.5c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9.9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1l263.2-263.2c25-25 25-65.5 0-90.5l-39.4-39.5c-25-25-65.5-25-90.5 0l-54.1 54.1-13.1-13.1c-21.9-21.9-57.3-21.9-79.2 0l-118.1 118c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l118.1-118c15.6-15.6 40.9-15.6 56.6 0zM308.7 96 416 203.3 218.2 401.1c-45.8 45.8-104.1 77-167.6 89.7l-25 5c-2.6.5-5.3-.3-7.2-2.2s-2.7-4.6-2.2-7.2l5-25c12.7-63.5 43.9-121.8 89.7-167.6z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M362.7 19.3c25-25 65.5-25 90.5 0l39.4 39.4c25 25 25 65.5 0 90.5L417.9 224 288 94.1l74.7-74.7z"
                />
                <Path d="M207 114.9c9.4-9.4 24.6-9.4 33.9 0l13.2 13.1L99.5 282.5c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9.9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1L401 241l17-17-1-1-16-16-96-96-17-17-13.1-13c-28.1-28.1-73.7-28.1-101.8 0L71 183c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
