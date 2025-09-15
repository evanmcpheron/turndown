import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const IdCardIcon: React.FC<
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
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 96h576c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96m0 32v288c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128zm64 277.3c0-29.5 23.9-53.3 53.3-53.3h117.4c29.5 0 53.3 23.9 53.3 53.3 0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7M176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128m176 16c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16m0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16m0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M528 160v256c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80h-64c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm208 224a64 64 0 1 0-128 0 64 64 0 1 0 128 0m104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 64c-17.7 0-32 14.3-32 32h512c0-17.7-14.3-32-32-32zM0 112V96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm544 16H32v288c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32zM192 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128m-32 192c-26.5 0-48 21.5-48 48 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-26.5-21.5-48-48-48zm176-144c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H352c-8.8 0-16-7.2-16-16m0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H352c-8.8 0-16-7.2-16-16m0 64c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H352c-8.8 0-16-7.2-16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 48c-26.5 0-48 21.5-48 48v16h544V96c0-26.5-21.5-48-48-48zm-48 80v288c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48V128zM0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm192 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128m-40 176c-30.9 0-56 25.1-56 56 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-39.8 32.2-72 72-72h80c39.8 0 72 32.2 72 72 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-30.9-25.1-56-56-56zm200-120c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-4.4 0-8-3.6-8-8m0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-4.4 0-8-3.6-8-8m0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-4.4 0-8-3.6-8-8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M576 128H0v288c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64zM117.3 352h117.4c29.5 0 53.3 23.9 53.3 53.3 0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7 0-29.5 23.9-53.3 53.3-53.3m-5.3-96a64 64 0 1 1 128 0 64 64 0 1 1-128 0m256-64h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16"
                />
                <Path d="M64 32C28.7 32 0 60.7 0 96v32h576V96c0-35.3-28.7-64-64-64zm176 224a64 64 0 1 0-128 0 64 64 0 1 0 128 0M64 405.3c0 5.9 4.8 10.7 10.7 10.7h202.6c5.9 0 10.7-4.8 10.7-10.7 0-29.5-23.9-53.3-53.3-53.3H117.3C87.9 352 64 375.9 64 405.3" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
