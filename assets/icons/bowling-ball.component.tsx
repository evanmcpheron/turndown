import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BowlingBallIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M240 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-32 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-64-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M240 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-32 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-64-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m240-72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-120-8a24 24 0 1 1 48 0 24 24 0 1 1-48 0m120-88a24 24 0 1 1 0 48 24 24 0 1 1 0-48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m240-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m16 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-144-32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m96-112a32 32 0 1 1 0 64 32 32 0 1 1 0-64m16 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M208 112a32 32 0 1 1 64 0 32 32 0 1 1-64 0m0 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-64-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M240 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-32 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-64-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
