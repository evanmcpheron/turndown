import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SquareVIcon: React.FC<
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
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm77.5 125.3 82.5 165 82.5-165.1c5.9-11.9 20.3-16.7 32.2-10.7s16.7 20.3 10.7 32.2l-104 208c-4.1 8.1-12.4 13.3-21.5 13.3s-17.4-5.1-21.5-13.3l-104-208c-5.9-11.9-1.1-26.3 10.7-32.2s26.3-1.1 32.2 10.7z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm141.5 53.3 82.5 165 82.5-165.1c5.9-11.9 20.3-16.7 32.2-10.7s16.7 20.3 10.7 32.2l-104 208c-4.1 8.1-12.4 13.3-21.5 13.3s-17.4-5.1-21.5-13.3l-104-208c-5.9-11.9-1.1-26.3 10.7-32.2s26.3-1.1 32.2 10.7z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm126.3 56.8L224 348.2l97.7-195.4c4-7.9 13.6-11.1 21.5-7.2s11.1 13.6 7.2 21.5l-112 224c-2.7 5.4-8.3 8.8-14.3 8.8s-11.6-3.4-14.3-8.8l-112-224c-4-7.9-.7-17.5 7.2-21.5s17.5-.7 21.5 7.2z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm111.2 52.4L224 374.1l112.8-225.7c2-4 6.8-5.6 10.7-3.6s5.6 6.8 3.6 10.7l-120 240c-1.4 2.7-4.1 4.4-7.2 4.4s-5.8-1.7-7.2-4.4l-120-240c-2-4-.4-8.8 3.6-10.7s8.8-.4 10.7 3.6z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm77.5 125.3 82.5 165 82.5-165.1c5.9-11.9 20.3-16.7 32.2-10.7s16.7 20.3 10.7 32.2l-104 208c-4.1 8.1-12.4 13.3-21.5 13.3s-17.4-5.1-21.5-13.3l-104-208c-5.9-11.9-1.1-26.3 10.7-32.2s26.3-1.1 32.2 10.7z"
                />
                <Path d="M109.3 146.5c11.9-5.9 26.3-1.1 32.2 10.7L224 322.3l82.5-165.1c5.9-11.9 20.3-16.7 32.2-10.7s16.7 20.3 10.7 32.2l-104 208c-4.1 8.1-12.4 13.3-21.5 13.3s-17.4-5.1-21.5-13.3l-104-208c-5.9-11.9-1.1-26.3 10.7-32.2z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
