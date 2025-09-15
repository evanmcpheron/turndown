import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BatteryFullIcon: React.FC<
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
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M464 160c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16zM80 96c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h384c44.2 0 80-35.8 80-80v-16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-16c0-44.2-35.8-80-80-80zm368 96H96v128h352z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M464 144c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V176c0-17.7 14.3-32 32-32zM80 96c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h384c44.2 0 80-35.8 80-80v-16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-16c0-44.2-35.8-80-80-80zm368 96H96v128h352z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M432 128c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48zM80 96c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h352c44.2 0 80-35.8 80-80V176c0-44.2-35.8-80-80-80zm496 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16zm-464-16h288c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16m-48 16v96c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48H112c-26.5 0-48 21.5-48 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M448 112c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V176c0-35.3 28.7-64 64-64zm80 224v-16h16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-16v-16c0-44.2-35.8-80-80-80H80c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h368c44.2 0 80-35.8 80-80m0-32v-96h16c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16zM112 176h304c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32m-48 32v96c0 26.5 21.5 48 48 48h304c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48H112c-26.5 0-48 21.5-48 48" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M80 160c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16zM0 176c0-44.2 35.8-80 80-80h384c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80z"
                />
                <Path d="M96 192h352v128H96z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
