import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const LocationArrowUpIcon: React.FC<
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
                <Path d="M35.8 431.9 190.9 54.2C196.4 40.8 209.5 32 224 32s27.6 8.8 33.1 22.2l155.1 377.7c9.4 23-7.4 48.1-32.3 48.1-7.8 0-15.3-2.6-21.4-7.3L224 368 89.4 472.7c-6.1 4.7-13.6 7.3-21.4 7.3-24.8 0-41.7-25.2-32.3-48.1z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M224 98.5 87.2 420l122.1-95c8.7-6.7 20.8-6.7 29.5 0l122.1 95zM190.8 54c5.7-13.3 18.7-22 33.2-22s27.5 8.6 33.2 22l155.3 364.9c2.3 5.4 3.5 11.3 3.5 17.2v2.1c0 23.1-18.7 41.9-41.9 41.9-9.3 0-18.4-3.1-25.7-8.8L224 374.4 99.6 471.2c-7.3 5.7-16.4 8.8-25.7 8.8-23.2 0-41.9-18.7-41.9-41.9V436c0-5.9 1.2-11.8 3.5-17.2z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M224 70.3 68 441.7l146.8-102.8c5.5-3.9 12.8-3.9 18.4 0L380 441.7zm-25.8-21.1C202.5 38.8 212.7 32 224 32s21.5 6.8 25.8 17.2l163.9 390.1c1.5 3.6 2.3 7.5 2.3 11.4v1.2c0 15.6-12.6 28.2-28.2 28.2-5.8 0-11.4-1.8-16.2-5.1L224 371.5 76.3 474.9c-4.7 3.3-10.4 5.1-16.2 5.1-15.5 0-28.1-12.6-28.1-28.2v-1.2c0-3.9.8-7.8 2.3-11.4z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M224 48c-6.5 0-12.3 3.9-14.8 9.8L49.5 438.2q-1.5 3.45-1.5 7.2v2.9c0 8.7 7.1 15.8 15.8 15.8 3.5 0 7-1.2 9.8-3.4l145.4-115c2.9-2.3 7-2.3 9.9 0l145.6 114.9c2.8 2.2 6.2 3.4 9.8 3.4 8.7 0 15.8-7.1 15.8-15.8v-2.9q0-3.75-1.5-7.2L238.8 57.8c-2.5-6-8.3-9.8-14.8-9.8m-29.6 3.7c5-12 16.7-19.7 29.6-19.7s24.6 7.7 29.6 19.7L413.3 432c1.8 4.2 2.7 8.8 2.7 13.4v2.9c0 17.5-14.2 31.8-31.8 31.8-7.1 0-14.1-2.4-19.7-6.8L224 362.2l-140.6 111c-5.6 4.4-12.5 6.8-19.7 6.8-17.5 0-31.7-14.2-31.7-31.8v-2.9c0-4.6.9-9.2 2.7-13.4z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M36.6 432 201.7 46.7C205.5 37.8 214.3 32 224 32s18.5 5.8 22.3 14.7L411.4 432c9.7 22.7-6.9 48-31.6 48-7.7 0-15.1-2.6-21.1-7.2L224 368 89.3 472.8c-6 4.7-13.5 7.2-21.1 7.2-24.7 0-41.4-25.3-31.6-48"
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
