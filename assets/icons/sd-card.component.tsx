import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SdCardIcon: React.FC<
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
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M320 0H141.3C124.3 0 108 6.7 96 18.7L18.7 96C6.7 108 0 124.3 0 141.3V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64M160 88v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24m80 0v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24m80 0v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M336 64v384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V154.5c0-4.2 1.7-8.3 4.7-11.3l90.5-90.5c3-3 7.1-4.7 11.3-4.7H320c8.8 0 16 7.2 16 16m48 384V64c0-35.3-28.7-64-64-64H154.5c-17 0-33.3 6.7-45.3 18.7l-90.5 90.6C6.7 121.3 0 137.5 0 154.5V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64M176 96c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16z"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M352 64v384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V154.5c0-8.5 3.4-16.6 9.4-22.6l90.5-90.5c6-6 14.1-9.4 22.6-9.4H320c17.7 0 32 14.3 32 32m32 384V64c0-35.3-28.7-64-64-64H154.5c-17 0-33.3 6.7-45.3 18.7l-90.5 90.6C6.7 121.3 0 137.5 0 154.5V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64M192 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16z"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M368 64v384c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V154.5c0-12.7 5.1-24.9 14.1-33.9l90.5-90.5c9-9 21.2-14.1 33.9-14.1H320c26.5 0 48 21.5 48 48m16 384V64c0-35.3-28.7-64-64-64H154.5c-17 0-33.3 6.7-45.3 18.7l-90.5 90.6C6.7 121.3 0 137.5 0 154.5V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64M176 72c0-4.4-3.6-8-8-8s-8 3.6-8 8v80c0 4.4 3.6 8 8 8s8-3.6 8-8zm64 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v80c0 4.4 3.6 8 8 8s8-3.6 8-8zm64 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v80c0 4.4 3.6 8 8 8s8-3.6 8-8z"
                  />
                </Svg >
              );

            case "duotone":
              return (
  <Svg viewBox="0 0 384 512"

    fill={colors[colorName || "text"]} 
    <Path
      fill={colors[colorName || "text"]}
      opacity={opacity || 0.5}
      d="M160 88c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24zm80 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24zm80 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24z"
    />
    <Path

      d="M320 0H141.3C124.3 0 108 6.7 96 18.7L18.7 96C6.7 108 0 124.3 0 141.3V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64M160 88v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24m80 0v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24m80 0v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24s24 10.7 24 24"
    />
  </Svg >
    );

          default:
return null;
        }
      }) ()}
    </StyledIcon >
  );
};
