import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CrossIcon: React.FC<
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
                <Path d="M176 0c-26.5 0-48 21.5-48 48v80H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h80v208c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V256h80c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48h-80V48c0-26.5-21.5-48-48-48z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M112 48c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64v192c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V272H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h64zm112 0h-64v88c0 13.3-10.7 24-24 24H48v64h88c13.3 0 24 10.7 24 24v216h64V248c0-13.3 10.7-24 24-24h88v-64h-88c-13.3 0-24-10.7-24-24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M128 40c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v88h88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-88v216c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40V256H40c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h88zm40-8c-4.4 0-8 3.6-8 8v104c0 8.8-7.2 16-16 16H40c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h104c8.8 0 16 7.2 16 16v232c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V240c0-8.8 7.2-16 16-16h104c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H240c-8.8 0-16-7.2-16-16V40c0-4.4-3.6-8-8-8z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M128 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-96v224c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V256H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h96zm32-16c-8.8 0-16 7.2-16 16v104c0 4.4-3.6 8-8 8H32c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h104c4.4 0 8 3.6 8 8v232c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V248c0-4.4 3.6-8 8-8h104c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H248c-4.4 0-8-3.6-8-8V32c0-8.8-7.2-16-16-16z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M176 0c-26.5 0-48 21.5-48 48v80H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h80v208c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V256h80c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48h-80V48c0-26.5-21.5-48-48-48z"
                />
                <Path d="M128 256h128v32H128z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
