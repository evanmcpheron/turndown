import React, { useRef } from "react";

import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";

export const ElloIcon: React.FC<
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
              <Svg viewBox="0 0 496 512"  fill={colors[colorName || "text"]} >
                <Path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8m143.84 285.2C375.31 358.51 315.79 404.8 248 404.8s-127.31-46.29-143.84-111.6c-1.65-7.44 2.48-15.71 9.92-17.36s15.71 2.48 17.36 9.92c14.05 52.91 62 90.11 116.56 90.11s102.51-37.2 116.56-90.11c1.65-7.44 9.92-12.4 17.36-9.92 7.44 1.65 12.4 9.92 9.92 17.36" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
