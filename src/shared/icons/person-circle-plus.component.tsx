import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const PersonCirclePlusIcon: React.FC<
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
                <Path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m40 304v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.6 47.6c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352zm280-128a144 144 0 1 1 0 288 144 144 0 1 1 0-288m16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m32 128.1V304h32V176.1c-.7 0-1.5-.1-2.3-.1h-27.4c-.8 0-1.5 0-2.3.1m0 175.9v136c0 13.3-10.7 24-24 24s-24-10.7-24-24V223.6l-43.1 76.2c-6.5 11.5-21.2 15.6-32.7 9.1s-15.6-21.2-9.1-32.7l58.6-103.5c15.6-27.6 44.9-44.7 76.6-44.7h27.5c31.7 0 61 17.1 76.6 44.7l46.6 82.4c-11.7 14-21.3 29.9-28.3 47.1-.6-.8-1.1-1.6-1.6-2.4L224 223.6V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V352zm288-128a144 144 0 1 1 0 288 144 144 0 1 1 0-288m16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M160 80a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-32 164v156h64V164c-6-2.6-12.5-4-19.3-4h-25.4c-6.8 0-13.3 1.4-19.3 4m0 188v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V202.1l-49.9 93.4c-4.2 7.8-13.9 10.7-21.7 6.6s-10.7-13.9-6.6-21.7l58.9-110.1c13.9-26 41-42.3 70.6-42.3h25.4c29.5 0 56.7 16.3 70.6 42.3l48.7 91.1c-7.5 9.8-14 20.5-19.3 31.8l-48.6-91V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V352zm416 16a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-256 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m160-64v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M160 96a40 40 0 1 0 0-80 40 40 0 1 0 0 80m0-96a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-18.9 144c-21.5 0-41.1 12.3-50.4 31.7L23.2 315.5c-1.9 4-6.7 5.6-10.7 3.7s-5.6-6.7-3.7-10.7l67.5-139.8c12-24.9 37.2-40.7 64.8-40.7h37.8c27.6 0 52.8 15.8 64.8 40.7l46.1 95.5q-5.55 7.5-10.2 15.6l-50.3-104.1c-9.3-19.4-28.9-31.7-50.4-31.7zM104 248v232c0 8.8 7.2 16 16 16s16-7.2 16-16V360c0-13.3 10.7-24 24-24s24 10.7 24 24v120c0 8.8 7.2 16 16 16s16-7.2 16-16V248c0-4.4 3.6-8 8-8s8 3.6 8 8v232c0 17.7-14.3 32-32 32s-32-14.3-32-32V360c0-4.4-3.6-8-8-8s-8 3.6-8 8v120c0 17.7-14.3 32-32 32s-32-14.3-32-32V248c0-4.4 3.6-8 8-8s8 3.6 8 8m456 120a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m152-72v64h64c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64h-64c-4.4 0-8-3.6-8-8s3.6-8 8-8h64v-64c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M160 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-8 384V352h16v128c0 17.7 14.3 32 32 32s32-14.3 32-32V256.9l28.6 47.5c1.4 2.3 3.1 4.5 4.9 6.3 7.9-23 20.5-43.9 36.6-61.5l-44.9-74.7c-17.4-28.9-48.6-46.6-82.3-46.6h-29.8c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L88 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32"
                />
                <Path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144-80c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
