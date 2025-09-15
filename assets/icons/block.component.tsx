import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BlockIcon: React.FC<
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
                <Path d="M96 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm96 8a24 24 0 1 0-48 0 24 24 0 1 0 48 0m280 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M192 408a24 24 0 1 0-48 0 24 24 0 1 0 48 0m280 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M480 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM160 32c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm48 88a24 24 0 1 0-48 0 24 24 0 1 0 48 0m248 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M208 392a24 24 0 1 0-48 0 24 24 0 1 0 48 0m248 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm48 88a24 24 0 1 0-48 0 24 24 0 1 0 48 0m248 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M112 392a24 24 0 1 0-48 0 24 24 0 1 0 48 0m248 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M384 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 80a16 16 0 1 0-32 0 16 16 0 1 0 32 0m272 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32M96 400a16 16 0 1 0-32 0 16 16 0 1 0 32 0m272 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 8a24 24 0 1 0-48 0 24 24 0 1 0 48 0m280 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M96 408a24 24 0 1 0-48 0 24 24 0 1 0 48 0m280 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
                />
                <Path d="M72 128a24 24 0 1 0 0-48 24 24 0 1 0 0 48m304 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48M96 408a24 24 0 1 0-48 0 24 24 0 1 0 48 0m280 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
