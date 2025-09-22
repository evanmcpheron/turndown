import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const GripDotsVerticalIcon: React.FC<
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
              <Svg viewBox="0 0 256 512" fill={colors[colorName || "text"]}>
                <Path d="M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0 160a48 48 0 1 0 0-96 48 48 0 1 0 0 96m48 112a48 48 0 1 0-96 0 48 48 0 1 0 96 0m112-272a48 48 0 1 0 0-96 48 48 0 1 0 0 96m48 112a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 208a48 48 0 1 0 0-96 48 48 0 1 0 0 96" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 256 512" fill={colors[colorName || "text"]}>
                <Path d="M64 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32 128a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96-288a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32 128a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 256 512" fill={colors[colorName || "text"]}>
                <Path d="M64 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0M0 96a48 48 0 1 1 96 0 48 48 0 1 1-96 0m64 160a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-64 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96M224 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-64 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96m16 208a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-64 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 256 512" fill={colors[colorName || "text"]}>
                <Path d="M80 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0M0 96a48 48 0 1 1 96 0 48 48 0 1 1-96 0m80 160a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96M240 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m32 208a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 256 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M160 96a48 48 0 1 1 96 0 48 48 0 1 1-96 0m0 160a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 112a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
                />
                <Path d="M0 96a48 48 0 1 1 96 0 48 48 0 1 1-96 0m0 160a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 112a48 48 0 1 1 0 96 48 48 0 1 1 0-96" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
