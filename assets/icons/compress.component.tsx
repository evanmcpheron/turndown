import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CompressIcon: React.FC<
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
                <Path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-17.7-14.3-32-32-32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64zm-32 256c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h64c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M160 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v88H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24zM24 320c-13.3 0-24 10.7-24 24s10.7 24 24 24h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V344c0-13.3-10.7-24-24-24zM336 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24h-88zm-24 264c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24v-88h88c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M160 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v112H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16zM16 320c-8.8 0-16 7.2-16 16s7.2 16 16 16h112v112c0 8.8 7.2 16 16 16s16-7.2 16-16V336c0-8.8-7.2-16-16-16zM320 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H320zm-16 272c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V352h112c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M152 32c4.4 0 8 3.6 8 8v144c0 4.4-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h136V40c0-4.4 3.6-8 8-8m144 0c4.4 0 8 3.6 8 8v136h136c4.4 0 8 3.6 8 8s-3.6 8-8 8H296c-4.4 0-8-3.6-8-8V40c0-4.4 3.6-8 8-8M0 328c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v144c0 4.4-3.6 8-8 8s-8-3.6-8-8V336H8c-4.4 0-8-3.6-8-8m288 0c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H304v136c0 4.4-3.6 8-8 8s-8-3.6-8-8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M160 448c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32zm160-256c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
                <Path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32zm160 256c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h64c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
