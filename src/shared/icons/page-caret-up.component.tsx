import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const PageCaretUpIcon: React.FC<
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

                    d="M320 512c35.3 0 64-28.7 64-64V138.5c0-17-6.7-33.3-18.7-45.3l-74.6-74.5C278.7 6.7 262.5 0 245.5 0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64zM192 192c4.5 0 8.8 1.9 11.8 5.2l75.7 82.6c14.1 15.4 3.2 40.2-17.7 40.2H122.2c-20.9 0-31.8-24.8-17.7-40.2l75.7-82.6c3-3.3 7.3-5.2 11.8-5.2"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M48 448c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V138.5c0-4.2-1.7-8.3-4.7-11.3l-74.5-74.5c-3-3-7.1-4.7-11.3-4.7H64c-8.8 0-16 7.2-16 16zm272 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h181.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64M192 192c4.5 0 8.8 1.9 11.8 5.2l75.7 82.6c14.1 15.4 3.2 40.2-17.7 40.2H122.2c-20.9 0-31.8-24.8-17.7-40.2l75.7-82.6c3-3.3 7.3-5.2 11.8-5.2"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M352 448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h181.5c8.5 0 16.6 3.4 22.6 9.4l74.5 74.5c6 6 9.4 14.1 9.4 22.6zM64 512h256c35.3 0 64-28.7 64-64V138.5c0-17-6.7-33.3-18.7-45.3l-74.6-74.5C278.7 6.7 262.5 0 245.5 0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64m139.8-314.8c-3-3.3-7.3-5.2-11.8-5.2s-8.8 1.9-11.8 5.2l-75.7 82.6c-14.1 15.4-3.2 40.2 17.7 40.2h139.6c20.9 0 31.8-24.8 17.7-40.2zM192 231.7l51.6 56.3H140.4z"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M320 496H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h181.5c12.7 0 24.9 5.1 33.9 14.1l74.5 74.5c9 9 14.1 21.2 14.1 33.9V448c0 26.5-21.5 48-48 48M64 512h256c35.3 0 64-28.7 64-64V138.5c0-17-6.7-33.3-18.7-45.3l-74.6-74.5C278.7 6.7 262.5 0 245.5 0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64m52.3-221.4L192 208l75.7 82.6c4.7 5.1 1.1 13.4-5.9 13.4H122.2c-7 0-10.6-8.3-5.9-13.4m87.5-93.4c-3-3.3-7.3-5.2-11.8-5.2s-8.8 1.9-11.8 5.2l-75.7 82.6c-14.1 15.4-3.2 40.2 17.7 40.2h139.6c20.9 0 31.8-24.8 17.7-40.2z"
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
      d="M320 512c35.3 0 64-28.7 64-64V138.5c0-17-6.7-33.3-18.7-45.3l-74.6-74.5C278.7 6.7 262.5 0 245.5 0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64zM192 192c4.5 0 8.8 1.9 11.8 5.2l75.7 82.6c14.1 15.4 3.2 40.2-17.7 40.2H122.2c-20.9 0-31.8-24.8-17.7-40.2l75.7-82.6c3-3.3 7.3-5.2 11.8-5.2"
    />
    <Path

      d="M203.8 197.2c-3-3.3-7.3-5.2-11.8-5.2s-8.8 1.9-11.8 5.2l-75.7 82.6c-14.1 15.4-3.2 40.2 17.7 40.2h139.6c20.9 0 31.8-24.8 17.7-40.2z"
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
