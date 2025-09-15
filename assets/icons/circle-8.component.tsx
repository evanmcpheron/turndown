import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const Circle8Icon: React.FC<
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
                <Path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m264-128h-16c-39.8 0-72 32.2-72 72 0 15.7 5 30.1 13.5 42-18 14.7-29.5 37-29.5 62 0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80 0-25-11.5-47.4-29.5-62 8.5-11.8 13.5-26.3 13.5-42 0-39.8-32.2-72-72-72m-16 96c-13.2 0-24-10.8-24-24s10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24zm16 48h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h24" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m264-128c39.8 0 72 32.2 72 72 0 15.7-5 30.1-13.5 42 18 14.7 29.5 37 29.5 62 0 44.2-35.8 80-80 80h-32c-44.2 0-80-35.8-80-80 0-25 11.5-47.4 29.5-62-8.5-11.9-13.5-26.3-13.5-42 0-39.8 32.2-72 72-72zm-16 96h16c13.2 0 24-10.8 24-24s-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24m16 48h-24c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m268-128c37.6 0 68 30.4 68 68 0 20.2-8.8 38.4-22.9 50.9 18.8 13.8 30.9 36 30.9 61.1 0 42-34 76-76 76h-24c-42 0-76-34-76-76 0-25.1 12.1-47.3 30.9-61.1-14-12.5-22.9-30.6-22.9-50.9 0-37.6 30.4-68 68-68zm-24 104h24c19.9 0 36-16.1 36-36s-16.1-36-36-36h-24c-19.9 0-36 16.1-36 36s16.1 36 36 36m24 32h-24c-24.3 0-44 19.7-44 44s19.7 44 44 44h24c24.3 0 44-19.7 44-44s-19.7-44-44-44" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m264-128c35.3 0 64 28.7 64 64 0 22.3-11.4 41.9-28.7 53.4 26.2 10.7 44.7 36.5 44.7 66.6 0 39.8-32.2 72-72 72h-32c-39.8 0-72-32.2-72-72 0-30.1 18.5-55.9 44.7-66.6-17.3-11.5-28.7-31.1-28.7-53.4 0-35.3 28.7-64 64-64zm-16 112h16c26.5 0 48-21.5 48-48s-21.5-48-48-48h-16c-26.5 0-48 21.5-48 48s21.5 48 48 48m16 16h-24c-30.9 0-56 25.1-56 56s25.1 56 56 56h32c30.9 0 56-25.1 56-56s-25.1-56-56-56z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m264-128h-16c-39.8 0-72 32.2-72 72 0 15.7 5 30.1 13.5 42-18 14.7-29.5 37-29.5 62 0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80 0-25-11.5-47.4-29.5-62 8.5-11.8 13.5-26.3 13.5-42 0-39.8-32.2-72-72-72m-16 96c-13.2 0-24-10.8-24-24s10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24zm16 48h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h24"
                />
                <Path d="M336 200c0-39.8-32.2-72-72-72h-16c-39.8 0-72 32.2-72 72 0 15.7 5 30.1 13.5 42-18 14.7-29.5 37-29.5 62 0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80 0-25-11.5-47.4-29.5-62 8.5-11.8 13.5-26.3 13.5-42m-72 72h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h24m0-48h-16c-13.2 0-24-10.8-24-24s10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
