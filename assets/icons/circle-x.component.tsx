import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleXIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-69.7-375.5 69.7 82.3 69.7-82.3c8.6-10.1 23.7-11.4 33.8-2.8s11.4 23.7 2.8 33.8L287.4 256l74.9 88.5c8.6 10.1 7.3 25.3-2.8 33.8s-25.3 7.3-33.8-2.8L256 293.2l-69.7 82.3c-8.6 10.1-23.7 11.4-33.8 2.8s-11.4-23.7-2.8-33.8l74.9-88.5-74.9-88.5c-8.6-10.1-7.3-25.3 2.8-33.8s25.3-7.3 33.8 2.8" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-69.7-375.5c-8.6-10.1-23.7-11.4-33.8-2.8s-11.4 23.7-2.8 33.8l74.9 88.5-74.9 88.5c-8.6 10.1-7.3 25.3 2.8 33.8s25.3 7.3 33.8-2.8l69.7-82.3 69.7 82.3c8.6 10.1 23.7 11.4 33.8 2.8s11.4-23.7 2.8-33.8L287.4 256l74.9-88.5c8.6-10.1 7.3-25.3-2.8-33.8s-25.3-7.3-33.8 2.8L256 218.8z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-83.9-378.4c-5.8-6.7-15.9-7.5-22.6-1.7s-7.5 15.9-1.7 22.6L234.9 256l-87 101.6c-5.8 6.7-5 16.8 1.7 22.6s16.8 5 22.6-1.7l83.8-97.9 83.9 97.8c5.8 6.7 15.8 7.5 22.6 1.7s7.5-15.8 1.7-22.6L277.1 256l87.1-101.6c5.8-6.7 5-16.8-1.7-22.6s-16.8-5-22.6 1.7L256 231.4z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-98-381.2c-2.9-3.3-7.9-3.7-11.3-.8s-3.7 7.9-.8 11.3L245.4 256 146 370.8c-2.9 3.3-2.5 8.4.8 11.3s8.4 2.5 11.3-.8l98-113 98 113c2.9 3.3 7.9 3.7 11.3.8s3.7-7.9.8-11.3L266.6 256 366 141.2c2.9-3.3 2.5-8.4-.8-11.3s-8.4-2.5-11.3.8l-98 113-98-113z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-69.7-375.5 69.7 82.3 69.7-82.3c8.6-10.1 23.7-11.4 33.8-2.8s11.4 23.7 2.8 33.8L287.4 256l74.9 88.5c8.6 10.1 7.3 25.3-2.8 33.8s-25.3 7.3-33.8-2.8L256 293.2l-69.7 82.3c-8.6 10.1-23.7 11.4-33.8 2.8s-11.4-23.7-2.8-33.8l74.9-88.5-74.9-88.5c-8.6-10.1-7.3-25.3 2.8-33.8s25.3-7.3 33.8 2.8"
                />
                <Path d="M152.5 133.7c10.1-8.6 25.3-7.3 33.8 2.8l69.7 82.3 69.7-82.3c8.6-10.1 23.7-11.4 33.8-2.8s11.4 23.7 2.8 33.8L287.4 256l74.9 88.5c8.6 10.1 7.3 25.3-2.8 33.8s-25.3 7.3-33.8-2.8L256 293.2l-69.7 82.3c-8.6 10.1-23.7 11.4-33.8 2.8s-11.4-23.7-2.8-33.8l74.9-88.5-74.9-88.5c-8.6-10.1-7.3-25.3 2.8-33.8" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
