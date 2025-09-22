import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const EllipsisStrokeIcon: React.FC<
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
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M416 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-96a72 72 0 1 0 0 144 72 72 0 1 0 0-144m-160 96a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-96a72 72 0 1 0 0 144 72 72 0 1 0 0-144m-136 72a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-96 0a72 72 0 1 0 144 0 72 72 0 1 0-144 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M416 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-88a64 64 0 1 0 0 128 64 64 0 1 0 0-128m-160 88a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-88a64 64 0 1 0 0 128 64 64 0 1 0 0-128m-136 64a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-88 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M416 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-96a64 64 0 1 0 0 128 64 64 0 1 0 0-128m-160 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-96a64 64 0 1 0 0 128 64 64 0 1 0 0-128m-128 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-96 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M416 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-80a48 48 0 1 0 0 96 48 48 0 1 0 0-96m-160 80a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-80a48 48 0 1 0 0 96 48 48 0 1 0 0-96m-128 48a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-80 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-96a72 72 0 1 0 0 144 72 72 0 1 0 0-144"
                />
                <Path d="M392 256a24 24 0 1 0 48 0 24 24 0 1 0-48 0m96 0a72 72 0 1 1-144 0 72 72 0 1 1 144 0m-416 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0m96 0a72 72 0 1 1-144 0 72 72 0 1 1 144 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
