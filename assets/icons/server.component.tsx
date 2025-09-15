import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ServerIcon: React.FC<
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
                   
                  d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m48 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0M64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m56 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M64 80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 240c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zM0 352c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm392 32a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24-280a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-88 280a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24-280a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M64 64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 224c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zM0 352c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm304 32a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24-280a24 24 0 1 1 0 48 24 24 0 1 1 0-48m56 280a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24-280a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                   
                  d="M64 48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 208c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zM0 352c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm336 32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16-272a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48 272a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16-272a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M416 152a24 24 0 1 0 0-48 24 24 0 1 0 0 48M64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m56 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
                />
                <Path
                   
                  d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m48 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m32 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
