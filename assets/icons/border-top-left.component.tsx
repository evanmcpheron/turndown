import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BorderTopLeftIcon: React.FC<
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
                <Path d="M0 448c0 17.7 14.3 32 32 32s32-14.3 32-32V112c0-8.8 7.2-16 16-16h336c17.7 0 32-14.3 32-32s-14.3-32-32-32H80C35.8 32 0 67.8 0 112zm160 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m192 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m192 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32-160a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 456c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-13.3 10.7-24 24-24h352c13.3 0 24-10.7 24-24s-10.7-24-24-24H72C32.2 32 0 64.2 0 104zm128-40a32 32 0 1 0 0 64 32 32 0 1 0 0-64m192 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-96 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192-64a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 448c0 8.8 7.2 16 16 16s16-7.2 16-16V96c0-17.7 14.3-32 32-32h352c8.8 0 16-7.2 16-16s-7.2-16-16-16H64C28.7 32 0 60.7 0 96zm128-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48m192 0a24 24 0 1 0 0 48 24 24 0 1 0 0-48m-96 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48m192-48a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0-144a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 48a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0-144a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 456c0 4.4 3.6 8 8 8s8-3.6 8-8V88c0-22.1 17.9-40 40-40h368c4.4 0 8-3.6 8-8s-3.6-8-8-8H56C25.1 32 0 57.1 0 88zm128-24a16 16 0 1 0 0 32 16 16 0 1 0 0-32m192 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32m-96 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32m192-32a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-160a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-160a16 16 0 1 0 0-32 16 16 0 1 0 0 32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M416 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64M128 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-96-64a32 32 0 1 0 0 64 32 32 0 1 0 0-64m192 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <Path d="M32 480c-17.7 0-32-14.3-32-32V112c0-44.2 35.8-80 80-80h336c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-8.8 0-16 7.2-16 16v336c0 17.7-14.3 32-32 32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
