import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const CircleZIcon: React.FC<
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
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384h144c8.9 0 17.1 5 21.3 12.9s3.6 17.5-1.5 24.8L229.8 336H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-8.9 0-17.1-5-21.3-12.9s-3.6-17.5 1.5-24.8l118-170.3H184c-13.3 0-24-10.7-24-24s10.7-24 24-24" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384c-13.3 0-24 10.7-24 24s10.7 24 24 24h98.2L164.3 346.3c-5.1 7.3-5.7 16.9-1.5 24.8S175.1 384 184 384h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-98.2l117.9-170.3c5.1-7.3 5.7-16.9 1.5-24.8S336.9 128 328 128z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-384c-8.8 0-16 7.2-16 16s7.2 16 16 16h128.9L163 358.7c-3.5 4.9-3.9 11.3-1.2 16.6S170 384 176 384h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H207.1L349 153.3c3.5-4.9 3.9-11.3 1.2-16.6S342 128 336 128z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-384c-4.4 0-8 3.6-8 8s3.6 8 8 8h175.4L153.8 371c-1.9 2.4-2.3 5.7-1 8.5s4.1 4.5 7.2 4.5h192c4.4 0 8-3.6 8-8s-3.6-8-8-8H176.6l181.6-227c1.9-2.4 2.3-5.7 1-8.5s-4.1-4.5-7.2-4.5z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384h144c8.9 0 17.1 5 21.3 12.9s3.6 17.5-1.5 24.8L229.8 336H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-8.9 0-17.1-5-21.3-12.9s-3.6-17.5 1.5-24.8l118-170.3H184c-13.3 0-24-10.7-24-24s10.7-24 24-24"
                />
                <Path d="M160 152c0-13.3 10.7-24 24-24h144c8.9 0 17.1 5 21.3 12.9s3.6 17.5-1.5 24.8L229.8 336H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-8.9 0-17.1-5-21.3-12.9s-3.6-17.5 1.5-24.8l118-170.3H184c-13.3 0-24-10.7-24-24" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
