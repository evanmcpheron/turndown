import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const EraserIcon: React.FC<
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
                <Path d="M290.7 57.4 57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9l130.7-130.6c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zm6.7 358.6H182.6l-80-80 124.7-124.7 137.4 137.4z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M97 319c-9.4 9.4-9.4 24.6 0 33.9l72 72c4.5 4.5 10.6 7 17 7h108.1c6.4 0 12.5-2.5 17-7l65-65L216 200zM285.1 63c28.1-28.1 73.7-28.1 101.8 0L513 189.1c28.1 28.1 28.1 73.7 0 101.8L371.9 432H520c13.3 0 24 10.7 24 24s-10.7 24-24 24H185.9c-19.1 0-37.4-7.6-50.9-21.1l-72-72c-28.1-28.1-28.1-73.7 0-101.8z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M353 74.3c-9.4-9.4-24.6-9.4-33.9 0l-111 111L390.6 368l111-111c9.4-9.4 9.4-24.6 0-33.9zM74.3 319c-9.4 9.4-9.4 24.6 0 33.9l88 88c4.5 4.5 10.6 7 17 7h121.4c6.4 0 12.5-2.5 17-7l50.3-50.3L185.4 208zM296.4 51.7c21.9-21.9 57.3-21.9 79.2 0l148.7 148.7c21.9 21.9 21.9 57.3 0 79.2L355.9 448H528c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v-.1c-1.1.1-2.2.1-3.3.1H179.3c-14.9 0-29.1-5.9-39.6-16.4l-88-88c-21.9-21.9-21.9-57.3 0-79.2z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M364.3 63c-15.6-15.6-40.9-15.6-56.6 0L191 179.7 396.3 385 513 268.3c15.6-15.6 15.6-40.9 0-56.6zM63 307.7c-15.6 15.6-15.6 40.9 0 56.6l88 88c7.5 7.5 17.7 11.7 28.3 11.7h121.4c10.6 0 20.8-4.2 28.3-11.7l56-56L179.7 191zm233.4-256c21.9-21.9 57.3-21.9 79.2 0l148.7 148.7c21.9 21.9 21.9 57.3 0 79.2l-184 184-.4.4H536c4.4 0 8 3.6 8 8s-3.6 8-8 8H179.3c-14.9 0-29.1-5.9-39.6-16.4l-88-88c-21.9-21.9-21.9-57.3 0-79.2z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="m409.9 393.9-45.3-45.3-67.2 67.4H182.6l-80-80 124.7-124.7L182 166 57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9l22.1-22.1z"
                />
                <Path d="m409.9 393.9 108.7-108.6c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0L182.1 166.1l45.3 45.3 137.3 137.3L410 394z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
