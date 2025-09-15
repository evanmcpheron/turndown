import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const HexagonIcon: React.FC<
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
                <Path d="M17.1 220a71.81 71.81 0 0 0 0 72l88.3 152.9c12.9 22.3 36.6 36 62.4 36h176.6a72.1 72.1 0 0 0 62.4-36L494.9 292c12.9-22.3 12.9-49.7 0-72L406.6 67.1c-12.9-22.3-36.6-36-62.4-36H167.6a72.1 72.1 0 0 0-62.4 36z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M17.1 220a71.81 71.81 0 0 0 0 72l88.3 152.9c12.9 22.3 36.6 36 62.4 36h176.6a72.1 72.1 0 0 0 62.4-36L494.9 292c12.9-22.3 12.9-49.7 0-72L406.6 67.1c-12.9-22.3-36.6-36-62.4-36H167.6a72.1 72.1 0 0 0-62.4 36zm41.6 48c-4.3-7.4-4.3-16.6 0-24l88.2-152.9c4.3-7.4 12.2-12 20.8-12h176.6c8.6 0 16.5 4.6 20.8 12L453.4 244c4.3 7.4 4.3 16.6 0 24l-88.3 152.9c-4.3 7.4-12.2 12-20.8 12H167.7c-8.6 0-16.5-4.6-20.8-12L58.6 268z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M16 224a64.16 64.16 0 0 0 0 64l92.3 159.8c11.4 19.8 32.6 32 55.4 32h184.6c22.9 0 44-12.2 55.4-32L496 288c11.4-19.8 11.4-44.2 0-64L403.7 64.2c-11.4-19.8-32.6-32-55.4-32H163.7c-22.9 0-44 12.2-55.4 32zm27.7 48c-5.7-9.9-5.7-22.1 0-32L136 80.2c5.7-9.9 16.3-16 27.7-16h184.6c11.4 0 22 6.1 27.7 16L468.3 240c5.7 9.9 5.7 22.1 0 32L376 431.8c-5.7 9.9-16.3 16-27.7 16H163.7c-11.4 0-22-6.1-27.7-16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M30.9 228c-10 17.3-10 38.7 0 56l88.3 152.9c10 17.3 28.5 28 48.5 28h176.6c20 0 38.5-10.7 48.5-28L481.1 284c10-17.3 10-38.7 0-56L392.8 75.1c-10-17.3-28.5-28-48.5-28H167.7c-20 0-38.5 10.7-48.5 28zm-13.8 64a71.81 71.81 0 0 1 0-72l88.3-152.9c12.9-22.3 36.6-36 62.4-36h176.5a72.1 72.1 0 0 1 62.4 36L494.9 220c12.9 22.3 12.9 49.7 0 72l-88.3 152.9c-12.9 22.3-36.6 36-62.4 36H167.7a72.1 72.1 0 0 1-62.4-36z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M17.1 220a71.81 71.81 0 0 0 0 72l88.3 152.9c12.9 22.3 36.6 36 62.4 36h176.5a72.1 72.1 0 0 0 62.4-36L494.9 292c12.9-22.3 12.9-49.7 0-72L406.6 67.1c-12.9-22.3-36.6-36-62.4-36H167.7a72.1 72.1 0 0 0-62.4 36z"
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
