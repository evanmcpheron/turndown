import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const OctagonMinusIcon: React.FC<
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
                <Svg viewBox="0 0 512 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M140.6 21.2C154.1 7.7 172.4.1 191.5.1h129c19.1 0 37.4 7.6 50.9 21.1l119.4 119.4c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.98 71.98 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4A71.98 71.98 0 0 1 .1 320.5v-129c0-19.1 7.6-37.4 21.1-50.9zM184 232c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 512 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M191.5 48.1c-6.4 0-12.5 2.5-17 7L55.1 174.5c-4.5 4.5-7 10.6-7 17v129c0 6.4 2.5 12.5 7 17l-33.9 33.9A71.98 71.98 0 0 1 .1 320.5v-129c0-19.1 7.6-37.4 21.1-50.9L140.6 21.2C154.1 7.7 172.4.1 191.5.1h129c19.1 0 37.4 7.6 50.9 21.1l119.4 119.4c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.98 71.98 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4l33.9-33.9 119.4 119.4c4.5 4.5 10.6 7 17 7h129c6.4 0 12.5-2.5 17-7l119.4-119.4c4.5-4.5 7-10.6 7-17v-129c0-6.4-2.5-12.5-7-17L337.5 55.1c-4.5-4.5-10.6-7-17-7zM184 232h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 512 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M191.5 32.1c-10.6 0-20.8 4.2-28.3 11.7L43.8 163.2c-7.5 7.5-11.7 17.7-11.7 28.3v129c0 10.6 4.2 20.8 11.7 28.3l-22.6 22.6A71.98 71.98 0 0 1 .1 320.5v-129c0-19.1 7.6-37.4 21.1-50.9L140.6 21.2C154.1 7.7 172.4.1 191.5.1h129c19.1 0 37.4 7.6 50.9 21.1l119.4 119.4c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.98 71.98 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4l22.6-22.6 119.4 119.4c7.5 7.5 17.7 11.7 28.3 11.7h129c10.6 0 20.8-4.2 28.3-11.7l119.4-119.4c7.5-7.5 11.7-17.7 11.7-28.3v-129c0-10.6-4.2-20.8-11.7-28.3L348.8 43.8c-7.5-7.5-17.7-11.7-28.3-11.7zM160 240h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 512 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M191.5 16.1c-14.9 0-29.1 5.9-39.6 16.4L32.5 151.9a56.1 56.1 0 0 0-16.4 39.6v129c0 14.9 5.9 29.1 16.4 39.6l119.4 119.4c10.5 10.5 24.7 16.4 39.6 16.4h129c14.9 0 29.1-5.9 39.6-16.4l119.4-119.4c10.5-10.5 16.4-24.7 16.4-39.6v-129c0-14.9-5.9-29.1-16.4-39.6L360.1 32.5a56.1 56.1 0 0 0-39.6-16.4zm-50.9 5.1C154.1 7.7 172.4.1 191.5.1h129c19.1 0 37.4 7.6 50.9 21.1l119.4 119.4c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.98 71.98 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4A71.98 71.98 0 0 1 .1 320.5v-129c0-19.1 7.6-37.4 21.1-50.9zM160 248h192c4.4 0 8 3.6 8 8s-3.6 8-8 8H160c-4.4 0-8-3.6-8-8s3.6-8 8-8"
                  />
                </Svg >
              );

            case "duotone":
              return (
                <Svg viewBox="0 0 512 512"

                  fill={colors[colorName || "text"]} >
                  <Path
                    fill={colors[colorName || "text"]}
                    opacity={opacity || 0.5}
                    d="M140.6 21.2C154.1 7.7 172.4.1 191.5.1h129c19.1 0 37.4 7.6 50.9 21.1l119.4 119.4c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.98 71.98 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.2 371.4A71.98 71.98 0 0 1 .1 320.5v-129c0-19.1 7.6-37.4 21.1-50.9zM184 232c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                  />
                  <Path

                    d="M160 256c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24"
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
