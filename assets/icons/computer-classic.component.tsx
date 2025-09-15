import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ComputerClassicIcon: React.FC<
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
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 48C0 21.5 21.5 0 48 0h352c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm32 432v-32h384v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32M96 64c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM80 360a24 24 0 1 0 0-48 24 24 0 1 0 0 48m144-24c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H240c-8.8 0-16 7.2-16 16" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M384 48c8.8 0 16 7.2 16 16v304c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v304c0 23.7 12.9 44.4 32 55.4V480c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-56.6c19.1-11.1 32-31.7 32-55.4V64c0-35.3-28.7-64-64-64zm16 432h288v32H80zm0-320v96c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32H112c-17.7 0-32 14.3-32 32m128 208c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H224c-8.8 0-16 7.2-16 16m-88 32a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M384 32c17.7 0 32 14.3 32 32v304c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM64 0C28.7 0 0 28.7 0 64v304c0 23.7 12.9 44.4 32 55.4V480c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-56.6c19.1-11.1 32-31.7 32-55.4V64c0-35.3-28.7-64-64-64zm0 432h320v48H64zM352 96v128H96V96zM96 64c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm128 272c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H240c-8.8 0-16 7.2-16 16M96 360a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M384 16c26.5 0 48 21.5 48 48v304c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM64 0C28.7 0 0 28.7 0 64v304c0 23.7 12.9 44.4 32 55.4V480c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-56.6c19.1-11.1 32-31.7 32-55.4V64c0-35.3-28.7-64-64-64zm336 430v50c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-50c5.1 1.3 10.5 2 16 2h320c5.5 0 10.9-.7 16-2M352 80c8.8 0 16 7.2 16 16v144c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 64c-17.7 0-32 14.3-32 32v144c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm128 280c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H232c-4.4 0-8 3.6-8 8M80 368a16 16 0 1 0 0-32 16 16 0 1 0 0 32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M0 48C0 21.5 21.5 0 48 0h352c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm32 432v-32h384v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32M96 64c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM80 360a24 24 0 1 0 0-48 24 24 0 1 0 0 48m144-24c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H240c-8.8 0-16 7.2-16 16"
                />
                <Path d="M64 96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
