import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const ObjectsAlignTopIcon: React.FC<
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
                <Path d="M24 0h464c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 48 0 37.3 0 24S10.7 0 24 0m40 176c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48zm224 0c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24S501.3 0 488 0zm152 176v288h-64V176zm-64-48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zm288 48v160h-64V176zm-64-48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16zm160 160c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16zm-64-32c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zm288 32c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16zm-64-32c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8h496c4.4 0 8-3.6 8-8s-3.6-8-8-8zm168 112c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zm-64-16c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zm288 16c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32zm-64-16c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M112 128c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zm224 0c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"
                />
                <Path d="M0 24C0 10.7 10.7 0 24 0h464c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 48 0 37.3 0 24" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
