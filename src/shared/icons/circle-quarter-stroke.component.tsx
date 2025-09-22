import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const CircleQuarterStrokeIcon: React.FC<
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
                <Path d="M64 256h160c17.7 0 32-14.3 32-32V64c106 0 192 86 192 192s-86 192-192 192S64 362 64 256m-64 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M464 256c0-114.9-93.1-208-208-208h-4.3c2.7 4.6 4.3 10.1 4.3 16v160c0 17.7-14.3 32-32 32H64c-5.8 0-11.3-1.6-16-4.3v4.3c0 114.9 93.1 208 208 208s208-93.1 208-208M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M480 256c0-123.7-100.3-224-224-224v176c0 26.5-21.5 48-48 48H32c0 123.7 100.3 224 224 224s224-100.3 224-224M224 34.3C125.9 48.3 48.3 125.9 34.3 224H208c8.8 0 16-7.2 16-16zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M496 256c0-132.5-107.5-240-240-240v184c0 22.1-17.9 40-40 40H16.5c-.3 5.3-.5 10.6-.5 16 0 132.5 107.5 240 240 240s240-107.5 240-240M240 16.5C125.6 24.1 33.1 111.8 18.1 224H216c13.3 0 24-10.7 24-24zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64V0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256z"
                />
                <Path d="M256 0C114.6 0 0 114.6 0 256h224c17.7 0 32-14.3 32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
