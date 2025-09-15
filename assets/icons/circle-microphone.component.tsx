import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleMicrophoneIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-368c0-26.5 21.5-48 48-48s48 21.5 48 48v112c0 26.5-21.5 48-48 48s-48-21.5-48-48zm-64 80c8.8 0 16 7.2 16 16v16c0 53 43 96 96 96s96-43 96-96v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 65.3-48.9 119.1-112 127v17c0 8.8-7.2 16-16 16s-16-7.2-16-16v-17c-63.1-7.9-112-61.7-112-127v-16c0-8.8 7.2-16 16-16" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m208-112c0-26.5 21.5-48 48-48s48 21.5 48 48v112c0 26.5-21.5 48-48 48s-48-21.5-48-48zm-56 88c13.3 0 24 10.7 24 24 0 44.2 35.8 80 80 80s80-35.8 80-80c0-13.3 10.7-24 24-24s24 10.7 24 24c0 62.5-44.8 114.5-104 125.8V392c0 13.3-10.7 24-24 24s-24-10.7-24-24v-10.2c-59.2-11.3-104-63.3-104-125.8 0-13.3 10.7-24 24-24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m192-96c0-35.3 28.7-64 64-64s64 28.7 64 64v96c0 35.3-28.7 64-64 64s-64-28.7-64-64zm64-32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-17.7-14.3-32-32-32m-112 96c8.8 0 16 7.2 16 16v16c0 53 43 96 96 96s96-43 96-96v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 65.3-48.9 119.1-112 127v17c0 8.8-7.2 16-16 16s-16-7.2-16-16v-17c-63.1-7.9-112-61.7-112-127v-16c0-8.8 7.2-16 16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-64-352v96c0 35.3 28.7 64 64 64s64-28.7 64-64v-96c0-35.3-28.7-64-64-64s-64 28.7-64 64m64-48c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48s-48-21.5-48-48v-96c0-26.5 21.5-48 48-48M144 232c0-4.4-3.6-8-8-8s-8 3.6-8 8v24c0 68 53 123.6 120 127.8V408c0 4.4 3.6 8 8 8s8-3.6 8-8v-24.2c67-4.2 120-59.8 120-127.8v-24c0-4.4-3.6-8-8-8s-8 3.6-8 8v24c0 61.9-50.1 112-112 112s-112-50.1-112-112z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-368c0-26.5 21.5-48 48-48s48 21.5 48 48v112c0 26.5-21.5 48-48 48s-48-21.5-48-48zm-64 80c8.8 0 16 7.2 16 16v16c0 53 43 96 96 96s96-43 96-96v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 65.3-48.9 119.1-112 127v17c0 8.8-7.2 16-16 16s-16-7.2-16-16v-17c-63.1-7.9-112-61.7-112-127v-16c0-8.8 7.2-16 16-16"
                />
                <Path d="M256 96c-26.5 0-48 21.5-48 48v112c0 26.5 21.5 48 48 48s48-21.5 48-48V144c0-26.5-21.5-48-48-48m-96 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v16c0 65.3 48.9 119.1 112 127v17c0 8.8 7.2 16 16 16s16-7.2 16-16v-17c63.1-7.9 112-61.7 112-127v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16c0 53-43 96-96 96s-96-43-96-96z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
