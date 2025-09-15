import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleThreeQuartersStrokeIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 64v160c0 17.7 14.3 32 32 32h160c0-106-86-192-192-192M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 48v176c0 17.7 14.3 32 32 32h176c0-114.9-93.1-208-208-208M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M477.7 288H272c-26.5 0-48-21.5-48-48V34.3C115.4 49.8 32 143.2 32 256c0 123.7 100.3 224 224 224 112.8 0 206.2-83.4 221.7-192m2.3-32c0-123.7-100.3-224-224-224v208c0 8.8 7.2 16 16 16zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M495.5 272H280c-22.1 0-40-17.9-40-40V16.5C114.9 24.8 16 128.8 16 256c0 132.5 107.5 240 240 240 127.2 0 231.2-98.9 239.5-224m.5-16c0-132.5-107.5-240-240-240v216c0 13.3 10.7 24 24 24zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 0c141.4 0 256 114.6 256 256h-64c0-106-86-192-192-192z"
                />
                <Path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256H288c-17.7 0-32-14.3-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
