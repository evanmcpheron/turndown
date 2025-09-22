import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const LambdaIcon: React.FC<
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
                <Path d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h108.2l16.4 32.7L18.8 434.9c-7.3 16.1-.1 35.1 16 42.3s35.1.1 42.3-16l116.4-258.6 121 242c10.8 21.7 33 35.4 57.2 35.4H416c17.7 0 32-14.3 32-32s-14.3-32-32-32h-44.2L197.5 67.4c-10.9-21.7-33-35.4-57.3-35.4z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h108.6c3 0 5.7 1.7 7.1 4.3l10.2 19.6L2 446.5c-5.3 12.2.4 26.3 12.5 31.5s26.3-.3 31.5-12.5l132.4-306.6 151.3 291c9.6 18.5 28.8 30.2 49.7 30.2H424c13.3 0 24-10.7 24-24s-10.7-24-24-24h-44.6c-3 0-5.7-1.7-7.1-4.3l-190-365.6C172.6 43.6 153.5 32 132.6 32z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h123.5c6.2 0 11.9 3.6 14.5 9.3l7.6 16.5-.3-.1-160 368c-3.5 8.1.2 17.5 8.3 21.1s17.5-.2 21.1-8.3l148.7-342.2 149.5 323.8c7.8 17 24.9 27.9 43.6 27.9H432c8.8 0 16-7.2 16-16s-7.2-16-16-16h-59.5c-6.2 0-11.9-3.6-14.5-9.3L183.1 59.9c-7.8-17-24.9-27.9-43.6-27.9z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h123.9c9.2 0 17.6 5.3 21.6 13.6l21.1 43.9L16.7 468.8c-1.8 4.1.1 8.8 4.1 10.5s8.8-.1 10.5-4.1l152.5-350.7 160.3 332.9c6.7 13.8 20.7 22.6 36 22.6H440c4.4 0 8-3.6 8-8s-3.6-8-8-8h-59.9c-9.2 0-17.6-5.3-21.6-13.6L167.9 54.6c-6.7-13.8-20.7-22.6-36-22.6z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h108.2l16.4 32.7L18.8 434.9c-7.3 16.1-.1 35.1 16 42.3s35.1.1 42.3-16l116.4-258.6 121 242c10.8 21.7 33 35.4 57.2 35.4H416c17.7 0 32-14.3 32-32s-14.3-32-32-32h-44.2L197.5 67.4c-10.9-21.7-33-35.4-57.3-35.4z"
                />
                <Path d="" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
