import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const BackwardStepIcon: React.FC<
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
                <Path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M80 88c0-13.3-10.7-24-24-24S32 74.7 32 88v336c0 13.3 10.7 24 24 24s24-10.7 24-24V318.9l176.7 123.7c5.1 3.5 11.1 5.4 17.3 5.4 16.6 0 30.1-13.5 30.1-30.1V94.1C304 77.5 290.5 64 273.9 64c-6.2 0-12.2 1.9-17.3 5.4L80 193.1zm0 172.3v-8.6l176-123.2v255z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M64 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v352c0 8.8 7.2 16 16 16s16-7.2 16-16V296.2l178.6 145.6c5 4 11.2 6.2 17.6 6.2 15.4 0 27.8-12.4 27.8-27.8V91.8c0-15.4-12.4-27.8-27.8-27.8-6.4 0-12.6 2.2-17.6 6.2L64 215.8zm192 20.6v310.8L65.3 256z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M48 72c0-4.4-3.6-8-8-8s-8 3.6-8 8v368c0 4.4 3.6 8 8 8s8-3.6 8-8V277.6L239.8 441c5.3 4.5 12 7 19 7 16.1 0 29.2-13.1 29.2-29.2V93.2c0-16.1-13.1-29.2-29.2-29.2-6.9 0-13.7 2.5-19 7L48 234.4zm0 184c0-.4.2-.8.5-1L250.2 83.2c2.4-2 5.4-3.2 8.6-3.2 7.3 0 13.2 5.9 13.2 13.2v325.6c0 7.3-5.9 13.2-13.2 13.2-3.1 0-6.2-1.1-8.6-3.2L48.5 257c-.3-.3-.5-.6-.5-1" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M32 448c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32"
                />
                <Path d="M301.6 445c-11.2 5.3-24.5 3.6-34.1-4.4l-192-160L64 271v-30l11.5-9.6 192-160c9.5-7.9 22.8-9.7 34.1-4.4S320 83.6 320 96v320c0 12.4-7.2 23.7-18.4 29" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
