import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const ObjectsColumnIcon: React.FC<
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
                <Path d="M48 32C21.5 32 0 53.5 0 80v160c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm256 192c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM0 400v32c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48M304 32c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M48 80v160h96V80zM0 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm304 192v160h96V272zm-48 0c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48zm-112 96H48v64h96zm-96-48h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48M304 80v64h96V80zm-48 0c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M48 64c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM0 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm304 176c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16zm-48 16c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48zm-112 80H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16m-96-32h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48M304 64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zm-48 16c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M48 48c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zM0 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm304 160c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32zm-48 32c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48zm-112 64H48c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32m-96-16h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48M304 48c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm-48 32c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M304 32c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 192c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48z"
                />
                <Path d="M48 32C21.5 32 0 53.5 0 80v160c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 320c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
