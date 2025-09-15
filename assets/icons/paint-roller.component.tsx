import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const PaintRollerIcon: React.FC<
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
                   
                  d="M0 64C0 28.7 28.7 0 64 0h288c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 288c0-17.7 14.3-32 32-32v-16c0-44.2 35.8-80 80-80h144c17.7 0 32-14.3 32-32V69.5c37.3 13.2 64 48.7 64 90.5v32c0 53-43 96-96 96H272c-8.8 0-16 7.2-16 16v16c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M352 48H64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16M64 0h288c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0m96 352c0-17.7 14.3-32 32-32h8v-16c0-39.8 32.2-72 72-72h152c22.1 0 40-17.9 40-40v-48c0-10.4-6.7-19.3-16-22.6v-49c36 4 64 34.5 64 71.6v48c0 48.6-39.4 88-88 88H272c-13.3 0-24 10.7-24 24v16h8c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M352 32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zm64 32c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v32c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64zM240 352c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16zm-32-32c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48v-32c0-17.7 14.3-32 32-32h176c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64v32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H272c-35.3 0-64 28.7-64 64z"
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
                   
                  d="M352 16c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM64 0C28.7 0 0 28.7 0 64v32c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm176 336c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32zm-32-16c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-8v-32c0-22.1 17.9-40 40-40h176c30.9 0 56-25.1 56-56v-64c0-30.9-25.1-56-56-56v16c22.1 0 40 17.9 40 40v64c0 22.1-17.9 40-40 40H272c-30.9 0-56 25.1-56 56v32z"
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
                  d="M512 160c0-53-43-96-96-96v64c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H272c-44.2 0-80 35.8-80 80v16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-16c0-8.8 7.2-16 16-16h144c53 0 96-43 96-96z"
                />
                <Path
                   
                  d="M64 0C28.7 0 0 28.7 0 64v64c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"
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
