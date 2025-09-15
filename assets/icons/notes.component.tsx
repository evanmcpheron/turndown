import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const NotesIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M160 32c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h179.2c4.3 0 8.6-.4 12.8-1.3V320c0-17.7 14.3-32 32-32h94.7c.9-4.2 1.3-8.5 1.3-12.8V96c0-35.3-28.7-64-64-64zm224 320v64l96-96h-96zm-88 112H136c-48.6 0-88-39.4-88-88V152c0-13.3-10.7-24-24-24S0 138.7 0 152v224c0 75.1 60.9 136 136 136h160c13.3 0 24-10.7 24-24s-10.7-24-24-24"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M144 96c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16v192h-48c-17.7 0-32 14.3-32 32v48H160c-8.8 0-16-7.2-16-16zm-48 0v256c0 35.3 28.7 64 64 64h197.5c17 0 33.3-6.7 45.3-18.7l58.5-58.5c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m224 392c0-13.3-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V152c0-13.3-10.7-24-24-24S0 138.7 0 152v224c0 75.1 60.9 136 136 136h160c13.3 0 24-10.7 24-24"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M128 96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v160h-80c-26.5 0-48 21.5-48 48v80H160c-17.7 0-32-14.3-32-32zm318.2 192c-1.6 4.5-4.2 8.7-7.6 12.1l-74.5 74.5c-3.4 3.4-7.6 6-12.1 7.6V304c0-8.8 7.2-16 16-16zM96 96v256c0 35.3 28.7 64 64 64h181.5c17 0 33.3-6.7 45.3-18.7l74.5-74.5c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m224 400c0-8.8-7.2-16-16-16H128c-53 0-96-43-96-96V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v240c0 70.7 57.3 128 128 128h176c8.8 0 16-7.2 16-16"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"
              </Svg>sName="aps-icon-svg"
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M112 96c0-26.5 21.5-48 48-48h256c26.5 0 48 21.5 48 48v181.5q0 5.4-1.2 10.5H392c-22.1 0-40 17.9-40 40v70.8q-5.1 1.2-10.5 1.2H160c-26.5 0-48-21.5-48-48zm344 208c-1.8 2.7-3.8 5.1-6.1 7.4l-74.5 74.5c-2.3 2.3-4.8 4.3-7.4 6.1v-64c0-13.3 10.7-24 24-24zM96 96v256c0 35.3 28.7 64 64 64h181.5c17 0 33.3-6.7 45.3-18.7l74.5-74.5c12-12 18.7-28.3 18.7-45.3V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m-32 32c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64h-16c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48z"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              </Svg>
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M160 32c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h192v-96c0-17.7 14.3-32 32-32h96V96c0-35.3-28.7-64-64-64z"
                />
                <Path
                   
                  d="M296 464c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V152c0-13.3 10.7-24 24-24s24 10.7 24 24v224c0 48.6 39.4 88 88 88zm56-48v-96c0-17.7 14.3-32 32-32h96z"
                />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};</Svg>
