import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const LoveseatIcon: React.FC<
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
                <Path d="M64 160c0-70.7 57.3-128 128-128h128c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128v-48c0-38.7-27.5-71-64-78.4zm352 112c0-20.9 13.4-38.7 32-45.3 5-1.8 10.4-2.7 16-2.7 26.5 0 48 21.5 48 48v176c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48 5.6 0 11 1 16 2.7 18.6 6.6 32 24.4 32 45.3v80h320v-80" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M176 80h160c44.2 0 80 35.8 80 80v34.8c7.7-1.8 15.7-2.8 24-2.8s16.3 1 24 2.8V160c0-70.7-57.3-128-128-128H176C105.3 32 48 89.3 48 160v34.8c7.7-1.8 15.7-2.8 24-2.8s16.3 1 24 2.8V160c0-44.2 35.8-80 80-80m286.5 147.6c-7.1-2.3-14.6-3.6-22.5-3.6-9.5 0-18.5 1.8-26.8 5.2-24.1 9.7-41.8 32-44.7 58.8H143.6c-3-26.8-20.6-49.1-44.7-58.8-8.4-3.4-17.4-5.2-26.9-5.2-7.9 0-15.4 1.3-22.5 3.6C20.7 237 0 264.1 0 296v136c0 26.5 21.5 48 48 48h48c20.9 0 38.7-13.4 45.3-32h229.4c6.6 18.6 24.4 32 45.3 32h48c26.5 0 48-21.5 48-48V296c0-31.9-20.7-59-49.5-68.4M368 400H144v-64h224zm-272 0v32H48V296c0-13.3 10.7-24 24-24s24 10.7 24 24v104m368-104v136h-48V296c0-13.3 10.7-24 24-24s24 10.7 24 24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M320 64c53 0 96 43 96 96v37.5c10-3.5 20.8-5.5 32-5.5v-32c0-70.7-57.3-128-128-128H192C121.3 32 64 89.3 64 160v32c11.2 0 22 1.9 32 5.5V160c0-53 43-96 96-96zM96 320v112c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V288c0-17.7 14.3-32 32-32s32 14.3 32 32zM80 480c20.9 0 38.7-13.4 45.3-32h261.4c6.6 18.6 24.4 32 45.3 32h32c26.5 0 48-21.5 48-48V288c0-35.3-28.7-64-64-64s-64 28.7-64 64H128c0-35.3-28.7-64-64-64S0 252.7 0 288v144c0 26.5 21.5 48 48 48zm48-64v-96h256v96zm288 16V288c0-17.7 14.3-32 32-32s32 14.3 32 32v144c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M320 48H192C130.1 48 80 98.1 80 160v33.3c-5.2-.9-10.5-1.3-16-1.3v-32c0-70.7 57.3-128 128-128h128c70.7 0 128 57.3 128 128v32c-5.5 0-10.8.5-16 1.3V160c0-61.9-50.1-112-112-112M112 288c0-26.5-21.5-48-48-48s-48 21.5-48 48v144c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32zM0 288c0-35.3 28.7-64 64-64s64 28.7 64 64h256c0-35.3 28.7-64 64-64s64 28.7 64 64v144c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48H128c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm128 128h256V304H128zm368-128c0-26.5-21.5-48-48-48s-48 21.5-48 48v144c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M192 32C121.3 32 64 89.3 64 160v66.7c18.6 6.6 32 24.4 32 45.3v80h320v-80c0-20.9 13.4-38.7 32-45.3V160c0-70.7-57.3-128-128-128z"
                />
                <Path d="M48 224c-26.5 0-48 21.5-48 48v176c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32h320c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V272c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H96v-80c0-26.5-21.5-48-48-48" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
