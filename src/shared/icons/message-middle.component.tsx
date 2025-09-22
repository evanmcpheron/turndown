import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const MessageMiddleIcon: React.FC<
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
                <Path d="M343.5 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h104.5l75.2 90.2c3 3.6 7.5 5.8 12.3 5.8s9.3-2.1 12.3-5.8z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M343.5 368H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h104.5c14.2 0 27.8 6.3 36.9 17.3L256 446l50.6-60.7c9.1-10.9 22.6-17.3 36.9-17.3m-175 48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H343.5l-75.2 90.2c-3 3.6-7.5 5.8-12.3 5.8s-9.3-2.1-12.3-5.8z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M343.5 384H448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h104.5c9.5 0 18.5 4.2 24.6 11.5L256 471l62.9-75.5c6.1-7.3 15.1-11.5 24.6-11.5m-75.2 101.7L256 496l12.3-10.2zM168.5 416H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H343.5l-75.2 90.2c-3 3.6-7.5 5.8-12.3 5.8s-9.3-2.1-12.3-5.8z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M343.5 400H448c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h104.5c4.7 0 9.3 2.1 12.3 5.8L256 496l75.2-90.2c3-3.6 7.5-5.8 12.3-5.8m-175 16H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H343.5l-75.2 90.2c-3 3.6-7.5 5.8-12.3 5.8s-9.3-2.1-12.3-5.8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M343.5 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h104.5l75.2 90.2c3 3.6 7.5 5.8 12.3 5.8s9.3-2.1 12.3-5.8z"
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
