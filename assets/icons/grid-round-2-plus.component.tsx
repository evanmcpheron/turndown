import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const GridRound2PlusIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M128 224a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0 256a96 96 0 1 1 0-192 96 96 0 1 1 0 192m352-352a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-96 144c13.3 0 24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M80 128a48 48 0 1 0 96 0 48 48 0 1 0-96 0m48 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192M80 384a48 48 0 1 0 96 0 48 48 0 1 0-96 0m48 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m256-304a48 48 0 1 0 0-96 48 48 0 1 0 0 96m96-48a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-96 144c13.3 0 24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 128a64 64 0 1 0 128 0 64 64 0 1 0-128 0m64 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192M64 384a64 64 0 1 0 128 0 64 64 0 1 0-128 0m64 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m256-288a64 64 0 1 0 0-128 64 64 0 1 0 0 128m96-64a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-96 144c8.8 0 16 7.2 16 16v80h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-80c0-8.8 7.2-16 16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M48 128a80 80 0 1 0 160 0 80 80 0 1 0-160 0m80 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192M48 384a80 80 0 1 0 160 0 80 80 0 1 0-160 0m80 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m256-272a80 80 0 1 0 0-160 80 80 0 1 0 0 160m96-80a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-96 144c4.4 0 8 3.6 8 8v96h96c4.4 0 8 3.6 8 8s-3.6 8-8 8h-96v96c0 4.4-3.6 8-8 8s-8-3.6-8-8v-96h-96c-4.4 0-8-3.6-8-8s3.6-8 8-8h96v-96c0-4.4 3.6-8 8-8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M224 128a96 96 0 1 1-192 0 96 96 0 1 1 192 0m0 256a96 96 0 1 1-192 0 96 96 0 1 1 192 0m160-160a96 96 0 1 1 0-192 96 96 0 1 1 0 192"
                />
                <Path d="M408 296c0-13.3-10.7-24-24-24s-24 10.7-24 24v64h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64c0 13.3 10.7 24 24 24s24-10.7 24-24v-64h64c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
