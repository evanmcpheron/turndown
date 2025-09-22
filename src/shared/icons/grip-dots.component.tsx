import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const GripDotsIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M336 176a48 48 0 1 0 96 0 48 48 0 1 0-96 0m-160 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0M64 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96m272 112a48 48 0 1 0 96 0 48 48 0 1 0-96 0m-112 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96M16 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M352 192a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-160 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0M64 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64m288 96a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M32 320a32 32 0 1 0 64 0 32 32 0 1 0-64 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M384 192a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-160 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96M48 176a16 16 0 1 0 32 0 16 16 0 1 0-32 0m64 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0m272 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-176 48a16 16 0 1 0 32 0 16 16 0 1 0-32 0m64 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0M64 352a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M384 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-160 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96M32 176a32 32 0 1 0 64 0 32 32 0 1 0-64 0m80 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0m272 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-192 48a32 32 0 1 0 64 0 32 32 0 1 0-64 0m80 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0M64 368a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M384 288a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-112 48a48 48 0 1 1-96 0 48 48 0 1 1 96 0"
                />
                <Path d="M384 128a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-112 48a48 48 0 1 1-96 0 48 48 0 1 1 96 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
