import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ChessBoardIcon: React.FC<
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
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 64v64h64V96h64v64h64V96h64v64h-64v64h64v64h-64v64h64v64h-64v-64h-64v64h-64v-64h-64v64H64v-64h64v-64H64v-64h64v-64H64V96zm64 128h64v-64h-64zm0 64v-64h-64v64zm64 0h-64v64h64zm0 0h64v-64h-64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 0v64h64V96h64v64h64V96h64v64h-64v64h64v64h-64v64h64v64h-64v-64h-64v64h-64v-64h-64v64H64v-64h64v-64H64v-64h64v-64H64V96zm64 128h64v-64h-64zm0 64v-64h-64v64zm64 0h-64v64h64zm0 0h64v-64h-64z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm88 0h272c13.3 0 24 10.7 24 24v272c0 13.3-10.7 24-24 24H88c-13.3 0-24-10.7-24-24V120c0-13.3 10.7-24 24-24m8 72h40v-40H96zm72 0h40v-40h-40zm72 0h40v-40h-40zm72 0h40v-40h-40zm0 32v40h40v-40zm0 72v40h40v-40zm0 72v40h40v-40zm-32 0h-40v40h40zm-72 0h-40v40h40zm-72 0H96v40h40zm0-32v-40H96v40zm0-72v-40H96v40zm32 0h40v-40h-40zm72 0h40v-40h-40zm0 32v40h40v-40zm-32 0h-40v40h40z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm80-8h288c13.3 0 24 10.7 24 24v288c0 13.3-10.7 24-24 24H80c-13.3 0-24-10.7-24-24V112c0-13.3 10.7-24 24-24m-8 24v40h48v-48H80c-4.4 0-8 3.6-8 8m64 40h48v-48h-48zm64 0h48v-48h-48zm64 0h48v-48h-48zm64 0h48v-40c0-4.4-3.6-8-8-8h-40zm0 16v48h48v-48zm0 64v48h48v-48zm0 64v48h48v-48zm0 64v48h40c4.4 0 8-3.6 8-8v-40zm-16 0h-48v48h48zm-64 0h-48v48h48zm-64 0h-48v48h48zm-64 0H72v40c0 4.4 3.6 8 8 8h40zm0-16v-48H72v48zm0-64v-48H72v48zm0-64v-48H72v48zm16 0h48v-48h-48zm64 0h48v-48h-48zm64 0h48v-48h-48zm0 16v48h48v-48zm0 64v48h48v-48zm-16 0h-48v48h48zm-64 0h-48v48h48zm0-16v-48h-48v48zm16 0h48v-48h-48z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm320 64v320H64V96z"
                />
                <Path d="M192 96h-64v64H64v64h64v64H64v64h64v64h64v-64h64v64h64v-64h64v-64h-64v-64h64v-64h-64V96h-64v64h-64zm0 128h-64v-64h64zm64 0v64h64v64h-64v-64h-64v64h-64v-64h64v-64zm0 0v-64h64v64z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
