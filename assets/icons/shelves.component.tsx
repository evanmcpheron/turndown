import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ShelvesIcon: React.FC<
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

                    d="M32 0c17.7 0 32 14.3 32 32v128h512V32c0-17.7 14.3-32 32-32s32 14.3 32 32v448c0 17.7-14.3 32-32 32s-32-14.3-32-32H64c0 17.7-14.3 32-32 32S0 497.7 0 480V32C0 14.3 14.3 0 32 0m32 416h512V224H64zM352 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zM128 256h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m160 0h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M24 0c13.3 0 24 10.7 24 24v136h544V24c0-13.3 10.7-24 24-24s24 10.7 24 24v464c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24H48v24c0 13.3-10.7 24-24 24S0 501.3 0 488V24C0 10.7 10.7 0 24 0m24 416h544V208H48zM352 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zM128 256h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m160 0h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M16 0c8.8 0 16 7.2 16 16v144h576V16c0-8.8 7.2-16 16-16s16 7.2 16 16v480c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V16C0 7.2 7.2 0 16 0m16 416h576V192H32zM448 32h-64v64h64zM384 0h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V32c0-17.7 14.3-32 32-32M128 288v64h64v-64zm-32 0c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm192 0v64h64v-64zm-32 0c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32z"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M8 0c4.4 0 8 3.6 8 8v168h608V8c0-4.4 3.6-8 8-8s8 3.6 8 8v496c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56H16v56c0 4.4-3.6 8-8 8s-8-3.6-8-8V8c0-4.4 3.6-8 8-8m8 432h608V192H16zM448 16h-64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V32c0-8.8-7.2-16-16-16M384 0h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V32c0-17.7 14.3-32 32-32M128 272c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zm192-16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32z"
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
                    d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32h512c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v128H64zm0 192h512v192H64z"
                  />
                  <Path

                    d="M384 0c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zM96 288v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32m160 0v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32"
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
