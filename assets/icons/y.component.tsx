import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const YIcon: React.FC<
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
                <Path d="M58 45.4C47.8 31 27.8 27.7 13.4 38S-4.3 68.2 6 82.6l154 215.7V448c0 17.7 14.3 32 32 32s32-14.3 32-32V298.3L378 82.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-7-44.6 7.4L192 232.9z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path d="M43.4 41.9c-7.7-10.7-22.7-13.1-33.5-5.3S-3.2 59.3 4.6 70.1L168 295.8V456c0 13.3 10.7 24 24 24s24-10.7 24-24V295.8L379.4 70.1c7.8-10.7 5.4-25.7-5.4-33.5s-25.7-5.4-33.5 5.4L192 247.1z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path d="M28.9 38.5c-5.2-7.1-15.2-8.7-22.4-3.4s-8.6 15.2-3.4 22.4L176 293.2V464c0 8.8 7.2 16 16 16s16-7.2 16-16V293.2L380.9 57.5c5.2-7.1 3.7-17.1-3.4-22.4s-17.1-3.7-22.4 3.4L192 260.9z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path d="M14.4 35.2c-2.6-3.5-7.6-4.3-11.2-1.7s-4.3 7.6-1.7 11.2L184 290.6V472c0 4.4 3.6 8 8 8s8-3.6 8-8V290.6L382.4 44.8c2.6-3.5 1.9-8.6-1.7-11.2s-8.6-1.9-11.2 1.7L192 274.6z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M58 45.4C47.8 31 27.8 27.7 13.4 38S-4.3 68.2 6 82.6l154 215.7V448c0 17.7 14.3 32 32 32s32-14.3 32-32V298.3L378 82.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-7-44.6 7.4L192 232.9z"
                />
                <Path d="" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
