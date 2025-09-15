import React, { useRef } from "react";

import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";

export const ObjectsAlignBottomIcon: React.FC<
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
                  d="M24 512h464c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24m40-176c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48h-64C85.5 0 64 21.5 64 48zm224 0c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48z"
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
                  d="M24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24h464c13.3 0 24 10.7 24 24s-10.7 24-24 24zm152-176V48h-64v288zm-64 48c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48zm288-48V176h-64v160zm-64 48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48z"
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
                  d="M16 512c-8.8 0-16-7.2-16-16s7.2-16 16-16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16zm160-160c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16zm-64 32c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48zm288-32c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16zm-64 32c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48z"
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
                  d="M8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8h496c4.4 0 8 3.6 8 8s-3.6 8-8 8zm168-112c17.7 0 32-14.3 32-32V48c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32zm-64 16c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48zm288-16c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32zm-64 16c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48z"
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
                  d="M112 384c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48zm224 0c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 488c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24"
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
