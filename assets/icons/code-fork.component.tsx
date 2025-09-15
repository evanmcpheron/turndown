import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CodeForkIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48m80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-38.7c-28.3-12.3-48-40.5-48-73.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96h-48v70.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288h-48c-53 0-96-43-96-96v-38.7C19.7 141 0 112.8 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80m208 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M248 432a24 24 0 1 0-48 0 24 24 0 1 0 48 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M80 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64m80-32c0 35.8-23.5 66.1-56 76.3V192c0 22.1 17.9 40 40 40h160c22.1 0 40-17.9 40-40v-35.7c-32.5-10.2-56-40.5-56-76.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3V192c0 48.6-39.4 88-88 88h-56v75.7c32.5 10.2 56 40.5 56 76.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3V280h-56c-48.6 0-88-39.4-88-88v-35.7C23.5 146.1 0 115.8 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80m208 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M256 432a32 32 0 1 0-64 0 32 32 0 1 0 64 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M80 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96m80-48c0 38.7-27.5 71-64 78.4V192c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-33.6c-36.5-7.4-64-39.7-64-78.4 0-44.2 35.8-80 80-80s80 35.8 80 80c0 38.7-27.5 71-64 78.4V192c0 44.2-35.8 80-80 80h-64v81.6c36.5 7.4 64 39.7 64 78.4 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-38.7 27.5-71 64-78.4V272h-64c-44.2 0-80-35.8-80-80v-33.6C27.5 151 0 118.7 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80m64 304a48 48 0 1 0 0 96 48 48 0 1 0 0-96M416 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M64 112a48 48 0 1 0 0-96 48 48 0 1 0 0 96m64-48c0 32.6-24.4 59.6-56 63.5V192c0 30.9 25.1 56 56 56h192c30.9 0 56-25.1 56-56v-64.5c-31.6-3.9-56-30.9-56-63.5 0-35.3 28.7-64 64-64s64 28.7 64 64c0 32.6-24.4 59.6-56 63.5V192c0 39.8-32.2 72-72 72h-88v120h-16V264h-88c-39.8 0-72-32.2-72-72v-64.5C24.4 123.6 0 96.6 0 64 0 28.7 28.7 0 64 0s64 28.7 64 64m96 448a64 64 0 1 1 0-128 64 64 0 1 1 0 128m160-400a48 48 0 1 0 0-96 48 48 0 1 0 0 96M272 448a48 48 0 1 0-96 0 48 48 0 1 0 96 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M112 153.3c-9.8 4.3-20.6 6.7-32 6.7s-22.2-2.4-32-6.7V192c0 53 43 96 96 96h48v70.7c9.8-4.3 20.6-6.7 32-6.7s22.2 2.4 32 6.7V288h48c53 0 96-43 96-96v-38.7c-9.8 4.3-20.6 6.7-32 6.7s-22.2-2.4-32-6.7V192c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32z"
                />
                <Path d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104A80 80 0 1 0 80 0a80 80 0 1 0 0 160M368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160M200 432a24 24 0 1 1 48 0 24 24 0 1 1-48 0m104 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
