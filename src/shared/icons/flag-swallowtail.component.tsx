import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const FlagSwallowtailIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32V352h360c13.3 0 24-10.7 24-24 0-5.2-1.7-10.2-4.8-14.4L352 192l91.2-121.6c3.1-4.2 4.8-9.2 4.8-14.4 0-13.3-10.7-24-24-24z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24V352h376c13.3 0 24-10.7 24-24 0-5.2-1.7-10.2-4.8-14.4L352 192l91.2-121.6c3.1-4.2 4.8-9.2 4.8-14.4 0-13.3-10.7-24-24-24H48zm0 56h328l-62.4 83.2a48 48 0 0 0 0 57.6L376 304H48z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M32 16c0-8.8-7.2-16-16-16S0 7.2 0 16v480c0 8.8 7.2 16 16 16s16-7.2 16-16V352h392c13.3 0 24-10.7 24-24 0-5.2-1.7-10.2-4.8-14.4L352 192l91.2-121.6c3.1-4.2 4.8-9.2 4.8-14.4 0-13.3-10.7-24-24-24H32zm0 48h376l-81.6 108.8a32.1 32.1 0 0 0 0 38.4L408 320H32z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8v496c0 4.4 3.6 8 8 8s8-3.6 8-8V352h420.1c6.6 0 11.9-5.3 11.9-11.9 0-2.6-.9-5.2-2.5-7.3L336 192 445.5 51.2c1.6-2.1 2.5-4.7 2.5-7.3 0-6.6-5.3-11.9-11.9-11.9H16zm0 40h411.7L323.4 182.2c-4.5 5.8-4.5 13.9 0 19.6L427.7 336H16z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M424 32H64v320h360c13.3 0 24-10.7 24-24 0-5.2-1.7-10.2-4.8-14.4L352 192l91.2-121.6c3.1-4.2 4.8-9.2 4.8-14.4 0-13.3-10.7-24-24-24"
                />
                <Path d="M32 0c17.7 0 32 14.3 32 32v448c0 17.7-14.3 32-32 32S0 497.7 0 480V32C0 14.3 14.3 0 32 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
