import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const RulerIcon: React.FC<
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
                <Path d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0l-92.1-92.2c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48L333.9 18C352.6-.7 383-.7 401.8 18l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M63.2 379.3c-6.2-6.2-6.2-16.4 0-22.6l39.4-39.4 30.1 30.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-30.1-30.1 41.4-41.4 30.1 30.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-30.1-30.1 41.4-41.4 30.1 30.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-30.1-30.1 41.4-41.4 30.1 30.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-30.1-30.1 39.4-39.4c6.2-6.2 16.4-6.2 22.6 0l69.5 69.5c6.2 6.2 6.2 16.4 0 22.6L155.3 448.8c-6.2 6.2-16.4 6.2-22.6 0zm35.5 103.4c25 25 65.5 25 90.5 0l293.5-293.4c25-25 25-65.5 0-90.5l-69.4-69.5c-25-25-65.5-25-90.5 0L29.3 322.7c-25 25-25 65.5 0 90.5l69.5 69.5z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M51.9 390.6c-12.5-12.5-12.5-32.8 0-45.3l39.4-39.4 41.4 41.4c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-41.4-41.4 41.4-41.4 41.4 41.4c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-41.4-41.4 41.4-41.4 41.4 41.4c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-41.4-41.4 41.4-41.4 41.4 41.4c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-41.4-41.4 39.4-39.4c12.5-12.5 32.8-12.5 45.3 0l69.5 69.5c12.5 12.5 12.5 32.8 0 45.3L166.6 460.1c-12.5 12.5-32.8 12.5-45.3 0zm46.9 92.1c25 25 65.5 25 90.5 0l293.4-293.4c25-25 25-65.5 0-90.5l-69.4-69.5c-25-25-65.5-25-90.5 0L29.3 322.7c-25 25-25 65.5 0 90.5z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M40.6 401.9c-18.7-18.7-18.7-49.1 0-67.9l45.1-45 52.7 52.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L97 277.7l52.7-52.7 52.7 52.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L161 213.7l52.7-52.7 52.7 52.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L225 149.7 277.7 97l52.7 52.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L289 85.7l45.1-45.1c18.7-18.7 49.1-18.7 67.9 0l69.5 69.5c18.7 18.7 18.7 49.1 0 67.9L177.9 471.4c-18.7 18.7-49.1 18.7-67.9 0zm58.2 80.8c25 25 65.5 25 90.5 0l293.4-293.4c25-25 25-65.5 0-90.5l-69.4-69.5c-25-25-65.5-25-90.5 0L29.3 322.7c-25 25-25 65.5 0 90.5z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0l-92.1-92.2c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48L333.9 18C352.6-.7 383-.7 401.8 18l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9z"
                />
                <Path d="m260.7 91.3 22.6-22.6 48 48c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0zm-64 64 22.6-22.6 48 48c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0zm-64 64 22.6-22.6 48 48c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0zm-64 64 22.6-22.6 48 48c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
