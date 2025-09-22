import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const Icon9: React.FC<
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
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M64 192a96 96 0 1 0 192 0 96 96 0 1 0-192 0m87.5 159.8C67.1 347.4 0 277.5 0 192 0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M48 192c0 61.9 50.1 112 112 112 32.3 0 61.5-13.7 81.9-35.6l5.1-6.3c16.2-19.8 25-44.6 25-70.1 0-61.9-50.1-112-112-112S48 130.1 48 192m126.3 159.4c-4.7.4-9.5.6-14.3.6C71.6 352 0 280.4 0 192S71.6 32 160 32s160 71.6 160 160c0 41.5-15.8 79.4-41.8 107.8L138.6 471.2c-8.4 10.3-23.5 11.8-33.8 3.4s-11.8-23.5-3.4-33.8l72.9-89.5z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M32 192c0 70.7 57.3 128 128 128 69.7 0 126.3-55.7 128-124.9V192c0-70.7-57.3-128-128-128S32 121.3 32 192m161.2 156.5c-10.7 2.3-21.8 3.5-33.2 3.5C71.6 352 0 280.4 0 192S71.6 32 160 32s160 71.6 160 160c0 2 0 3.9-.1 5.9-1.4 37.9-15.9 74.2-41.1 102.6L124 474.6c-5.9 6.6-16 7.2-22.6 1.3s-7.2-16-1.3-22.6l93.2-104.8z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M304 192a144 144 0 1 1-288 0 144 144 0 1 1 288 0m-84.6 148.6L98.2 466.5c-3.1 3.2-3 8.2.2 11.3s8.2 3 11.3-.2l163.7-170c29.9-31 46.6-72.5 46.6-115.6 0-88.4-71.6-160-160-160S0 103.6 0 192s71.6 160 160 160c21 0 41.1-4 59.4-11.4" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M64 192a96 96 0 1 0 192 0 96 96 0 1 0-192 0m87.5 159.8C67.1 347.4 0 277.5 0 192 0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z"
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
