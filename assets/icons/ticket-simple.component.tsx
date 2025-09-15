import React, { useRef } from "react";

import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";

export const TicketSimpleIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v64c0 8.8-7.4 15.7-15.7 18.6C541.5 217.1 528 235 528 256s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-64c0-8.8 7.4-15.7 15.7-18.6C34.5 294.9 48 277 48 256s-13.5-38.9-32.3-45.4C7.4 207.7 0 200.8 0 192z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v60.1c0 10.2-6.4 19.2-16 22.6-18.7 6.6-32 24.4-32 45.3s13.3 38.7 32 45.3c9.6 3.4 16 12.5 16 22.6V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-60.1c0-10.2 6.4-19.2 16-22.6 18.7-6.6 32-24.4 32-45.3s-13.3-38.7-32-45.3c-9.6-3.4-16-12.5-16-22.6zm64-16c-8.8 0-16 7.2-16 16v44.9c28.7 16.6 48 47.6 48 83.1s-19.3 66.6-48 83.1V384c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16v-44.9c-28.7-16.6-48-47.6-48-83.1s19.3-66.6 48-83.1V128c0-8.8-7.2-16-16-16z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v66c0 7.3-4.9 13.7-12 15.5-20.7 5.3-36 24.1-36 46.5s15.3 41.2 36 46.5c7.1 1.8 12 8.2 12 15.5v66c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-66c0-7.3 4.9-13.7 12-15.5 20.7-5.3 36-24.1 36-46.5s-15.3-41.2-36-46.5c-7.1-1.8-12-8.2-12-15.5zm64-32c-17.7 0-32 14.3-32 32v54.7C60.2 195 80 223.2 80 256s-19.8 61-48 73.3V384c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-54.7c-28.2-12.3-48-40.5-48-73.3s19.8-61 48-73.3V128c0-17.7-14.3-32-32-32z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v72.6c0 4-2.9 7.4-6.9 7.9-23.2 3.3-41.1 23.3-41.1 47.5s17.9 44.2 41.1 47.5c3.9.6 6.9 3.9 6.9 7.9V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-72.6c0-4 2.9-7.4 6.9-7.9C30.1 300.2 48 280.2 48 256s-17.9-44.2-41.1-47.5c-3.9-.6-6.9-3.9-6.9-7.9zm64-48c-26.5 0-48 21.5-48 48v66c27.6 7.1 48 32.2 48 62s-20.4 54.9-48 62v66c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48v-66c-27.6-7.1-48-32.2-48-62s20.4-54.9 48-62v-66c0-26.5-21.5-48-48-48z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v64c0 8.8-7.4 15.7-15.7 18.6C541.5 217.1 528 235 528 256s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-64c0-8.8 7.4-15.7 15.7-18.6C34.5 294.9 48 277 48 256s-13.5-38.9-32.3-45.4C7.4 207.7 0 200.8 0 192z"
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
