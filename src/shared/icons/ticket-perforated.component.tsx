import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const TicketPerforatedIcon: React.FC<
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
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M0 128c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v48c0 8.8-7.3 15.8-15.8 18-27.7 7-48.2 32.1-48.2 62s20.5 55 48.2 62c8.6 2.2 15.8 9.1 15.8 18v48c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm432 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M48 128c0-8.8 7.2-16 16-16h512c8.8 0 16 7.2 16 16v35c-41.4 10.7-72 48.2-72 93s30.6 82.3 72 93v35c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm16-64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64v-61.3c0-11.2-12.8-18.7-24-18.7-26.5 0-48-21.5-48-48s21.5-48 48-48c11.2 0 24-7.5 24-18.7V128c0-35.3-28.7-64-64-64zm384 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0m0 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M32 128c0-17.7 14.3-32 32-32h512c17.7 0 32 14.3 32 32v49.6c-36.5 7.4-64 39.7-64 78.4s27.5 71 64 78.4V384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm32-64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64v-66.4c0-8-8-13.6-16-13.6-26.5 0-48-21.5-48-48s21.5-48 48-48c8 0 16-5.6 16-13.6V128c0-35.3-28.7-64-64-64zm416 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0m0 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M16 128c0-26.5 21.5-48 48-48h512c26.5 0 48 21.5 48 48v64c-35.3 0-64 28.7-64 64s28.7 64 64 64v64c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm48-64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64v-66.4c0-8-8-13.6-16-13.6-26.5 0-48-21.5-48-48s21.5-48 48-48c8 0 16-5.6 16-13.6V128c0-35.3-28.7-64-64-64zm416 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0m0 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M0 128c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v48c0 8.8-7.3 15.8-15.8 18-27.7 7-48.2 32.1-48.2 62s20.5 55 48.2 62c8.6 2.2 15.8 9.1 15.8 18v48c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm432 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
                />
                <Path d="M416 128a16 16 0 1 1 32 0 16 16 0 1 1-32 0m0 64a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-16 80a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
