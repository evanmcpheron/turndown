import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowTurnLeftUpIcon: React.FC<
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
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path d="M342.6 137.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 109.3V416c0 17.7 14.3 32 32 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-53 0-96-43-96-96V109.3l-73.4 73.3c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path d="M337 135c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87L216 424c0 22.1 17.9 40 40 40h104c13.3 0 24 10.7 24 24s-10.7 24-24 24H256c-48.6 0-88-39.4-88-88V81.9L81 169c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L175 7c9.4-9.4 24.6-9.4 33.9 0z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path d="M331.3 132.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L208 54.6V432c0 26.5 21.5 48 48 48h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-44.2 0-80-35.8-80-80V54.6L75.3 155.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path d="M349.7 154.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L200 27.3V440c0 30.9 25.1 56 56 56h120c4.4 0 8 3.6 8 8s-3.6 8-8 8H256c-39.8 0-72-32.2-72-72V27.3L45.7 165.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l152-152c3.1-3.1 8.2-3.1 11.3 0l152 152z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M224 112v306.7c0 17.7 14.3 32 32 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-53 0-96-43-96-96V112l32-32z"
                />
                <Path d="M342.6 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 77.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
