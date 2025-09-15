import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const EllipsisStrokeVerticalIcon: React.FC<
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
                <Path d="M96 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0 96a72 72 0 1 1 0-144 72 72 0 1 1 0 144m24 88a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-96 0a72 72 0 1 1 144 0 72 72 0 1 1-144 0m96 160a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-96 0a72 72 0 1 1 144 0 72 72 0 1 1-144 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 192 512"  fill={colors[colorName || "text"]} >
                <Path d="M96 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0 88a64 64 0 1 1 0-128 64 64 0 1 1 0 128m24 96a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m88 160a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 192 512"  fill={colors[colorName || "text"]} >
                <Path d="M96 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0 96a64 64 0 1 1 0-128 64 64 0 1 1 0 128m32 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m96 160a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 192 512"  fill={colors[colorName || "text"]} >
                <Path d="M96 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0 80a48 48 0 1 1 0-96 48 48 0 1 1 0 96m32 112a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m80 160a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 192 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M96 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 96a72 72 0 1 0 0-144 72 72 0 1 0 0 144"
                />
                <Path d="M96 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0 96a72 72 0 1 1 0-144 72 72 0 1 1 0 144m0 224a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0 96a72 72 0 1 1 0-144 72 72 0 1 1 0 144" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
