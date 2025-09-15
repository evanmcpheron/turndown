import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ClockTwoThirtyIcon: React.FC<
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
                <Path d="M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-24 392V256c0-8 4-15.5 10.7-20l96-64c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3L280 268.8V392c0 13.3-10.7 24-24 24s-24-10.7-24-24" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M48 256a208 208 0 1 0 416 0 208 208 0 1 0-416 0m464 0a256 256 0 1 1-512 0 256 256 0 1 1 512 0M232 392V256c0-8 4-15.5 10.7-20l96-64c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3L280 268.8V392c0 13.3-10.7 24-24 24s-24-10.7-24-24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M32 256a224 224 0 1 0 448 0 224 224 0 1 0-448 0m480 0a256 256 0 1 1-512 0 256 256 0 1 1 512 0M240 400V256c0-5.3 2.7-10.3 7.1-13.3l96-64c7.4-4.9 17.3-2.9 22.2 4.4s2.9 17.3-4.4 22.2L272 264.6V400c0 8.8-7.2 16-16 16s-16-7.2-16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M16 256a240 240 0 1 0 480 0 240 240 0 1 0-480 0m496 0a256 256 0 1 1-512 0 256 256 0 1 1 512 0M248 408V256c0-2.7 1.3-5.2 3.6-6.7l96-64c3.7-2.5 8.6-1.5 11.1 2.2s1.5 8.6-2.2 11.1L264 260.3V408c0 4.4-3.6 8-8 8s-8-3.6-8-8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-24 392V256c0-8 4-15.5 10.7-20l96-64c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3L280 268.8V392c0 13.3-10.7 24-24 24s-24-10.7-24-24"
                />
                <Path d="M256 416c-13.3 0-24-10.7-24-24V256c0-8 4-15.5 10.7-20l96-64c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3L280 268.8V392c0 13.3-10.7 24-24 24" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
