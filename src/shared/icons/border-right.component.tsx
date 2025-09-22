import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const BorderRightIcon: React.FC<
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
                <Path d="M416 32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.7 14.3-32 32-32m-96 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-128a32 32 0 1 1 0-64 32 32 0 1 1 0 64M128 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m96-128a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-128a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192-32a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M424 32c13.3 0 24 10.7 24 24v400c0 13.3-10.7 24-24 24s-24-10.7-24-24V56c0-13.3 10.7-24 24-24M320 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-128a32 32 0 1 1 0-64 32 32 0 1 1 0 64M128 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m96-128a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-128a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192-32a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M432 32c8.8 0 16 7.2 16 16v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.8 7.2-16 16-16M320 88a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0 336a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0-144a24 24 0 1 1 0-48 24 24 0 1 1 0 48M128 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 432a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-240a24 24 0 1 1 0 48 24 24 0 1 1 0-48m96-144a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0 336a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0-144a24 24 0 1 1 0-48 24 24 0 1 1 0 48M32 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 432a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-240a24 24 0 1 1 0 48 24 24 0 1 1 0-48m192-48a24 24 0 1 1 0-48 24 24 0 1 1 0 48M32 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 240a24 24 0 1 1 0-48 24 24 0 1 1 0 48m192-48a24 24 0 1 1 0 48 24 24 0 1 1 0-48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M440 32c4.4 0 8 3.6 8 8v432c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-4.4 3.6-8 8-8M320 80a16 16 0 1 1 0-32 16 16 0 1 1 0 32m0 352a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0-160a16 16 0 1 1 0-32 16 16 0 1 1 0 32M128 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 416a16 16 0 1 1 0-32 16 16 0 1 1 0 32m0-224a16 16 0 1 1 0 32 16 16 0 1 1 0-32m96-160a16 16 0 1 1 0-32 16 16 0 1 1 0 32m0 352a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0-160a16 16 0 1 1 0-32 16 16 0 1 1 0 32M32 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 416a16 16 0 1 1 0-32 16 16 0 1 1 0 32m0-224a16 16 0 1 1 0 32 16 16 0 1 1 0-32m192-64a16 16 0 1 1 0-32 16 16 0 1 1 0 32M32 144a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 224a16 16 0 1 1 0-32 16 16 0 1 1 0 32m192-32a16 16 0 1 1 0 32 16 16 0 1 1 0-32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M320 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 384a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-128a32 32 0 1 1 0-64 32 32 0 1 1 0 64M128 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m96-128a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-128a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m192-32a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <Path d="M416 32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.7 14.3-32 32-32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
