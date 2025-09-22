import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const CircleQIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-256c0 44.2 35.8 80 80 80 13.4 0 25.9-3.3 37-9.1l-30-30c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l30 30c5.8-11.1 9.1-23.7 9.1-37 0-44.2-35.8-80-80-80s-80 35.8-80 80m208 0c0 26.7-8.2 51.4-22.1 71.9L377 343c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L328 361.8c-20.5 14-45.3 22.1-71.9 22.1-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-256c0-44.2 35.8-80 80-80s80 35.8 80 80c0 13.4-3.3 25.9-9.1 37l-30-30c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l30 30c-11.1 5.8-23.7 9.1-37 9.1-44.2 0-80-35.8-80-80m208 0c0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128c26.7 0 51.4-8.2 71.9-22.1L343 377c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L361.8 328c14-20.5 22.1-45.3 22.1-71.9z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-256c0-53 43-96 96-96s96 43 96 96c0 20.7-6.6 39.9-17.7 55.6l-50.9-50.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l50.9 50.9c-15.8 11.2-35 17.8-55.7 17.8-53 0-96-43-96-96m224 0c0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128c29.6 0 56.8-10 78.5-26.9l22.2 22.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-22.2-22.2C374 312.8 384 285.6 384 256" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512M144 256c0-61.9 50.1-112 112-112s112 50.1 112 112c0 28-10.3 53.7-27.3 73.3l-61.9-61.9c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l61.9 61.9C309.7 357.7 284 368 256 368c-61.9 0-112-50.1-112-112m240 0c0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128c32.5 0 62.1-12.1 84.7-32l29.7 29.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L352 340.7c19.9-22.6 32-52.2 32-84.7" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-256c0 44.2 35.8 80 80 80 13.4 0 25.9-3.3 37-9.1l-30-30c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l30 30c5.8-11.1 9.1-23.7 9.1-37 0-44.2-35.8-80-80-80s-80 35.8-80 80m208 0c0 26.7-8.2 51.4-22.1 71.9L377 343c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L328 361.8c-20.5 14-45.3 22.1-71.9 22.1-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128z"
                />
                <Path d="M256 176c44.2 0 80 35.8 80 80 0 13.4-3.3 25.9-9.1 37l-30-30c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l30 30c-11.1 5.8-23.7 9.1-37 9.1-44.2 0-80-35.8-80-80s35.8-80 80-80m105.9 151.9c14-20.5 22.1-45.3 22.1-71.9 0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128c26.7 0 51.4-8.2 71.9-22.1L343 377c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L361.8 328z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
