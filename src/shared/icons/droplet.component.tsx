import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const DropletIcon: React.FC<
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
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M192 512C86 512 0 426 0 320 0 228.8 130.2 57.7 166.6 11.7c6-7.5 14.9-11.7 24.5-11.7h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192M96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112 8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M192 464c-79.5 0-144-64.5-144-144 0-13 5.1-33.5 17-61.1 11.5-26.6 27.6-55.8 45.5-84.7 29-46.8 61-90.2 81.5-117 20.5 26.7 52.6 70.2 81.5 117 17.9 28.9 34 58 45.5 84.7 11.9 27.6 17 48.2 17 61.1 0 79.5-64.5 144-144 144M0 320c0 106 86 192 192 192s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3-6-7.5-14.9-11.7-24.5-11.7h-1.8c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320m144-8c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 57.4 46.6 104 104 104 13.3 0 24-10.7 24-24s-10.7-24-24-24c-30.9 0-56-25.1-56-56" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M192 480c-88.4 0-160-71.6-160-160 0-16.2 6.1-39.2 18.3-67.5 11.9-27.6 28.5-57.5 46.6-86.8 35.9-58 76.4-110.9 94.5-133.7h1.3c18.1 22.9 58.6 75.7 94.5 133.7 18.1 29.2 34.6 59.1 46.6 86.8 12.1 28.3 18.2 51.3 18.2 67.5 0 88.4-71.6 160-160 160M0 320c0 106 86 192 192 192s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3-6-7.5-14.9-11.7-24.5-11.7h-1.8c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320m112 0c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112 8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M192 496c-97.2 0-176-78.8-176-176 0-19.5 7.1-44.9 19.6-73.8C48 217.6 64.9 187 83.3 157.4c36.6-59.2 77.9-112.9 95.9-135.7 2.8-3.5 7-5.6 11.9-5.6h1.8c4.9 0 9.1 2.1 11.9 5.6 18.1 22.8 59.3 76.6 95.9 135.7 18.3 29.6 35.3 60.2 47.7 88.8 12.5 28.9 19.6 54.3 19.6 73.8 0 97.2-78.8 176-176 176M0 320c0 106 86 192 192 192s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3-6-7.5-14.9-11.7-24.5-11.7h-1.8c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320m104 0c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 57.4 46.6 104 104 104 4.4 0 8-3.6 8-8s-3.6-8-8-8c-48.6 0-88-39.4-88-88" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M192 512C86 512 0 426 0 320 0 228.8 130.2 57.7 166.6 11.7c6-7.5 14.9-11.7 24.5-11.7h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192M96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112 8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80"
                />
                <Path d="M80 320c8.8 0 16 7.2 16 16 0 44.2 35.8 80 80 80 8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112 0-8.8 7.2-16 16-16" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
