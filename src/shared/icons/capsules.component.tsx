import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const CapsulesIcon: React.FC<
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
                <Path d="M64 144c0-26.5 21.5-48 48-48s48 21.5 48 48v112H64zm-64 0v224c0 61.9 50.1 112 112 112s112-50.1 112-112V189.6c1.8 19.1 8.2 38 19.8 54.8l128.5 187.3c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 113.3c-35.5-51.8-105.4-64.3-156-28.1-28 20-44.3 50.8-47.3 83V144c0-61.9-50.1-112-112-112S0 82.1 0 144m296.6 64.2c-16-23.3-10-55.3 11.9-71 21.2-15.1 50.5-10.3 66 12.2l67 97.6-79.9 56zM491 407.7c-.8.6-1.6 1.1-2.4 1.6l4-2.8c-.5.4-1 .8-1.6 1.2" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M48 144c0-35.3 28.7-64 64-64s64 28.7 64 64v112H48zm-48 0v224c0 61.9 50.1 112 112 112s112-50.1 112-112V189.6c1.8 19.1 8.2 38 19.8 54.8l128.5 187.3c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 113.3c-35.5-51.8-105.4-64.3-156-28.1-28 20-44.3 50.8-47.3 83V144c0-61.9-50.1-112-112-112S0 82.1 0 144m283.4 73.3c-20.9-30.4-13.3-72.2 15.8-93 28.5-20.4 68-13.7 88.5 16.2l66.9 97.5-106.1 74.2z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M32 240h160v-96c0-44.2-35.8-80-80-80s-80 35.8-80 80zM0 256V144C0 82.1 50.1 32 112 32s112 50.1 112 112v24.2c3-32.2 19.3-63 47.3-83 50.7-36.2 120.5-23.6 156 28.1l128.4 187.3c35.5 51.7 23.2 123-27.5 159.2s-120.5 23.6-156-28.1L243.8 244.4c-11.5-16.8-18-35.7-19.8-54.8V368c0 61.9-50.1 112-112 112S0 429.9 0 368zm192 16H32v96c0 44.2 35.8 80 80 80s80-35.8 80-80zm206.6 141.6c25.5 37.1 75.1 45.8 111 20.1 36.3-26 45.5-77.6 19.7-115.1l-52.7-76.8-2.2 1.6-130 91.2 54.2 79.1zm57.5-196.4 2.5-1.7-57.7-84.2c-25.5-37.1-75.1-45.8-111-20.1-36.3 26-45.5 77.6-19.7 115.1l56.1 81.8z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M112 48c-53 0-96 43-96 96v112h192V144c0-53-43-96-96-96M16 368c0 53 43 96 96 96s96-43 96-96v-96H16zM0 144C0 82.1 50.1 32 112 32s112 50.1 112 112v24.2c3-32.2 19.3-63 47.3-83 50.7-36.2 120.5-23.6 156 28.1l128.4 187.3c35.5 51.7 23.2 123-27.5 159.2s-120.5 23.6-156-28.1L243.8 244.4c-11.5-16.8-18-35.7-19.8-54.8V368c0 61.9-50.1 112-112 112S0 429.9 0 368zm257 91.4 62.8 91.6 154.3-117.2-60-87.5c-30.5-44.4-90.2-55.1-133.5-24.1-43.5 31.1-54.2 92.5-23.6 137.2m128.4 187.3c30.5 44.4 90.2 55.1 133.5 24.1 43.5-31.1 54.2-92.5 23.6-137.2L483.1 223 328.8 340.1l56.6 82.5z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M224 256H0V144C0 82.1 50.1 32 112 32s112 50.1 112 112v112m85.1 83.7L256 262.2V98.3c4.6-4.7 9.7-9.1 15.3-13.1 50.7-36.2 120.5-23.6 156 28.1l66.6 97.1z"
                />
                <Path d="m372.3 431.7-63.1-92 52.4-36.7 79.9-55.9 52.4-36.7 61.9 90.2c35.5 51.7 23.2 123-27.5 159.2s-120.5 23.6-156-28.1m116.4-22.4c.8-.5 1.6-1 2.4-1.6.5-.4 1.1-.8 1.6-1.2zM0 256h224v112c0 61.9-50.1 112-112 112S0 429.9 0 368V256" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
