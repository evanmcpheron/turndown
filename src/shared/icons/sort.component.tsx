import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const SortIcon: React.FC<
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
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301 224.1 288 224.1H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3-128-128c-9.2-9.2-11.9-22.9-6.9-34.9S19.1 288 32.1 288H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M70.6 176h178.8L160 86.6zm112-134.6 128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128c12.5-12.5 32.8-12.5 45.3 0M70.6 336l89.4 89.4 89.4-89.4zm112 134.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9S19 287.9 32 287.9h256c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M34.2 179.7 154.4 66.2c1.4-1.3 3.5-2.2 5.6-2.2s4.2.8 5.6 2.2l120.2 113.5c1.4 1.3 2.2 3.2 2.2 5.2 0 3.9-3.2 7.1-7.1 7.1H39.1c-3.9 0-7.1-3.2-7.1-7.1 0-2 .8-3.8 2.2-5.2m-22-23.3C4.4 163.8 0 174.1 0 184.9 0 206.5 17.5 224 39.1 224h241.8c21.6 0 39.1-17.5 39.1-39.1 0-10.8-4.4-21.1-12.3-28.4L187.6 42.9c-7.5-7-17.4-10.9-27.6-10.9s-20.1 3.9-27.6 10.9L12.3 156.4zm22 175.9c-1.4-1.3-2.2-3.2-2.2-5.2 0-3.9 3.2-7.1 7.1-7.1h241.8c3.9 0 7.1 3.2 7.1 7.1 0 2-.8 3.8-2.2 5.2L165.6 445.8c-1.4 1.3-3.5 2.2-5.6 2.2s-4.2-.8-5.6-2.2zm-22 23.3 120.2 113.5c7.4 7 17.4 10.9 27.6 10.9s20.1-3.9 27.6-10.9l120.1-113.5c7.8-7.4 12.3-17.7 12.3-28.5 0-21.6-17.5-39.1-39.1-39.1H39.1C17.5 288 0 305.5 0 327.1c0 10.8 4.4 21.1 12.3 28.5z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M19.5 186.7 144.6 54.6c4-4.2 9.6-6.6 15.4-6.6s11.4 2.4 15.4 6.6l125.1 132.1c2.2 2.3 3.5 5.4 3.5 8.7 0 7-5.6 12.6-12.6 12.6H28.6c-7 0-12.6-5.6-12.6-12.6 0-3.2 1.2-6.3 3.5-8.7m-11.6-11C2.8 181 0 188.1 0 195.4 0 211.2 12.8 224 28.6 224h262.8c15.8 0 28.6-12.8 28.6-28.6 0-7.3-2.8-14.4-7.8-19.7L187 43.6c-7-7.4-16.8-11.6-27-11.6s-20 4.2-27 11.6L7.8 175.7zm11.6 149.6c-2.2-2.3-3.5-5.4-3.5-8.7 0-7 5.6-12.6 12.6-12.6h262.8c7 0 12.6 5.6 12.6 12.6 0 3.2-1.2 6.3-3.5 8.7L175.4 457.4c-4 4.2-9.6 6.6-15.4 6.6s-11.4-2.4-15.4-6.6zm-11.6 11L133 468.4c7 7.4 16.8 11.6 27 11.6s20-4.2 27-11.6l125.2-132.1c5-5.3 7.8-12.4 7.8-19.7 0-15.8-12.8-28.6-28.6-28.6H28.6C12.8 288 0 300.8 0 316.6c0 7.3 2.8 14.4 7.8 19.7z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9S19 287.9 32 287.9h256c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
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
