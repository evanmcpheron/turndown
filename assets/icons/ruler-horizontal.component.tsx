import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const RulerHorizontalIcon: React.FC<
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

                    d="M0 336c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H48c-26.5 0-48 21.5-48 48z"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M48 320c0 8.8 7.2 16 16 16h512c8.8 0 16-7.2 16-16V192c0-8.8-7.2-16-16-16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H64c-8.8 0-16 7.2-16 16zm16 64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64z"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M32 320c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32h-48v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64H64c-17.7 0-32 14.3-32 32zm32 64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64z"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M16 320c0 26.5 21.5 48 48 48h512c26.5 0 48-21.5 48-48V192c0-26.5-21.5-48-48-48h-56v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80h-80v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80h-80v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80h-80v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80h-80v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80H64c-26.5 0-48 21.5-48 48zm496-192h64c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h448"
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
                    d="M0 336c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-64v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H48c-26.5 0-48 21.5-48 48z"
                  />
                  <Path

                    d="M144 208v-80h-32v80c0 8.8 7.2 16 16 16s16-7.2 16-16m96-80h-32v80c0 8.8 7.2 16 16 16s16-7.2 16-16zm96 80v-80h-32v80c0 8.8 7.2 16 16 16s16-7.2 16-16m96-80h-32v80c0 8.8 7.2 16 16 16s16-7.2 16-16zm96 0h-32v80c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
