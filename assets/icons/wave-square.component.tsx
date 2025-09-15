import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const WaveSquareIcon: React.FC<
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
                <Path d="M128 64c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32v352h96V256c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96v160c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V96h-96v160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h96z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M136 56c0-13.3 10.7-24 24-24h160c13.3 0 24 10.7 24 24v376h112V256c0-13.3 10.7-24 24-24h136c13.3 0 24 10.7 24 24s-10.7 24-24 24H504v176c0 13.3-10.7 24-24 24H320c-13.3 0-24-10.7-24-24V80H184v176c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h112z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M192 64c-8.8 0-16 7.2-16 16v144c0 26.5-21.5 48-48 48H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h112c8.8 0 16-7.2 16-16V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V288c0-26.5 21.5-48 48-48h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H512c-8.8 0-16 7.2-16 16v144c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V80c0-8.8-7.2-16-16-16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M184 48c-13.3 0-24 10.7-24 24v152c0 22.1-17.9 40-40 40H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h112c13.3 0 24-10.7 24-24V72c0-22.1 17.9-40 40-40h104c22.1 0 40 17.9 40 40v368c0 13.3 10.7 24 24 24h104c13.3 0 24-10.7 24-24V288c0-22.1 17.9-40 40-40h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H520c-13.3 0-24 10.7-24 24v152c0 22.1-17.9 40-40 40H352c-22.1 0-40-17.9-40-40V72c0-13.3-10.7-24-24-24z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M128 64c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32v352h96V256c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96v160c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V96h-96v160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h96z"
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
