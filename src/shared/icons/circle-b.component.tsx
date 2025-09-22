import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const CircleBIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-360c0-13.3 10.7-24 24-24h92c42 0 76 34 76 76 0 16.2-5.1 31.3-13.8 43.7 18.1 13.9 29.8 35.7 29.8 60.3 0 42-34 76-76 76H184c-13.3 0-24-10.7-24-24V152m144 52c0-15.5-12.5-28-28-28h-68v56h68c15.5 0 28-12.5 28-28m-96 132h84c15.5 0 28-12.5 28-28s-12.5-28-28-28h-84z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-360v208c0 13.3 10.7 24 24 24h108c42 0 76-34 76-76 0-24.6-11.7-46.4-29.8-60.3 8.7-12.4 13.8-27.4 13.8-43.7 0-42-34-76-76-76h-92c-13.3 0-24 10.7-24 24m144 52c0 15.5-12.5 28-28 28h-68v-56h68c15.5 0 28 12.5 28 28m-96 132v-56h84c15.5 0 28 12.5 28 28s-12.5 28-28 28z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-352v192c0 17.7 14.3 32 32 32h104c39.8 0 72-32.2 72-72 0-26.6-14.4-49.8-35.9-62.3 12.3-12.9 19.9-30.4 19.9-49.7 0-39.8-32.2-72-72-72h-88c-17.7 0-32 14.3-32 32m160 40c0 22.1-17.9 40-40 40h-88v-80h88c22.1 0 40 17.9 40 40M192 352v-80h104c22.1 0 40 17.9 40 40s-17.9 40-40 40z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-360v208c0 13.3 10.7 24 24 24h108c37.6 0 68-30.4 68-68 0-31.6-21.6-58.2-50.9-65.8 16.3-12.4 26.9-32.1 26.9-54.2 0-37.6-30.4-68-68-68h-84c-13.3 0-24 10.7-24 24m160 44c0 28.7-23.3 52-52 52h-92v-96c0-4.4 3.6-8 8-8h84c28.7 0 52 23.3 52 52M176 360v-96h116c28.7 0 52 23.3 52 52s-23.3 52-52 52H184c-4.4 0-8-3.6-8-8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-360c0-13.3 10.7-24 24-24h92c42 0 76 34 76 76 0 16.2-5.1 31.3-13.8 43.7 18.1 13.9 29.8 35.7 29.8 60.3 0 42-34 76-76 76H184c-13.3 0-24-10.7-24-24V152m144 52c0-15.5-12.5-28-28-28h-68v56h68c15.5 0 28-12.5 28-28m-96 132h84c15.5 0 28-12.5 28-28s-12.5-28-28-28h-84z"
                />
                <Path d="M184 128c-13.3 0-24 10.7-24 24v208c0 13.3 10.7 24 24 24h108c42 0 76-34 76-76 0-24.6-11.7-46.4-29.8-60.3 8.7-12.4 13.8-27.4 13.8-43.7 0-42-34-76-76-76zm92 104h-68v-56h68c15.5 0 28 12.5 28 28s-12.5 28-28 28m-68 48h84c15.5 0 28 12.5 28 28s-12.5 28-28 28h-84z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
