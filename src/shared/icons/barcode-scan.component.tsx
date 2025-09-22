import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const BarcodeScanIcon: React.FC<
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
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M88 32c-13.3 0-24 10.7-24 24v136h64V56c0-13.3-10.7-24-24-24zM64 456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V320H64zm96 8c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm64-8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V320h-64zm0-264h64V56c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24zm96 264c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V320h-64zm0-264h64V56c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24zm128 272c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm0-416v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m64 408c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V320h-64zm0-264h64V56c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24zm-352 0h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16zM24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24h592c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M88 32c-13.3 0-24 10.7-24 24v136h48V56c0-13.3-10.7-24-24-24M64 456c0 13.3 10.7 24 24 24s24-10.7 24-24V320H64zm96 8c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm64-8c0 13.3 10.7 24 24 24s24-10.7 24-24V320h-48zm0-400v136h48V56c0-13.3-10.7-24-24-24s-24 10.7-24 24m112 400c0 13.3 10.7 24 24 24s24-10.7 24-24V320h-48zm0-400v136h48V56c0-13.3-10.7-24-24-24s-24 10.7-24 24m128 408c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm0-416v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m64 408c0 13.3 10.7 24 24 24s24-10.7 24-24V320h-48zm0-400v136h48V56c0-13.3-10.7-24-24-24s-24 10.7-24 24M160 192h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16zM0 256c0 13.3 10.7 24 24 24h592c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M64 48v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m0 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320H64zm96 0V320h-32v144c0 8.8 7.2 16 16 16s16-7.2 16-16M128 48v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m64 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm0-416v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m96 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm0-416v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m64 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm0-416v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m96 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm0-416v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16m96 416c0 8.8 7.2 16 16 16s16-7.2 16-16V320h-32zm0-416v144h32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16M0 256c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M64 40v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m0 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320H64zm64 0V320h-16v152c0 4.4 3.6 8 8 8s8-3.6 8-8M112 40v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m64 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320h-16zm0-432v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m72 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320h-16zm0-432v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m72 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320h-16zm0-432v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m48 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320h-16zm0-432v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m80 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320h-16zm0-432v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m64 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320h-16zm0-432v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8m48 432c0 4.4 3.6 8 8 8s8-3.6 8-8V320h-16zm0-432v152h16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8M0 256c0 4.4 3.6 8 8 8h624c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M0 256c0-13.3 10.7-24 24-24h592c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24"
                />
                <Path d="M64 56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v136H64zm0 264h64v136c0 13.3-10.7 24-24 24H88c-13.3 0-24-10.7-24-24zm96 0h32v144c0 8.8-7.2 16-16 16s-16-7.2-16-16zm64 0h64v136c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24zm64-128h-64V56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24zm32 128h64v136c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24zm64-128h-64V56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24zm64 128h32v144c0 8.8-7.2 16-16 16s-16-7.2-16-16zm32-128h-32V48c0-8.8 7.2-16 16-16s16 7.2 16 16zm32 128h64v136c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24zm64-128h-64V56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24zm-384 0h-32V48c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
