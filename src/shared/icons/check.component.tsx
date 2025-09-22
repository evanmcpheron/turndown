import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const CheckIcon: React.FC<
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
              <Svg
                viewBox="0 0 448 512"
                className="mickey-icon-svg"
                fill={colors[colorName || "text"]}
              >
                <Path
                  className="mickey-icon-foreground"
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg
                viewBox="0 0 448 512"
                className="mickey-icon-svg"
                fill={colors[colorName || "text"]}
              >
                <Path
                  className="mickey-icon-foreground"
                  d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"
                />
              </Svg>
            );

          case "light":
            return (
              <Svg
                viewBox="0 0 448 512"
                className="mickey-icon-svg"
                fill={colors[colorName || "text"]}
              >
                <Path
                  className="mickey-icon-foreground"
                  d="M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4l260.7-260.7c6.2-6.2 16.4-6.2 22.6 0"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg
                viewBox="0 0 448 512"
                className="mickey-icon-svg"
                fill={colors[colorName || "text"]}
              >
                <Path
                  className="mickey-icon-foreground"
                  d="M437.7 106.3c3.1 3.1 3.1 8.2 0 11.3l-272 272c-3.1 3.1-8.2 3.1-11.3 0l-144-144c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L160 372.7l266.3-266.4c3.1-3.1 8.2-3.1 11.3 0z"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg
                viewBox="0 0 448 512"
                className="mickey-icon-svg"
                fill={colors[colorName || "text"]}
              >
                <Path className="mickey-icon-background" d="" />
                <Path
                  className="mickey-icon-foreground"
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"
                />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
