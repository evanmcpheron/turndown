import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowsMinimizeIcon: React.FC<
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
                <Path d="M9.4 9.4c12.5-12.5 32.7-12.5 45.2 0L160 114.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32v128c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h50.7L9.4 54.6C-3.1 42.1-3.1 21.9 9.4 9.4m448 0c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L397.3 160H448c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v50.7zM32 320c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-50.7L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L114.7 352H64c-17.7 0-32-14.3-32-32m256 0c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-50.7l105.3 105.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L352 397.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M23 23c9.4-9.4 24.6-9.4 33.9 0l119 119V56c0-13.3 10.7-24 24-24s24 10.7 24 24v144c0 13.3-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h86.1L23 57c-9.4-9.4-9.4-24.6 0-33.9zm466 0c9.4 9.4 9.4 24.6 0 33.9l-119 119h86c13.3 0 24 10.7 24 24s-10.7 24-24 24H312c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v86.1L455 23c9.4-9.4 24.6-9.4 33.9 0zM56 336c-13.3 0-24-10.7-24-24s10.7-24 24-24h144c13.3 0 24 10.7 24 24v144c0 13.3-10.7 24-24 24s-24-10.7-24-24v-86.1L57 489c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l119-119H56zm232-24c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24s-10.7 24-24 24h-86.1L489 455c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-119-119V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V312z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M36.7 36.7c6.2-6.2 16.4-6.2 22.6 0L192 169.4V64c0-8.8 7.2-16 16-16s16 7.2 16 16v144c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h105.4L36.7 59.3c-6.2-6.2-6.2-16.4 0-22.6m416 0c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L342.6 192H448c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16s16 7.2 16 16v105.4zM48 304c0-8.8 7.2-16 16-16h144c8.8 0 16 7.2 16 16v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V342.6L59.3 475.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L169.4 320H64c-8.8 0-16-7.2-16-16m240 0c0-8.8 7.2-16 16-16h144c8.8 0 16 7.2 16 16s-7.2 16-16 16H342.6l132.7 132.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L320 342.6V448c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M34.3 34.3c3.1-3.1 8.2-3.1 11.3 0L208 196.7V72c0-4.4 3.6-8 8-8s8 3.6 8 8v144c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h124.7L34.3 45.7c-3.1-3.1-3.1-8.2 0-11.3zm443.3 0c3.1 3.1 3.1 8.2 0 11.3L315.3 208H440c4.4 0 8 3.6 8 8s-3.6 8-8 8H296c-4.4 0-8-3.6-8-8V72c0-4.4 3.6-8 8-8s8 3.6 8 8v124.7L466.3 34.3c3.1-3.1 8.2-3.1 11.3 0M72 304c-4.4 0-8-3.6-8-8s3.6-8 8-8h144c4.4 0 8 3.6 8 8v144c0 4.4-3.6 8-8 8s-8-3.6-8-8V315.3L45.7 477.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L196.7 304zm216-8c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H315.3l162.4 162.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L304 315.3V440c0 4.4-3.6 8-8 8s-8-3.6-8-8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M457.4 9.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L397.3 160H448c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v50.7zM32 320c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-50.7L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L114.7 352H64c-17.7 0-32-14.3-32-32"
                />
                <Path d="M9.4 9.4c12.5-12.5 32.7-12.5 45.2 0L160 114.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32v128c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h50.7L9.4 54.6C-3.1 42.1-3.1 21.9 9.4 9.4M288 320c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-50.7l105.3 105.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L352 397.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
