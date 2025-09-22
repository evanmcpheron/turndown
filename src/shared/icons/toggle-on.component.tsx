import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const ToggleOnIcon: React.FC<
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
                <Path d="M192 64C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M192 112c-79.5 0-144 64.5-144 144s64.5 144 144 144h192c79.5 0 144-64.5 144-144s-64.5-144-144-144zM0 256C0 150 86 64 192 64h192c106 0 192 86 192 192s-86 192-192 192H192C86 448 0 362 0 256m384-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M160 128c-70.7 0-128 57.3-128 128s57.3 128 128 128h256c70.7 0 128-57.3 128-128s-57.3-128-128-128zM0 256C0 167.6 71.6 96 160 96h256c88.4 0 160 71.6 160 160s-71.6 160-160 160H160C71.6 416 0 344.4 0 256m480 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-160 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path d="M160 112c-79.5 0-144 64.5-144 144s64.5 144 144 144h256c79.5 0 144-64.5 144-144s-64.5-144-144-144zM0 256C0 167.6 71.6 96 160 96h256c88.4 0 160 71.6 160 160s-71.6 160-160 160H160C71.6 416 0 344.4 0 256m496 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-176 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M192 64C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
                />
                <Path d="M288 256a96 96 0 1 1 192 0 96 96 0 1 1-192 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
