import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const LessThanIcon: React.FC<
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
                   
                  d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256l262.7 131.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M381.5 77.3c5.9 11.9 1.1 26.3-10.7 32.2L77.7 256l293 146.5c11.9 5.9 16.7 20.3 10.7 32.2s-20.3 16.7-32.2 10.7l-336-168C5.1 273.4 0 265.1 0 256s5.1-17.4 13.3-21.5l336-168c11.9-5.9 26.3-1.1 32.2 10.7z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 384 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M382.3 72.8c4 7.9.7 17.5-7.2 21.5L51.8 256l323.4 161.7c7.9 4 11.1 13.6 7.2 21.5s-13.6 11.1-21.5 7.2l-352-176C3.4 267.6 0 262.1 0 256s3.4-11.6 8.8-14.3l352-176c7.9-4 17.5-.7 21.5 7.2z"
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
                   
                  d="M375.2 76.4c2 4 .4 8.8-3.6 10.7L33.9 256l337.7 168.8c4 2 5.6 6.8 3.6 10.7s-6.8 5.6-10.7 3.6l-352-176C9.7 261.8 8 259 8 256s1.7-5.8 4.4-7.2l352-176c4-2 8.8-.4 10.7 3.6z"
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
                  d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256l262.7 131.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3"
                />
                <Path   d="" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};</Svg>
