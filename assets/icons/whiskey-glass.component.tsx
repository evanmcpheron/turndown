import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const WhiskeyGlassIcon: React.FC<
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
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M32 32c-9.3 0-18.1 4-24.2 11.1S-1 59.4.3 68.6l50 342.9C56 450.8 89.7 480 129.5 480h253c39.7 0 73.4-29.1 79.2-68.5l50-342.9c1.3-9.2-1.4-18.5-7.5-25.5S489.3 32 480 32zm55.7 192L69 96h374l-18.7 128z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M80.8 288h350.4l30.3-208h-411zm7 48 10 68.6c2.3 15.7 15.8 27.4 31.7 27.4h253c15.9 0 29.4-11.7 31.7-27.4l10-68.6zM7.8 43.1C13.9 36 22.7 32 32 32h448c9.3 0 18.1 4 24.2 11.1s8.8 16.4 7.5 25.5l-50 342.9c-5.7 39.3-39.4 68.5-79.2 68.5h-253c-39.7 0-73.4-29.1-79.2-68.5L.3 68.6C-1 59.4 1.7 50.1 7.8 43.1" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="m32 64 28 192h392l28-192zm32.7 224L82 406.9c3.4 23.6 23.7 41.1 47.5 41.1h253c23.8 0 44.1-17.5 47.5-41.1L447.3 288zM7.8 43.1C13.9 36 22.7 32 32 32h448c9.3 0 18.1 4 24.2 11.1s8.8 16.4 7.5 25.5l-50 342.9c-5.7 39.3-39.4 68.5-79.2 68.5h-253c-39.7 0-73.4-29.1-79.2-68.5L.3 68.6C-1 59.4 1.7 50.1 7.8 43.1" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M19.9 53.5c-3 3.5-4.4 8.2-3.7 12.8l30 205.9c.6-.1 1.2-.2 1.8-.2h416c.6 0 1.2.1 1.8.2l30-205.9c.7-4.6-.7-9.3-3.7-12.8S484.6 48 480 48H32c-4.6 0-9.1 2-12.1 5.5M48.5 288l17.7 121.2c4.6 31.4 31.6 54.8 63.3 54.8h253c31.8 0 58.7-23.3 63.3-54.8L463.5 288zM7.8 43.1C13.9 36 22.7 32 32 32h448c9.3 0 18.1 4 24.2 11.1s8.8 16.4 7.5 25.5l-50 342.9c-5.7 39.3-39.4 68.5-79.2 68.5h-253c-39.7 0-73.4-29.1-79.2-68.5L.3 68.6C-1 59.4 1.7 50.1 7.8 43.1" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M7.8 43.1C13.9 36 22.7 32 32 32h448c9.3 0 18.1 4 24.2 11.1s8.8 16.4 7.5 25.5l-50 342.9c-5.7 39.3-39.4 68.5-79.2 68.5h-253c-39.7 0-73.4-29.1-79.2-68.5L.3 68.6C-1 59.4 1.7 50.1 7.8 43.1M69 96l44.7 306.3c1.1 7.9 7.9 13.7 15.8 13.7h253c7.9 0 14.7-5.8 15.8-13.7L443 96z"
                />
                <Path d="M424.3 224H87.7l26 178.3c1.1 7.9 7.9 13.7 15.8 13.7h253c7.9 0 14.7-5.8 15.8-13.7z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
