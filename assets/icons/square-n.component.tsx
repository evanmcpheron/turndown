import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SquareNIcon: React.FC<
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
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm90.3 104.5 133.7 158V152c0-13.3 10.7-24 24-24s24 10.7 24 24v208c0 10.1-6.3 19.1-15.7 22.5s-20.1.7-26.6-7L160 217.5V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.1 6.3-19.1 15.7-22.5s20.1-.7 26.6 7" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm154.3 40.5 133.7 158V152c0-13.3 10.7-24 24-24s24 10.7 24 24v208c0 10.1-6.3 19.1-15.7 22.5s-20.1.7-26.6-7L160 217.5V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.1 6.3-19.1 15.7-22.5s20.1-.7 26.6 7" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm157 38.7 131 183.4V144c0-8.8 7.2-16 16-16s16 7.2 16 16v224c0 7-4.5 13.1-11.1 15.2s-13.9-.3-17.9-5.9L160 193.9V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-7 4.5-13.1 11.1-15.2s13.9.3 17.9 5.9" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm126 34.8 194 223.8V136c0-4.4 3.6-8 8-8s8 3.6 8 8v240c0 3.3-2.1 6.3-5.2 7.5s-6.7.3-8.8-2.3L128 157.4V376c0 4.4-3.6 8-8 8s-8-3.6-8-8V136c0-3.3 2.1-6.3 5.2-7.5s6.7-.3 8.8 2.3" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm90.3 104.5 133.7 158V152c0-13.3 10.7-24 24-24s24 10.7 24 24v208c0 10.1-6.3 19.1-15.7 22.5s-20.1.7-26.6-7L160 217.5V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.1 6.3-19.1 15.7-22.5s20.1-.7 26.6 7"
                />
                <Path d="M127.7 129.5c9.5-3.5 20.1-.7 26.6 7l133.7 158V152c0-13.3 10.7-24 24-24s24 10.7 24 24v208c0 10.1-6.3 19.1-15.7 22.5s-20.1.7-26.6-7L160 217.5V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.1 6.3-19.1 15.7-22.5" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
