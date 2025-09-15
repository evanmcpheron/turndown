import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowLeftLongToLineIcon: React.FC<
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
                <Path d="M0 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32S0 78.3 0 96m137.4 137.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 288H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H237.3l73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 88v336c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-13.3-10.7-24-24-24S0 74.7 0 88m135 151c-9.4 9.4-9.4 24.6 0 33.9L271 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-95-95L616 280c13.3 0 24-10.7 24-24s-10.7-24-24-24H209.9l95-95c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 80v352c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16S0 71.2 0 80m132.7 164.7c-6.2 6.2-6.2 16.4 0 22.6l144 144c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L182.6 272H624c8.8 0 16-7.2 16-16s-7.2-16-16-16H182.6l116.7-116.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 72v368c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8s-8 3.6-8 8m130.3 178.3c-3.1 3.1-3.1 8.2 0 11.3l152 152c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L155.3 264H632c4.4 0 8-3.6 8-8s-3.6-8-8-8H155.3l138.4-138.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-152 152z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M32 64C14.3 64 0 78.3 0 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32"
                />
                <Path d="M137.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L237.3 224H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H237.3l73.4 73.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-128-128z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
