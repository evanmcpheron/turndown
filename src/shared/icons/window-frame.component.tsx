import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const WindowFrameIcon: React.FC<
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
                <Path d="M32 256V64C32 28.7 60.7 0 96 0h320c35.3 0 64 28.7 64 64v384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm384 32H280v160h136zm-184 0H96v160h136zm48-64h136V64H280zM232 64H96v160h136z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M80 464h152V272H80zm-48 0V64C32 28.7 60.7 0 96 0h320c35.3 0 64 28.7 64 64v400h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm400 0V272H280v192zM80 224h152V48H96c-8.8 0-16 7.2-16 16zm200 0h152V64c0-8.8-7.2-16-16-16H280z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M240 288v192H64V288zm32 192V288h176v192zm208 0V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v416H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-32-224H272V32h144c17.7 0 32 14.3 32 32zM96 32h144v224H64V64c0-17.7 14.3-32 32-32" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M248 256v240H48V256zm16 240V256h200v240zm216 0V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v432H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h496c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-16-256H264V16h152c26.5 0 48 21.5 48 48zM96 16h152v224H48V64c0-26.5 21.5-48 48-48" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M232 288v160H96V288zM96 224V64h136v160zM280 64h136v160H280zm136 224v160H280V288z"
                />
                <Path d="M32 256V64C32 28.7 60.7 0 96 0h320c35.3 0 64 28.7 64 64v384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm384 32H280v160h136zm-184 0H96v160h136zm48-64h136V64H280zM232 64H96v160h136z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
