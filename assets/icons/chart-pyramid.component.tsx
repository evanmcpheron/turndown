import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ChartPyramidIcon: React.FC<
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
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M290.6 59.7c-15.4-26.5-53.7-26.5-69.1 0L163 160h186zM69.6 320h372.8l-74.7-128H144.3zM51 352l-39.6 67.8C-4.2 446.5 15.1 480 45.9 480h420.2c30.9 0 50.1-33.5 34.6-60.2L461 352z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M256 95.8 199.9 192h112.2zM125.2 320h261.6l-46.7-80H171.9zm-28 48-37.3 64h392.3l-37.3-64zM214.5 71.6c18.5-31.8 64.4-31.8 82.9 0l196.2 336.2c18.7 32-4.4 72.2-41.5 72.2H59.9c-37 0-60.1-40.2-41.5-72.2z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M269.8 87.7c-6.2-10.6-21.5-10.6-27.6 0L181.3 192h149.4zM106.7 320h298.6l-56-96H162.7zM88 352l-42 71.9c-6.2 10.7 1.5 24.1 13.9 24.1h392.2c12.3 0 20-13.4 13.8-24.1L424 352zM214.5 71.6c18.5-31.8 64.4-31.8 82.9 0l196.2 336.2c18.7 32-4.4 72.2-41.5 72.2H59.9c-37 0-60.1-40.2-41.5-72.2z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M276.7 67.8c-9.3-15.9-32.2-15.9-41.5 0L162.8 192h186.4zM88.1 320h335.8l-65.4-112h-205zm-9.3 16-53.6 91.9c-9.3 16 2.2 36.1 20.7 36.1h420.2c18.5 0 30.1-20.1 20.7-36.1L433.2 336zM221.4 59.7c15.4-26.5 53.7-26.5 69.1 0l210.1 360.1c15.6 26.7-3.7 60.2-34.6 60.2H45.9c-30.9 0-50.1-33.5-34.6-60.2z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M144.3 192 51 352h410l-93.3-160z"
                />
                <Path d="M221.4 59.7 144.3 192h223.4L290.6 59.7c-15.4-26.5-53.7-26.5-69.1 0zM51 352l-39.6 67.8C-4.2 446.5 15.1 480 45.9 480h420.2c30.9 0 50.1-33.5 34.6-60.2L461 352z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
