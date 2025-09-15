import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BasketShoppingMinusIcon: React.FC<
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
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32l51.9 207.5C91 492 116.6 512 146 512h284c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-85.6L365.3 12.9c-6.1-11.7-20.6-16.3-32.4-10.2s-16.3 20.6-10.2 32.4L404.3 192H171.7zM208 328h160c13.3 0 24 10.7 24 24s-10.7 24-24 24H208c-13.3 0-24-10.7-24-24s10.7-24 24-24" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h20l55.9 223.5C107 492 132.6 512 162 512h252c29.4 0 55-20 62.1-48.5L532 240h20c13.3 0 24-10.7 24-24s-10.7-24-24-24h-93.6L365.3 12.9c-6.1-11.7-20.6-16.3-32.4-10.2s-16.3 20.6-10.2 32.4L404.3 192H171.7zM93.5 240h389l-53 211.9c-1.7 7.1-8.1 12.1-15.5 12.1H162c-7.3 0-13.7-5-15.5-12.1zM224 328c-13.3 0-24 10.7-24 24s10.7 24 24 24h128c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M327.9 2.2c-7.6 4.5-10.2 14.2-5.8 21.9l98 167.9H155.9l98-167.9c4.5-7.6 1.9-17.4-5.8-21.9S230.7.3 226.2 8L118.8 192H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h24l59.9 239.5C107 492 132.6 512 162 512h252c29.4 0 55-20 62.1-48.5L536 224h24c8.8 0 16-7.2 16-16s-7.2-16-16-16H457.2L349.8 7.9c-4.5-7.6-14.2-10.2-21.9-5.8zM73 224h430l-57.9 231.8C441.5 470 428.7 480 414 480H162c-14.7 0-27.5-10-31-24.2zm135 112c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M340.2 1c-3.9 2.1-5.3 7-3.2 10.8L434.6 192H141.4L239 11.8c2.1-3.9.7-8.7-3.2-10.8S227.1.3 225 4.2L123.2 192H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h28l63.9 255.5C107 492 132.6 512 162 512h252c29.4 0 55-20 62.1-48.5L540 208h28c4.4 0 8-3.6 8-8s-3.6-8-8-8H452.8L351 4.2c-2.1-3.9-7-5.3-10.8-3.2M52.5 208h471l-62.9 251.6C455.3 481 436.1 496 414 496H162c-22 0-41.2-15-46.6-36.4zM208 344c-4.4 0-8 3.6-8 8s3.6 8 8 8h160c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M0 224c0-17.7 14.3-32 32-32h512c17.7 0 32 14.3 32 32s-14.3 32-32 32l-51.9 207.5C485 492 459.4 512 430 512H146c-29.4 0-55-20-62.1-48.5L32 256c-17.7 0-32-14.3-32-32m208 104c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                />
                <Path d="M253.9 33.8 183 192h-52.6l79.7-177.8c5.4-12.1 19.6-17.5 31.7-12.1s17.5 19.6 12.1 31.7m112-19.6L445.6 192H393L322.1 33.8c-5.4-12.1 0-26.3 12.1-31.7s26.3 0 31.7 12.1M208 328h160c13.3 0 24 10.7 24 24s-10.7 24-24 24H208c-13.3 0-24-10.7-24-24s10.7-24 24-24" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
