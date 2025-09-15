import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const GreaterThanIcon: React.FC<
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
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4c-15.8 7.9-22.2 27.1-14.3 42.9s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M2.5 77.3c-5.9 11.9-1.1 26.3 10.7 32.2L306.3 256l-293 146.5c-11.9 6-16.7 20.4-10.8 32.2s20.3 16.7 32.2 10.7l336-168c8.1-4.1 13.3-12.4 13.3-21.5s-5.1-17.4-13.3-21.5l-336-168c-11.8-5.8-26.2-1-32.2 10.9" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M1.7 72.8c-4 7.9-.7 17.5 7.2 21.5L332.2 256 8.8 417.7c-7.9 4-11.1 13.6-7.2 21.5s13.6 11.1 21.5 7.2l352-176c5.4-2.7 8.8-8.3 8.8-14.3s-3.4-11.6-8.8-14.3l-352-176c-7.9-4-17.5-.7-21.5 7.2z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M8.8 76.4c-2 4-.4 8.8 3.6 10.7L350.1 256 12.4 424.8c-4 2-5.6 6.8-3.6 10.7s6.8 5.6 10.7 3.6l352-176c2.7-1.4 4.4-4.1 4.4-7.2s-1.7-5.8-4.4-7.2l-352-176c-4-2-8.8-.4-10.7 3.6z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4c-15.8 7.9-22.2 27.1-14.3 42.9s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3"
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
