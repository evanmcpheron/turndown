import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const TentIcon: React.FC<
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
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M269.4 6c11.1-8 26.1-8 37.2 0l224 160c7.4 5.3 12.2 13.5 13.2 22.5l32 288c1 9-1.9 18.1-8 24.9s-14.7 10.7-23.8 10.7H435.8c-12.1 0-23.2-6.8-28.6-17.7L306.7 293.5c-1.7-3.4-5.1-5.5-8.8-5.5-5.5 0-9.9 4.4-9.9 9.9V480c0 17.7-14.3 32-32 32H32c-9.1 0-17.8-3.9-23.8-10.7s-9-15.8-8-24.9l32-288c1-9 5.8-17.2 13.2-22.5z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M274.4 4.2c8.2-5.7 19-5.7 27.3 0l219.8 151.7c13.5 9.3 22.2 24 23.9 40.2l26.7 254c3.5 33.1-22.4 61.9-55.7 61.9H59.5c-33.2 0-59.1-28.8-55.6-61.9l26.7-254c1.7-16.3 10.4-31 23.9-40.2zM516.5 464c4.7 0 8.5-4.1 8-8.8l-26.7-254c-.2-2.3-1.5-4.4-3.4-5.7L312 69.7v209.6L413.6 464zM264 69.7 81.7 195.4c-1.9 1.3-3.2 3.4-3.4 5.7l-26.7 254c-.5 4.7 3.2 8.8 8 8.8H264V69.6z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M278.9 2.8c5.5-3.8 12.7-3.8 18.2 0l220.2 151.9c11.3 7.8 18.7 20 20.4 33.6L571.4 458c3.6 28.6-18.8 54-47.6 54H52.2C23.4 512 1 486.7 4.6 458l33.7-269.8c1.7-13.6 9.1-25.8 20.4-33.6zM76.9 181c-3.8 2.6-6.2 6.7-6.8 11.2L36.4 462c-1.2 9.5 6.3 18 15.9 18H272V46.5zm328.5 299L304 288.4V480zm36.2 0h82.1c9.6 0 17.1-8.4 15.9-18l-33.7-269.8c-.6-4.5-3-8.6-6.8-11.2L304 46.5V220z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M283.3 1.5c2.8-2 6.6-2 9.4 0l221.1 160.1c8.7 6.3 14.6 15.9 16.1 26.6l40.7 278c3.5 24.1-15.2 45.8-39.6 45.8H45c-24.4 0-43.1-21.7-39.6-45.8l40.7-278c1.6-10.7 7.4-20.3 16.1-26.6zM71.6 174.6c-5.2 3.8-8.7 9.6-9.7 16l-40.7 278C19.2 483 30.4 496 45 496h235V23.7zm355 321.4L296 255.5V496zm18.2 0H531c14.6 0 25.9-13 23.7-27.5l-40.7-278c-.9-6.4-4.4-12.2-9.7-16L296 23.7V222z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M269.4 6c11.1-8 26.1-8 37.2 0l224 160c7.4 5.3 12.2 13.5 13.2 22.5l32 288c1 9-1.9 18.1-8 24.9s-14.7 10.7-23.8 10.7H435.8c-12.1 0-23.2-6.8-28.6-17.7L306.7 293.5c-1.7-3.4-5.1-5.5-8.8-5.5-5.5 0-9.9 4.4-9.9 9.9V480c0 17.7-14.3 32-32 32H32c-9.1 0-17.8-3.9-23.8-10.7s-9-15.8-8-24.9l32-288c1-9 5.8-17.2 13.2-22.5z"
                />
                <Path d="M435.8 512c-12.1 0-23.2-6.8-28.6-17.7L306.7 293.5c-1.7-3.4-5.1-5.5-8.8-5.5-5.5 0-9.9 4.4-9.9 9.9V480c0 17.7-14.3 32-32 32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
