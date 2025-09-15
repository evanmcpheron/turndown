import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleArrowDownLeftIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m64-144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-94.1L361 185c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-135 135V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v160c0 13.3 10.7 24 24 24z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416m0 464a256 256 0 1 1 0-512 256 256 0 1 1 0 512m64-144H168c-13.3 0-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24v102.1L327 151c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-135 135H320c13.3 0 24 10.7 24 24s-10.7 24-24 24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448m0 480a256 256 0 1 1 0-512 256 256 0 1 1 0 512m56-160H176c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16v105.4l132.7-132.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L214.6 320H312c8.8 0 16 7.2 16 16s-7.2 16-16 16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480m0 496a256 256 0 1 1 0-512 256 256 0 1 1 0 512m56-160H168c-4.4 0-8-3.6-8-8V200c0-4.4 3.6-8 8-8s8 3.6 8 8v124.7l162.3-162.4c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L187.3 336H312c4.4 0 8 3.6 8 8s-3.6 8-8 8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m64-144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-94.1L361 185c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-135 135V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v160c0 13.3 10.7 24 24 24z"
                />
                <Path d="M168 368h152c13.3 0 24-10.7 24-24s-10.7-24-24-24h-94.1L361 185c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-135 135V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v160c0 13.3 10.7 24 24 24z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
