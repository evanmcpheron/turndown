import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const LeftFromLineIcon: React.FC<
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
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M134.1 406.1 11.3 283.3C4.1 276.1 0 266.2 0 256s4.1-20.1 11.3-27.3l122.8-122.8c6.4-6.4 15-9.9 24-9.9 18.7 0 33.9 15.2 33.9 33.9V192h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H192v62.1c0 18.7-15.2 33.9-33.9 33.9-9 0-17.6-3.6-24-9.9M384 416V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M160 146.2 50 256l110 109.8V312c0-13.3 10.7-24 24-24h120v-64H184c-13.3 0-24-10.7-24-24zM0 256c0-11.5 4.6-22.5 12.7-30.6l116.1-115.8c8.7-8.7 20.5-13.6 32.8-13.6 25.6 0 46.4 20.8 46.4 46.4V176h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-96v33.6c0 25.6-20.8 46.4-46.4 46.4-12.3 0-24.1-4.9-32.8-13.6L12.7 286.6C4.6 278.5 0 267.5 0 256M400 88c0-13.3 10.7-24 24-24s24 10.7 24 24v336c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M32.8 257.8c-.5-.5-.8-1.1-.8-1.8s.3-1.4.8-1.8l131.9-124.4c1.2-1.2 2.9-1.8 4.6-1.8 3.7 0 6.7 3 6.7 6.7V192c0 8.8 7.2 16 16 16h120c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8H192c-8.8 0-16 7.2-16 16v57.3c0 3.7-3 6.7-6.7 6.7-1.7 0-3.3-.6-4.6-1.8zM0 256c0 9.5 3.9 18.6 10.8 25.1l132 124.4c7.2 6.8 16.7 10.5 26.5 10.5 21.4 0 38.7-17.3 38.7-38.7V336h104c22.1 0 40-17.9 40-40v-80c0-22.1-17.9-40-40-40H208v-41.3c0-21.4-17.3-38.7-38.7-38.7-9.9 0-19.3 3.8-26.5 10.5l-132 124.4C3.9 237.4 0 246.5 0 256m448 176V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v352c0 8.8 7.2 16 16 16s16-7.2 16-16"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"
              </Svg>sName="aps-icon-svg"
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M19.3 264c-2.1-2.1-3.3-5-3.3-8s1.2-5.9 3.3-8l132.1-131.8c2.7-2.7 6.4-4.2 10.2-4.2 8 0 14.4 6.5 14.4 14.4V200c0 4.4 3.6 8 8 8h136c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H184c-4.4 0-8 3.6-8 8v73.6c0 8-6.5 14.4-14.4 14.4-3.8 0-7.5-1.5-10.2-4.2zM0 256c0 7.2 2.9 14.2 8 19.3l132.1 131.8c5.7 5.7 13.4 8.9 21.5 8.9 16.8 0 30.4-13.6 30.4-30.4V320h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H192v-65.6c0-16.8-13.6-30.4-30.4-30.4-8.1 0-15.8 3.2-21.5 8.9L8 236.7c-5.1 5.1-8 12.1-8 19.3m448 184V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v368c0 4.4 3.6 8 8 8s8-3.6 8-8"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              </Svg>
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M384 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32"
                />
                <Path
                   
                  d="m11.3 283.3 122.8 122.8c6.4 6.4 15 9.9 24 9.9 18.7 0 33.9-15.2 33.9-33.9V320h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H192v-62.1c0-18.7-15.2-33.9-33.9-33.9-9 0-17.6 3.6-24 9.9L11.3 228.7C4.1 235.9 0 245.8 0 256s4.1 20.1 11.3 27.3"
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
