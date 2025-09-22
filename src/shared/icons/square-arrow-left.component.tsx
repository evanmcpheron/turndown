import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const SquareArrowLeftIcon: React.FC<
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
                <Path d="M0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm87-177 112-112c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71 182.1.1c13.3 0 24 10.7 24 24s-10.7 24-24 24H161.9l71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L87 273c-9.4-9.4-9.4-24.6 0-33.9z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M48 96c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm16-64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm39 241 88 88c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47L328 280c13.3 0 24-10.7 24-24s-10.7-24-24-24H177.9l47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-88 88c-9.4 9.4-9.4 24.6 0 33.9" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M32 416c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32zm32 64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm36.7-235.3 96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L150.6 240H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H150.6l68.7 68.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-96-96c-6.2-6.2-6.2-16.4 0-22.6" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M16 416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48zm48 64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm34.3-229.7 104-104c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L123.3 248H344c4.4 0 8 3.6 8 8s-3.6 8-8 8H123.3l90.3 90.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-104-104c-3.1-3.1-3.1-8.2 0-11.3" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm87-177 112-112c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71 182.1.1c13.3 0 24 10.7 24 24s-10.7 24-24 24H161.9l71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L87 273c-9.4-9.4-9.4-24.6 0-33.9z"
                />
                <Path d="M87 273c-9.4-9.4-9.4-24.6 0-33.9L199 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71 182.1.1c13.3 0 24 10.7 24 24s-10.7 24-24 24H161.9l71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
