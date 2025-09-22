import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const FrameIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M448 128c0-17.7-14.3-32-32-32h-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H128V64c0-17.7-14.3-32-32-32S64 46.3 64 64v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h192v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V160h32c17.7 0 32-14.3 32-32M128 352V160h192v192z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M448 120c0-13.3-10.7-24-24-24h-40V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H112V56c0-13.3-10.7-24-24-24S64 42.7 64 56v40H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v224H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h224v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40V144h40c13.3 0 24-10.7 24-24M112 368V144h224v224z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M448 112c0-8.8-7.2-16-16-16h-48V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H96V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v256H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h256v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V128h48c8.8 0 16-7.2 16-16M96 384V128h256v256z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M448 104c0-4.4-3.6-8-8-8h-56V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H80V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v288H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h288v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56V112h56c4.4 0 8-3.6 8-8M80 400V112h288v288z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v288H64zm0 384v-32h64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32m320 0c0 17.7-14.3 32-32 32s-32-14.3-32-32V160h64zm0-384v32h-64V64c0-17.7 14.3-32 32-32s32 14.3 32 32"
                />
                <Path d="M416 96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V96zM32 96h32v64H32c-17.7 0-32-14.3-32-32s14.3-32 32-32m0 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h288v64zm384 0h-32v-64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
