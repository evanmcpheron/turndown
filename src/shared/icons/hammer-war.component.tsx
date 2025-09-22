import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const HammerWarIcon: React.FC<
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
                <Path d="M192 0c17.7 0 32 14.3 32 32v18.8l123.3-18.4c9.2-1.4 18.6 1.3 25.6 7.4S384 54.7 384 64v192c0 9.3-4.1 18.2-11.1 24.2s-16.4 8.8-25.6 7.4l-150.6-22.5c-3.1-.5-6.3-.5-9.5 0L36.7 287.6c-9.2 1.4-18.6-1.3-25.6-7.4S0 265.3 0 256V64c0-9.3 4.1-18.2 11.1-24.2s16.4-8.8 25.6-7.4L160 50.8V32c0-17.7 14.3-32 32-32m0 296.7 32 4.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V301.5z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M216 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v28L36.7 32.4C17.7 29.5 0 44.7 0 64v192c0 19.3 17.7 34.5 36.7 31.6L187.2 265c3.1-.5 6.3-.5 9.5 0l150.5 22.6c19.1 2.9 36.7-12.4 36.7-31.6V64c0-19.3-17.7-34.5-36.7-31.6L216 52zm0 276.3-24-3.6-24 3.6V488c0 13.3 10.7 24 24 24s24-10.7 24-24zm-35.9-82.7L48 237.4V82.6l132.1 19.8c7.9 1.2 15.9 1.2 23.7 0L336 82.6v154.8l-132.1-19.8c-7.9-1.2-15.9-1.2-23.7 0z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M208 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v37.2L36.7 32.4C17.7 29.5 0 44.7 0 64v192c0 19.3 17.7 34.5 36.7 31.6L187.2 265c3.1-.5 6.3-.5 9.5 0l150.5 22.6c19.1 2.9 36.7-12.4 36.7-31.6V64c0-19.3-17.7-34.5-36.7-31.6L208 53.2zm0 283.1-16-2.4-16 2.4V496c0 8.8 7.2 16 16 16s16-7.2 16-16zM32 255.8V64.2l.1-.1.1-.1 150.3 22.6c6.3.9 12.7.9 19 0L351.8 64l.1.1.1.1v191.6l-.1.1h-.2l-150.2-22.5c-6.3-.9-12.7-.9-19 0L32.2 256l-.1-.1z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M192 16c-8.8 0-16 7.2-16 16v21.2l11.3 1.7c3.1.5 6.3.5 9.5 0l11.2-1.7V32c0-8.8-7.2-16-16-16m-32 34.8V32c0-17.7 14.3-32 32-32s32 14.3 32 32v18.8l123.3-18.4c19-2.9 36.7 12.3 36.7 31.6v192c0 19.3-17.7 34.5-36.7 31.6l-150.6-22.5c-3.1-.5-6.3-.5-9.5 0L36.7 287.6C17.7 290.5 0 275.3 0 256V64c0-19.3 17.7-34.5 36.7-31.6zM176 291v189c0 8.8 7.2 16 16 16s16-7.2 16-16V291l16 2.4V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V293.4zM16 256c0 9.5 9 17.2 18.4 15.8l150.5-22.6c4.7-.7 9.5-.7 14.2 0l150.5 22.6c9.4 1.4 18.4-6.3 18.4-15.8V64c0-9.5-9-17.2-18.4-15.8L199.1 70.8c-4.7.7-9.5.7-14.2 0L34.4 48.2C25 46.8 16 54.5 16 64z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v18.8l27.3 4.1c3.1.5 6.3.5 9.5 0l27.2-4.1zm0 237.2-27.3-4.1c-3.1-.5-6.3-.5-9.5 0l-27.2 4.1V480c0 17.7 14.3 32 32 32s32-14.3 32-32z"
                />
                <Path d="M36.7 32.4c-9.2-1.4-18.6 1.3-25.6 7.4S0 54.7 0 64v192c0 9.3 4.1 18.2 11.1 24.2s16.4 8.8 25.6 7.4L187.2 265c3.1-.5 6.3-.5 9.5 0l150.5 22.6c9.2 1.4 18.6-1.3 25.6-7.4s11.1-14.9 11.1-24.2V64c0-9.3-4.1-18.2-11.1-24.2s-16.4-8.8-25.6-7.4L196.7 54.9c-3.1.5-6.3.5-9.5 0z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
