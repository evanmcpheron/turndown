import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const MobileNotchIcon: React.FC<
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
                   
                  d="M128 64v16c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V64h32c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM96 0C51.8 0 16 35.8 16 80v352c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80V80c0-44.2-35.8-80-80-80zm32 400c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M256 48v16c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16V48H96c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zM16 80C16 35.8 51.8 0 96 0h192c44.2 0 80 35.8 80 80v352c0 44.2-35.8 80-80 80H96c-44.2 0-80-35.8-80-80z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M256 32v16c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-32 0h-64v16h64zM32 64C32 28.7 60.7 0 96 0h192c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64z"
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
                   
                  d="M256 16v24c0 13.3-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24V16H96c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zm-16 0h-96v24c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8zM32 64C32 28.7 60.7 0 96 0h192c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64z"
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
                  d="M256 64v16c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16V64H96c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM16 80C16 35.8 51.8 0 96 0h192c44.2 0 80 35.8 80 80v352c0 44.2-35.8 80-80 80H96c-44.2 0-80-35.8-80-80z"
                />
                <Path
                   
                  d="M128 64H96c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16h-32v16c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16z"
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
