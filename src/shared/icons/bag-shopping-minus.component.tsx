import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const BagShoppingMinusIcon: React.FC<
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
                <Path d="M224 48c-35.3 0-64 28.7-64 64v48h128v-48c0-35.3-28.7-64-64-64M48 160h64v-48C112 50.1 162.1 0 224 0s112 50.1 112 112v48h64c26.5 0 48 21.5 48 48v208c0 53-43 96-96 96H96c-53 0-96-43-96-96V208c0-26.5 21.5-48 48-48m96 152c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M224 48c35.3 0 64 28.7 64 64v48H160v-48c0-35.3 28.7-64 64-64m-112 64v48H48c-26.5 0-48 21.5-48 48v208c0 53 43 96 96 96h256c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48h-64v-48C336 50.1 285.9 0 224 0S112 50.1 112 112m-64 96h352v208c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48zm96 104c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M224 32c35.3 0 64 28.7 64 64v32H160V96c0-35.3 28.7-64 64-64m-96 64v32H48c-26.5 0-48 21.5-48 48v240c0 53 43 96 96 96h256c53 0 96-43 96-96V176c0-26.5-21.5-48-48-48h-80V96c0-53-43-96-96-96s-96 43-96 96m-80 64h352c8.8 0 16 7.2 16 16v240c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V176c0-8.8 7.2-16 16-16m96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M224 16c44.2 0 80 35.8 80 80v32H144V96c0-44.2 35.8-80 80-80m-96 80v32H48c-26.5 0-48 21.5-48 48v240c0 53 43 96 96 96h256c53 0 96-43 96-96V176c0-26.5-21.5-48-48-48h-80V96c0-53-43-96-96-96s-96 43-96 96m-80 48h352c17.7 0 32 14.3 32 32v240c0 44.2-35.8 80-80 80H96c-44.2 0-80-35.8-80-80V176c0-17.7 14.3-32 32-32m96 168c-4.4 0-8 3.6-8 8s3.6 8 8 8h160c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M48 160c-26.5 0-48 21.5-48 48v208c0 53 43 96 96 96h256c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48zm96 152h160c13.3 0 24 10.7 24 24s-10.7 24-24 24H144c-13.3 0-24-10.7-24-24s10.7-24 24-24"
                />
                <Path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48h48v-48C336 50.1 285.9 0 224 0S112 50.1 112 112v48h48zm-16 200c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
