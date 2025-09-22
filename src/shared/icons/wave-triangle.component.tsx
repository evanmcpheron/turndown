import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const WaveTriangleIcon: React.FC<
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
                <Path d="M176 32c10.1 0 19.6 4.7 25.6 12.8L464 394.7l118.4-157.9c10.6-14.1 30.7-17 44.8-6.4s17 30.7 6.4 44.8l-144 192c-6 8.1-15.5 12.8-25.6 12.8s-19.6-4.7-25.6-12.8L176 117.3 57.6 275.2c-10.6 14.1-30.7 17-44.8 6.4s-17-30.7-6.4-44.8l144-192c6-8.1 15.5-12.8 25.6-12.8" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M176.1 32c7.7 0 14.9 3.7 19.4 10l268.6 373.1 132.5-181.3c7.8-10.7 22.8-13 33.5-5.2s13 22.8 5.2 33.5l-152 208c-4.5 6.2-11.8 9.9-19.5 9.8s-14.9-3.7-19.4-10l-268.5-373L43.4 278.2c-7.8 10.7-22.8 13-33.5 5.2s-13-22.8-5.2-33.5l152-208c4.5-6.2 11.8-9.9 19.5-9.8z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M176.1 32c5.2 0 10.1 2.6 13 6.9l275.1 397.3L611 230.7c5.1-7.2 15.1-8.9 22.3-3.7s8.9 15.1 3.7 22.3l-160 224c-3 4.2-7.9 6.7-13.1 6.7s-10.1-2.6-13-6.9L175.8 75.8 29 281.3c-5.1 7.2-15.1 8.9-22.3 3.7s-8.9-15.1-3.7-22.3l160-224c3-4.2 7.9-6.7 13.1-6.7" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M176.1 32c2.6 0 5.1 1.4 6.6 3.6l281.5 422.2 161.2-230.4c2.5-3.6 7.5-4.5 11.1-2s4.5 7.5 2 11.1l-168 240c-1.5 2.2-4 3.4-6.6 3.4s-5.1-1.4-6.6-3.6L175.8 54.2 14.6 284.6c-2.5 3.6-7.5 4.5-11.1 2s-4.5-7.5-2-11.1l168-240c1.5-2.2 4-3.4 6.6-3.4z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M176 32c10.1 0 19.6 4.7 25.6 12.8L464 394.7l118.4-157.9c10.6-14.1 30.7-17 44.8-6.4s17 30.7 6.4 44.8l-144 192c-6 8.1-15.5 12.8-25.6 12.8s-19.6-4.7-25.6-12.8L176 117.3 57.6 275.2c-10.6 14.1-30.7 17-44.8 6.4s-17-30.7-6.4-44.8l144-192c6-8.1 15.5-12.8 25.6-12.8"
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
