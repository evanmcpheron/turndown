import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const DiagramProjectIcon: React.FC<
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
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M0 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v16h192V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-16H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-96c0-1.7.1-3.4.3-5L144 224H48c-26.5 0-48-21.5-48-48z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M136 80c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8zM56 32C25.1 32 0 57.1 0 88v80c0 30.9 25.1 56 56 56h80c5.6 0 11.1-.8 16.2-2.4l75.9 101.2c-2.7 6.5-4.1 13.7-4.1 21.2v80c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-80c0-30.9-25.1-56-56-56h-80c-5.6 0-11.1.8-16.2 2.4l-75.9-101.2c2.7-6.5 4.1-13.7 4.1-21.2v-16h192v16c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56v16H192V88c0-30.9-25.1-56-56-56zm304 304c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8zm80-256h80c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M136 64c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H56c-13.3 0-24-10.7-24-24V88c0-13.3 10.7-24 24-24zm56 104v-24h192v24c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56v24H192V88c0-30.9-25.1-56-56-56H56C25.1 32 0 57.1 0 88v80c0 30.9 25.1 56 56 56h80c8.6 0 16.7-1.9 24-5.4l72.2 96.3c-5.2 8.5-8.2 18.5-8.2 29.1v80c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-80c0-30.9-25.1-56-56-56h-80c-8.6 0-16.7 1.9-24 5.4l-72.2-96.3c5.2-8.5 8.2-18.5 8.2-29.1m224 0V88c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24m-56 152c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M136 48c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40H56c-22.1 0-40-17.9-40-40V88c0-22.1 17.9-40 40-40zM56 32C25.1 32 0 57.1 0 88v80c0 30.9 25.1 56 56 56h80c11.9 0 23-3.7 32.1-10.1l68.1 95.3a55.88 55.88 0 0 0-12.1 34.8v80c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-80c0-30.9-25.1-56-56-56H280c-11.9 0-23 3.7-32.1 10.1l-68.1-95.3c7.6-9.6 12.1-21.7 12.1-34.8v-32H384v32c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56v32H192V88c0-30.9-25.1-56-56-56zm304 272c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40h-80c-22.1 0-40-17.9-40-40v-80c0-22.1 17.9-40 40-40zm80-256h80c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40h-80c-22.1 0-40-17.9-40-40V88c0-22.1 17.9-40 40-40" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="m144 224 80.3 107c2.5-24.2 22.9-43 47.7-43l-80.3-107c-2.5 24.2-22.9 43-47.7 43m48-64h192V96H192z"
                />
                <Path d="M0 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm224 256c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48zM432 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
