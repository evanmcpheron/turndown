import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";

export const ChromeIcon: React.FC<
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
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M0 256c0-46.6 12.47-90.4 34.27-128.9L144.1 318.3C166 357.5 207.9 384 256 384c14.3 0 27.1-2.3 40.8-6.6l-76.3 132.2C95.9 492.3 0 385.3 0 256m365.1 65.6c12.3-19.2 18.9-42.5 18.9-65.6 0-38.2-16.8-72.5-43.3-96h152.7c12 29.6 18.6 62.1 18.6 96 0 141.4-114.6 255.1-256 256zM477.8 128H256c-62.9 0-113.7 44.1-125.5 102.7L54.19 98.47C101 38.53 174 0 256 0c94.8 0 177.5 51.48 221.8 128M168 256c0-48.6 39.4-88 88-88s88 39.4 88 88-39.4 88-88 88-88-39.4-88-88" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
