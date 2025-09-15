import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ObjectsAlignCenterHorizontalIcon: React.FC<
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

                    d="M256 0c-13.3 0-24 10.7-24 24v40H80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h152v64h-88c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h88v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h88c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-88v-64h152c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H280V24c0-13.3-10.7-24-24-24"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 512 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M432 176H80v-64h352zm48-64c0-26.5-21.5-48-48-48H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h152v64h-88c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h88v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h88c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-88v-64h152c26.5 0 48-21.5 48-48zM368 400H144v-64h224z"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 512 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M448 176c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16zm-176 48h160c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H272V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160v64h-96c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h96v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h96c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-96zm-16 96h112c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16z"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 512 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H80c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h168v64H144c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h104v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h104c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H264v-64h168c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H264zm-8 296h112c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32zm0-96H80c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h352c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32z"
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
                    d="M80 64c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zm64 224c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48z"
                  />
                  <Path

                    d="M232 24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h-48zm0 264v-64h48v64zm0 160h48v40c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
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
