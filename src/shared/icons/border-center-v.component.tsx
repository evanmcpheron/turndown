import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const BorderCenterVIcon: React.FC<
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
                <Path d="M448 448a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-384 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m320-192a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-320 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m320 96a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-320 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M384 64a32 32 0 1 0 64 0 32 32 0 1 0-64 0M0 64a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64 384a32 32 0 1 0-64 0 32 32 0 1 0 64 0m224-192a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64-192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-64 384a32 32 0 1 0 64 0 32 32 0 1 0-64 0M160 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 448a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64-192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m32 192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M448 448a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-384 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m320-192a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-320 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m320 96a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-320 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M384 64a32 32 0 1 0 64 0 32 32 0 1 0-64 0M0 64a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64 384a32 32 0 1 0-64 0 32 32 0 1 0 64 0m224-192a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64-192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-64 384a32 32 0 1 0 64 0 32 32 0 1 0-64 0M160 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 448a32 32 0 1 0 64 0 32 32 0 1 0-64 0m64-192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m40 200c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M208 464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16zM56 448a24 24 0 1 0-48 0 24 24 0 1 0 48 0m384 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0M56 352a24 24 0 1 0-48 0 24 24 0 1 0 48 0m384 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-48-192a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-336 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m336 96a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-336 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0M392 64a24 24 0 1 0 48 0 24 24 0 1 0-48 0M8 64a24 24 0 1 0 48 0 24 24 0 1 0-48 0m288 192a24 24 0 1 0 48 0 24 24 0 1 0-48 0m48-192a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-48 384a24 24 0 1 0 48 0 24 24 0 1 0-48 0M152 64a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-48 384a24 24 0 1 0 48 0 24 24 0 1 0-48 0m48-192a24 24 0 1 0-48 0 24 24 0 1 0 48 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M216 472c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8s-8 3.6-8 8zM48 448a16 16 0 1 0-32 0 16 16 0 1 0 32 0m384 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0M48 352a16 16 0 1 0-32 0 16 16 0 1 0 32 0m384 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-32-192a16 16 0 1 0 32 0 16 16 0 1 0-32 0m-352 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m352 96a16 16 0 1 0 32 0 16 16 0 1 0-32 0m-352 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0M400 64a16 16 0 1 0 32 0 16 16 0 1 0-32 0M16 64a16 16 0 1 0 32 0 16 16 0 1 0-32 0m288 192a16 16 0 1 0 32 0 16 16 0 1 0-32 0m32-192a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-32 384a16 16 0 1 0 32 0 16 16 0 1 0-32 0M144 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-32 384a16 16 0 1 0 32 0 16 16 0 1 0-32 0m32-192a16 16 0 1 0-32 0 16 16 0 1 0 32 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M448 448a32 32 0 1 1-64 0 32 32 0 1 1 64 0m0-96a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-384 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320-192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-320 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-320 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0M384 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0M0 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m64 384a32 32 0 1 1-64 0 32 32 0 1 1 64 0m224-192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m64-192a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-64 384a32 32 0 1 1 64 0 32 32 0 1 1-64 0M160 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0M96 448a32 32 0 1 1 64 0 32 32 0 1 1-64 0m64-192a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
                />
                <Path d="M224 480c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v384c0 17.7-14.3 32-32 32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
