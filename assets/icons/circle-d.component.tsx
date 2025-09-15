import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleDIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384h72c70.7 0 128 57.3 128 128s-57.3 128-128 128h-72c-13.3 0-24-10.7-24-24V152c0-13.3 10.7-24 24-24m72 208c44.2 0 80-35.8 80-80s-35.8-80-80-80h-48v160z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384c-13.3 0-24 10.7-24 24v208c0 13.3 10.7 24 24 24h72c70.7 0 128-57.3 128-128s-57.3-128-128-128zm72 208h-48V176h48c44.2 0 80 35.8 80 80s-35.8 80-80 80" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-160h-64V160h64c53 0 96 43 96 96s-43 96-96 96m-65.2-224c-17 0-30.8 13.8-30.8 30.8v194.4c0 17 13.8 30.8 30.8 30.8H256c70.7 0 128-57.3 128-128s-57.3-128-128-128z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-361.1c0-3.8 3.1-6.9 6.9-6.9H256c61.9 0 112 50.1 112 112s-50.1 112-112 112h-73.1c-3.8 0-6.9-3.1-6.9-6.9zm6.9-22.9c-12.6 0-22.9 10.2-22.9 22.9v210.2c0 12.6 10.2 22.9 22.9 22.9H256c70.7 0 128-57.3 128-128s-57.3-128-128-128z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384h72c70.7 0 128 57.3 128 128s-57.3 128-128 128h-72c-13.3 0-24-10.7-24-24V152c0-13.3 10.7-24 24-24m72 208c44.2 0 80-35.8 80-80s-35.8-80-80-80h-48v160z"
                />
                <Path d="M160 152c0-13.3 10.7-24 24-24h72c70.7 0 128 57.3 128 128s-57.3 128-128 128h-72c-13.3 0-24-10.7-24-24zm48 24v160h48c44.2 0 80-35.8 80-80s-35.8-80-80-80z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
