import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const GripLinesVerticalIcon: React.FC<
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
              <Svg viewBox="0 0 192 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v384c0 17.7 14.3 32 32 32s32-14.3 32-32zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32v384c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 192 512"  fill={colors[colorName || "text"]} >
                <Path d="M32 32C18.7 32 8 42.7 8 56v400c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24m128 0c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 192 512"  fill={colors[colorName || "text"]} >
                <Path d="M32 32c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16m128 0c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 192 512"  fill={colors[colorName || "text"]} >
                <Path d="M32 32c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8m128 0c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 192 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M128 64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
                />
                <Path d="M0 64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 17.7-14.3 32-32 32S0 465.7 0 448z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
