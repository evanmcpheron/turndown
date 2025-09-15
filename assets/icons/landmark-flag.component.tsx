import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const LandmarkFlagIcon: React.FC<
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
                   
                  d="M272 0h80c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-80v32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h192V16c0-8.8 7.2-16 16-16zM64 224h64v192h40V224h64v192h48V224h64v192h40V224h64v196.3c.6.3 1.2.7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512H32c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1V224z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M272 0h-16c-8.8 0-16 7.2-16 16v112H48c-13.3 0-24 10.7-24 24s10.7 24 24 24h416c13.3 0 24-10.7 24-24s-10.7-24-24-24H272V96h80c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16zM112 208H64v176h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V208h-48v176h-64V208h-48v176h-64V208h-48v176h-64zM0 488c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M272 32v32h64V32zm80 64h-80v32h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h192V16c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16M48 368c0-8.8 7.2-16 16-16V192h32v160h80V192h32v160h96V192h32v160h80V192h32v160c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-8.8 0-16-7.2-16-16m-24 64c0-8.8 7.2-16 16-16h432c8.8 0 16 7.2 16 16s-7.2 16-16 16H40c-8.8 0-16-7.2-16-16M0 496c0-8.8 7.2-16 16-16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16"
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
                   
                  d="M352 16v64h-96V16zm-96 80h96c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v128H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H256zM80 200c0-4.4-3.6-8-8-8s-8 3.6-8 8v176c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8V200c0-4.4-3.6-8-8-8s-8 3.6-8 8v168H328V200c0-4.4-3.6-8-8-8s-8 3.6-8 8v168H200V200c0-4.4-3.6-8-8-8s-8 3.6-8 8v168H80zM40 432c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8zM8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8h496c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M128 192H64v228.3c-.6.3-1.2.7-1.7 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512h448c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V192H384v224h-40V192h-64v224h-48V192h-64v224h-40z"
                />
                <Path
                   
                  d="M272 0h80c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-80v32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h192V16c0-8.8 7.2-16 16-16z"
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
