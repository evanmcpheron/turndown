import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const TruckRampIcon: React.FC<
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
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path d="M640 400V0H416c-35.3 0-64 28.7-64 64v289.8L31.6 441.1c-17.1 4.6-27.1 22.2-22.5 39.3s22.2 27.1 39.3 22.5L416 402.7c1.5 60.6 51 109.3 112 109.3 61.9 0 112-50.1 112-112m-112-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path d="M440 0c-48.6 0-88 39.4-88 88v285.8l-334.3 91C4.9 468.3-2.6 481.5.8 494.3s16.7 20.3 29.5 16.8L416.2 406c3.1 59.1 52 106 111.8 106 61.9 0 112-50.1 112-112s-50.1-112-112-112c-45.3 0-84.3 26.9-102 65.6l-.4.1-25.7 7V88c0-22.1 17.9-40 40-40H616c13.3 0 24-10.7 24-24S629.3 0 616 0zm88 336a64 64 0 1 1 0 128 64 64 0 1 1 0-128" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path d="M432 0c-44.2 0-80 35.8-80 80v304c0 1.3.2 2.5.4 3.7L11.8 480.6C3.3 482.9-1.8 491.7.6 500.2s11.1 13.6 19.6 11.2l395.9-107.8C417.9 463.8 467.3 512 528 512c61.9 0 112-50.1 112-112s-50.1-112-112-112c-51.2 0-94.4 34.4-107.7 81.3l-.5.1-35.8 9.7V80c0-26.5 21.5-48 48-48h192c8.8 0 16-7.2 16-16s-7.2-16-16-16zm96 320a80 80 0 1 1 0 160 80 80 0 1 1 0-160" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path d="M424 0c-39.8 0-72 32.2-72 72v325.1L5.8 496.3c-4.2 1.2-6.7 5.6-5.5 9.9s5.6 6.7 9.9 5.5l405.9-116.3c-.1 1.5-.1 3-.1 4.6 0 61.9 50.1 112 112 112s112-50.1 112-112-50.1-112-112-112c-54.4 0-99.7 38.8-109.9 90.2L368 392.5V72c0-30.9 25.1-56 56-56h208c4.4 0 8-3.6 8-8s-3.6-8-8-8zm104 304a96 96 0 1 1 0 192 96 96 0 1 1 0-192" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M448 416a96 96 0 1 1 192 0 96 96 0 1 1-192 0"
                />
                <Path d="M416.7 402.5C423.4 338.2 477.9 288 544 288c38.2 0 72.5 16.8 96 43.3V0H416c-35.3 0-64 28.7-64 64v289.8L31.6 441.1c-17.1 4.6-27.1 22.2-22.5 39.3s22.2 27.1 39.3 22.5z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
