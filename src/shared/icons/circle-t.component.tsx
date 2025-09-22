import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const CircleTIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M152 144h208c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80v168c0 13.3-10.7 24-24 24s-24-10.7-24-24V192h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512M152 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80v168c0 13.3 10.7 24 24 24s24-10.7 24-24V192h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H152" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512M144 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h96v192c0 8.8 7.2 16 16 16s16-7.2 16-16V176h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H144" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512M136 144c-4.4 0-8 3.6-8 8s3.6 8 8 8h112v232c0 4.4 3.6 8 8 8s8-3.6 8-8V160h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H136" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M152 144h208c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80v168c0 13.3-10.7 24-24 24s-24-10.7-24-24V192h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24"
                />
                <Path d="M128 168c0-13.3 10.7-24 24-24h208c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80v168c0 13.3-10.7 24-24 24s-24-10.7-24-24V192h-80c-13.3 0-24-10.7-24-24" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
