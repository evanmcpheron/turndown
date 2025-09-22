import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const BoxTapedIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M50.7 58.5 0 160h160l32-128H93.7c-18.2 0-34.8 10.3-43 26.5M288 160h160L397.3 58.5c-8.2-16.2-24.8-26.5-43-26.5H256zm-128 32H0v224c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V192H288v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M261.3 80h81.1c6.3 0 12.1 3.7 14.6 9.5l31.4 70.5H288zm-74.7 0L160 160H59.6L91 89.5c2.6-5.8 8.3-9.5 14.6-9.5h81.1zM160 208v48c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-48h112v208c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V208zM400.9 70c-10.3-23.1-33.2-38-58.5-38H105.6c-25.3 0-48.2 14.9-58.5 38L5.5 163.6c-3.6 8.2-5.5 17-5.5 26V416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V189.6c0-9-1.9-17.8-5.5-26z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M264 32H105.6c-25.3 0-48.2 14.9-58.5 38L5.5 163.6c-3.6 8.2-5.5 17-5.5 26V416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V189.6c0-9-1.9-17.8-5.5-26L400.9 70c-10.3-23.1-33.2-38-58.5-38zm24 128-18-96h72.4c12.6 0 24.1 7.4 29.2 19l34.2 77H288m-32.6 0h-62.8l18-96h26.9l18 96zm.6 32v64h-64v-64zm-96 0v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64h128v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192h128m0-32H42.1l34.2-77c5.1-11.6 16.6-19 29.2-19H178z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M240 48h3l27 128h-92l27-128h35m-80 144v80c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-80h144v224c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V192h144m112 0v80c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-80zm32-16h-17.7L259.4 48h83c19 0 36.2 11.2 43.9 28.5l41.6 93.6c.9 1.9 1.6 3.9 2.2 5.9zm-160 0H18c.6-2 1.3-4 2.2-5.9l41.5-93.6C69.4 59.2 86.6 48 105.6 48h83l-26.9 128zM256 32H105.6c-25.3 0-48.2 14.9-58.5 38L5.5 163.6c-3.6 8.2-5.5 17-5.5 26V416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V189.6c0-9-1.9-17.8-5.5-26L400.9 70c-10.3-23.1-33.2-38-58.5-38z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M50.7 58.5C58.9 42.3 75.5 32 93.7 32H192l-32 128H0zM288 160v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-96zm0 0L256 32h98.3c18.2 0 34.8 10.3 42.9 26.5L448 160z"
                />
                <Path d="M160 160H0v256c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V160H288v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
