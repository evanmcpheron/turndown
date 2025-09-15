import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ShapesIcon: React.FC<
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
                   
                  d="M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2h192c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2zM288 312v144c0 22.1 17.9 40 40 40h144c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40M128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M288 63.1 220.3 176h135.4zm123.4 112.4c5.9 9.9 6.1 22.2.4 32.2s-16.3 16.2-27.8 16.2H192c-11.5 0-22.2-6.2-27.8-16.2s-5.5-22.3.4-32.2l96-160C266.3 5.9 276.8 0 288 0s21.7 5.9 27.4 15.5zM464 320H336v128h128zm-136-48h144c22.1 0 40 17.9 40 40v144c0 22.1-17.9 40-40 40H328c-22.1 0-40-17.9-40-40V312c0-22.1 17.9-40 40-40M208 384a80 80 0 1 0-160 0 80 80 0 1 0 160 0M0 384a128 128 0 1 1 256 0 128 128 0 1 1-256 0"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M411.4 175.5c5.9 9.9 6.1 22.2.4 32.2s-16.3 16.2-27.8 16.2H192c-11.5 0-22.2-6.2-27.8-16.2s-5.5-22.3.4-32.2l96-160C266.3 5.9 276.8 0 288 0s21.7 5.9 27.4 15.5zM288 32l-96 160h192zm184 272H328c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V312c0-4.4-3.6-8-8-8m-144-32h144c22.1 0 40 17.9 40 40v144c0 22.1-17.9 40-40 40H328c-22.1 0-40-17.9-40-40V312c0-22.1 17.9-40 40-40M224 384a96 96 0 1 0-192 0 96 96 0 1 0 192 0M0 384a128 128 0 1 1 256 0 128 128 0 1 1-256 0"
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
                   
                  d="M301.7 23.8C298.8 19 293.6 16 288 16s-10.8 2.9-13.7 7.8l-96 160c-3 4.9-3 11.1-.2 16.1s8.2 8.1 13.9 8.1h192c5.8 0 11.1-3.1 13.9-8.1s2.8-11.2-.2-16.1zM288 0c11.2 0 21.7 5.9 27.4 15.5l96 160c5.9 9.9 6.1 22.2.4 32.2s-16.3 16.2-27.8 16.2H192c-11.5 0-22.2-6.2-27.8-16.2s-5.5-22.3.4-32.2l96-160C266.3 5.9 276.8 0 288 0m184 288H328c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24V312c0-13.3-10.7-24-24-24m-144-16h144c22.1 0 40 17.9 40 40v144c0 22.1-17.9 40-40 40H328c-22.1 0-40-17.9-40-40V312c0-22.1 17.9-40 40-40m-88 112a112 112 0 1 0-224 0 112 112 0 1 0 224 0M0 384a128 128 0 1 1 256 0 128 128 0 1 1-256 0"
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
                  d="M288 0c-11.2 0-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2h192c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160C309.7 5.9 299.2 0 288 0M128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256"
                />
                <Path
                   
                  d="M328 272c-22.1 0-40 17.9-40 40v144c0 22.1 17.9 40 40 40h144c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40z"
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
