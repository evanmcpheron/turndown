import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const ImageUserIcon: React.FC<
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
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm128 160a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-48 164.6c0-37.9 30.7-68.6 68.6-68.6h86.9c37.9 0 68.6 30.7 68.6 68.6 0 15.1-12.3 27.4-27.4 27.4H171.4c-15.1 0-27.4-12.3-27.4-27.4" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm192 96a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-48 164.6c0-37.9 30.7-68.6 68.6-68.6h86.9c37.9 0 68.6 30.7 68.6 68.6 0 15.1-12.3 27.4-27.4 27.4H171.4c-15.1 0-27.4-12.3-27.4-27.4" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm288 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m107.4 128h-86.8c-18.6 0-34 14-36.3 32h159.4c-2.2-18-17.6-32-36.3-32m-86.9-32h86.9c37.9 0 68.6 30.7 68.6 68.6 0 15.1-12.3 27.4-27.4 27.4H171.4c-15.1 0-27.4-12.3-27.4-27.4 0-37.9 30.7-68.6 68.6-68.6z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm304 96a48 48 0 1 0-96 0 48 48 0 1 0 96 0M160 356.6c0 6.3 5.1 11.4 11.4 11.4h169.2c6.3 0 11.4-5.1 11.4-11.4 0-29-23.5-52.6-52.6-52.6h-86.8c-29 0-52.6 23.5-52.6 52.6M256 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128m-43.4 160h86.9c37.9 0 68.6 30.7 68.6 68.6 0 15.1-12.3 27.4-27.4 27.4H171.4c-15.1 0-27.4-12.3-27.4-27.4 0-37.9 30.7-68.6 68.6-68.6" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm128 160a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-48 164.6c0-37.9 30.7-68.6 68.6-68.6h86.9c37.9 0 68.6 30.7 68.6 68.6 0 15.1-12.3 27.4-27.4 27.4H171.4c-15.1 0-27.4-12.3-27.4-27.4"
                />
                <Path d="M256 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-43.4 32c-37.9 0-68.6 30.7-68.6 68.6 0 15.1 12.3 27.4 27.4 27.4h169.2c15.1 0 27.4-12.3 27.4-27.4 0-37.9-30.7-68.6-68.6-68.6z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
