import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ShekelSignIcon: React.FC<
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
              <Svg viewBox="0 0 448 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M32 32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32s32-14.3 32-32V96h128c35.3 0 64 28.7 64 64v160c0 17.7 14.3 32 32 32s32-14.3 32-32V160c0-70.7-57.3-128-128-128zm288 448c70.7 0 128-57.3 128-128V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v288c0 35.3-28.7 64-64 64H192V192c0-17.7-14.3-32-32-32s-32 14.3-32 32v256c0 17.7 14.3 32 32 32z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M40 32c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24s24-10.7 24-24V80h120c39.8 0 72 32.2 72 72v184c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-66.3-53.7-120-120-120zm272 448c66.3 0 120-53.7 120-120V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v304c0 39.8-32.2 72-72 72H192V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v272c0 13.3 10.7 24 24 24z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 448 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M80 32c-26.5 0-48 21.5-48 48v384c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8 7.2-16 16-16h112c44.2 0 80 35.8 80 80v192c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-61.9-50.1-112-112-112zm224 448c61.9 0 112-50.1 112-112V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v320c0 44.2-35.8 80-80 80H192c-8.8 0-16-7.2-16-16V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v256c0 26.5 21.5 48 48 48z"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"
              </Svg>sName="aps-icon-svg"
                fill={color}
              >
                <Path
                   
                  d="M56 32c-22.1 0-40 17.9-40 40v400c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-13.3 10.7-24 24-24h136c48.6 0 88 39.4 88 88v216c0 4.4 3.6 8 8 8s8-3.6 8-8V136c0-57.4-46.6-104-104-104zm272 448c57.4 0 104-46.6 104-104V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v336c0 48.6-39.4 88-88 88H192c-13.3 0-24-10.7-24-24V168c0-4.4-3.6-8-8-8s-8 3.6-8 8v272c0 22.1 17.9 40 40 40z"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"
                 
                fill={color}
              </Svg>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M448 352c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32v224h128c35.3 0 64-28.7 64-64V64c0-17.7 14.3-32 32-32s32 14.3 32 32z"
                />
                <Path
                   
                  d="M0 64c0-17.7 14.3-32 32-32h160c70.7 0 128 57.3 128 128v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-35.3-28.7-64-64-64H64v352c0 17.7-14.3 32-32 32S0 465.7 0 448z"
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
