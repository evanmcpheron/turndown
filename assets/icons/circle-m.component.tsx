import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleMIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-84.5-374.1L256 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V226.2L275.4 310c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L176 226.2V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.4 6.7-19.6 16.6-22.8s20.7.3 26.8 8.8z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-84.5-374.1c-6.1-8.4-16.9-12-26.8-8.8s-16.6 12.4-16.6 22.8V360c0 13.3 10.7 24 24 24s24-10.7 24-24V226.2l60.5 83.8c4.5 6.2 11.7 9.9 19.5 9.9s14.9-3.7 19.5-9.9l60.4-83.8V360c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-10.4-6.7-19.6-16.6-22.8s-20.7.3-26.8 8.8L256 255z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-98.9-377.2c-4-5.7-11.3-8.2-17.9-6.1S128 137 128 144v224c0 8.8 7.2 16 16 16s16-7.2 16-16V194.8l82.9 118.4c3 4.3 7.9 6.8 13.1 6.8s10.1-2.5 13.1-6.8L352 194.8V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-7-4.5-13.2-11.2-15.3s-13.9.4-17.9 6.1L256 276.1z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512M142.5 131.4c-2-2.8-5.6-4-9-3s-5.6 4.1-5.6 7.6v240c0 4.4 3.6 8 8 8s8-3.6 8-8V161l105.6 147.6c1.5 2.1 3.9 3.4 6.5 3.4s5-1.2 6.5-3.4L368 161v215c0 4.4 3.6 8 8 8s8-3.6 8-8V136c0-3.5-2.2-6.6-5.6-7.6s-6.9.1-9 3L256 290.2z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-84.5-374.1L256 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V226.2L275.4 310c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L176 226.2V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.4 6.7-19.6 16.6-22.8s20.7.3 26.8 8.8z"
                />
                <Path d="M144.6 129.2c9.9-3.2 20.7.3 26.8 8.8L256 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V226.2L275.4 310c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L176 226.2V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.4 6.7-19.6 16.6-22.8" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
