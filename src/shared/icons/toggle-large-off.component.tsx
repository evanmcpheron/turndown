import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const ToggleLargeOffIcon: React.FC<
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
                <Path d="M192 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256m0 64h192c106 0 192-86 192-192S490 64 384 64H192C86 64 0 150 0 256s86 192 192 192m143.1-64c30.4-34 48.9-78.8 48.9-128s-18.5-94-48.9-128H384c70.7 0 128 57.3 128 128s-57.3 128-128 128z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M192 400a144 144 0 1 1 0-288 144 144 0 1 1 0 288m0 48h192c106 0 192-86 192-192S490 64 384 64H192C86 64 0 150 0 256s86 192 192 192m127-48c39.9-35.2 65-86.7 65-144s-25.1-108.8-65-144h65c79.5 0 144 64.5 144 144s-64.5 144-144 144z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M160 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256m0 32h256c88.4 0 160-71.6 160-160S504.4 96 416 96H160C71.6 96 0 167.6 0 256s71.6 160 160 160m96-32c38.9-29.2 64-75.7 64-128s-25.1-98.8-64-128h160c70.7 0 128 57.3 128 128s-57.3 128-128 128z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M160 400a144 144 0 1 1 0-288 144 144 0 1 1 0 288m0 16h256c88.4 0 160-71.6 160-160S504.4 96 416 96H160C71.6 96 0 167.6 0 256s71.6 160 160 160m69.8-16c53.4-25.9 90.2-80.7 90.2-144s-36.8-118.1-90.2-144H416c79.5 0 144 64.5 144 144s-64.5 144-144 144z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M192 128c-70.7 0-128 57.3-128 128s57.3 128 128 128h192c70.7 0 128-57.3 128-128s-57.3-128-128-128zm192-64c106 0 192 86 192 192s-86 192-192 192H192C86 448 0 362 0 256S86 64 192 64z"
                />
                <Path d="M192 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
