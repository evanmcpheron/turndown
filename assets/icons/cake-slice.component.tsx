import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CakeSliceIcon: React.FC<
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
                <Path d="M276.2 38.9c5.6-4.4 12.6-6.9 19.8-6.9 44.3 0 97.6 19.2 139.9 55.8C479.2 125.2 512 181.7 512 256v159.5c0 35.4-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V272c0-9.8 4.5-19.1 12.2-25.1zM448 288H64v48h384v-24.2.2-24M64 416h384v-42.2.2-6H64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M464 304v48H48v-48zM48 416v-32h416v30.4c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM296 32c-7.2 0-14.2 2.4-19.8 6.9l-264 208C4.5 252.9 0 262.2 0 272v144c0 35.3 28.7 64 64 64h384c35.3 0 64-28.6 64-64v-42.2.2-62.2.2-56c0-74.3-32.8-130.8-76.1-168.2C393.6 51.2 340.3 32 296 32" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M296 64 52.3 256H480c0-64-28-112-65-144s-83-48-119-48M0 272c0-9.8 4.5-19.1 12.2-25.1l264-208c5.6-4.4 12.6-6.9 19.8-6.9 44.3 0 97.6 19.2 139.9 55.8C479.2 125.2 512 181.7 512 256v159.5c0 35.4-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V272m32 80h448v-40.2.2-24H32zm0 32v32c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-32z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M294.3 51.3c2.8-2.1 6.2-3.3 9.7-3.3 79.5 0 192 69.9 192 208H26.6zM16 272h480v78.6H16zm480 96v48.2c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V368zM304 32c-7 0-13.9 2.3-19.4 6.6l-272 208C4.6 252.6 0 262 0 272v144c0 35.3 28.7 64 64 64h384c35.3 0 64-28.6 64-64v-42.2.2-62.2.2-56c0-148.3-121.1-224-208-224" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M448 288H0v80h448zm0 112H0v48c0 17.7 14.3 32 32 32h416z"
                />
                <Path d="M296 32c-7.2 0-14.2 2.4-19.8 6.9l-264 208C4.5 252.9 0 262.2 0 272v16h448v193.4c35.3 0 64-28.6 64-64v-43.6.2-62.2.2-56c0-74.3-32.8-130.8-76.1-168.2C393.6 51.2 340.3 32 296 32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
