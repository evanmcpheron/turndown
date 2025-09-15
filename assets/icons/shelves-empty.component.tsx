import React, { useRef } from "react";

import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";

export const ShelvesEmptyIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32h512c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v128H64zm0 192h512v192H64z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24v-24h544v24c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v136H48zm0 184h544v208H48z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 16c0-8.8-7.2-16-16-16S0 7.2 0 16v480c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h576v48c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v144H32zm0 176h576v224H32z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8v496c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h608v56c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v168H16zm0 184h608v240H16z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32h512c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v128H64zm0 192h512v192H64z"
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
