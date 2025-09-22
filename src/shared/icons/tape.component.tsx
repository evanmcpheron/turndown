import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const TapeIcon: React.FC<
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
                <Path d="M380.8 416c41.5-40.7 67.2-97.3 67.2-160 0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224h320c17.7 0 32-14.3 32-32s-14.3-32-32-32zM224 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192m64 96a64 64 0 1 0-128 0 64 64 0 1 0 128 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M224 80a176 176 0 1 1 0 352 176 176 0 1 1 0-352m138.6 352c52-41 85.4-104.6 85.4-176 0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224h328c13.3 0 24-10.7 24-24s-10.7-24-24-24zM224 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M224 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384m115.4 384C404.5 408.8 448 337.5 448 256c0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224h336c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M224 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m83.3 416C389.8 430.9 448 350.3 448 256c0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224h344c4.4 0 8-3.6 8-8s-3.6-8-8-8zM224 176a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M224 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 224a160 160 0 1 0 0-320 160 160 0 1 0 0 320"
                />
                <Path d="M64 256a160 160 0 1 1 320 0 160 160 0 1 1-320 0m316.8 160c41.5-40.7 67.2-97.3 67.2-160 0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224h320c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
