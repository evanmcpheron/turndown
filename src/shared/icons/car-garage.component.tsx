import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const CarGarageIcon: React.FC<
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
                <Path d="M343.8 8.8C329 .4 310.9.4 296.2 8.8L24.1 164.2C8.8 173 3.5 192.5 12.2 207.9s28.3 20.7 43.7 11.9L320 68.9l264.1 150.9c15.3 8.8 34.9 3.4 43.7-11.9s3.4-34.9-11.9-43.7zm-94 215.2h140.4c6.8 0 12.8 4.3 15.1 10.6l19 53.4H215.7l19.1-53.4c2.3-6.4 8.3-10.6 15.1-10.6zm-75.3-10.9-28.3 79.3c-20.1 8.5-34.2 28.4-34.2 51.6v136c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32v-32h256v32c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32V344c0-23.2-14.1-43.1-34.2-51.6l-28.3-79.3C454.1 181.3 424 160 390.2 160H249.8c-33.8 0-64 21.3-75.3 53.1M192 344a24 24 0 1 1 0 48 24 24 0 1 1 0-48m232 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M331.4 2.9c-7.1-3.8-15.7-3.8-22.8 0l-296 160c-11.7 6.3-16 20.9-9.7 32.5s20.9 16 32.5 9.7L320 51.3l284.6 153.8c11.7 6.3 26.2 2 32.5-9.7s2-26.2-9.7-32.5zM249.8 208h140.4c10.1 0 19.2 6.4 22.6 15.9l17.1 48.1H210.1l17.2-48.1c3.4-9.6 12.5-15.9 22.6-15.9zm-96.4 79.9c-.2.5-.3.9-.5 1.4-24.7 17.4-40.9 46.2-40.9 78.7v120c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h320v40c0 13.3 10.7 24 24 24s24-10.7 24-24V368c0-32.5-16.2-61.3-40.9-78.7-.1-.5-.3-.9-.5-1.4L458 207.8c-10.2-28.7-37.4-47.8-67.8-47.8H249.8c-30.4 0-57.6 19.1-67.8 47.8zM432 320c26.5 0 48 21.5 48 48v32H160v-32c0-26.5 21.5-48 48-48zm-208 64a24 24 0 1 0 0-48 24 24 0 1 0 0 48m216-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M328.5 2.5c-5.2-3.3-11.9-3.3-17.1 0l-304 192c-7.5 4.7-9.7 14.6-5 22.1s14.6 9.7 22.1 5L320 34.9l295.5 186.6c7.5 4.7 17.4 2.5 22.1-5s2.5-17.4-5-22.1l-304-192zM252.2 208h135.6c14.3 0 26.8 9.5 30.8 23.2l16.2 56.8H205.2l16.2-56.8c3.9-13.7 16.5-23.2 30.8-23.2m-61.5 14.4L169 298.1c-24.5 13.7-41 39.9-41 69.9v128c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h320v32c0 8.8 7.2 16 16 16s16-7.2 16-16V368c0-30-16.6-56.2-41-69.9l-21.6-75.7c-7.9-27.5-33-46.4-61.5-46.4H252.2c-28.6 0-53.7 18.9-61.5 46.4M480 416v16H160v-64c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48zm-272-16a24 24 0 1 0 0-48 24 24 0 1 0 0 48m248-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M323.9 1c-2.4-1.4-5.4-1.4-7.9 0L4.1 177c-3.8 2.2-5.2 7-3 10.9s7.1 5.2 10.9 3L320 17.2 628.1 191c3.8 2.2 8.7.8 10.9-3s.8-8.7-3-10.9zm-71.7 191h135.6c17.9 0 33.6 11.8 38.5 29l19.5 68.2c-4.5-.8-9-1.2-13.7-1.2H208c-4.7 0-9.3.4-13.7 1.2l19.4-68.2c4.9-17.2 20.6-29 38.5-29m-75.9 101.8-.2.8C147.8 307 128 335.2 128 368v112c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32v-32h224v32c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32V368c0-32.8-19.8-61-48.1-73.4l-.2-.8-22.1-77.2c-6.9-24-28.8-40.6-53.8-40.6H252.2c-25 0-47 16.6-53.8 40.6zM448 432H144v-64c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v64zm0 48v-32h48v32c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16m-256-32v32c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-32zm32-80a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m224 48a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M296.2 6.3c14.8-8.4 32.9-8.4 47.6 0l272.1 155.5c15.3 8.8 20.7 28.3 11.9 43.7s-28.3 20.7-43.7 11.9L320 66.4l-264.1 151c-15.3 8.8-34.9 3.4-43.7-11.9s-3.4-34.9 11.9-43.7z"
                />
                <Path d="M234.8 234.6 215.7 288h208.6l-19.1-53.4c-2.3-6.4-8.3-10.6-15.1-10.6H249.8c-6.8 0-12.8 4.3-15.1 10.6zm-88.6 57.8 28.3-79.3c11.4-31.8 41.5-53.1 75.3-53.1h140.4c33.8 0 64 21.3 75.3 53.1l28.3 79.3c20.1 8.5 34.2 28.4 34.2 51.6v136c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32v-32H192v32c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32V344c0-23.2 14.1-43.1 34.2-51.6M216 368a24 24 0 1 0-48 0 24 24 0 1 0 48 0m232 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
