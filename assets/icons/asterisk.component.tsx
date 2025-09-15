import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const AsteriskIcon: React.FC<
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
                <Path d="M192 32c17.7 0 32 14.3 32 32v135.5l111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11l-111.6-67V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V312.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11l111.6 67V64c0-17.7 14.3-32 32-32" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path d="M192 32c13.3 0 24 10.7 24 24v156.9l131.4-81.3c11.3-7 26.1-3.5 33 7.8s3.5 26.1-7.8 33l-135 83.6 135 83.6c11.3 7 14.8 21.8 7.8 33s-21.8 14.7-33 7.8L216 299.1V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V299.1L36.6 380.4c-11.3 7-26.1 3.5-33-7.8s-3.5-26.1 7.8-33l135-83.6-135-83.6c-11.3-7-14.8-21.8-7.8-33s21.8-14.8 33-7.8L168 212.9V56c0-13.3 10.7-24 24-24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path d="M192 32c8.8 0 16 7.2 16 16v178.9l151.4-96.4c7.5-4.7 17.3-2.5 22.1 4.9s2.5 17.3-4.9 22.1L221.8 256l154.8 98.5c7.5 4.7 9.7 14.6 4.9 22.1s-14.6 9.7-22.1 4.9L208 285.1V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V285.1L24.6 381.5c-7.5 4.7-17.3 2.5-22.1-4.9S0 359.3 7.4 354.5L162.2 256 7.4 157.5c-7.5-4.7-9.7-14.6-4.9-22.1s14.6-9.7 22.1-4.9L176 226.9V48c0-8.8 7.2-16 16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path d="M192 32c4.4 0 8 3.6 8 8v201.2l171.6-111.9c3.7-2.4 8.7-1.4 11.1 2.3s1.4 8.7-2.3 11.1L206.6 256l173.8 113.3c3.7 2.4 4.7 7.4 2.3 11.1s-7.4 4.7-11.1 2.3L200 270.8V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V270.8L12.4 382.7c-3.7 2.4-8.7 1.4-11.1-2.3s-1.4-8.7 2.3-11.1L177.4 256 3.6 142.7c-3.7-2.4-4.7-7.4-2.3-11.1s7.4-4.7 11.1-2.3L184 241.2V40c0-4.4 3.6-8 8-8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M192 32c17.7 0 32 14.3 32 32v135.5l111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11l-111.6-67V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V312.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11l111.6 67V64c0-17.7 14.3-32 32-32"
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
