import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const EnvelopeDotIcon: React.FC<
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
                <Path d="M496 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160M48 64h337.1c-.7 5.2-1.1 10.6-1.1 16 0 45.6 27.2 84.8 66.3 102.3L275.2 313.6a32.1 32.1 0 0 1-38.4 0L19.2 150.4C7.1 141.3 0 127.1 0 112c0-26.5 21.5-48 48-48m246.4 275.2 196.4-147.3c1.7.1 3.4.1 5.2.1 5.4 0 10.8-.4 16-1.1V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V176l217.6 163.2a63.9 63.9 0 0 0 76.8 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M496 160a80 80 0 1 0 0-160 80 80 0 1 0 0 160m16 224V190.9c-5.2.7-10.6 1.1-16 1.1-22.5 0-43.5-6.6-61-18.1L291.5 291.7c-20.7 17-50.4 17-71.1 0L48 150.1V128c0-8.8 7.2-16 16-16h324.6c-3-10.1-4.6-20.9-4.6-32 0-5.4.4-10.8 1.1-16H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64M48 212.2l142 116.6c38.4 31.5 93.7 31.5 132 0l142-116.6V384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M448 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m128 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-64 304V190.9c-5.2.7-10.6 1.1-16 1.1-13.8 0-27-2.5-39.2-7.1L284.4 311.3c-16.9 12.4-39.9 12.4-56.8 0L32 167.9V128c0-17.7 14.3-32 32-32h321.1c-.7-5.2-1.1-10.6-1.1-16s.4-10.8 1.1-16H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64M32 207.6l176.7 129.5c28.2 20.6 66.5 20.6 94.6 0L480 207.6V384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M464 64a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-64 320V160c-6.3 0-12.5-.6-18.5-1.8L291.2 321.4c-20.5 16.5-49.8 16.5-70.3 0L16 156.2V128c0-26.5 21.5-48 48-48h353.3c-.9-5.2-1.3-10.5-1.3-16H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64M16 176.7l194.8 157.1c26.4 21.3 64 21.3 90.4 0L496 176.7V384c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M417.6 64c-1 5.2-1.6 10.5-1.6 16 0 39.3 28.3 72 65.7 78.7L275.2 313.6a32.1 32.1 0 0 1-38.4 0L19.2 150.4C7.1 141.3 0 127.1 0 112c0-26.5 21.5-48 48-48zM0 384V176l217.6 163.2a63.9 63.9 0 0 0 76.8 0L512 176v208c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64"
                />
                <Path d="M416 80a80 80 0 1 1 160 0 80 80 0 1 1-160 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
