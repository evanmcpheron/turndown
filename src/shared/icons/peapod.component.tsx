import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const PeapodIcon: React.FC<
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
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M464 0h-48C186.2 0 0 186.2 0 416v48c0 26.5 21.5 48 48 48h48c229.8 0 416-186.2 416-416V48c0-26.5-21.5-48-48-48M256 200a56 56 0 1 1 0 112 56 56 0 1 1 0-112M88 368a56 56 0 1 1 112 0 56 56 0 1 1-112 0M368 88a56 56 0 1 1 0 112 56 56 0 1 1 0-112" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M416 48C212.8 48 48 212.8 48 416v48h48c203.2 0 368-164.8 368-368V48zm0-48h48c26.5 0 48 21.5 48 48v48c0 229.8-186.2 416-416 416H48c-26.5 0-48-21.5-48-48v-48C0 186.2 186.2 0 416 0M256 200a56 56 0 1 1 0 112 56 56 0 1 1 0-112M88 368a56 56 0 1 1 112 0 56 56 0 1 1-112 0M368 88a56 56 0 1 1 0 112 56 56 0 1 1 0-112" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M416 32C203.9 32 32 203.9 32 416v48c0 8.8 7.2 16 16 16h48c212.1 0 384-171.9 384-384V48c0-8.8-7.2-16-16-16zm0-32h48c26.5 0 48 21.5 48 48v48c0 229.8-186.2 416-416 416H48c-26.5 0-48-21.5-48-48v-48C0 186.2 186.2 0 416 0m-48 112a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64 32a64 64 0 1 1-128 0 64 64 0 1 1 128 0M224 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128m-144 48a32 32 0 1 0 64 0 32 32 0 1 0-64 0m32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M416 16C195.1 16 16 195.1 16 416v48c0 17.7 14.3 32 32 32h48c220.9 0 400-179.1 400-400V48c0-17.7-14.3-32-32-32zm0-16h48c26.5 0 48 21.5 48 48v48c0 229.8-186.2 416-416 416H48c-26.5 0-48-21.5-48-48v-48C0 186.2 186.2 0 416 0M304 144a64 64 0 1 1 128 0 64 64 0 1 1-128 0m64 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-112 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128m48 64a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-160 48a64 64 0 1 1 0 128 64 64 0 1 1 0-128m48 64a48 48 0 1 0-96 0 48 48 0 1 0 96 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M368 200a56 56 0 1 0 0-112 56 56 0 1 0 0 112m-56 56a56 56 0 1 0-112 0 56 56 0 1 0 112 0M200 368a56 56 0 1 0-112 0 56 56 0 1 0 112 0"
                />
                <Path d="M464 0h-48C186.2 0 0 186.2 0 416v48c0 26.5 21.5 48 48 48h48c229.8 0 416-186.2 416-416V48c0-26.5-21.5-48-48-48M256 200a56 56 0 1 1 0 112 56 56 0 1 1 0-112M88 368a56 56 0 1 1 112 0 56 56 0 1 1-112 0M368 88a56 56 0 1 1 0 112 56 56 0 1 1 0-112" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
