import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const TrashPlusIcon: React.FC<
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
                <Path d="M163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0M32 128h384l-21.2 339c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45zm168 280c0 13.3 10.7 24 24 24s24-10.7 24-24v-64h64c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24v64h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="m170.5 51.6-19 28.4h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6h-93.7c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6 36.7 55H424c13.3 0 24 10.7 24 24s-10.7 24-24 24h-11.6l-24 324.7c-2.5 33.4-30.3 59.3-63.8 59.3H123.4c-33.5 0-61.3-25.9-63.8-59.3L35.6 128H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h69.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM83.7 128l23.8 321.2c.6 8.4 7.6 14.8 16 14.8h201.1c8.4 0 15.3-6.5 16-14.8L364.3 128zM204 376v-68h-68c-11 0-20-9-20-20s9-20 20-20h68v-68c0-11 9-20 20-20s20 9 20 20v68h68c11 0 20 9 20 20s-9 20-20 20h-68v68c0 11-9 20-20 20s-20-9-20-20" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M164.2 39.5 148.9 64h150.2l-15.3-24.5c-2.9-4.7-8.1-7.5-13.6-7.5h-92.5c-5.5 0-10.6 2.8-13.6 7.5zM311 22.6 336.9 64H432c8.8 0 16 7.2 16 16s-7.2 16-16 16h-18.3l-25.5 356.6c-2.3 33.5-30.2 59.4-63.8 59.4H123.6c-33.6 0-61.4-25.9-63.8-59.4L34.3 96H16C7.2 96 0 88.8 0 80s7.2-16 16-16h95.2L137 22.6A47.98 47.98 0 0 1 177.7 0h92.5c16.6 0 31.9 8.5 40.7 22.6zM66.4 96l25.3 354.3c1.2 16.7 15.1 29.7 31.9 29.7h200.8c16.8 0 30.7-13 31.9-29.7L381.6 96zM208 384v-80h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80v80c0 8.8-7.2 16-16 16s-16-7.2-16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="m157.4 27.3-23 36.7h179.2l-23-36.7c-4.4-7-12.1-11.3-20.4-11.3h-92.5c-8.3 0-16 4.3-20.4 11.3zM115.6 64l28.2-45.2C151.1 7.1 163.9 0 177.7 0h92.5c13.8 0 26.6 7.1 33.9 18.8L332.4 64H440c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8zm-76.3 48c4.4-.4 8.3 2.9 8.6 7.3l28.3 340c1.8 20.8 19.2 36.7 40 36.7h215.6c20.8 0 38.1-15.9 39.9-36.7l28.3-340c.4-4.4 4.2-7.7 8.6-7.3s7.7 4.2 7.3 8.6l-28.3 340c-2.4 29-26.7 51.4-55.8 51.4H116.2c-29.1 0-53.4-22.3-55.8-51.4L32 120.7c-.4-4.4 2.9-8.3 7.3-8.6zM216 384v-88h-88c-4.4 0-8-3.6-8-8s3.6-8 8-8h88v-88c0-4.4 3.6-8 8-8s8 3.6 8 8v88h88c4.4 0 8 3.6 8 8s-3.6 8-8 8h-88v88c0 4.4-3.6 8-8 8s-8-3.6-8-8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M416 96H32l21.4 370.8c1.5 25.4 22.5 45.2 47.9 45.2h245.4c25.4 0 46.5-19.8 47.9-45.2zM200 376v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24"
                />
                <Path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96zM200 376v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
