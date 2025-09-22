import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const ClockDeskIcon: React.FC<
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
                <Path d="M0 224a224 224 0 1 1 448 0 224 224 0 1 1-448 0M224 96c-13.3 0-24 10.7-24 24v104c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41V120c0-13.3-10.7-24-24-24zm0 384c96.4 0 180.3-53.3 224-132v116c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V348c43.7 78.7 127.6 132 224 132" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M400 224a176 176 0 1 0-352 0 176 176 0 1 0 352 0M224 0c123.7 0 224 100.3 224 224v240c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V224C0 100.3 100.3 0 224 0m0 96c13.3 0 24 10.7 24 24v94.1l41 41c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-4.5-4.5-7-10.6-7-17V120c0-13.3 10.7-24 24-24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M32 224a192 192 0 1 1 384 0 192 192 0 1 1-384 0m384 115.4V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V339.4C71.2 404.5 142.5 448 224 448s152.8-43.5 192-108.6M0 224v224c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V224C448 100.3 347.7 0 224 0S0 100.3 0 224M224 96c-8.8 0-16 7.2-16 16v112c0 4.2 1.7 8.3 4.7 11.3l48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L240 217.4V112c0-8.8-7.2-16-16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M16 224a208 208 0 1 1 416 0 208 208 0 1 1-416 0m416 83.3V456c0 22.1-17.9 40-40 40H56c-22.1 0-40-17.9-40-40V307.3C49.1 389.8 129.7 448 224 448s174.9-58.2 208-140.7M0 224v232c0 30.9 25.1 56 56 56h336c30.9 0 56-25.1 56-56V224C448 100.3 347.7 0 224 0S0 100.3 0 224M224 96c-4.4 0-8 3.6-8 8v120c0 2.1.8 4.2 2.3 5.7l56 56c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L232 220.7V104c0-4.4-3.6-8-8-8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M224 448a224 224 0 1 0 0-448 224 224 0 1 0 0 448m24-328v94.1l41 41c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-4.5-4.5-7-10.6-7-17V120c0-13.3 10.7-24 24-24s24 10.7 24 24z"
                />
                <Path d="M248 120c0-13.3-10.7-24-24-24s-24 10.7-24 24v104c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41V120zm200 104c0 123.7-100.3 224-224 224S0 347.7 0 224v240c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
