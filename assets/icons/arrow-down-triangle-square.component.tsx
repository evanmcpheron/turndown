import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowDownTriangleSquareIcon: React.FC<
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
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2l32.4 35.3V64c0-17.7 14.3-32 32-32s32 14.3 32 32v301.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM443.1 47l80 128c6.2 9.9 6.5 22.3.9 32.5S507.6 224 496 224H336c-11.6 0-22.3-6.3-28-16.5s-5.3-22.6.9-32.5l80-128c5.8-9.4 16.1-15 27.1-15s21.3 5.7 27.1 15M320 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="m47 377 96 96c9.4 9.4 24.6 9.4 33.9 0l96-96c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v342.1L81 343c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9zM416 32c-9.9 0-19.1 5.2-24.2 13.7L307.6 186c-2.3 3.9-3.6 8.4-3.6 12.9 0 13.8 11.2 25.1 25.1 25.1h173.8c13.8 0 25.1-11.2 25.1-25.1 0-4.5-1.2-9-3.6-12.9L440.2 45.7C435.1 37.2 425.9 32 416 32m-48 400v-96h96v96zm48-333.4 46.4 77.4h-92.8zM320 432c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="m267.3 379.3-96 96c-6.2 6.2-16.4 6.2-22.6 0l-96-96c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l68.7 68.7V48c0-8.8 7.2-16 16-16s16 7.2 16 16v377.4l68.7-68.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6M352 432c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16zm64-364.5L341.3 192h149.4zM307.6 186l84.2-140.3C396.9 37.2 406.1 32 416 32s19.1 5.2 24.2 13.7L524.4 186c2.3 3.9 3.6 8.4 3.6 12.9 0 13.8-11.2 25.1-25.1 25.1H329.1c-13.8 0-25.1-11.2-25.1-25.1 0-4.5 1.2-9 3.6-12.9M320 432v-96c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="m269.7 373.7-104 104c-3.1 3.1-8.2 3.1-11.3 0l-104-104c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l90.3 90.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8v412.7l90.3-90.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zM416 32c9.9 0 19.1 5.2 24.2 13.7L524.4 186c2.3 3.9 3.6 8.4 3.6 12.9 0 13.8-11.2 25.1-25.1 25.1H329.1c-13.8 0-25.1-11.2-25.1-25.1 0-4.5 1.2-9 3.6-12.9l84.2-140.3C396.9 37.2 406.1 32 416 32m-80 400c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32zm-14.7-237.7c-.8 1.4-1.3 3-1.3 4.7 0 5 4.1 9.1 9.1 9.1h173.8c5 0 9.1-4.1 9.1-9.1 0-1.6-.4-3.3-1.3-4.7L426.5 54c-2.2-3.7-6.2-6-10.5-6s-8.3 2.3-10.5 6zM320 432v-96c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M416 32c11 0 21.3 5.7 27.1 15l80 128c6.2 9.9 6.5 22.3.9 32.5S507.6 224 496 224H336c-11.6 0-22.3-6.3-28-16.5s-5.3-22.6.9-32.5l80-128c5.8-9.4 16.1-15 27.1-15m-48 256h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48"
                />
                <Path d="M160 480c9 0 17.5-3.8 23.6-10.4l88-96c11.9-13 11.1-33.3-2-45.2s-33.3-11.1-45.2 2L192 365.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v301.7l-32.4-35.3c-11.9-13-32.2-13.9-45.2-2s-13.9 32.2-2 45.2l88 96c6.1 6.6 14.6 10.4 23.6 10.4" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
