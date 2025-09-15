import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const WifiWeakIcon: React.FC<
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
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 416a64 64 0 1 1 128 0 64 64 0 1 1-128 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M264 424a56 56 0 1 1 112 0 56 56 0 1 1-112 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M320 384a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M320 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2.9zM171.8 312c39.5-34.9 91.3-56 148.2-56s108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8z"
                />
                <Path d="M256 416a64 64 0 1 1 128 0 64 64 0 1 1-128 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
