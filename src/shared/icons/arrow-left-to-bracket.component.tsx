import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowLeftToBracketIcon: React.FC<
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
                <Path d="M160 96H96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-53 0-96-43-96-96V128c0-53 43-96 96-96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32m9.4 182.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L269.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H269.3l73.4 73.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-128-128z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M295 401 167 273c-9.4-9.4-9.4-24.6 0-33.9L295 111c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 246.1.1c13.3 0 24 10.7 24 24s-10.7 24-24 24H241.9l87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0zM168 80H88c-22.1 0-40 17.9-40 40v272c0 22.1 17.9 40 40 40h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-48.6 0-88-39.4-88-88V120c0-48.6 39.4-88 88-88h80c13.3 0 24 10.7 24 24s-10.7 24-24 24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M164.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L214.6 240H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H214.6l100.7 100.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0zM176 448c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-44.2 0-80-35.8-80-80V112c0-44.2 35.8-80 80-80h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="m298.3 114.3-136 136c-3.1 3.1-3.1 8.2 0 11.3l136 136c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L187.3 264H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H187.3l122.4-122.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0zM184 464H88c-39.8 0-72-32.2-72-72V120c0-39.8 32.2-72 72-72h96c4.4 0 8-3.6 8-8s-3.6-8-8-8H88C39.4 32 0 71.4 0 120v272c0 48.6 39.4 88 88 88h96c4.4 0 8-3.6 8-8s-3.6-8-8-8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M0 128v256c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128"
                />
                <Path d="M169.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 288H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H269.3l73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
