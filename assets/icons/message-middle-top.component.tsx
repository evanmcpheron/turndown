import React, { useRef } from "react";

import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";

export const MessageMiddleTopIcon: React.FC<
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M343.5 96H448c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h104.5l75.2-90.2c3-3.6 7.5-5.8 12.3-5.8s9.3 2.1 12.3 5.8z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M343.5 144H448c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16h104.5c14.2 0 27.8-6.3 36.9-17.3L256 66l50.6 60.7c9.1 10.9 22.6 17.3 36.9 17.3m-175-48H64c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H343.5L268.3 5.8c-3-3.7-7.6-5.8-12.3-5.8s-9.3 2.1-12.3 5.8z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M343.5 128H448c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h104.5c9.5 0 18.5-4.2 24.6-11.5L256 41l62.9 75.5c6.1 7.3 15.1 11.5 24.6 11.5M268.3 26.3 256 16l12.3 10.2zM168.5 96H64c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H343.5L268.3 5.8c-3-3.7-7.6-5.8-12.3-5.8s-9.3 2.1-12.3 5.8z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M343.5 112H448c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48h104.5c4.7 0 9.3-2.1 12.3-5.8L256 16l75.2 90.2c3 3.6 7.5 5.8 12.3 5.8m-175-16H64c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H343.5L268.3 5.8c-3-3.7-7.6-5.8-12.3-5.8s-9.3 2.1-12.3 5.8z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M343.5 96H448c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h104.5l75.2-90.2c3-3.6 7.5-5.8 12.3-5.8s9.3 2.1 12.3 5.8z"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
