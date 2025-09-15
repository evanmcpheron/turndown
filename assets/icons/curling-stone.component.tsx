import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CurlingStoneIcon: React.FC<
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
                <Path d="M224 128c0-17.7 14.3-32 32-32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H256c-53 0-96 43-96 96v32c-35.3 0-64 28.7-64 64-53 0-96 43-96 96v16h576v-16c0-53-43-96-96-96 0-35.3-28.7-64-64-64H224zm352 240H0v16c0 53 43 96 96 96h384c53 0 96-43 96-96z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M264 80c-22.1 0-40 17.9-40 40v24h192c35.3 0 64 28.7 64 64v1.1c54.3 7.8 96 54.4 96 110.9v48c0 61.9-50.1 112-112 112H112C50.1 480 0 429.9 0 368v-48c0-56.4 41.7-103.1 96-110.9V208c0-35.3 28.7-64 64-64h16v-24c0-48.6 39.4-88 88-88h128c13.3 0 24 10.7 24 24s-10.7 24-24 24zM112 432h352c35.3 0 64-28.7 64-64H48c0 35.3 28.7 64 64 64M48 320h480c0-35.3-28.7-64-64-64H112c-35.3 0-64 28.7-64 64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M192 112c0-26.5 21.5-48 48-48h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H240c-44.2 0-80 35.8-80 80v48c-35.3 0-64 28.7-64 64v1.1C41.7 232.9 0 279.6 0 336v32c0 61.9 50.1 112 112 112h352c61.9 0 112-50.1 112-112v-32c0-56.4-41.7-103.1-96-110.9V224c0-35.3-28.7-64-64-64H192zm256 112H128c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32M112 448c-44.2 0-80-35.8-80-80h512c0 44.2-35.8 80-80 80zM32 336c0-44.2 35.8-80 80-80h352c44.2 0 80 35.8 80 80z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path d="M192 104c0-30.9 25.1-56 56-56h160c4.4 0 8-3.6 8-8s-3.6-8-8-8H248c-39.8 0-72 32.2-72 72v56h-24c-30.9 0-56 25.1-56 56v9.1C41.7 232.9 0 279.6 0 336v32c0 61.9 50.1 112 112 112h352c61.9 0 112-50.1 112-112v-32c0-56.4-41.7-103.1-96-110.9V216c0-30.9-25.1-56-56-56H192zm272 120H112v-8c0-22.1 17.9-40 40-40h272c22.1 0 40 17.9 40 40zM112 464c-53 0-96-43-96-96v-8h544v8c0 53-43 96-96 96zM16 344v-8c0-53 43-96 96-96h352c53 0 96 43 96 96v8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M576 336H0v-16c0-53 43-96 96-96h384c53 0 96 43 96 96zm0 32v16c0 53-43 96-96 96H96c-53 0-96-43-96-96v-16z"
                />
                <Path d="M224 128c0-17.7 14.3-32 32-32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H256c-53 0-96 43-96 96v32c-35.3 0-64 28.7-64 64h384c0-35.3-28.7-64-64-64H224z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
