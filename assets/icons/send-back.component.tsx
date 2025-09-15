import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SendBackIcon: React.FC<
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
              <Svg viewBox="0 0 640 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M192 64v128H64V64zM64 0C28.7 0 0 28.7 0 64v128c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm512 320v128H448V320zm-128-64c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64zm-288 32v64c0 35.3 28.7 64 64 64h128v-96c0-53 43-96 96-96h32v-64c0-35.3-28.7-64-64-64H288v96c0 53-43 96-96 96z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M192 48c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v128c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm512 304c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H448c-8.8 0-16-7.2-16-16V320c0-8.8 7.2-16 16-16zm-128-48c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64zm-288 32v64c0 35.3 28.7 64 64 64h128v-96c0-53 43-96 96-96h32v-64c0-35.3-28.7-64-64-64H288v96c0 53-43 96-96 96z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 640 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M192 32c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM64 0C28.7 0 0 28.7 0 64v128c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm512 288c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32zm-128-32c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64zm-288 32v64c0 35.3 28.7 64 64 64h128v-32H224c-17.7 0-32-14.3-32-32v-64zM416 96H288v32h128c17.7 0 32 14.3 32 32v64h32v-64c0-35.3-28.7-64-64-64m-264 0c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8zm-48-32c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40zm384 288h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8m-40 8v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512"
              </Svg>sName="aps-icon-svg"
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M192 16c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM64 0C28.7 0 0 28.7 0 64v128c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm512 272c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H448c-26.5 0-48-21.5-48-48V320c0-26.5 21.5-48 48-48zm-128-16c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64zm-288 32v64c0 35.3 28.7 64 64 64h128v-16H224c-26.5 0-48-21.5-48-48v-64zM416 96H288v16h128c26.5 0 48 21.5 48 48v64h16v-64c0-35.3-28.7-64-64-64M152 80c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24zm-48-16c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40zm384 272h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24m-40 24v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-48c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512"
                 
                 fill={colors[colorName || "text"]} 
              </Svg>
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M64 64v128h128V64zM0 64C0 28.7 28.7 0 64 0h128c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm448 256v128h128V320zm-64 0c0-35.3 28.7-64 64-64h128c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H448c-35.3 0-64-28.7-64-64z"
                />
                <Path
                   
                  d="M160 352v-96h32c35.3 0 64-28.7 64-64V96h160c35.3 0 64 28.7 64 64v96h-32c-35.3 0-64 28.7-64 64v96H224c-35.3 0-64-28.7-64-64"
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
