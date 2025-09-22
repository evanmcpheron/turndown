import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const BracketsSquareIcon: React.FC<
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
                <Path d="M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64V96h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32zM64 32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H64v320h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M56 32C25.1 32 0 57.1 0 88v336c0 30.9 25.1 56 56 56h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H56c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zm336 0h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c4.4 0 8 3.6 8 8v336c0 4.4-3.6 8-8 8h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16zm352 0h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M408 32c22.1 0 40 17.9 40 40v368c0 22.1-17.9 40-40 40H296c-4.4 0-8-3.6-8-8s3.6-8 8-8h112c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H296c-4.4 0-8-3.6-8-8s3.6-8 8-8zM40 32h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-13.3 0-24 10.7-24 24v368c0 13.3 10.7 24 24 24h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-22.1 0-40-17.9-40-40V72c0-22.1 17.9-40 40-40" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M448 96c0-35.3-28.7-64-64-64h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v320h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c35.3 0 64-28.7 64-64z"
                />
                <Path d="M0 96c0-35.3 28.7-64 64-64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H64v320h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
