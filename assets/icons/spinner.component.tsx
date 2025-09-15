import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SpinnerIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"    fill={colors[colorName || "text"]} >
                <Path
                   
                  d="M304 48a48 48 0 1 0-96 0 48 48 0 1 0 96 0m0 416a48 48 0 1 0-96 0 48 48 0 1 0 96 0M48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96m464-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M142.9 437A48 48 0 1 0 75 369.1a48 48 0 1 0 67.9 67.9m0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437a48 48 0 1 0 67.9-67.9 48 48 0 1 0-67.9 67.9"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"    fill={colors[colorName || "text"]} >
                <Path
                   
                  d="M288 32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0 448a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160-224a32 32 0 1 0 64 0 32 32 0 1 0-64 0M32 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64m43 149a32 32 0 1 0 45.3-45.3A32 32 0 1 0 75 437m316.8 0a32 32 0 1 0 45.2-45.2 32 32 0 1 0-45.2 45.2M75 75a32 32 0 1 0 45.3 45.3A32 32 0 1 0 75 75"
                />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"    fill={colors[colorName || "text"]} >
                <Path
                   
                  d="M256 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 480a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96M64 256a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-64 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m464 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96M120.2 391.8a16 16 0 1 0-22.6 22.6 16 16 0 1 0 22.6-22.6M75 437a48 48 0 1 1 67.9-67.9A48 48 0 1 1 75 437m22.6-316.8a16 16 0 1 0 22.6-22.6 16 16 0 1 0-22.6 22.6M142.9 75A48 48 0 1 1 75 142.9 48 48 0 1 1 142.9 75m271.5 339.4a16 16 0 1 0-22.6-22.6 16 16 0 1 0 22.6 22.6m-45.3-45.3A48 48 0 1 1 437 437a48 48 0 1 1-67.9-67.9"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"    fill={colors[colorName || "text"]} >
                <Path
                   
                  d="M256 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 496a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96M80 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m464 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96M131.5 380.5a32 32 0 1 0-45.2 45.2 32 32 0 1 0 45.3-45.3zM75 437a48 48 0 1 1 67.9-67.9A48 48 0 1 1 75 437m11.3-305.5a32 32 0 1 0 45.3-45.3 32 32 0 1 0-45.3 45.3M142.9 75A48 48 0 1 1 75 142.9 48 48 0 1 1 142.9 75m282.8 350.7a32 32 0 1 0-45.3-45.3 32 32 0 1 0 45.3 45.3m-56.6-56.6A48 48 0 1 1 437 437a48 48 0 1 1-67.9-67.9"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"    fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M369.1 75a48 48 0 1 1 67.9 67.9A48 48 0 1 1 369.1 75M416 256a48 48 0 1 1 96 0 48 48 0 1 1-96 0M208 464a48 48 0 1 1 96 0 48 48 0 1 1-96 0M75 369.1a48 48 0 1 1 67.9 67.9A48 48 0 1 1 75 369.1m294.2 0A48 48 0 1 1 437 437a48 48 0 1 1-67.9-67.9z"
                />
                <Path
                   
                  d="M304 48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M96 256a48 48 0 1 0-96 0 48 48 0 1 0 96 0M75 142.9A48 48 0 1 0 142.9 75 48 48 0 1 0 75 142.9"
                />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
};
