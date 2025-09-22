import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const InputNumericIcon: React.FC<
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
                <Path d="M576 128v256H64V128zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm40 120c0 13.3 10.7 24 24 24h8v96h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16V184c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24m190.6 30.4c5.7-8 17.5-8.6 24-1.2 5.2 5.9 5 14.7-.3 20.5l-72 78c-6.5 7-8.2 17.2-4.3 25.9s12.5 14.4 22 14.4h88c13.3 0 24-10.7 24-24s-10.7-24-24-24h-33.2l34.8-37.7c22-23.8 22.4-60.3 1.1-84.7-26.9-30.7-75.4-28.4-99.2 4.9l-11.1 15.6c-7.7 10.8-5.2 25.8 5.6 33.5s25.8 5.2 33.5-5.6z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M576 112c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm40 120c0 13.3 10.7 24 24 24h8v96h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16V184c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24m190.6 30.4c5.7-8 17.5-8.6 24-1.2 5.2 5.9 5 14.7-.3 20.5l-72 78c-6.5 7-8.2 17.2-4.3 25.9s12.5 14.4 22 14.4h88c13.3 0 24-10.7 24-24s-10.7-24-24-24h-33.2l34.8-37.7c22-23.8 22.4-60.3 1.1-84.7-26.9-30.7-75.4-28.4-99.2 4.9l-11.1 15.6c-7.7 10.8-5.2 25.8 5.6 33.5s25.8 5.2 33.5-5.6z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M576 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm32 112c0 8.8 7.2 16 16 16h16v128h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V176c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m168.7 27.4c9.4-11.3 26.2-12.6 37.2-2.9 10.8 9.5 11.9 25.9 2.5 36.7l-76.6 88.3c-4.1 4.7-5.1 11.4-2.5 17.1s8.3 9.4 14.6 9.4h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H275l53.6-61.9c20.9-24.2 18.4-60.7-5.6-81.8-24.6-21.5-62-18.5-82.9 6.5l-12.4 14.9c-5.7 6.8-4.7 16.9 2 22.5s16.9 4.7 22.5-2l12.4-14.9z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M576 80c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm40 112c0 4.4 3.6 8 8 8h24v144h-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V176c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8m154.5 22.3c12.3-14.7 34.2-16.4 48.7-3.8 14.1 12.4 15.6 33.8 3.3 48L234 330.8c-2.1 2.4-2.5 5.7-1.2 8.6s4.1 4.7 7.3 4.7h96c4.4 0 8-3.6 8-8s-3.6-8-8-8h-78.6l65.1-75.1c18.1-20.8 15.9-52.4-4.9-70.5-21.2-18.5-53.5-16-71.5 5.6L233.8 203c-2.8 3.4-2.4 8.4 1 11.3s8.4 2.4 11.3-1l12.4-14.9z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M576 128v256H64V128zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64z"
                />
                <Path d="M294.6 214.4c5.7-8 17.5-8.6 24-1.2 5.2 5.9 5 14.7-.3 20.5l-72 78c-6.5 7-8.2 17.2-4.3 25.9s12.5 14.4 22 14.4h88c13.3 0 24-10.7 24-24s-10.7-24-24-24h-33.2l34.8-37.7c22-23.8 22.4-60.3 1.1-84.7-26.9-30.7-75.4-28.4-99.2 4.9l-11.1 15.6c-7.7 10.8-5.2 25.8 5.6 33.5s25.8 5.2 33.5-5.6zM128 160c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v96h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16V184c0-13.3-10.7-24-24-24z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
