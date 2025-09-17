import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";

export const LetterboxdIcon: React.FC<
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
          case "brands":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M521.3 128c65.6 0 118.7 53.1 118.7 118.6s-53.1 118.6-118.7 118.6c-42.5 0-79.7-22.3-100.7-55.8 11.4-18.2 18-39.7 18-62.8s-6.6-44.6-18-62.8l.8-1.2c20.8-32.3 56.8-53.9 97.9-54.6zM320 128c42.5 0 79.7 22.3 100.7 55.8-11.4 18.2-18 39.7-18 62.8s6.6 44.6 18 62.8l-.8 1.2c-20.8 32.3-56.8 53.9-97.9 54.6h-2c-42.5 0-79.7-22.3-100.7-55.8 11.4-18.2 18-39.7 18-62.8s-6.6-44.6-18-62.8l.8-1.2c20.8-32.3 56.8-53.9 97.9-54.6zm-201.3 0c42.5 0 79.7 22.3 100.7 55.8-11.4 18.2-18 39.7-18 62.8s6.6 44.6 18 62.8l-.8 1.2c-20.8 32.3-56.8 53.9-97.9 54.6h-2C53.1 365.1 0 312.1 0 246.6S53.1 128 118.7 128" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
