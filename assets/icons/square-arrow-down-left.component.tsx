import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SquareArrowDownLeftIcon: React.FC<
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
                <Path d="M64 480c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm224-112c13.3 0 24-10.7 24-24s-10.7-24-24-24h-94.1L329 185c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-135 135V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v160c0 13.3 10.7 24 24 24z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M64 432c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm288-48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-94.1L329 185c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-135 135V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v160c0 13.3 10.7 24 24 24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M64 448c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm280-64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-97.4l132.7-132.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L160 297.4V192c0-8.8-7.2-16-16-16s-16 7.2-16 16v144c0 8.8 7.2 16 16 16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M64 464c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm280-64c4.4 0 8-3.6 8-8s-3.6-8-8-8H155.3l162.4-162.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L144 324.7V200c0-4.4-3.6-8-8-8s-8 3.6-8 8v144c0 4.4 3.6 8 8 8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M64 480c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm224-112c13.3 0 24-10.7 24-24s-10.7-24-24-24h-94.1L329 185c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-135 135V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v160c0 13.3 10.7 24 24 24z"
                />
                <Path d="M136 368h152c13.3 0 24-10.7 24-24s-10.7-24-24-24h-94.1L329 185c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-135 135V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v160c0 13.3 10.7 24 24 24z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
