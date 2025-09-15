import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const UnlockIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M144 144c0-44.2 35.8-80 80-80 31.9 0 59.4 18.6 72.3 45.7 7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0 144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M144 128c0-44.2 35.8-80 80-80 35.6 0 65.8 23.2 76.1 55.4 4.1 12.6 17.6 19.5 30.2 15.5s19.5-17.6 15.5-30.2C329.2 37.2 281 0 224 0 153.3 0 96 57.3 96 128v64H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144zM48 256c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M128 128c0-53 43-96 96-96 43.5 0 80.2 28.9 92 68.6 2.5 8.5 11.4 13.3 19.9 10.8s13.3-11.4 10.8-19.9C331 38.6 282 0 224 0 153.3 0 96 57.3 96 128v64H80c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h288c44.2 0 80-35.8 80-80V272c0-44.2-35.8-80-80-80H128zM32 272c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M112 128c0-61.9 50.1-112 112-112 51.5 0 94.9 34.8 108 82.1 1.2 4.3 5.6 6.8 9.8 5.6s6.8-5.6 5.6-9.8C332.5 39.8 282.9 0 224 0 153.3 0 96 57.3 96 128v64H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H112zm-16 80h288c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V256c0-26.5 21.5-48 48-48z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M224 64c-44.2 0-80 35.8-80 80v48H80v-48C80 64.5 144.5 0 224 0c57.5 0 107 33.7 130.1 82.3 7.6 16 .8 35.1-15.2 42.6s-35.1.8-42.6-15.2C283.4 82.6 255.9 64 224 64"
                />
                <Path d="M0 256c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
