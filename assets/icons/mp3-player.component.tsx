import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const Mp3PlayerIcon: React.FC<
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
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 128a96 96 0 1 0 0-192 96 96 0 1 0 0 192M96 64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M320 48c8.8 0 16 7.2 16 16v384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm128 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 128a96 96 0 1 0 0-192 96 96 0 1 0 0 192M112 80c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M64 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm112 272a80 80 0 1 0 160 0 80 80 0 1 0-160 0m80 112a112 112 0 1 1 0-224 112 112 0 1 1 0 224m-24-112a24 24 0 1 1 48 0 24 24 0 1 1-48 0M96 96v64h192V96zm-32 0c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512"
              </Svg>sName="aps-icon-svg"
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M64 16c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM64 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm128 336a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0-208a112 112 0 1 1 0 224 112 112 0 1 1 0-224m16 112a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              </Svg>
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm288 288a96 96 0 1 0-192 0 96 96 0 1 0 192 0M96 64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z"
                />
                <Path
                   
                  d="M96 64h192c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32m128 288a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-128 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"
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
