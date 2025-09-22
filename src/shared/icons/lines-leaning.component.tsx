import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const LinesLeaningIcon: React.FC<
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
                <Path d="M190.4 74.1c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2l-128 384c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2zm70.9-41.7c-17.4-2.9-33.9 8.9-36.8 26.3l-64 384c-2.9 17.4 8.9 33.9 26.3 36.8s33.9-8.9 36.8-26.3l64-384c2.9-17.4-8.9-33.9-26.3-36.8M352 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M190.6 64.1c4.5-12.5-2-26.2-14.5-30.7s-26.2 2-30.7 14.5l-144 400c-4.5 12.5 2 26.2 14.5 30.7s26.2-2 30.7-14.5zm78.1-31.7c-13-2.6-25.6 5.8-28.2 18.8l-80 400c-2.6 13 5.8 25.6 18.8 28.2s25.6-5.8 28.2-18.8l80-400c2.6-13-5.8-25.6-18.8-28.2M360 32c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M190.9 53.7c3.2-8.2-.9-17.5-9.2-20.7s-17.5.9-20.7 9.2L1 458.2c-3.2 8.2.9 17.5 9.2 20.7s17.5-.9 20.7-9.2zm84.7-21.3c-8.6-2-17.2 3.4-19.2 12l-96 416c-2 8.6 3.4 17.2 12 19.2s17.2-3.4 19.2-12l96-416c2-8.6-3.4-17.2-12-19.2M368 32c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M376 32c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8m-94 .3c-4.3-1.1-8.6 1.5-9.8 5.7l-112 432c-1.1 4.3 1.5 8.6 5.7 9.8s8.6-1.5 9.8-5.7l112-432c1.1-4.3-1.5-8.6-5.7-9.8M175.5 42.8c1.5-4.1-.6-8.7-4.7-10.3s-8.7.6-10.3 4.7l-160 432c-1.5 4.1.6 8.7 4.7 10.3s8.7-.6 10.3-4.7z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M190.4 74.1c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2l-128 384c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2zM384 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v384c0 17.7 14.3 32 32 32s32-14.3 32-32z"
                />
                <Path d="M261.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8l-64 384c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l64-384c2.9-17.4 19.4-29.2 36.8-26.3" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
