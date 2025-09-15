import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const PageIcon: React.FC<
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
                   
                  d="M64 512h256c35.3 0 64-28.7 64-64V138.5c0-17-6.7-33.3-18.7-45.3l-74.6-74.5C278.7 6.7 262.5 0 245.5 0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M64 464h256c8.8 0 16-7.2 16-16V138.5c0-4.2-1.7-8.3-4.7-11.3l-74.5-74.5c-3-3-7.1-4.7-11.3-4.7H64c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16m256 48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h181.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M64 480h256c17.7 0 32-14.3 32-32V138.5c0-8.5-3.4-16.6-9.4-22.6l-74.5-74.5c-6-6-14.1-9.4-22.6-9.4H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32m256 32H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h181.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64"
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
                   
                  d="M64 496h256c26.5 0 48-21.5 48-48V138.5c0-12.7-5.1-24.9-14.1-33.9l-74.5-74.5c-9-9-21.2-14.1-33.9-14.1H64c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48m256 16H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h181.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64"
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
                  d="M64 512h256c35.3 0 64-28.7 64-64V138.5c0-17-6.7-33.3-18.7-45.3l-74.6-74.5C278.7 6.7 262.5 0 245.5 0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64"
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
