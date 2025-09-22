import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const SparkleIcon: React.FC<
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
                <Path d="M245.8 45.9C241.9 37.4 233.4 32 224 32s-17.9 5.4-21.8 13.9l-59.5 128.8-128.8 59.5C5.4 238.1 0 246.6 0 256s5.4 17.9 13.9 21.8l128.8 59.5 59.5 128.8c3.9 8.5 12.4 13.9 21.8 13.9s17.9-5.4 21.8-13.9l59.5-128.8 128.8-59.5c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8l-128.8-59.5z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M224 32c9.4 0 17.9 5.4 21.8 13.9l59.5 128.8 128.8 59.5c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-128.8 59.5-59.5 128.8c-3.9 8.5-12.4 13.9-21.8 13.9s-17.9-5.4-21.8-13.9l-59.5-128.8-128.8-59.5C5.4 273.9 0 265.4 0 256s5.4-17.9 13.9-21.8l128.8-59.5 59.5-128.8C206.1 37.4 214.6 32 224 32m0 81.2-41.4 89.6c-2.4 5.2-6.5 9.3-11.7 11.7L81.2 256l89.6 41.4c5.2 2.4 9.3 6.5 11.7 11.7l41.5 89.7 41.4-89.6c2.4-5.2 6.5-9.3 11.7-11.7l89.7-41.5-89.6-41.4c-5.2-2.4-9.3-6.5-11.7-11.7z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M224 32c6.2 0 11.9 3.6 14.5 9.3l63.2 136.9 136.9 63.2c5.7 2.6 9.3 8.3 9.3 14.5s-3.6 11.9-9.3 14.5l-136.8 63.4-63.3 136.9c-2.6 5.7-8.3 9.3-14.5 9.3s-11.9-3.6-14.5-9.3l-63.3-136.9L9.3 270.5C3.6 267.9 0 262.2 0 256s3.6-11.9 9.3-14.5l136.9-63.2 63.3-137c2.6-5.7 8.3-9.3 14.5-9.3m0 54.2L172.8 197c-1.6 3.5-4.4 6.2-7.8 7.8L54.2 256 165 307.2c3.5 1.6 6.2 4.4 7.8 7.8L224 425.8 275.2 315c1.6-3.5 4.4-6.2 7.8-7.8L393.8 256 283 204.8c-3.5-1.6-6.2-4.4-7.8-7.8z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M224 48c-1.6 0-3 1-3.6 2.4l-57.2 140.4c-.8 2-2.4 3.6-4.4 4.4L18.4 252.4c-1.5.6-2.4 2-2.4 3.6s1 3 2.4 3.6l140.4 57.2c2 .8 3.6 2.4 4.4 4.4l57.2 140.4c.6 1.5 2 2.4 3.6 2.4s3-1 3.6-2.4l57.2-140.4c.8-2 2.4-3.6 4.4-4.4l140.4-57.2c1.5-.6 2.4-2 2.4-3.6s-1-3-2.4-3.6l-140.4-57.2c-2-.8-3.6-2.4-4.4-4.4L227.6 50.4c-.6-1.5-2-2.4-3.6-2.4m-18.4-3.6c3-7.5 10.3-12.4 18.4-12.4s15.4 4.9 18.4 12.4l55.9 137.2 137.2 55.9c7.5 3.1 12.4 10.3 12.4 18.4s-4.9 15.4-12.4 18.4l-137.1 56.1-56 137.2c-3.1 7.5-10.3 12.4-18.4 12.4s-15.4-4.9-18.4-12.4l-56-137.2-137.2-56C4.9 271.4 0 264.1 0 256s4.9-15.4 12.4-18.4l137.2-55.9z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M245.8 45.9C241.9 37.4 233.4 32 224 32s-17.9 5.4-21.8 13.9l-59.5 128.8-128.8 59.5C5.4 238.1 0 246.6 0 256s5.4 17.9 13.9 21.8l128.8 59.5 59.5 128.8c3.9 8.5 12.4 13.9 21.8 13.9s17.9-5.4 21.8-13.9l59.5-128.8 128.8-59.5c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8l-128.8-59.5z"
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
