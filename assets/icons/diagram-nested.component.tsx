import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const DiagramNestedIcon: React.FC<
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
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-16v96c0 17.7 14.3 32 32 32h96v-16c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-16h-96c-53 0-96-43-96-96v-96H48c-26.5 0-48-21.5-48-48z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M144 80v96H48V80zM48 32C21.5 32 0 53.5 0 80v96c0 26.5 21.5 48 48 48h24v96c0 48.6 39.4 88 88 88h96v24c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v24h-96c-22.1 0-40-17.9-40-40v-96h24c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm352 304v96h-96v-96z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M144 64c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zm-32 160h32c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v96c0 26.5 21.5 48 48 48h32v96c0 44.2 35.8 80 80 80h96v32c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v32h-96c-26.5 0-48-21.5-48-48zm176 144v-32c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-64" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M144 48c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32zM48 32C21.5 32 0 53.5 0 80v96c0 26.5 21.5 48 48 48h40v96c0 39.8 32.2 72 72 72h96v40c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v40h-96c-30.9 0-56-25.1-56-56v-96h40c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm352 272c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M64 320v-96h64v96c0 17.7 14.3 32 32 32h96v64h-96c-53 0-96-43-96-96"
                />
                <Path d="M48 32C21.5 32 0 53.5 0 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm256 256c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
