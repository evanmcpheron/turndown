import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const DiceD4Icon: React.FC<
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
                <Path d="M228.8.7C235.5 2.8 240 9 240 16v480c0 6.3-3.7 12-9.4 14.6s-12.5 1.6-17.2-2.6L5.4 324c-6.1-5.4-7.2-14.5-2.5-21.2l208-296c4-5.7 11.3-8.2 17.9-6.1m54.4 0c6.7-2.1 13.9.3 17.9 6.1l208 296c4.7 6.7 3.6 15.8-2.5 21.2l-208 184c-4.7 4.2-11.4 5.2-17.2 2.6s-9.4-8.3-9.4-14.6V16c0-7 4.5-13.2 11.2-15.3" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 0c7.3 0 14.1 3.3 18.7 8.9l232 288c4.1 5.1 5.9 11.5 5.1 18s-4.1 12.3-9.3 16.2l-232 176c-8.6 6.5-20.4 6.5-29 0l-232-176c-5.2-3.9-8.5-9.8-9.3-16.2s1.1-12.9 5.1-18l232-288C241.9 3.3 248.7 0 256 0M58.2 307.8 232 439.7V92.1zM280 92.1v347.6l173.8-131.9z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M240.1 56.5 35.4 310.6l204.7 155.3zm32 409.2 204.5-155.1L272.1 56.7v409.1zM256 0c7.3 0 14.1 3.3 18.7 8.9l232 288c4.1 5.1 5.9 11.5 5.1 18s-4.1 12.3-9.3 16.2l-232 176c-8.6 6.5-20.4 6.5-29 0l-232-176c-5.2-3.9-8.5-9.8-9.3-16.2s1.1-12.9 5.1-18l232-288C241.9 3.3 248.7 0 256 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M248.1 21.1 17.8 307c-1.4 1.7-2 3.8-1.7 6s1.4 4.1 3.1 5.4L248.1 492zm16 470.8 228.7-173.5c1.7-1.3 2.8-3.3 3.1-5.4s-.4-4.3-1.7-6L264.1 21.3zM256 0c7.3 0 14.1 3.3 18.7 8.9l232 288c4.1 5.1 5.9 11.5 5.1 18s-4.1 12.3-9.3 16.2l-232 176c-8.6 6.5-20.4 6.5-29 0l-232-176c-5.2-3.9-8.5-9.8-9.3-16.2s1.1-12.9 5.1-18l232-288C241.9 3.3 248.7 0 256 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M240 16c0-7-4.5-13.2-11.2-15.3s-13.9.3-17.9 6.1l-208 296c-4.7 6.7-3.6 15.8 2.5 21.2l208 184c4.7 4.2 11.4 5.2 17.2 2.6s9.4-8.3 9.4-14.6z"
                />
                <Path d="M272 16c0-7 4.5-13.2 11.2-15.3s13.9.3 17.9 6.1l208 296c4.7 6.7 3.6 15.8-2.5 21.2l-208 184c-4.7 4.2-11.4 5.2-17.2 2.6s-9.4-8.3-9.4-14.6z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
