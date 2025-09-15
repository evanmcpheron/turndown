import React, { useRef } from "react";

import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";

export const GenderlessIcon: React.FC<
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
                  d="M192 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 288a176 176 0 1 0 0-352 176 176 0 1 0 0 352"
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
                  d="M192 128a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 304a176 176 0 1 0 0-352 176 176 0 1 0 0 352"
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
                  d="M192 112a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 320a176 176 0 1 0 0-352 176 176 0 1 0 0 352"
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
                  d="M192 96a160 160 0 1 1 0 320 160 160 0 1 1 0-320m0 336a176 176 0 1 0 0-352 176 176 0 1 0 0 352"
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
                  d="M112 256a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 288a176 176 0 1 0 0-352 176 176 0 1 0 0 352"
                />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
