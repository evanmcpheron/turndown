import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ShareNodesIcon: React.FC<
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
                <Svg viewBox="0 0 448 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M352 224c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9.7-7.8.7-11.9s-.2-8-.7-11.9l94.1-47c17.2 16.7 40.7 26.9 66.6 26.9"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 448 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M448 128c0 53-43 96-96 96-28.9 0-54.8-12.8-72.4-33l-89.7 44.9q2.1 9.75 2.1 20.1c0 10.35-.7 13.6-2.1 20.1l89.7 44.9c17.6-20.2 43.5-33 72.4-33 53 0 96 43 96 96s-43 96-96 96-96-43-96-96q0-10.35 2.1-20.1L168.4 319c-17.6 20.2-43.5 33-72.4 33-53 0-96-43-96-96s43-96 96-96c28.9 0 54.8 12.8 72.4 33l89.7-44.9q-2.1-9.75-2.1-20.1c0-53 43-96 96-96s96 43 96 96M96 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96m304-176a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 448 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M448 112c0 44.2-35.8 80-80 80-22.9 0-43.6-9.6-58.1-25l-151 75.5c.8 4.4 1.1 8.9 1.1 13.5s-.4 9.1-1.1 13.5l151 75.5c14.6-15.4 35.2-25 58.1-25 44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80c0-9.7 1.7-19 4.9-27.7l-145.7-72.8c-14.3 22-39 36.5-67.2 36.5-44.2 0-80-35.8-80-80s35.8-80 80-80c28.2 0 52.9 14.5 67.2 36.5l145.7-72.9c-3.2-8.6-4.9-17.9-4.9-27.7 0-44.2 35.8-80 80-80s80 35.8 80 80zM80 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96m336-192a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48 336a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 448 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M448 112c0 44.2-35.8 80-80 80-25.9 0-48.9-12.3-63.5-31.3l-147.4 73.7c1.9 6.9 2.9 14.1 2.9 21.6s-1 14.7-2.9 21.6l147.5 73.7c14.6-19 37.6-31.3 63.5-31.3 44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80c0-12.6 2.9-24.5 8.1-35l-145-72.5C137.9 318.3 111 336 80 336c-44.2 0-80-35.8-80-80s35.8-80 80-80c31 0 57.9 17.7 71.2 43.5L296.1 147c-5.2-10.6-8.1-22.5-8.1-35 0-44.2 35.8-80 80-80s80 35.8 80 80M80 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128m352-208a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-64 352a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
                  />
                </Svg >
              );

            case "duotone":
              return (
                <Svg viewBox="0 0 448 512"

                  fill={colors[colorName || "text"]}  >
                  <Path
                    fill={colors[colorName || "text"]}
                    opacity={opacity || 0.5}
                    d="M285.4 197.1c-15.4-14.9-25.9-34.9-28.6-57.2l-94.1 47c15.4 14.9 25.9 34.9 28.6 57.2zm-94.1 70.8c-2.8 22.4-13.2 42.4-28.6 57.2l94.1 47c2.8-22.4 13.2-42.4 28.6-57.2z"
                  />
                  <Path

                    d="M256 128a96 96 0 1 1 192 0 96 96 0 1 1-192 0M0 256a96 96 0 1 1 192 0 96 96 0 1 1-192 0m352 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
                  />
                </Svg >
              );

            default:
              return null;
          }
        })()}
      </StyledIcon >
    );
  };
