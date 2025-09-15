import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CoffinIcon: React.FC<
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
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path d="m11.5 114.9 91-104c6-6.9 14.8-10.9 24-10.9h131c9.2 0 18 4 24.1 10.9l91 104c7.4 8.5 11.5 19.3 11.5 30.6q0 6.6-1.8 12.9l-95.6 330.5c-4 13.7-16.5 23.1-30.7 23.1H128.1c-14.3 0-26.8-9.4-30.7-23.1L1.8 158.3Q0 152 0 145.4c0-11.2 4.1-22.1 11.5-30.6z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path d="M48.2 145.8 133.8 48h116.4l85.6 97.8L243.9 464H140.1zm54.2-134.9-91 104a46.67 46.67 0 0 0-9.6 43.4l95.5 330.6c4 13.7 16.5 23.1 30.7 23.1h127.9c14.3 0 26.8-9.4 30.7-23.1l95.5-330.6q1.8-6.3 1.8-12.9c0-11.2-4.1-22.1-11.5-30.6l-91-104C275.5 4 266.7 0 257.5 0h-131c-9.2 0-18 4-24.1 10.9" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path d="M126.5 32h131l91 104c2.3 2.6 3.6 6 3.6 9.5 0 1.4-.2 2.7-.6 4L255.9 480H128L32.6 149.4c-.4-1.3-.6-2.6-.6-4 0-3.5 1.3-6.9 3.6-9.5l91-104zm-24.1-21.1-91 104a46.67 46.67 0 0 0-9.6 43.4l95.5 330.6c4 13.7 16.5 23.1 30.7 23.1h127.9c14.3 0 26.8-9.4 30.7-23.1l95.5-330.6q1.8-6.3 1.8-12.9c0-11.2-4.1-22.1-11.5-30.6l-91-104C275.5 4 266.7 0 257.5 0h-131c-9.2 0-18 4-24.1 10.9" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path d="M114.5 21.5c3-3.5 7.4-5.5 12-5.5h131c4.6 0 9 2 12 5.5l91 104c4.8 5.5 7.5 12.7 7.5 20q0 4.35-1.2 8.4l-95.5 330.5c-2 6.8-8.2 11.6-15.4 11.6H128.1c-7.1 0-13.4-4.7-15.4-11.6L17.2 153.9c-.8-2.7-1.2-5.6-1.2-8.4 0-7.4 2.7-14.5 7.5-20zm-12-10.5-91 104C4.1 123.3 0 134.2 0 145.4q0 6.6 1.8 12.9l95.5 330.6c4 13.7 16.5 23.1 30.7 23.1h127.9c14.3 0 26.8-9.4 30.7-23.1l95.5-330.6q1.8-6.3 1.8-12.9c0-11.2-4.1-22.1-11.5-30.6l-91-104C275.5 4 266.7 0 257.5 0h-131c-9.2 0-18 4-24.1 10.9z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="m11.5 114.9 91-104c6-6.9 14.8-10.9 24-10.9h131c9.2 0 18 4 24.1 10.9l91 104c7.4 8.5 11.5 19.3 11.5 30.6q0 6.6-1.8 12.9l-95.6 330.5c-4 13.7-16.5 23.1-30.7 23.1H128.1c-14.3 0-26.8-9.4-30.7-23.1L1.8 158.3Q0 152 0 145.4c0-11.2 4.1-22.1 11.5-30.6z"
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
