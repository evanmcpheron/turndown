import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const MagnifyingGlassMusicIcon: React.FC<
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
                <Path d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208M278 100.5c-6.3-4.5-14.3-5.7-21.6-3.3l-48 16c-9.8 3.3-16.4 12.4-16.4 22.8v89.5c-5.1-1-10.5-1.5-16-1.5-35.3 0-64 21.5-64 48s28.7 48 64 48 63.9-21.4 64-47.9v-86.8l31.6-10.5c9.8-3.3 16.4-12.4 16.4-22.8v-32c0-7.7-3.7-15-10-19.5" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M368 208a160 160 0 1 0-320 0 160 160 0 1 0 320 0m-30.9 163.1C301.7 399.2 256.8 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0zm-65.5-212.3c12.6-4.2 19.4-17.8 15.2-30.4S269 109 256.4 113.2l-48 16c-9.8 3.3-16.4 12.4-16.4 22.8v57.5c-5.1-1-10.5-1.5-16-1.5-35.3 0-64 21.5-64 48s28.7 48 64 48 63.9-21.4 64-47.9v-86.8z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M208 32a176 176 0 1 1 0 352 176 176 0 1 1 0-352m0 384c51.7 0 99-18.8 135.3-50l141.4 141.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L366 343.3c31.2-36.4 50-83.7 50-135.3C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208m73.6-316.8c-4-3-9.2-4-14-2.6l-56 16c-6.9 2-11.6 8.2-11.6 15.4v85.5c-8.4-3.5-17.9-5.5-28-5.5-33.1 0-60 21.5-60 48s26.9 48 60 48 60-21.5 60-48v-51.9l44.4-12.7c6.9-2 11.6-8.2 11.6-15.4v-64c0-5-2.4-9.8-6.4-12.8M194.4 247c4.7 3.8 5.6 7.2 5.6 9s-.8 5.2-5.6 8.9c-4.8 3.8-12.6 7-22.4 7s-17.6-3.2-22.4-7c-4.7-3.8-5.6-7.2-5.6-9s.8-5.2 5.6-9 12.6-7 22.4-7 17.6 3.2 22.4 7zm37.6-76.2v-30.7l24-6.9v30.7z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M400 208a192 192 0 1 0-384 0 192 192 0 1 0 384 0m-50.7 152.6C312.2 395 262.6 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 54.6-21 104.2-55.4 141.3l149 149c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0zM288 104c0-2.5-1.1-4.8-3.1-6.3s-4.5-2.1-6.9-1.5l-64 16c-3.6.9-6.1 4.1-6.1 7.8v118.4c-10.2-8.9-24.3-14.4-40-14.4-30.9 0-56 21.5-56 48s25.1 48 56 48 56-21.5 56-48v-81.8l57.9-14.5c3.6-.9 6.1-4.1 6.1-7.8V104zm-80 168c0 15.4-15.5 32-40 32s-40-16.6-40-32 15.5-32 40-32 40 16.6 40 32m64-110.2-48 12v-47.6l48-12v47.5z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M208 416a208 208 0 1 0 0-416 208 208 0 1 0 0 416m70-315.5c6.3 4.5 10 11.8 10 19.5v32c0 10.3-6.6 19.5-16.4 22.8L240 185.3v86.8c-.1 26.5-28.7 47.9-64 47.9s-64-21.5-64-48 28.7-48 64-48c5.5 0 10.9.5 16 1.5V136c0-10.3 6.6-19.5 16.4-22.8l48-16c7.3-2.4 15.4-1.2 21.6 3.3"
                />
                <Path d="M278 100.5c6.3 4.5 10 11.8 10 19.5v32c0 10.3-6.6 19.5-16.4 22.8L240 185.3v86.8c-.1 26.5-28.7 47.9-64 47.9s-64-21.5-64-48 28.7-48 64-48c5.5 0 10.9.5 16 1.5V136c0-10.3 6.6-19.5 16.4-22.8l48-16c7.3-2.4 15.4-1.2 21.6 3.3m179.4 402.1L330.7 376c17.3-12.7 32.6-28 45.3-45.3l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
