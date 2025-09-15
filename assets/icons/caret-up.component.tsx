import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CaretUpIcon: React.FC<
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
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9S19 320.1 32 320.1h256c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M160 182.6 70.6 272h178.8zm-22.6-45.3c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301 320 288 320H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M154.4 162.2c1.4-1.3 3.5-2.2 5.6-2.2s4.2.8 5.6 2.2l120.2 113.5c1.4 1.3 2.2 3.2 2.2 5.2 0 3.9-3.2 7.1-7.1 7.1H39.1c-3.9 0-7.1-3.2-7.1-7.1 0-2 .8-3.8 2.2-5.2zm-22-23.3L12.3 252.4C4.4 259.8 0 270.1 0 280.9 0 302.5 17.5 320 39.1 320h241.8c21.6 0 39.1-17.5 39.1-39.1 0-10.8-4.4-21.1-12.3-28.4L187.6 138.9c-7.4-7-17.3-10.9-27.6-10.9s-20.1 3.9-27.6 10.9" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M144.6 150.6c4-4.2 9.6-6.6 15.4-6.6s11.4 2.4 15.4 6.6l125.1 132.1c2.2 2.3 3.5 5.4 3.5 8.7 0 7-5.6 12.6-12.6 12.6H28.6c-7 0-12.6-5.6-12.6-12.6 0-3.2 1.2-6.3 3.5-8.7zm-11.6-11L7.8 271.7C2.8 277 0 284.1 0 291.4 0 307.2 12.8 320 28.6 320h262.8c15.8 0 28.6-12.8 28.6-28.6 0-7.3-2.8-14.4-7.8-19.7L187 139.6c-7-7.4-16.8-11.6-27-11.6s-20 4.2-27 11.6" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9S19 320.1 32 320.1h256c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                />
                <Path d="" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
