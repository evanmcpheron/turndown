import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const FenceIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M76.8 38.4c-3-4-7.8-6.4-12.8-6.4s-9.8 2.4-12.8 6.4L6.4 98.1C2.2 103.7 0 110.4 0 117.3V448c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-32h32v-64h-32V224h32v-64h-32v-42.7c0-6.9-2.2-13.7-6.4-19.2zm192 0c-3-4-7.8-6.4-12.8-6.4s-9.8 2.4-12.8 6.4l-44.8 59.7c-4.2 5.5-6.4 12.3-6.4 19.2V448c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-32h32v-64h-32V224h32v-64h-32v-42.7c0-6.9-2.2-13.7-6.4-19.2zM448 32c-5 0-9.8 2.4-12.8 6.4l-44.8 59.7c-4.2 5.5-6.4 12.3-6.4 19.2V448c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V117.3c0-6.9-2.2-13.7-6.4-19.2l-44.8-59.7c-3-4-7.8-6.4-12.8-6.4" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 32c7.8 0 15 3.7 19.5 10.1l40 56c2.9 4.1 4.5 8.9 4.5 13.9v48h64v-48c0-5 1.6-9.9 4.5-13.9l40-56C241 35.7 248.2 32 256 32s15 3.7 19.5 10.1l40 56c2.9 4.1 4.5 8.9 4.5 13.9v48h64v-48c0-5 1.6-9.9 4.5-13.9l40-56C433 35.7 440.2 32 448 32s15 3.7 19.5 10.1l40 56c2.9 4.1 4.5 8.9 4.5 13.9v336c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-48h-64v48c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-48h-64v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V112c0-5 1.6-9.9 4.5-13.9l40-56C49 35.7 56.2 32 64 32m256 320h64V208h-64zM192 208h-64v144h64zM48 119.7V432h32V119.7L64 97.3zm192 0V432h32V119.7l-16-22.4zM432 432h32V119.7l-16-22.4-16 22.4z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 32c5 0 9.8 2.4 12.8 6.4l44.8 59.7c4.2 5.5 6.4 12.3 6.4 19.2V160h64v-42.7c0-6.9 2.2-13.7 6.4-19.2l44.8-59.7c3-4 7.8-6.4 12.8-6.4s9.8 2.4 12.8 6.4l44.8 59.7c4.2 5.5 6.4 12.3 6.4 19.2V160h64v-42.7c0-6.9 2.2-13.7 6.4-19.2l44.8-59.7c3-4 7.8-6.4 12.8-6.4s9.8 2.4 12.8 6.4l44.8 59.7c4.2 5.5 6.4 12.3 6.4 19.2V448c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64h-64v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64h-64v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V117.3c0-6.9 2.2-13.7 6.4-19.2l44.8-59.7c3-4 7.8-6.4 12.8-6.4m224 352V117.3l-32-42.6-32 42.7V448h64zm32-32h64V192h-64zm96 0v96h64V117.3l-32-42.6-32 42.7zM192 192h-64v160h64zm-96 0v-74.7L64 74.7l-32 42.6V448h64V192" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M72 32c2.5 0 4.9 1.2 6.4 3.2l44.8 59.7c3.1 4.2 4.8 9.2 4.8 14.4V160h72v-50.7c0-5.2 1.7-10.2 4.8-14.4l44.8-59.7c1.5-2 3.9-3.2 6.4-3.2s4.9 1.2 6.4 3.2l44.8 59.7c3.1 4.2 4.8 9.2 4.8 14.4V160h72v-50.7c0-5.2 1.7-10.2 4.8-14.4l44.8-59.7c1.5-2 3.9-3.2 6.4-3.2s4.9 1.2 6.4 3.2l44.8 59.7c3.1 4.2 4.8 9.2 4.8 14.4V456c0 13.3-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24v-88h-72v88c0 13.3-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24v-88h-72v88c0 13.3-10.7 24-24 24H40c-13.3 0-24-10.7-24-24V109.3c0-5.2 1.7-10.2 4.8-14.4l44.8-59.7c1.5-2 3.9-3.2 6.4-3.2m240 320h72V176h-72zM200 176h-72v176h72zM72 53.3l-38.4 51.2c-1 1.4-1.6 3.1-1.6 4.8V456c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V109.3c0-1.7-.6-3.4-1.6-4.8zm368 0-38.4 51.2c-1 1.4-1.6 3.1-1.6 4.8V456c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V109.3c0-1.7-.6-3.4-1.6-4.8zm-222.4 51.2c-1 1.4-1.6 3.1-1.6 4.8V456c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V109.3c0-1.7-.6-3.4-1.6-4.8L256 53.3z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M192 160h-64v64h64zm192 0h-64v64h64zM128 352v64h64v-64zm256 0h-64v64h64z"
                />
                <Path d="M76.8 38.4c-3-4-7.8-6.4-12.8-6.4s-9.8 2.4-12.8 6.4L6.4 98.1C2.2 103.7 0 110.4 0 117.3V448c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V117.3c0-6.9-2.2-13.7-6.4-19.2zm192 0c-3-4-7.8-6.4-12.8-6.4s-9.8 2.4-12.8 6.4l-44.8 59.7c-4.2 5.5-6.4 12.3-6.4 19.2V448c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V117.3c0-6.9-2.2-13.7-6.4-19.2zM448 32c-5 0-9.8 2.4-12.8 6.4l-44.8 59.7c-4.2 5.5-6.4 12.3-6.4 19.2V448c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V117.3c0-6.9-2.2-13.7-6.4-19.2l-44.8-59.7c-3-4-7.8-6.4-12.8-6.4" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
