import React, { useRef } from "react";

import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";

export const SquareLetterboxdIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM105.1 187C66.4 187 35 218.3 35 257s31.4 70 70.1 70c24.8 0 46.5-12.8 59-32.2l.5-.7-.4-.6c-6.5-10.6-10.2-23.1-10.2-36.5 0-13.6 3.9-26.3 10.6-37.1-12.4-19.8-34.4-32.9-59.5-32.9m118.9 0c-24.8 0-46.5 12.8-59 32.2l-.5.7.4.6c6.5 10.6 10.2 23.1 10.2 36.5 0 13.6-3.9 26.3-10.6 37.1 12.4 19.7 34.4 32.9 59.5 32.9 24.8 0 46.5-12.8 59-32.2l.5-.7-.4-.6c-6.5-10.6-10.2-23.1-10.2-36.5 0-13.6 3.9-26.3 10.6-37.1-12.4-19.7-34.4-32.9-59.5-32.9m118.9 0c-24.8 0-46.5 12.8-59 32.2l-.5.7.4.6c6.5 10.6 10.2 23.1 10.2 36.5 0 13.6-3.9 26.3-10.6 37.1 12.4 19.8 34.4 32.9 59.5 32.9 38.7 0 70.1-31.3 70.1-70s-31.4-70-70.1-70" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
