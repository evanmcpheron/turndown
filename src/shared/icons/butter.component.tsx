import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const ButterIcon: React.FC<
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
                <Path d="M64 128c0-35.3 28.7-64 64-64h320v224H64zM32 320h576c17.7 0 32 14.3 32 32s-14.3 32-32 32v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-32c-17.7 0-32-14.3-32-32s14.3-32 32-32M512 64c35.3 0 64 28.7 64 64v160h-96V64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M464 112v176h-48V112H128c-8.8 0-16 7.2-16 16v160H64V128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v160h-48V128c0-8.8-7.2-16-16-16zM0 344c0-13.3 10.7-24 24-24h592c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v48c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-48h-8c-13.3 0-24-10.7-24-24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M480 96v192h-32V96H128c-17.7 0-32 14.3-32 32v160H64V128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v160h-32V128c0-17.7-14.3-32-32-32zM0 336c0-8.8 7.2-16 16-16h608c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v48c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48v-48H16c-8.8 0-16-7.2-16-16m64 16v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M480 80v208h-16V80H128c-26.5 0-48 21.5-48 48v160H64V128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v160h-16V128c0-26.5-21.5-48-48-48zM0 328c0-4.4 3.6-8 8-8h624c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v64c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48v-64H8c-4.4 0-8-3.6-8-8m48 8v64c0 17.7 14.3 32 32 32h480c17.7 0 32-14.3 32-32v-64z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M128 64c-35.3 0-64 28.7-64 64v192h384V64zm384 0h-32v256h96V128c0-35.3-28.7-64-64-64"
                />
                <Path d="M32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-32c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
