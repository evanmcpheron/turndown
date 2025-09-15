import React, { useRef } from "react";

import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";

export const ElementorIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M.361 256C.361 397 114 511 255 511c142 0 256-114 256-255C511 116 397 2.05 255 2.05 114 2.05.361 116 .361 256M192 150v213h-43V150zm42 0h128v43H234zm128 85v43H234v-43zm-128 85h128v43H234z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
