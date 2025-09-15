import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowLeftFromBracketIcon: React.FC<
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
                <Path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 224H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H109.3l73.4 73.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-128-128zM352 96c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c53 0 96 43 96 96v256c0 53-43 96-96 96h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M7 273c-9.4-9.4-9.4-24.6 0-33.9L135 111c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 246.1.1c13.3 0 24 10.7 24 24s-10.7 24-24 24H81.9l87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0zM344 80c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c48.6 0 88 39.4 88 88v272c0 48.6-39.4 88-88 88h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c22.1 0 40-17.9 40-40V120c0-22.1-17.9-40-40-40z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M4.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 240H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H54.6l100.7 100.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0zM336 64c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c44.2 0 80 35.8 80 80v288c0 44.2-35.8 80-80 80h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M2.3 261.7c-3.1-3.1-3.1-8.2 0-11.3l136-136c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L27.3 248H344c4.4 0 8 3.6 8 8s-3.6 8-8 8H27.3l122.4 122.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-136-136zM328 48c-4.4 0-8-3.6-8-8s3.6-8 8-8h96c48.6 0 88 39.4 88 88v272c0 48.6-39.4 88-88 88h-96c-4.4 0-8-3.6-8-8s3.6-8 8-8h96c39.8 0 72-32.2 72-72V120c0-39.8-32.2-72-72-72z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M320 64c0 17.7 14.3 32 32 32h64c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c53 0 96-43 96-96V128c0-53-43-96-96-96h-64c-17.7 0-32 14.3-32 32"
                />
                <Path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 224H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H109.3l73.4 73.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-128-128z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
