import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SignPostIcon: React.FC<
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

                    d="M224 32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h129c9.5 0 18.5 4.2 24.6 11.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5H80c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h144zm64 448c0 17.7-14.3 32-32 32s-32-14.3-32-32V288h64z"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 512 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M232 24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h137c9.5 0 18.5 4.2 24.6 11.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5H280V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V256H80c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h152zm217.5 136-40-48H80v96h329.5z"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 512 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M240 16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h145c9.5 0 18.5 4.2 24.6 11.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5H272V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V256H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h176zm230.3 144L417 96H64v128h353z"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 512 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M248 8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h153c9.5 0 18.5 4.2 24.6 11.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5H264V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V256H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h184zm181.3 77.8c-3-3.6-7.5-5.8-12.3-5.8H64c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h353c4.7 0 9.3-2.1 12.3-5.8l61.9-74.2z"
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
                    d="M256 0c-17.7 0-32 14.3-32 32v32h64V32c0-17.7-14.3-32-32-32m32 480V256h-64v224c0 17.7 14.3 32 32 32s32-14.3 32-32"
                  />
                  <Path

                    d="m441.6 75.5 61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h353c9.5 0 18.5 4.2 24.6 11.5"
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
