import React, { useRef } from "react";

import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";

export const KeyboardBrightnessLowIcon: React.FC<
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
                  d="M320 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-160 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m352-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m32 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-416-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
                  d="M320 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-160 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m352-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m32 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-416-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m88-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="M320 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48M208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-24-160a24 24 0 1 0-48 0 24 24 0 1 0 48 0m296 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m88 136a24 24 0 1 0-48 0 24 24 0 1 0 48 0M96 408a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M320 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32M200 400c-4.4 0-8 3.6-8 8s3.6 8 8 8h240c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-40-160a16 16 0 1 0-32 0 16 16 0 1 0 32 0m336 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m80 144a16 16 0 1 0-32 0 16 16 0 1 0 32 0M80 416a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M288 160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-160 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m32 192a32 32 0 1 1 64 0 32 32 0 1 1-64 0M96 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 384c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32"
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
