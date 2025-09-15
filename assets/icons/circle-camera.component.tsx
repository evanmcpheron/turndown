import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleCameraIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-60-352 6.2-16.4c3.5-9.4 12.5-15.6 22.5-15.6h62.7c10 0 19 6.2 22.5 15.6L316 160h36c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32zm108 96a48 48 0 1 0-96 0 48 48 0 1 0 96 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m196-96 6.2-16.4c3.5-9.4 12.5-15.6 22.5-15.6h62.7c10 0 19 6.2 22.5 15.6L316 160h36c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32zm108 96a48 48 0 1 0-96 0 48 48 0 1 0 96 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56.8-369.5-7.5 17.5H184c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h144c30.9 0 56-25.1 56-56v-80c0-30.9-25.1-56-56-56h-7.7l-7.5-17.5c-3.8-8.8-12.5-14.5-22.1-14.5h-69.4c-9.6 0-18.3 5.7-22.1 14.5m27.4 17.5h58.9l9.6 22.3c2.5 5.9 8.3 9.7 14.7 9.7H328c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H184c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24h18.3c6.4 0 12.2-3.8 14.7-9.7zM256 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-49.4-375.2L195.1 160H168c-22.1 0-40 17.9-40 40v112c0 22.1 17.9 40 40 40h176c22.1 0 40-17.9 40-40V200c0-22.1-17.9-40-40-40h-27.1l-11.6-23.2c-2.7-5.4-8.3-8.8-14.3-8.8h-70.1c-6.1 0-11.6 3.4-14.3 8.8m14.3 7.2H291l13.8 27.6c1.4 2.7 4.1 4.4 7.2 4.4h32c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24H168c-13.3 0-24-10.7-24-24V200c0-13.3 10.7-24 24-24h32c3 0 5.8-1.7 7.2-4.4zM256 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-32-48a32 32 0 1 1 64 0 32 32 0 1 1-64 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-53.8-368.4c3.5-9.4 12.5-15.6 22.5-15.6h62.7c10 0 19 6.2 22.5 15.6L316 160h36c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32h36z"
                />
                <Path d="M202.2 143.6 196 160h-36c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32h-36l-6.2-16.4c-3.5-9.4-12.5-15.6-22.5-15.6h-62.7c-10 0-19 6.2-22.5 15.6zM256 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
