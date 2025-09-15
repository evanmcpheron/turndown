import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BracketSquareRightIcon: React.FC<
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
              <Svg viewBox="0 0 192 512" fill={color}>
                <Path d="M192 96c0-35.3-28.7-64-64-64H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v320H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c35.3 0 64-28.7 64-64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 192 512" fill={color}>
                <Path d="M192 88c0-30.9-25.1-56-56-56H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c4.4 0 8 3.6 8 8v336c0 4.4-3.6 8-8 8H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c30.9 0 56-25.1 56-56z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 192 512" fill={color}>
                <Path d="M192 80c0-26.5-21.5-48-48-48H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c26.5 0 48-21.5 48-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 192 512" fill={color}>
                <Path d="M192 72c0-22.1-17.9-40-40-40H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c13.3 0 24 10.7 24 24v368c0 13.3-10.7 24-24 24H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h112c22.1 0 40-17.9 40-40z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 192 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M192 96c0-35.3-28.7-64-64-64H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v320H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c35.3 0 64-28.7 64-64z"
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
