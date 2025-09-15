import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const DiamondHalfStrokeIcon: React.FC<
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
                <Path d="M256 78.5 433.5 256 256 433.5zm28.3-66.8c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M256 464V48c2.6 0 5.2 1 7 2.9L461.1 249c1.9 1.9 2.9 4.4 2.9 7s-1 5.2-2.9 7L263 461.1c-1.9 1.9-4.4 2.9-7 2.9M215 17 17 215C6.1 225.9 0 240.6 0 256s6.1 30.1 17 41l198 198c10.9 10.9 25.6 17 41 17s30.1-6.1 41-17l198-198c10.9-10.9 17-25.6 17-41s-6.1-30.1-17-41L297 17C286.1 6.1 271.4 0 256 0s-30.1 6.1-41 17" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M272 44.7v422.6l205.7-205.6c3.1-3.1 3.1-8.2 0-11.3zm-32 422.6V44.7L34.3 250.3c-3.1 3.1-3.1 8.2 0 11.3zM227.7 11.7c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M248 17.4c-3.3 1.2-6.4 3-9 5.7L23 239c-9.4 9.4-9.4 24.6 0 33.9L239 489c2.6 2.6 5.7 4.5 9 5.7zm16 0v477.2c3.3-1.2 6.4-3 9-5.7L489 273c9.4-9.4 9.4-24.6 0-33.9L273 23c-2.6-2.6-5.7-4.5-9-5.7zm-36.3-5.7c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M256 512c10.2 0 20.5-3.9 28.3-11.7l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216C276.5 3.9 266.2 0 256 0v78.5L433.5 256 256 433.5z"
                />
                <Path d="M256 0c-10.2 0-20.5 3.9-28.3 11.7l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c7.8 7.8 18 11.7 28.3 11.7z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
