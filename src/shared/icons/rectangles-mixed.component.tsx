import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const RectanglesMixedIcon: React.FC<
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
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M0 80c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm384 0c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48zM112 304h176c26.5 0 48 21.5 48 48v80c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48v-80c0-26.5 21.5-48 48-48"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M256 80c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v96c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm448 48c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zm-64-48c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h64c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM128 352h144c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16m-64 16v48c0 35.3 28.7 64 64 64h144c35.3 0 64-28.7 64-64v-48c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M272 64c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM48 32C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm480 32c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zm-96-32c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM112 336h176c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16v-80c0-8.8 7.2-16 16-16m-48 16v80c0 26.5 21.5 48 48 48h176c26.5 0 48-21.5 48-48v-80c0-26.5-21.5-48-48-48H112c-26.5 0-48 21.5-48 48"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M272 48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32zM48 32C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm480 16c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32zm-96-16c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM112 320h176c17.7 0 32 14.3 32 32v80c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32v-80c0-17.7 14.3-32 32-32m-48 32v80c0 26.5 21.5 48 48 48h176c26.5 0 48-21.5 48-48v-80c0-26.5-21.5-48-48-48H112c-26.5 0-48 21.5-48 48"
                  />
                </Svg >
              );

            case "duotone":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]} >
                  <Path
                    fill={colors[colorName || "text"]}
                    opacity={opacity || 0.5}
                    d="M432 32c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM112 304c-26.5 0-48 21.5-48 48v80c0 26.5 21.5 48 48 48h176c26.5 0 48-21.5 48-48v-80c0-26.5-21.5-48-48-48z"
                  />
                  <Path

                    d="M0 80c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"
                  />
                </Svg >
              );

            default:
              return null;
          }
        })()}
      </StyledIcon >
    );
  };</Svg >
