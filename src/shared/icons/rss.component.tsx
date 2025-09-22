import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const RssIcon: React.FC<
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
                <Path d="M0 64c0-17.7 14.3-32 32-32 229.8 0 416 186.2 416 416 0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96 14.3 96 0 81.7 0 64m0 352a64 64 0 1 1 128 0 64 64 0 1 1-128 0m32-256c159.1 0 288 128.9 288 288 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224-17.7 0-32-14.3-32-32s14.3-32 32-32" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M0 56c0-13.3 10.7-24 24-24 234.2 0 424 189.8 424 424 0 13.3-10.7 24-24 24s-24-10.7-24-24C400 248.3 231.7 80 24 80 10.7 80 0 69.3 0 56m64 376a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128M24 176c154.6 0 280 125.4 280 280 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-128.1-103.9-232-232-232-13.3 0-24-10.7-24-24s10.7-24 24-24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16c220.9 0 400 179.1 400 400 0 8.8 7.2 16 16 16s16-7.2 16-16C448 225.4 254.6 32 16 32m0 144c-8.8 0-16 7.2-16 16s7.2 16 16 16c141.4 0 256 114.6 256 256 0 8.8 7.2 16 16 16s16-7.2 16-16c0-159.1-128.9-288-288-288m16 240a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8c234.2 0 424 189.8 424 424 0 4.4 3.6 8 8 8s8-3.6 8-8C448 229 251 32 8 32m0 144c-4.4 0-8 3.6-8 8s3.6 8 8 8c154.6 0 280 125.4 280 280 0 4.4 3.6 8 8 8s8-3.6 8-8c0-163.5-132.5-296-296-296m8 240a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32c194.4 0 352 157.6 352 352 0 17.7 14.3 32 32 32s32-14.3 32-32C448 218.2 261.8 32 32 32m0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32c123.7 0 224 100.3 224 224 0 17.7 14.3 32 32 32s32-14.3 32-32c0-159.1-128.9-288-288-288"
                />
                <Path d="M0 416a64 64 0 1 1 128 0 64 64 0 1 1-128 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
