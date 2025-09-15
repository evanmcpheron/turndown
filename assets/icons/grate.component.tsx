import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const GrateIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone";
  }
> = ({
  type,
  size,
  color: colorName,
  active,
  style,
  opacity,
  haptic,
  ...more
}) => {
  const { colors } = useTheme();

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
    color: colors[colorName || "text"],
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64m0 64h32v128H64zm0 192h32v128H64zm96 128V288h32v128zm96 0V288h32v128zm96 0V288h32v128zm32-192h-32V96h32zM288 96v128h-32V96zm-96 0v128h-32V96z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M56 32C25.1 32 0 57.1 0 88v336c0 30.9 25.1 56 56 56h336c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56H56m48 48v152H48V88c0-4.4 3.6-8 8-8zM48 280h56v152H56c-4.4 0-8-3.6-8-8zm104 152V280h48v152zm96 0V280h48v152zm96 0V280h56v144c0 4.4-3.6 8-8 8zm56-200h-56V80h48c4.4 0 8 3.6 8 8zM296 80v152h-48V80zm-96 0v152h-48V80z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 0h256c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32m0 32v112h40V128zm72 112h40V128h-40zm72 0h40V128h-40zm72 0h40V128h-40zm0 32v112h40V272zm-32 0h-40v112h40zm-72 0h-40v112h40zm-72 0H96v112h40z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm88 0h272c13.3 0 24 10.7 24 24v272c0 13.3-10.7 24-24 24H88c-13.3 0-24-10.7-24-24V120c0-13.3 10.7-24 24-24m-8 24v128h64V112H88c-4.4 0-8 3.6-8 8m80 128h56V112h-56zm72 0h56V112h-56zm72 0h64V120c0-4.4-3.6-8-8-8h-56zm0 16v136h56c4.4 0 8-3.6 8-8V264zm-16 0h-56v136h56zm-72 0h-56v136h56zm-72 0H80v128c0 4.4 3.6 8 8 8h56z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M96 224V96h64v128h32V96h64v128h32V96h64v128h40v64h-40v128h-64V288h-32v128h-64V288h-32v128H96V288H64v-64z"
                />
                <Path d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 0v320h320V96z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
