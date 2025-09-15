import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const DistributeSpacingVerticalIcon: React.FC<
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
                <Path d="M0 56c0-13.3 10.7-24 24-24h464c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 80 0 69.3 0 56m96 152c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48zM24 432h464c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 56c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24H24C10.7 32 0 42.7 0 56m368 152v96H144v-96zm-224-48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48zM24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M512 464c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16M144 320c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16zm224 32c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48H144c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48zM496 64c8.8 0 16-7.2 16-16s-7.2-16-16-16H16C7.2 32 0 39.2 0 48s7.2 16 16 16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M512 472c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h496c4.4 0 8-3.6 8-8M144 368c-17.7 0-32-14.3-32-32V176c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32zm224 16c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H144c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48zM504 48c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M96 208c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48z"
                />
                <Path d="M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 400c-13.3 0-24 10.7-24 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
