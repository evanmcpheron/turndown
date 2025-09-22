import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const IndianRupeeSignIcon: React.FC<
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
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M0 64c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-56.2c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32h-35.6c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4l-224-160c-11.3-8-16.1-22.5-11.9-35.8S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h153.3C173 115.7 144.8 96 112 96H32C14.3 96 0 81.7 0 64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M0 56c0-13.3 10.7-24 24-24h272c13.3 0 24 10.7 24 24s-10.7 24-24 24h-84.7c17.7 19.8 30.1 44.6 34.7 72h50c13.3 0 24 10.7 24 24s-10.7 24-24 24h-50c-11.4 68.1-70.7 120-142 120h-5.1l163 116.5c10.8 7.7 13.3 22.7 5.6 33.5s-22.7 13.3-33.5 5.6l-224-160c-8.4-6.1-12-17-8.9-26.9S13.6 272 24 272h80c44.7 0 82.3-30.6 93-72H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h173c-10.7-41.4-48.2-72-93-72H24C10.7 80 0 69.3 0 56" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M0 48c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H202.5c28.7 23.2 48.3 57.3 52.6 96H304c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48.9c-8 72-69 128-143.1 128H65.9l183.4 131c7.2 5.1 8.9 15.1 3.7 22.3s-15.1 8.9-22.3 3.7L6.7 317C1 313-1.4 305.7.8 299.1S9 288 16 288h96c56.4 0 103.1-41.7 110.9-96H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h206.9c-7.8-54.3-54.4-96-110.9-96H16C7.2 64 0 56.8 0 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path d="M0 40c0-4.4 3.6-8 8-8h104c2.2 0 4.3 0 6.5.1.5-.1 1-.1 1.5-.1h192c4.4 0 8 3.6 8 8s-3.6 8-8 8H178c44.1 22.8 74.9 67.7 77.7 120H312c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56.2c-4.2 75.8-66.9 136-143.8 136H34.4l218 145.3c3.7 2.5 4.7 7.4 2.2 11.1s-7.4 4.7-11.1 2.2l-240-160c-2.9-2-4.2-5.6-3.2-9s4.1-5.7 7.7-5.7h104c68 0 123.6-53 127.8-120H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h231.8C235.6 101 180 48 112 48H8c-4.4 0-8-3.6-8-8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M185.3 144H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h153.3c4.3-9.8 6.7-20.6 6.7-32s-2.4-22.2-6.7-32m67.1 64H288c17.7 0 32-14.3 32-32s-14.3-32-32-32h-35.6c2.3 10.3 3.6 21 3.6 32s-1.2 21.7-3.6 32"
                />
                <Path d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h80c44.2 0 80 35.8 80 80s-35.8 80-80 80H32c-13.9 0-26.2 9-30.5 22.2S2.1 306 13.4 314l224 160c14.4 10.3 34.4 6.9 44.6-7.4s6.9-34.4-7.4-44.6L130.3 318.9c70.9-9 125.7-69.6 125.7-142.9 0-29.6-8.9-57.1-24.2-80H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
