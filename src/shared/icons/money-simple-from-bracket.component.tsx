import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const MoneySimpleFromBracketIcon: React.FC<
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
                <Path d="M64 96v64c0 17.7-14.3 32-32 32S0 177.7 0 160V96C0 43 43 0 96 0h448c53 0 96 43 96 96v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32m64 0h384v352c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64zm192 256c53 0 96-35.8 96-80s-43-80-96-80-96 35.8-96 80 43 80 96 80" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M48 88v80c0 13.3-10.7 24-24 24S0 181.3 0 168V88C0 39.4 39.4 0 88 0h464c48.6 0 88 39.4 88 88v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-22.1-17.9-40-40-40H88c-22.1 0-40 17.9-40 40m416 8h48v352c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V96h48v352c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16zM320 352c-53 0-96-35.8-96-80s43-80 96-80 96 35.8 96 80-43 80-96 80" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M80 32c-26.5 0-48 21.5-48 48v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V80C0 35.8 35.8 0 80 0h480c44.2 0 80 35.8 80 80v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-26.5-21.5-48-48-48zm416 64c8.8 0 16 7.2 16 16v344c0 30.9-25.1 56-56 56H184c-30.9 0-56-25.1-56-56V112c0-8.8 7.2-16 16-16s16 7.2 16 16v344c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V112c0-8.8 7.2-16 16-16M320 208c-47 0-80 31.3-80 64s33 64 80 64 80-31.3 80-64-33-64-80-64m112 64c0 55.6-53 96-112 96s-112-40.4-112-96 53-96 112-96 112 40.4 112 96" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M72 16c-30.9 0-56 25.1-56 56v80c0 4.4-3.6 8-8 8s-8-3.6-8-8V72C0 32.2 32.2 0 72 0h496c39.8 0 72 32.2 72 72v80c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-30.9-25.1-56-56-56zm432 64c4.4 0 8 3.6 8 8v376c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V88c0-4.4 3.6-8 8-8s8 3.6 8 8v376c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V88c0-4.4 3.6-8 8-8M320 200c-50 0-88 33.5-88 72s38 72 88 72 88-33.5 88-72-38-72-88-72m104 72c0 49.9-48 88-104 88s-104-38.1-104-88 48-88 104-88 104 38.1 104 88" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M512 448V96H128v352c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64M224 272c0-44.2 43-80 96-80s96 35.8 96 80-43 80-96 80-96-35.8-96-80"
                />
                <Path d="M96 64c-17.7 0-32 14.3-32 32v64c0 17.7-14.3 32-32 32S0 177.7 0 160V96C0 43 43 0 96 0h448c53 0 96 43 96 96v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7-14.3-32-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
