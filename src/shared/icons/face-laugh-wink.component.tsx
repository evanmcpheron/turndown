import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const FaceLaughWinkIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M96.8 314.1c-3.8-13.7 7.4-26.1 21.6-26.1h275.2c14.2 0 25.5 12.4 21.6 26.1C396.2 382 332.1 432 256 432S115.8 382 96.8 314.1M144.4 192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m156.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0 5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9h212.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1M144.4 192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m165.8 21.7c-7.6 8.1-20.2 8.5-28.3.9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 144c52 0 97.1-32.8 115.7-80H140.3c18.6 47.2 63.7 80 115.7 80M126.5 288h259c14.2 0 25.4 12.3 21.8 26-18.1 68-79 118-151.3 118s-133.2-50-151.3-118c-3.6-13.7 7.6-26 21.8-26m25.9-96a24 24 0 1 1 48 0 24 24 0 1 1-48 0m148.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0 5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M335.8 168h-.2c-8 0-15.8 1.8-23.1 5.2-10.5 4.8-19.7 12.6-26.7 22.9q-2.7 3.75-5.1 8.1c-2.2 3.9-.8 8.7 3.1 10.9 1.3.7 2.7 1.1 4.1 1 3 .1 5.9-1.6 7.3-4.4 1.2-2.4 2.5-4.7 4-6.8 6.6-9.1 14.4-15 22.5-18.1 4.5-1.7 9.3-2.6 14.2-2.7 14.5.1 30 8.7 40.8 27.9 1.5 2.7 4.3 4.2 7.2 4.1h.2c1.2 0 2.4-.3 3.6-.8 4-2 5.5-6.8 3.6-10.7C379.9 182 358.8 168 336 168zM176 208h.4c8.8 0 16-7.2 16-16s-7.2-16-16-16h-.4c-8.8 0-16 7.1-16 16s7.2 16 16 16m-55.9 80c-9.6 0-17.2 8.5-16 18v.3c-.3 2.5-.2 5.1.5 7.7.8 2.8 1.6 5.6 2.5 8.4C122.7 385.3 179.9 432 248 432h16c68.1 0 125.2-46.7 140.8-109.6.9-2.8 1.7-5.6 2.5-8.4.7-2.7.9-5.3.5-7.7v-.3c1.2-9.6-6.3-18-16-18H120.1m6.4 16h259c2.4 0 4.4 1.1 5.4 2.3.2.2.4.5.5.7q-.9 6.15-2.4 12c-19 56.6-71.6 97-133 97-61.5 0-114.1-40.5-133.2-97.2-1-3.9-1.7-7.8-2.3-11.8.1-.2.3-.5.5-.7 1.1-1.2 3-2.3 5.4-2.3zM256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m0 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M96.8 314.1c-3.8-13.7 7.4-26.1 21.6-26.1h275.2c14.2 0 25.5 12.4 21.6 26.1C396.2 382 332.1 432 256 432S115.8 382 96.8 314.1M144.4 192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m156.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0 5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0"
                />
                <Path d="M176.4 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64m124.4-6.4c17.6-23.5 52.8-23.5 70.4 0 5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4c-30.4-40.5-91.2-40.5-121.6 0-5.3 7.1-3.9 17.1 3.2 22.4s17.1 3.9 22.4-3.2" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
