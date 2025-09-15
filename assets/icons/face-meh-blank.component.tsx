import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const FaceMehBlankIcon: React.FC<
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
                <Path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m208.4-48a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416m256 208a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-367.6-48a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448m256 224a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-359.6-48a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480m256 240a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-351.6-48a16 16 0 1 1 32 0 16 16 0 1 1-32 0m176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m208.4-48a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <Path d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
