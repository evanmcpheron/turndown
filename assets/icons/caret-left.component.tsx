import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CaretLeftIcon: React.FC<
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
              <Svg viewBox="0 0 256 512"  fill={colors[colorName || "text"]} >
                <Path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 256 512"  fill={colors[colorName || "text"]} >
                <Path d="m54.6 256 89.4-89.4v178.7zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V128c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-128 128z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 256 512"  fill={colors[colorName || "text"]} >
                <Path d="M34.2 261.6c-1.3-1.4-2.2-3.5-2.2-5.6s.8-4.2 2.2-5.6l113.5-120.2c1.3-1.4 3.2-2.2 5.2-2.2 3.9 0 7.1 3.2 7.1 7.1v241.7c0 3.9-3.2 7.1-7.1 7.1-2 0-3.8-.8-5.2-2.2zm-23.3 22 113.5 120.1c7.4 7.8 17.7 12.3 28.4 12.3 21.6 0 39.1-17.5 39.1-39.1V135.2c0-21.6-17.5-39.1-39.1-39.1-10.8 0-21.1 4.4-28.4 12.3l-113.5 120C3.9 235.9 0 245.8 0 256s3.9 20.1 10.9 27.6" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 256 512"  fill={colors[colorName || "text"]} >
                <Path d="M22.6 271.4c-4.2-4-6.6-9.6-6.6-15.4s2.4-11.4 6.6-15.4l132.1-125.1c2.3-2.2 5.4-3.5 8.7-3.5 7 0 12.6 5.6 12.6 12.6v262.8c0 7-5.6 12.6-12.6 12.6-3.2 0-6.3-1.2-8.7-3.5zm-11 11.6 132.1 125.2c5.3 5 12.4 7.8 19.7 7.8 15.8 0 28.6-12.8 28.6-28.6V124.6c0-15.8-12.8-28.6-28.6-28.6-7.3 0-14.4 2.8-19.7 7.8L11.6 229C4.2 236 0 245.8 0 256s4.2 20 11.6 27" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 256 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
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
