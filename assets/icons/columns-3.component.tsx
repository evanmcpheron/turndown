import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const Columns3Icon: React.FC<
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
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm128 64v320H64V96zm64 0h128v320H256zm320 0v320H448V96z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M448 80v352h128c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zm-48 0H240v352h160zM192 432V80H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M448 64v384h128c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-32 0H224v384h192zM192 448V64H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M448 48v416h128c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zm-16 0H208v416h224zM192 464V48H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M192 96h64v320h-64zm192 0h64v320h-64z"
                />
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm512 64v320H64V96z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
