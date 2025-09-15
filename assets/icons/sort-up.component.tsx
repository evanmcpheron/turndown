import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SortUpIcon: React.FC<
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
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9S19 224.1 32 224.1h256c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path d="M160 86.6 70.6 176h178.8zm-22.6-45.2c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301 224.1 288 224.1H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path d="M154.4 66.2c1.4-1.3 3.5-2.2 5.6-2.2s4.2.8 5.6 2.2l120.2 113.5c1.4 1.3 2.2 3.2 2.2 5.2 0 3.9-3.2 7.1-7.1 7.1H39.1c-3.9 0-7.1-3.2-7.1-7.1 0-2 .8-3.8 2.2-5.2zm-22-23.3L12.3 156.4C4.4 163.8 0 174.1 0 184.9 0 206.5 17.5 224 39.1 224h241.8c21.6 0 39.1-17.5 39.1-39.1 0-10.8-4.4-21.1-12.3-28.5L187.6 42.9c-7.5-7-17.4-10.9-27.6-10.9s-20.1 3.9-27.6 10.9" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path d="M144.6 54.6c4-4.2 9.6-6.6 15.4-6.6s11.4 2.4 15.4 6.6l125.1 132.1c2.2 2.3 3.5 5.4 3.5 8.7 0 7-5.6 12.6-12.6 12.6H28.6c-7 0-12.6-5.6-12.6-12.6 0-3.2 1.2-6.3 3.5-8.7zm-11.6-11L7.8 175.7C2.8 181 0 188.1 0 195.4 0 211.2 12.8 224 28.6 224h262.8c15.8 0 28.6-12.8 28.6-28.6 0-7.3-2.8-14.4-7.8-19.7L187 43.6c-7-7.4-16.8-11.6-27-11.6s-20 4.2-27 11.6" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M137.4 470.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301 287.9 288 287.9H32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128zM109.3 352h101.4L160 402.7z"
                />
                <Path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9S19 224.1 32 224.1h256c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
