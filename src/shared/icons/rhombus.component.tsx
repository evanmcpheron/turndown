import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const RhombusIcon: React.FC<
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
                <Path d="M254.4 14.1C246.8 5.1 235.7 0 224 0s-22.8 5.1-30.4 14.1l-184 216C-3.2 245-3.2 267 9.6 281.9l184 216c7.6 8.9 18.7 14.1 30.4 14.1s22.8-5.1 30.4-14.1l184-216c12.7-14.9 12.7-36.9 0-51.9l-184-216z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M224 52.3 50.5 256 224 459.7 397.5 256zM9.6 230.1l184-216C201.2 5.1 212.3 0 224 0s22.8 5.1 30.4 14.1l184 216c12.7 14.9 12.7 36.9 0 51.9l-184 216c-7.6 8.9-18.7 14.1-30.4 14.1s-22.8-5.1-30.4-14.1L9.6 282c-12.8-15-12.8-37 0-51.9" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="m438.5 230.1-184-216C246.8 5.1 235.7 0 224 0s-22.8 5.1-30.4 14.1l-184 216C-3.2 245-3.2 267 9.6 281.9l184 216c7.6 8.9 18.7 14.1 30.4 14.1s22.8-5.1 30.4-14.1l184-216c12.7-14.9 12.7-36.9 0-51.9zM230.1 34.8l184 216c2.5 3 2.5 7.4 0 10.4l-184 216c-1.5 1.8-3.7 2.8-6.1 2.8s-4.6-1-6.1-2.8l-184-216c-2.5-3-2.5-7.4 0-10.4l184-216c1.5-1.8 3.7-2.8 6.1-2.8s4.6 1 6.1 2.8" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M242.3 24.4C237.7 19.1 231 16 224 16s-13.7 3.1-18.3 8.4l-184 216c-7.6 9-7.6 22.2 0 31.1l184 216c4.6 5.4 11.2 8.4 18.3 8.4s13.7-3.1 18.3-8.4l184-216c7.6-9 7.6-22.2 0-31.1zM224 0c11.7 0 22.8 5.1 30.4 14.1l184 216c12.7 14.9 12.7 36.9 0 51.9l-184 216c-7.6 8.9-18.7 14.1-30.4 14.1s-22.8-5.1-30.4-14.1L9.6 282c-12.8-15-12.8-37 0-51.9l184-216C201.2 5.1 212.3 0 224 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M254.4 14.1C246.8 5.1 235.7 0 224 0s-22.8 5.1-30.4 14.1l-184 216C-3.2 245-3.2 267 9.6 281.9l184 216c7.6 8.9 18.7 14.1 30.4 14.1s22.8-5.1 30.4-14.1l184-216c12.7-14.9 12.7-36.9 0-51.9l-184-216z"
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
