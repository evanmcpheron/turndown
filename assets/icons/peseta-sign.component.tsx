import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const PesetaSignIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone";
  }
> = ({ type, size, color, active, style, opacity, haptic, ...more }) => {
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
    color,
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <Svg viewBox="0 0 384 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M64 32c-17.7 0-32 14.3-32 32v96c-17.7 0-32 14.3-32 32s14.3 32 32 32v224c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h96c77.4 0 142-55 156.8-128h3.2c17.7 0 32-14.3 32-32s-14.3-32-32-32h-3.2C334 87 269.4 32 192 32zm218.5 128H96V96h96c41.8 0 77.4 26.7 90.5 64M96 224h186.5c-13.2 37.3-48.7 64-90.5 64H96z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M93.9 32C68.6 32 48 52.6 48 77.9V176H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v232c0 13.3 10.7 24 24 24s24-10.7 24-24V352h96c77.4 0 142-55 156.8-128H360c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8.8C343.2 95.1 275 32 192 32zm209 144H96V80h96c56.4 0 103.1 41.7 110.9 96M96 224h203.4c-13.8 46.3-56.6 80-107.4 80H96z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 384 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M72.7 32C50.2 32 32 50.2 32 72.7V160H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v272c0 8.8 7.2 16 16 16s16-7.2 16-16V320h144c74.1 0 135.2-56 143.1-128H368c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16.9c-8-72-69-128-143.1-128zm246.2 128H64V72.7c0-4.8 3.9-8.7 8.7-8.7H208c56.4 0 103.1 41.7 110.9 96M64 192h254.9c-7.8 54.3-54.4 96-110.9 96H64z"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512"
              </Svg>sName="aps-icon-svg"
                fill={color}
              >
                <Path
                   
                  d="M79.3 32C62 32 48 46 48 63.3V176H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h40v280c0 4.4 3.6 8 8 8s8-3.6 8-8V320h128c74.1 0 135.2-56 143.1-128H376c4.4 0 8-3.6 8-8s-3.6-8-8-8h-40c0-79.5-64.5-144-144-144zM320 176H64V63.3C64 54.9 70.9 48 79.3 48H192c70.7 0 128 57.3 128 128M64 192h255c-7.9 63.1-61.7 112-127 112H64z"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512"
                 
                fill={color}
              </Svg>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M32 160v64c-17.7 0-32-14.3-32-32s14.3-32 32-32m250.5 64H96v-64h186.5c3.5 10 5.5 20.8 5.5 32s-1.9 22-5.5 32m66.3 0c2.1-10.3 3.2-21 3.2-32s-1.1-21.7-3.2-32h3.2c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
                <Path
                   
                  d="M32 64c0-17.7 14.3-32 32-32h128c88.4 0 160 71.6 160 160s-71.6 160-160 160H96v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64m64 224h96c53 0 96-43 96-96s-43-96-96-96H96z"
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
