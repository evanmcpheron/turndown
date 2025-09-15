import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const Circle4Icon: React.FC<
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
                <Path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m223.6-126.8c-12.6-4.2-26.2 2.6-30.4 15.2l-48 144c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10h104v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-70.7l37.5-112.4c4.2-12.6-2.6-26.2-15.2-30.4" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m223.6-126.8c12.6 4.2 19.4 17.8 15.2 30.4L201.3 272H272v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40H168c-7.7 0-15-3.7-19.5-10s-5.7-14.3-3.3-21.6l48-144c4.2-12.6 17.8-19.4 30.4-15.2" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m229.9-126.9c8.2 3.3 12.2 12.6 8.9 20.8L183.6 288H288v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H160c-5.3 0-10.3-2.6-13.2-7s-3.6-10-1.6-14.9l64-160c3.3-8.2 12.6-12.2 20.8-8.9z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m235-127.4c4.1 1.7 6 6.3 4.4 10.4l-67.5 165H304V200c0-4.4 3.6-8 8-8s8 3.6 8 8v104h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56H160c-2.7 0-5.2-1.3-6.6-3.5s-1.8-5-.8-7.5l72-176c1.7-4.1 6.3-6 10.4-4.4" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m223.6-126.8c-12.6-4.2-26.2 2.6-30.4 15.2l-48 144c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10h104v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-70.7l37.5-112.4c4.2-12.6-2.6-26.2-15.2-30.4"
                />
                <Path d="M238.8 159.6c4.2-12.6-2.6-26.2-15.2-30.4s-26.2 2.6-30.4 15.2l-48 144c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10h104v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-70.7z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
