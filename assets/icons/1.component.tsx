import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const Icon1: React.FC<
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
                <Path d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 256 512"  fill={colors[colorName || "text"]} >
                <Path d="M152 56c0-8.7-4.7-16.7-12.3-21s-16.9-4-24.3.5l-104 64c-11.3 6.9-14.8 21.7-7.9 33s21.7 14.8 33 7.9L104 98.9V432H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 256 512"  fill={colors[colorName || "text"]} >
                <Path d="M144 48c0-5.9-3.2-11.3-8.5-14.1s-11.5-2.5-16.4.8l-96 64c-7.4 4.9-9.3 14.8-4.4 22.2s14.8 9.3 22.2 4.4L112 77.9V448H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 256 512"  fill={colors[colorName || "text"]} >
                <Path d="M136 40c0-2.8-1.5-5.4-3.9-6.9s-5.4-1.5-7.9-.2L20.2 89c-3.9 2.1-5.3 6.9-3.3 10.8s6.9 5.3 10.8 3.3L120 53.4V464H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h240c4.4 0 8-3.6 8-8s-3.6-8-8-8H136z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 256 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M160 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.8 1.6l-96 64C-.5 111.2-4.4 131 5.4 145.8s29.7 18.7 44.4 8.9L96 123.8V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64z"
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
