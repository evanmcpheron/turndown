import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const BracketSquareIcon: React.FC<
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
              <Svg viewBox="0 0 192 512" fill={colors[colorName || "text"]}>
                <Path d="M0 96c0-35.3 28.7-64 64-64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H64v320h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 192 512" fill={colors[colorName || "text"]}>
                <Path d="M0 88c0-30.9 25.1-56 56-56h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-4.4 0-8 3.6-8 8v336c0 4.4 3.6 8 8 8h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-30.9 0-56-25.1-56-56z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 192 512" fill={colors[colorName || "text"]}>
                <Path d="M0 80c0-26.5 21.5-48 48-48h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-26.5 0-48-21.5-48-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 192 512" fill={colors[colorName || "text"]}>
                <Path d="M0 72c0-22.1 17.9-40 40-40h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-13.3 0-24 10.7-24 24v368c0 13.3 10.7 24 24 24h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-22.1 0-40-17.9-40-40z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 192 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M0 96c0-35.3 28.7-64 64-64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H64v320h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64z"
                />
                <Path d="" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
