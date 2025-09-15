import React, { useRef } from "react";

import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";

export const UnsplashIcon: React.FC<
  IconProps & { type: "brands" | Dimensions }
> = ({ type, size, color, active, className, style, ...more }) => {
  const domRef: MickeyObject = useRef(null);

  const { onPress, onOut, onMove, onUp, onDown, onOver, groupId } = more;
  const pointerEvents = {
    onPress,
    onOut,
    onMove,
    onUp,
    onDown,
    onOver,
    groupId,
  };

  usePointerEvent({ element: domRef, active: active, ...pointerEvents });

  const internalProperties = removeUndefined({
    className,
    style: { ...(style || {}) },
    active,
    size,
    color,
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "brands":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M448 230.17V480H0V230.17h141.13v124.92h165.74V230.17ZM306.87 32H141.13v124.91h165.74Z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
