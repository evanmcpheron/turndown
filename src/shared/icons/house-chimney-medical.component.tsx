import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const HouseChimneyMedicalIcon: React.FC<
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
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v121l52.8 46.4c8 7 12 15 11 24zM272 192c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M303.5 5.7c-9-7.6-22.1-7.6-31.1 0l-264 224c-10.1 8.6-11.3 23.7-2.8 33.8s23.7 11.3 33.8 2.8L64 245.5V432c0 44.2 35.8 80 80 80h288c44.2 0 80-35.8 80-80V245.5l24.5 20.8c10.1 8.6 25.3 7.3 33.8-2.8s7.3-25.3-2.8-33.8L512 182.6V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v85.9zM464 204.8V432c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V204.8L288 55.5zM272 192c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M277.4 4c6-5.3 15.1-5.3 21.2 0L384 79.4V56c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v136.3l58.6 51.7c6.6 5.8 7.3 16 1.4 22.6s-16 7.3-22.6 1.4L512 235v197c0 44.2-35.8 80-80 80H144c-44.2 0-80-35.8-80-80V235l-37.4 33c-6.6 5.8-16.8 5.2-22.6-1.4s-5.2-16.8 1.4-22.6zM480 164.1V64h-64v43.6zM96 206.7V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V206.7L288 37.3zM272 176h32c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32h-32c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h32v-32c0-17.7 14.3-32 32-32m0 32v48c0 4.2-1.7 8.3-4.7 11.3s-7.1 4.7-11.3 4.7h-48v32h48c8.8 0 16 7.2 16 16v48h32v-48c0-8.8 7.2-16 16-16h48v-32h-48c-8.8 0-16-7.2-16-16v-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M282.7 2c3-2.7 7.6-2.7 10.6 0L384 82.3V56c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v139.7l61.3 54.3c3.3 2.9 3.6 8 .7 11.3s-8 3.6-11.3.7L512 217.1V448c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V217.1L13.3 262c-3.3 2.9-8.4 2.6-11.3-.7s-2.6-8.4.7-11.3zM496 181.5V56c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v40.5zm-112-77.8-96-85L80 202.9V448c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V202.9L384.3 104h-.3zM272 192c-4.4 0-8 3.6-8 8v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h56c4.4 0 8 3.6 8 8v56c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-56c0-4.4 3.6-8 8-8h56c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-56c-4.4 0-8-3.6-8-8v-56c0-4.4-3.6-8-8-8zm-24 8c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v48h48c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-48v48c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-48h-48c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h48z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M64.1 448 64 270.5l224-196 224.1 196.1.4 177.3c.1 35.4-28.6 64.1-64 64.1H128.1c-35.3 0-64-28.6-64-64M256 240v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"
                />
                <Path d="M266.9 7.9C279-2.6 297-2.6 309.1 7.9L416 101.5V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v121.5l53.1 46.4c13.3 11.6 14.6 31.9 3 45.2s-31.9 14.6-45.2 3L288 74.5 53.1 280.1c-13.3 11.6-33.5 10.3-45.2-3s-10.3-33.5 3-45.2zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
