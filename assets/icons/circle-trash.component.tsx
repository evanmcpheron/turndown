import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleTrashIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-384h41.4l11.3-11.3c3-3 7.1-4.7 11.3-4.7h64c4.2 0 8.3 1.7 11.3 4.7l11.3 11.3H352c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h192l-13.6 162.7c-1.4 16.6-15.2 29.3-31.9 29.3H205.4c-16.6 0-30.5-12.8-31.9-29.3z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m160-128h41.4l11.3-11.3c3-3 7.1-4.7 11.3-4.7h64c4.2 0 8.3 1.7 11.3 4.7l11.3 11.3H352c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h192l-13.6 162.7c-1.4 16.6-15.2 29.3-31.9 29.3H205.4c-16.6 0-30.5-12.8-31.9-29.3z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m160-112h41.4l11.3-11.3c3-3 7.1-4.7 11.3-4.7h64c4.2 0 8.3 1.7 11.3 4.7l11.3 11.3H352c8.8 0 16 7.2 16 16s-7.2 16-16 16h-2.1L338 354.1c-1.1 16.8-15.1 29.9-31.9 29.9H205.9c-16.8 0-30.8-13.1-31.9-29.9L162.1 176H160c-8.8 0-16-7.2-16-16s7.2-16 16-16m157.8 32H194.2l11.7 176h100.2z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m160-96h36l21.6-28.8c1.5-2 3.9-3.2 6.4-3.2h64c2.5 0 4.9 1.2 6.4 3.2L316 160h36c4.4 0 8 3.6 8 8s-3.6 8-8 8h-9.1l-12.8 178.3C328.9 371 315 384 298.2 384h-84.4c-16.8 0-30.7-13-31.9-29.7L169.1 176H160c-4.4 0-8-3.6-8-8s3.6-8 8-8m56 0h80l-12-16h-56zm110.8 16H185.2l12.7 177.1c.6 8.4 7.6 14.9 16 14.9h84.4c8.4 0 15.4-6.5 16-14.9z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-384h41.4l11.3-11.3c3-3 7.1-4.7 11.3-4.7h64c4.2 0 8.3 1.7 11.3 4.7l11.3 11.3H352c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h192l-13.6 162.7c-1.4 16.6-15.2 29.3-31.9 29.3H205.4c-16.6 0-30.5-12.8-31.9-29.3z"
                />
                <Path d="M212.7 116.7 201.4 128H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16h-41.4l-11.3-11.3c-3-3-7.1-4.7-11.3-4.7h-64c-4.2 0-8.3 1.7-11.3 4.7M160 192l13.6 162.7c1.4 16.6 15.2 29.3 31.9 29.3h101.1c16.6 0 30.5-12.8 31.9-29.3L352 192z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
