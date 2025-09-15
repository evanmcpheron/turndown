import React, { useRef } from "react";

import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";

export const ZIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 64c0-17.7 14.3-32 32-32h320c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1L100.3 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1L283.7 96H32C14.3 96 0 81.7 0 64"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 56c0-13.3 10.7-24 24-24h336c9.3 0 17.8 5.4 21.8 13.9s2.6 18.4-3.4 25.6L75.5 432H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-9.3 0-17.8-5.4-21.8-13.9s-2.6-18.4 3.4-25.6L308.5 80H24C10.7 80 0 69.3 0 56"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 48c0-8.8 7.2-16 16-16h352c6.2 0 11.9 3.6 14.5 9.3s1.7 12.3-2.3 17.1L50.5 448H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-6.2 0-11.9-3.6-14.5-9.3s-1.7-12.3 2.3-17.1L333.5 64H16C7.2 64 0 56.8 0 48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 40c0-4.4 3.6-8 8-8h368c3.1 0 6 1.8 7.3 4.6s.8 6.2-1.2 8.5L25.3 464H376c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-3.1 0-6-1.8-7.3-4.6s-.9-6.2 1.2-8.5L358.7 48H8c-4.4 0-8-3.6-8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 64c0-17.7 14.3-32 32-32h320c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1L100.3 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1L283.7 96H32C14.3 96 0 81.7 0 64"
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
