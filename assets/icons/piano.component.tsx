import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const PianoIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M0 192v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V327.6c0-24.2-13.7-46.4-35.4-57.2l-58.4-29.2c-21-10.5-34.2-31.9-34.2-55.4C384 83.2 300.8 0 198.3 0H192C86 0 0 86 0 192m416 160h32v96H64v-96h32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h32v48c0 8.8 7.2 16 16 16s16-7.2 16-16z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M432 384v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-96v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32H48v64c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16v-64zM48 336h416v-8.4c0-6.1-3.4-11.6-8.8-14.3L396.8 284c-37.2-18.6-60.8-56.7-60.8-98.3 0-76-61.7-137.7-137.7-137.7H192c-79.5 0-144 64.5-144 144zm464-8.4V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192C0 86 86 0 192 0h6.3C300.8 0 384 83.2 384 185.7c0 23.5 13.2 44.9 34.2 55.4l58.4 29.2c21.7 10.8 35.4 33 35.4 57.2z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M432 384v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-96v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32H32v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-64zm-16-32h64v-24.4c0-12.1-6.8-23.2-17.7-28.6l-58.4-29.2c-31.8-15.9-51.9-48.4-51.9-84 0-85-68.8-153.8-153.7-153.8H192c-88.4 0-160 71.6-160 160v160h384m96-24.4V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192C0 86 86 0 192 0h6.3C300.8 0 384 83.2 384 185.7c0 23.5 13.2 44.9 34.2 55.4l58.4 29.2c21.7 10.8 35.4 33 35.4 57.2z"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"
              </Svg>sName="aps-icon-svg"
                fill={color}
              >
                <Path
                   
                  d="M112 352v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48H16v96c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48v-96h-32v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48h-16v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48h-48v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48h-16v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48zm336 0h-32v48c0 8.8 7.2 16 16 16s16-7.2 16-16zm16-16h32v-8.4c0-18.2-10.3-34.8-26.5-42.9l-58.4-29.2c-26.4-13.2-43.1-40.2-43.1-69.7C368 92 292 16 198.3 16H192C94.8 16 16 94.8 16 192v144h448m-128 64c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h-32zm-80-48h-32v48c0 8.8 7.2 16 16 16s16-7.2 16-16zm-112 48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h-32zm-48-48H64v48c0 8.8 7.2 16 16 16s16-7.2 16-16zm416-24.4V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192C0 86 86 0 192 0h6.3C300.8 0 384 83.2 384 185.7c0 23.5 13.2 44.9 34.2 55.4l58.4 29.2c21.7 10.8 35.4 33 35.4 57.2z"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              </Svg>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M0 448v-96h64v96h384v-96h64v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64"
                />
                <Path
                   
                  d="M0 192v160h96v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h96v-24.4c0-24.2-13.7-46.4-35.4-57.2l-58.4-29.2c-21-10.5-34.2-31.9-34.2-55.4C384 83.2 300.8 0 198.3 0H192C86 0 0 86 0 192"
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
