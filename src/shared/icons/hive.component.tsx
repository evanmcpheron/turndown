import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";

export const HiveIcon: React.FC<
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
                <Path d="M260.353 254.878 131.538 33.1a2.208 2.208 0 0 0-3.829.009L.3 254.887a2.23 2.23 0 0 0 0 2.235L129.116 478.9a2.208 2.208 0 0 0 3.83-.009l127.412-221.778a2.24 2.24 0 0 0-.005-2.235m39.078-25.713a2.19 2.19 0 0 0 1.9 1.111h66.509a2.226 2.226 0 0 0 1.9-3.341L259.115 33.111a2.19 2.19 0 0 0-1.9-1.111h-66.508a2.226 2.226 0 0 0-1.9 3.341ZM511.7 254.886 384.9 33.112A2.2 2.2 0 0 0 382.99 32h-66.6a2.226 2.226 0 0 0-1.906 3.34L440.652 256 314.481 476.66a2.226 2.226 0 0 0 1.906 3.34h66.6a2.2 2.2 0 0 0 1.906-1.112L511.7 257.114a2.24 2.24 0 0 0 0-2.228m-145.684 30.031h-66.508a2.19 2.19 0 0 0-1.9 1.111l-108.8 190.631a2.226 2.226 0 0 0 1.9 3.341h66.509a2.19 2.19 0 0 0 1.9-1.111l108.8-190.631a2.226 2.226 0 0 0-1.901-3.341" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
