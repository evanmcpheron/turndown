import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SquareQuartersIcon: React.FC<
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
                <Path d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 0 160 160L384 96zm0 320h320L224 256z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M52.7 84.7 224 256 395.3 84.7c-2.9-2.9-6.9-4.7-11.3-4.7H64c-4.4 0-8.4 1.8-11.3 4.7m0 342.6c2.9 2.9 6.9 4.7 11.3 4.7h320c4.4 0 8.4-1.8 11.3-4.7L224 256zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M55.7 65.1 224 233.4 392.3 65.1c-2.6-.7-5.4-1.1-8.3-1.1H64c-2.9 0-5.6.4-8.3 1.1M33.1 87.7c-.7 2.7-1.1 5.4-1.1 8.3v320c0 2.9.4 5.6 1.1 8.3L201.4 256zm22.6 359.2c2.6.7 5.4 1.1 8.3 1.1h320c2.9 0 5.6-.4 8.3-1.1L224 278.6zm359.2-22.6c.7-2.6 1.1-5.4 1.1-8.3V96c0-2.9-.4-5.6-1.1-8.3L246.6 256zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M64 48c-10.4 0-20 3.3-27.8 8.9L224 244.7 411.8 56.9C404 51.3 394.4 48 384 48zM24.9 68.2C19.3 76 16 85.6 16 96v320c0 10.4 3.3 20 8.9 27.8L212.7 256zm11.3 386.9C44 460.7 53.6 464 64 464h320c10.4 0 20-3.3 27.8-8.9L224 267.3zm386.9-11.3c5.6-7.8 8.9-17.4 8.9-27.8V96c0-10.4-3.3-20-8.9-27.8L235.3 256zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M224 256 384 96v320zM64 416V96l160 160z"
                />
                <Path d="M384 96v320H64V96zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
