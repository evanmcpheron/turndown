import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const MonumentIcon: React.FC<
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
                   
                  d="M180.7 4.7c6.2-6.2 16.4-6.2 22.6 0l80 80c2.5 2.5 4.1 5.8 4.6 9.3l40.2 322H55.9L96.1 94c.4-3.5 2-6.8 4.6-9.3zM152 272c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24zM32 448h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M175 7c9.4-9.4 24.6-9.4 33.9 0l80 80c3.8 3.8 6.2 8.7 6.8 14l41.4 331h-48.3l-39.6-316.9L192 57.9l-57.2 57.2L95.2 432H46.8l41.4-331c.7-5.3 3.1-10.2 6.8-14zM42.8 464H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zM144 312c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M180.7 4.7c6.2-6.2 16.4-6.2 22.6 0l80 80c2.5 2.5 4.2 5.9 4.6 9.4l32 272c1 8.8-5.2 16.7-14 17.8s-16.7-5.2-17.8-14l-31.3-266.5L192 38.6l-64.8 64.8-31.3 266.5c-1 8.8-9 15.1-17.8 14s-15.1-9-14-17.8l32-272c.4-3.6 2-6.9 4.6-9.4zM144 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16M40 416h304c22.1 0 40 17.9 40 40v16c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40v-16c0-22.1 17.9-40 40-40m-8 40v16c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H40c-4.4 0-8 3.6-8 8"
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
                   
                  d="M197.7 25c-3.1-3.1-8.2-3.1-11.3 0l-61 61c-3.7 3.7-6.1 8.6-6.8 13.8L79.9 393c-.6 4.4-4.6 7.5-9 6.9s-7.5-4.6-6.9-9l38.7-293.2c1.1-8.7 5.1-16.8 11.4-23.1l61-61c9.4-9.4 24.6-9.4 33.9 0l61 61c6.2 6.2 10.2 14.3 11.4 23.1L319.9 391c.6 4.4-2.5 8.4-6.9 9s-8.4-2.5-9-6.9L265.5 99.8c-.7-5.2-3.1-10.1-6.8-13.8zM232 272h-80c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8m-80-16h80c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24M32 432h320c17.7 0 32 14.3 32 32v16c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-16c0-17.7 14.3-32 32-32m-16 32v16c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16H32c-8.8 0-16 7.2-16 16"
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
                  d="M0 480c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"
                />
                <Path
                   
                  d="M203.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-80 80c-2.5 2.5-4.1 5.8-4.6 9.3L51.9 448h280.2L287.9 94c-.4-3.5-2-6.8-4.6-9.3zM128 296c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24"
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
