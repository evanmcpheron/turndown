import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ObjectSubtractIcon: React.FC<
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
                   
                  d="M512 448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-96H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h224c35.3 0 64 28.7 64 64v96h96c35.3 0 64 28.7 64 64zM288 288V64H64v224z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M64 48h32V0H64C28.7 0 0 28.7 0 64v32h48V64c0-8.8 7.2-16 16-16m160 0V0h-96v48zM48 128H0v96h48zm0 128H0v32c0 35.3 28.7 64 64 64h32v-48H64c-8.8 0-16-7.2-16-16zm80 96h96v-48h-96zm32 32v64c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-64v48h64c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16v-64zm192-176v-80h-48v96h48zm0-144c0-35.3-28.7-64-64-64h-32v48h32c8.8 0 16 7.2 16 16v32h48zm-96 240v48h32c35.3 0 64-28.7 64-64v-32h-48v32c0 8.8-7.2 16-16 16z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M64 32h32V0H64C28.7 0 0 28.7 0 64v32h32V64c0-17.7 14.3-32 32-32m160 0V0h-96v32zM32 128H0v96h32zm0 128H0v32c0 35.3 28.7 64 64 64h32v-32H64c-17.7 0-32-14.3-32-32zm96 96h96v-32h-96zm32 32v64c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-64v32h64c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-64zm192-192v-64h-32v96h32zm0-128c0-35.3-28.7-64-64-64h-32v32h32c17.7 0 32 14.3 32 32v32h32zm-96 256v32h32c35.3 0 64-28.7 64-64v-32h-32v32c0 17.7-14.3 32-32 32z"
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
                   
                  d="M128 16h96V0h-96zm-32 0V0H64C28.7 0 0 28.7 0 64v32h16V64c0-26.5 21.5-48 48-48zM0 224h16v-96H0zm0 32v32c0 35.3 28.7 64 64 64h32v-16H64c-26.5 0-48-21.5-48-48v-32zm128 80v16h96v-16h-96m48 48h-16v64c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-64v16h64c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H224c-26.5 0-48-21.5-48-48zM352 64c0-35.3-28.7-64-64-64h-32v16h32c26.5 0 48 21.5 48 48v32h16zm0 112v-48h-16v96h16zm-96 160v16h32c35.3 0 64-28.7 64-64v-32h-16v32c0 26.5-21.5 48-48 48z"
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
                  d="M64 288V64h224v224zm224 64c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64z"
                />
                <Path
                   
                  d="M448 512c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64h-96v128c0 35.3-28.7 64-64 64H160v96c0 35.3 28.7 64 64 64z"
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
