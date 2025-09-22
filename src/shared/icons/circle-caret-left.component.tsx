import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const CircleCaretLeftIcon: React.FC<
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
                <Path d="M512 256a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-368 0c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22v208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1-416 0m464 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-368 0c0 6.7 2.8 13 7.7 17.6l112 104c7 6.5 17.2 8.2 25.9 4.4s14.4-12.5 14.4-22V152c0-9.5-5.7-18.2-14.4-22s-18.9-2.1-25.9 4.4l-112 104c-4.9 4.5-7.7 10.9-7.7 17.6" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M32 256a224 224 0 1 1 448 0 224 224 0 1 1-448 0m480 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-352 0c0 9.6 4 18.7 11 25.2l102.8 95.5c5.1 4.7 11.8 7.3 18.7 7.3 15.2 0 27.5-12.3 27.5-27.5v-201c0-15.2-12.3-27.5-27.5-27.5-6.9 0-13.6 2.6-18.7 7.3L171 230.8c-7 6.5-11 15.6-11 25.2m32.7 1.7c-.5-.4-.7-1.1-.7-1.7s.3-1.3.7-1.7l95.3-88.5v180.3z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M16 256a240 240 0 1 1 480 0 240 240 0 1 1-480 0m496 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-352 0c0 7.3 3 14.3 8.4 19.3l109.2 101.9c4.7 4.4 10.8 6.8 17.2 6.8 13.9 0 25.2-11.3 25.2-25.2V153.2c0-13.9-11.3-25.2-25.2-25.2-6.4 0-12.5 2.4-17.2 6.8L168.4 236.7c-5.4 5-8.4 12-8.4 19.3m144 102.8c0 5.1-4.1 9.2-9.2 9.2-2.3 0-4.6-.9-6.3-2.5L179.3 263.6c-2.1-2-3.3-4.7-3.3-7.6s1.2-5.6 3.3-7.6l109.2-101.9c1.7-1.6 4-2.5 6.3-2.5 5.1 0 9.2 4.1 9.2 9.2z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M512 256a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-368 0c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22v208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6"
                />
                <Path d="M151.7 238.4c-4.9 4.5-7.7 10.9-7.7 17.6s2.8 13 7.7 17.6l112 104c7 6.5 17.2 8.2 25.9 4.4s14.4-12.5 14.4-22V152c0-9.5-5.7-18.2-14.4-22s-18.9-2.1-25.9 4.4z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
