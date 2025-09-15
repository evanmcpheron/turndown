import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SendBackwardIcon: React.FC<
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
                   
                  d="M64 0C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h64V224c0-53 43-96 96-96h128V64c0-35.3-28.7-64-64-64zm160 224h224v224H224zm-64 0v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M64 0C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h64V224c0-53 43-96 96-96h128V64c0-35.3-28.7-64-64-64zm160 208h224c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16m-64 16v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M64 32h224c17.7 0 32 14.3 32 32v64h32V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h64v-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m224 64c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h32v-32H96V96h160v32h32zm-64 96h224c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32m-64 32v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64"
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
                   
                  d="M288 16H64c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h64v16H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h224c35.3 0 64 28.7 64 64v64h-16V64c0-26.5-21.5-48-48-48m0 112h-16V96c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h32v16H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32zm-112 96v224c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V224c0-26.5-21.5-48-48-48H224c-26.5 0-48 21.5-48 48m-16 0c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"
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
                  d="M448 224v224H224V224zm-224-64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64z"
                />
                <Path
                   
                  d="M0 64C0 28.7 28.7 0 64 0h224c35.3 0 64 28.7 64 64v96H224c-35.3 0-64 28.7-64 64v128H64c-35.3 0-64-28.7-64-64z"
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
