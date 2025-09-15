import React, { useRef } from "react";

import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";

export const FirstdraftIcon: React.FC<
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
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M384 192h-64v128H192v128H0v-25.6h166.4v-128h128v-128H384zm-25.6 38.4v128h-128v128H64V512h192V384h128V230.4zm25.6 192h-89.6V512H320v-64h64zM0 0v384h128V256h128V128h128V0z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
