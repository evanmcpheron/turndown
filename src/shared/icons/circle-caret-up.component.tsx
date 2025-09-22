import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const CircleCaretUpIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-368c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9S369.5 304 360 304H152c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-368c-6.7 0-13 2.8-17.6 7.7l-104 112c-6.5 7-8.2 17.2-4.4 25.9s12.5 14.4 22 14.4h208c9.5 0 18.2-5.7 22-14.4s2.1-18.9-4.4-25.9l-104-112c-4.5-4.9-10.9-7.7-17.6-7.7" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-352c-9.6 0-18.7 4-25.2 11l-95.5 102.8c-4.7 5.1-7.3 11.8-7.3 18.7 0 15.2 12.3 27.5 27.5 27.5h201c15.2 0 27.5-12.3 27.5-27.5 0-6.9-2.6-13.6-7.3-18.7L281.2 171c-6.5-7-15.6-11-25.2-11m-1.7 32.7c.4-.5 1.1-.7 1.7-.7s1.3.3 1.7.7l88.5 95.3H165.8l88.4-95.3z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-352c-7.3 0-14.3 3-19.3 8.4L134.8 277.6c-4.4 4.7-6.8 10.8-6.8 17.2 0 13.9 11.3 25.2 25.2 25.2h205.6c13.9 0 25.2-11.3 25.2-25.2 0-6.4-2.4-12.5-6.8-17.2L275.3 168.4c-5-5.4-12-8.4-19.3-8.4M153.2 304c-5.1 0-9.2-4.1-9.2-9.2 0-2.3.9-4.6 2.5-6.3l101.9-109.2c2-2.1 4.7-3.3 7.6-3.3s5.6 1.2 7.6 3.3l101.9 109.2c1.6 1.7 2.5 4 2.5 6.3 0 5.1-4.1 9.2-9.2 9.2z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-368c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9S369.5 304 360 304H152c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7"
                />
                <Path d="M273.6 151.7c-4.5-4.9-10.9-7.7-17.6-7.7s-13 2.8-17.6 7.7l-104 112c-6.5 7-8.2 17.2-4.4 25.9s12.5 14.4 22 14.4h208c9.5 0 18.2-5.7 22-14.4s2.1-18.9-4.4-25.9z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
