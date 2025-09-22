import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const FaceSmileUpsideDownIcon: React.FC<
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
                <Path d="M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m91.9 186.5C330 165.8 299.4 144 256 144s-74 21.8-91.9 42.5c-5.8 6.7-15.9 7.4-22.6 1.6s-7.4-15.9-1.6-22.6c22.2-25.7 61-53.5 116.1-53.5s93.8 27.9 116.1 53.5c5.8 6.7 5.1 16.8-1.6 22.6s-16.8 5.1-22.6-1.6M367.6 304a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-192 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1-416 0m464 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-334.4-62.1c15.2-16.4 41.2-33.9 78.4-33.9s63.2 17.5 78.4 33.9c9 9.7 24.2 10.4 33.9 1.4s10.4-24.2 1.4-33.9c-22-23.8-60-49.4-113.6-49.4s-91.7 25.5-113.6 49.4c-9 9.7-8.4 24.9 1.4 33.9s24.9 8.4 33.9-1.4zM208.4 304a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M32 256a224 224 0 1 1 448 0 224 224 0 1 1-448 0m480 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-347.9-69.5C182 165.8 212.6 144 256 144s74 21.8 91.9 42.5c5.8 6.7 15.9 7.4 22.6 1.6s7.4-15.9 1.6-22.6c-22.3-25.6-61-53.5-116.1-53.5s-93.8 27.9-116.1 53.5c-5.8 6.7-5.1 16.8 1.6 22.6s16.8 5.1 22.6-1.6M200.4 304a24 24 0 1 0-48 0 24 24 0 1 0 48 0m136-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M16 256a240 240 0 1 1 480 0 240 240 0 1 1-480 0m496 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-361.4-67.4c20.8-29.8 56-60.6 105.4-60.6s84.6 30.8 105.4 60.6c2.5 3.6 7.5 4.5 11.1 2s4.5-7.5 2-11.1C352.1 147.4 312.7 112 256 112s-96.1 35.4-118.6 67.4c-2.5 3.6-1.7 8.6 2 11.1s8.6 1.7 11.1-2zM192.4 304a16 16 0 1 0-32 0 16 16 0 1 0 32 0m144-16a16 16 0 1 0 0 32 16 16 0 1 0 0-32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m91.9 186.5C330 165.8 299.4 144 256 144s-74 21.8-91.9 42.5c-5.8 6.7-15.9 7.4-22.6 1.6s-7.4-15.9-1.6-22.6c22.2-25.7 61-53.5 116.1-53.5s93.8 27.9 116.1 53.5c5.8 6.7 5.1 16.8-1.6 22.6s-16.8 5.1-22.6-1.6M367.6 304a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-192 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
                />
                <Path d="M175.6 272a32 32 0 1 0 0 64 32 32 0 1 0 0-64m160 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
