import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const ArrowLeftFromArcIcon: React.FC<
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
                <Path d="M448 256c0-106-86-192-192-192-17.7 0-32-14.3-32-32s14.3-32 32-32c141.4 0 256 114.6 256 256S397.4 512 256 512c-17.7 0-32-14.3-32-32s14.3-32 32-32c106 0 192-86 192-192M121.4 121.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 224H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H109.3l57.4 57.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-112-112c-12.5-12.5-12.5-32.8 0-45.3z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M464 256c0-114.9-93.1-208-208-208-13.3 0-24-10.7-24-24s10.7-24 24-24c141.4 0 256 114.6 256 256S397.4 512 256 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c114.9 0 208-93.1 208-208M119.7 134.4c9.7-9 24.9-8.5 33.9 1.3s8.5 24.9-1.3 33.9L85.1 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H85.1l67.2 62.4c9.7 9 10.3 24.2 1.3 33.9s-24.2 10.3-33.9 1.3l-112-104C2.8 269 0 262.7 0 256s2.8-13 7.7-17.6z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M480 256c0-123.7-100.3-224-224-224-8.8 0-16-7.2-16-16s7.2-16 16-16c141.4 0 256 114.6 256 256S397.4 512 256 512c-8.8 0-16-7.2-16-16s7.2-16 16-16c123.7 0 224-100.3 224-224M149.4 116c6.6-5.9 16.7-5.3 22.6 1.3s5.3 16.7-1.3 22.6L58.1 240H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H58.1l112.5 100c6.6 5.9 7.2 16 1.3 22.6s-16 7.2-22.6 1.3L5.4 268C2 264.9 0 260.6 0 256s2-8.9 5.4-12z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M496 256c0-132.5-107.5-240-240-240-4.4 0-8-3.6-8-8s3.6-8 8-8c141.4 0 256 114.6 256 256S397.4 512 256 512c-4.4 0-8-3.6-8-8s3.6-8 8-8c132.5 0 240-107.5 240-240M154.8 121.9c3.4-2.8 8.4-2.4 11.3 1s2.4 8.4-1 11.3L29.9 248H344c4.4 0 8 3.6 8 8s-3.6 8-8 8H29.9l135.3 113.9c3.4 2.8 3.8 7.9 1 11.3s-7.9 3.8-11.3 1l-152-128C1 260.6 0 258.4 0 256s1-4.6 2.8-6.1z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 64c106 0 192 86 192 192s-86 192-192 192c-17.7 0-32 14.3-32 32s14.3 32 32 32c141.4 0 256-114.6 256-256S397.4 0 256 0c-17.7 0-32 14.3-32 32s14.3 32 32 32"
                />
                <Path d="M166.6 121.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288H320c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l57.4-57.4c12.5-12.5 12.5-32.8 0-45.3z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
