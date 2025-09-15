import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const OptionIcon: React.FC<
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
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M448 448c-9.7 0-18.9-4.4-25-12L176.6 128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h160c9.7 0 18.9 4.4 25 12l246.4 308H608c17.7 0 32 14.3 32 32s-14.3 32-32 32zm0-320c-17.7 0-32-14.3-32-32s14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M172.1 120.4c-4.6-5.3-11.2-8.4-18.2-8.4H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h129.9c21 0 41 9.2 54.7 25.1l259.3 302.5c4.6 5.3 11.2 8.4 18.2 8.4H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H486.1c-21 0-41-9.2-54.7-25.1zM616 64c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M178 107.7c-6.1-7.4-15.2-11.7-24.8-11.7H16C7.2 96 0 88.8 0 80s7.2-16 16-16h137.3c19.2 0 37.4 8.6 49.5 23.5L462 404.3c6.1 7.4 15.2 11.7 24.8 11.7H624c8.8 0 16 7.2 16 16s-7.2 16-16 16H486.7c-19.2 0-37.4-8.6-49.5-23.5zM624 64c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M463.8 417.5c7.6 9.2 18.9 14.5 30.8 14.5H632c4.4 0 8 3.6 8 8s-3.6 8-8 8H494.6c-16.7 0-32.5-7.5-43.2-20.3L176.2 94.5c-7.6-9.2-18.9-14.5-30.8-14.5H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h137.4c16.7 0 32.5 7.5 43.2 20.3zM424 80c-4.4 0-8-3.6-8-8s3.6-8 8-8h208c4.4 0 8 3.6 8 8s-3.6 8-8 8z"
                  />
                </Svg >
              );

            case "duotone":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]} >
                  <Path
                    fill={colors[colorName || "text"]}
                    opacity={opacity || 0.5}
                    d="M416 96c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H448c-17.7 0-32 14.3-32 32"
                  />
                  <Path

                    d="M423 436c6.1 7.6 15.3 12 25 12h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H463.4L217 76c-6.1-7.6-15.3-12-25-12H32C14.3 64 0 78.3 0 96s14.3 32 32 32h144.6z"
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
