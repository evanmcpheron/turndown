import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const InboxOutIcon: React.FC<
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
                <Path d="M288 109.3V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM48 320h76.2c12.1 0 23.2 6.8 28.6 17.7l14.3 28.6c5.4 10.8 16.5 17.7 28.6 17.7h120.5c12.1 0 23.2-6.8 28.6-17.7l14.3-28.6c5.4-10.8 16.5-17.7 28.6-17.7H464c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M280 288c0 13.3-10.7 24-24 24s-24-10.7-24-24V81.9l-63 63c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 7c9.4-9.4 24.6-9.4 33.9 0L377 111c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-63-63V288zM149.1 405.5 130.3 368H48v96h416v-96h-82.3L363 405.5c-8.2 16.2-24.8 26.5-43 26.5H192c-18.2 0-34.8-10.3-42.9-26.5m24.2-58.9L192 384h128l18.7-37.5c8.1-16.3 24.8-26.5 42.9-26.5H464c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h82.3c18.2 0 34.8 10.3 42.9 26.5z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="m272 54.6 84.7 84.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-112-112c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L240 54.6V304c0 8.8 7.2 16 16 16s16-7.2 16-16zM48 352h66.3c6.1 0 11.6 3.4 14.3 8.8l14.4 28.7c8.1 16.3 24.8 26.5 42.9 26.5h140.2c18.2 0 34.8-10.3 42.9-26.5l-28.6-14.3 28.6 14.3 14.3-28.6c2.7-5.4 8.3-8.8 14.3-8.8H464c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16m306.7-5.5-14.3 28.6c-2.7 5.4-8.2 8.8-14.3 8.8H185.9c-6.1 0-11.6-3.4-14.3-8.8l-14.3-28.6c-8.1-16.3-24.8-26.5-42.9-26.5H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-66.3c-18.2 0-34.8 10.3-42.9 26.5z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="m264 27.3 106.3 106.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-120-120c-3.1-3.1-8.2-3.1-11.3 0l-120 120c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L248 27.3V312c0 4.4 3.6 8 8 8s8-3.6 8-8zM48 336h74.3c12.1 0 23.2 6.8 28.6 17.7l9.9 19.8c8.1 16.3 24.8 26.5 42.9 26.5h104.5c18.2 0 34.8-10.3 42.9-26.5l9.9-19.8c5.4-10.8 16.5-17.7 28.6-17.7H464c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32m298.7 10.5-9.9 19.8c-5.4 10.8-16.5 17.7-28.6 17.7H203.8c-12.1 0-23.2-6.8-28.6-17.7l-9.9-19.8c-8.1-16.3-24.8-26.5-42.9-26.5H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-74.3c-18.2 0-34.8 10.3-42.9 26.5z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M124.2 320H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-76.2c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7z"
                />
                <Path d="M256 320c17.7 0 32-14.3 32-32V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l41.3-41.4V288c0 17.7 14.3 32 32 32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
