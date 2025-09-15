import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const DialOffIcon: React.FC<
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
                <Path d="M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64m160 288c0 80.2-59 146.6-136 158.2V288c0-13.3-10.7-24-24-24s-24 10.7-24 24v158.2c-77-11.6-136-78-136-158.2 0-88.4 71.6-160 160-160s160 71.6 160 160m64 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0M32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 480a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M288 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-24 224v109.4c-50.3-11-88-55.8-88-109.4 0-61.9 50.1-112 112-112s112 50.1 112 112c0 53.6-37.7 98.4-88 109.4V288c0-13.3-10.7-24-24-24s-24 10.7-24 24m24 160a160 160 0 1 0 0-320 160 160 0 1 0 0 320m288-160a32 32 0 1 0-64 0 32 32 0 1 0 64 0M32 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96-224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M128 480a32 32 0 1 0-64 0 32 32 0 1 0 64 0m352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-16 232v127c-63.1-7.9-112-61.7-112-127 0-70.7 57.3-128 128-128s128 57.3 128 128c0 65.3-48.9 119.1-112 127V288c0-8.8-7.2-16-16-16s-16 7.2-16 16m16 160a160 160 0 1 0 0-320 160 160 0 1 0 0 320m280-160a24 24 0 1 0-48 0 24 24 0 1 0 48 0M32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48m88-216a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M120 480a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M272 32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-40 256v143.8c-75.8-4.2-136-66.9-136-143.8 0-79.5 64.5-144 144-144s144 64.5 144 144c0 76.8-60.2 139.6-136 143.8V288c0-4.4-3.6-8-8-8s-8 3.6-8 8m8 160a160 160 0 1 0 0-320 160 160 0 1 0 0 320m256-176a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64M16 288a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m368-32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 464a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m368-32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0M32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 480a32 32 0 1 1 64 0 32 32 0 1 1-64 0m416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <Path d="M312 446.2c77-11.6 136-78 136-158.2 0-88.4-71.6-160-160-160s-160 71.6-160 160c0 80.2 59 146.6 136 158.2V288c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
