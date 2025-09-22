import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const ShieldHalvedIcon: React.FC<
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
                <Path d="M256 0c4.6 0 9.2 1 13.4 2.9l188.3 79.9c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0m0 66.8v378C394 378 431.1 230.1 432 141.4z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M232 59.6v390.7C99.2 375.7 64.4 227.3 64 139.7c0-5 3.1-10.2 9-12.8zm48 390.8V59.6L439 127c5.9 2.5 9.1 7.8 9 12.8-.4 87.5-35.2 236-168 310.6M457.7 82.8 269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.8 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M240 38.8v433.8C86.8 397.1 48.5 233.2 48 139.8c-.1-12.1 7.5-22.8 18.8-27.6zm32 433.8V38.8l173.2 73.5c11.3 4.8 18.9 15.5 18.8 27.6-.5 93.3-38.8 257.3-192 332.8zm9-464.8c-16-6.8-34-6.8-50 0l-176.7 75c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M264 19.4c3.7.6 7.3 1.7 10.8 3.1l176.7 75c16.6 7.1 28.6 23.2 28.5 42.4-.5 96.6-40.3 270.2-204.5 348.8-3.7 1.8-7.6 3-11.5 3.7zm-16 0v473c-3.9-.7-7.8-1.9-11.4-3.7C72.3 410.1 32.5 236.5 32 139.9c-.1-19.1 11.9-35.3 28.5-42.4l176.7-75c3.5-1.5 7.1-2.5 10.7-3.1zm33-11.6c-16-6.8-34-6.8-50 0l-176.7 75c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.8 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 0h.7c4.6 0 9.2 1 13.4 2.9l188.3 79.9c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-8.3 4-17.4 6-26.4 6V0z"
                />
                <Path d="M256.7 0h-.7c-4.6 0-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 8.3 4 17.4 6 26.4 6V0z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
