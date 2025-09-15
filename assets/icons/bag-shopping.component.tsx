import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BagShoppingIcon: React.FC<
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
                <Path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160zm-48 48H48c-26.5 0-48 21.5-48 48v208c0 53 43 96 96 96h256c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48h-64v-48C336 50.1 285.9 0 224 0S112 50.1 112 112zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48m152 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M160 112v48h128v-48c0-35.3-28.7-64-64-64s-64 28.7-64 64m-48 96H48v208c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V208h-64v56c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56H160v56c0 13.3-10.7 24-24 24s-24-10.7-24-24zm0-48v-48C112 50.1 162.1 0 224 0s112 50.1 112 112v48h64c26.5 0 48 21.5 48 48v208c0 53-43 96-96 96H96c-53 0-96-43-96-96V208c0-26.5 21.5-48 48-48z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M160 96v32h128V96c0-35.3-28.7-64-64-64s-64 28.7-64 64m-32 64H48c-8.8 0-16 7.2-16 16v240c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V176c0-8.8-7.2-16-16-16h-80v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H160v80c0 8.8-7.2 16-16 16s-16-7.2-16-16zm0-32V96c0-53 43-96 96-96s96 43 96 96v32h80c26.5 0 48 21.5 48 48v240c0 53-43 96-96 96H96c-53 0-96-43-96-96V176c0-26.5 21.5-48 48-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M144 96v32h160V96c0-44.2-35.8-80-80-80s-80 35.8-80 80m-16 48H48c-17.7 0-32 14.3-32 32v240c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80V176c0-17.7-14.3-32-32-32h-80v88c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88H144v88c0 4.4-3.6 8-8 8s-8-3.6-8-8zm0-16V96c0-53 43-96 96-96s96 43 96 96v32h80c26.5 0 48 21.5 48 48v240c0 53-43 96-96 96H96c-53 0-96-43-96-96V176c0-26.5 21.5-48 48-48z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M288 160H160v72c0 13.3-10.7 24-24 24s-24-10.7-24-24v-72H48c-26.5 0-48 21.5-48 48v208c0 53 43 96 96 96h256c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48h-64v72c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                />
                <Path d="M224 48c-35.3 0-64 28.7-64 64v120c0 13.3-10.7 24-24 24s-24-10.7-24-24V112C112 50.1 162.1 0 224 0s112 50.1 112 112v120c0 13.3-10.7 24-24 24s-24-10.7-24-24V112c0-35.3-28.7-64-64-64" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
