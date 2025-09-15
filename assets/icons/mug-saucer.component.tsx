import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const MugSaucerIcon: React.FC<
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
              <Svg viewBox="0 0 640 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M96 64c0-17.7 14.3-32 32-32h384c70.7 0 128 57.3 128 128s-57.3 128-128 128h-32c0 53-43 96-96 96H192c-53 0-96-43-96-96zm384 160h32c35.3 0 64-28.7 64-64s-28.7-64-64-64h-32zM32 416h512c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M144 80h288v208c0 26.5-21.5 48-48 48H192c-26.5 0-48-21.5-48-48zm-16-48c-17.7 0-32 14.3-32 32v224c0 53 43 96 96 96h192c53 0 96-43 96-96h32c70.7 0 128-57.3 128-128S582.7 32 512 32H128m384 208h-32V80h32c44.2 0 80 35.8 80 80s-35.8 80-80 80M24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 640 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M416 64h32v224c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V64zm64 224v-32h48c61.9 0 112-50.1 112-112S589.9 32 528 32H128c-17.7 0-32 14.3-32 32v224c0 53 43 96 96 96h192c53 0 96-43 96-96m48-64h-48V64h48c44.2 0 80 35.8 80 80s-35.8 80-80 80M16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512"
              </Svg>sName="aps-icon-svg"
                fill={color}
              >
                <Path
                   
                  d="M440 48h24v240c0 44.2-35.8 80-80 80H192c-44.2 0-80-35.8-80-80V64c0-8.8 7.2-16 16-16zm40 176V48h24c48.6 0 88 39.4 88 88s-39.4 88-88 88zm0 64v-48h24c57.4 0 104-46.6 104-104S561.4 32 504 32H128c-17.7 0-32 14.3-32 32v224c0 53 43 96 96 96h192c53 0 96-43 96-96M8 464c-4.4 0-8 3.6-8 8s3.6 8 8 8h560c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512"
                 
                fill={color}
              </Svg>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M0 448c0-17.7 14.3-32 32-32h512c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"
                />
                <Path
                   
                  d="M128 32c-17.7 0-32 14.3-32 32v224c0 53 43 96 96 96h192c53 0 96-43 96-96h32c70.7 0 128-57.3 128-128S582.7 32 512 32H128m352 64h32c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32z"
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
