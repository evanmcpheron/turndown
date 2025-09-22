import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const GridRound2Icon: React.FC<
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
                <Path d="M128 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192m0 256a96 96 0 1 0 0 192 96 96 0 1 0 0-192m160-160a96 96 0 1 0 192 0 96 96 0 1 0-192 0m96 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M128 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96m96-48a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-96 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96m96-48a96 96 0 1 1-192 0 96 96 0 1 1 192 0m112-256a48 48 0 1 0 96 0 48 48 0 1 0-96 0m48 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0 208a48 48 0 1 0 0-96 48 48 0 1 0 0 96m96-48a96 96 0 1 1-192 0 96 96 0 1 1 192 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M128 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128m96-64a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-96 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128m96-64a96 96 0 1 1-192 0 96 96 0 1 1 192 0m96-256a64 64 0 1 0 128 0 64 64 0 1 0-128 0m64 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0 224a64 64 0 1 0 0-128 64 64 0 1 0 0 128m96-64a96 96 0 1 1-192 0 96 96 0 1 1 192 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M128 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160m96-80a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-96 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160m96-80a96 96 0 1 1-192 0 96 96 0 1 1 192 0m80-256a80 80 0 1 0 160 0 80 80 0 1 0-160 0m80 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0 240a80 80 0 1 0 0-160 80 80 0 1 0 0 160m96-80a96 96 0 1 1-192 0 96 96 0 1 1 192 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M384 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192M128 288a96 96 0 1 0 0 192 96 96 0 1 0 0-192"
                />
                <Path d="M128 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192m256 256a96 96 0 1 0 0 192 96 96 0 1 0 0-192" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
