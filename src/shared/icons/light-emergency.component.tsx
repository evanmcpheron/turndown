import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const LightEmergencyIcon: React.FC<
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
                <Path d="M64 192c0-88.4 71.6-160 160-160s160 71.6 160 160v160H64zm160-80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-61.9 0-112 50.1-112 112 0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.2 35.8-80 80-80M32 384h384c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M352 304v-96c0-70.7-57.3-128-128-128S96 137.3 96 208v96H48v-96c0-97.2 78.8-176 176-176s176 78.8 176 176v96zM48 384v48h352v-48zm0-48h352c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48m112-128c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-53 43-96 96-96 8.8 0 16 7.2 16 16s-7.2 16-16 16c-35.3 0-64 28.7-64 64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M352 320V192c0-70.7-57.3-128-128-128S96 121.3 96 192v128H64V192c0-88.4 71.6-160 160-160s160 71.6 160 160v128zM48 384c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-32h352c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48m112-160c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-53 43-96 96-96 8.8 0 16 7.2 16 16s-7.2 16-16 16c-35.3 0-64 28.7-64 64" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M368 320V192c0-79.5-64.5-144-144-144S80 112.5 80 192v128H64V192c0-88.4 71.6-160 160-160s160 71.6 160 160v128zM48 368c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm0-16h352c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48m96.4-168c-.4 4.4-4 8-8.4 8s-8-3.6-7.7-8c3.8-46.6 41-83.8 87.7-87.7 4.4-.4 8 3.3 8 7.7s-3.6 8-8 8.4c-37.8 3.7-67.9 33.8-71.6 71.6" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M224 32c-88.4 0-160 71.6-160 160v160h320V192c0-88.4-71.6-160-160-160m-80 160c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112 8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80"
                />
                <Path d="M32 352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
