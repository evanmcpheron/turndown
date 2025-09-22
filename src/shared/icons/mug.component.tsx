import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const MugIcon: React.FC<
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

                    d="M64 64c-17.7 0-32 14.3-32 32v256c0 53 43 96 96 96h192c53 0 96-43 96-96v-32h32c70.7 0 128-57.3 128-128S518.7 64 448 64H64m352 64h32c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32z"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M80 352c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V112H80zM32 96c0-17.7 14.3-32 32-32h384c70.7 0 128 57.3 128 128s-57.3 128-128 128h-32v32c0 53-43 96-96 96H128c-53 0-96-43-96-96zm384 176h32c44.2 0 80-35.8 80-80s-35.8-80-80-80h-32z"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M64 96v256c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V96H64m352 0v160h48c44.2 0 80-35.8 80-80s-35.8-80-80-80zm0 192v64c0 53-43 96-96 96H128c-53 0-96-43-96-96V96c0-17.7 14.3-32 32-32h400c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M64 80c-8.8 0-16 7.2-16 16v256c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80V80H64m352 208v64c0 53-43 96-96 96H128c-53 0-96-43-96-96V96c0-17.7 14.3-32 32-32h400c61.9 0 112 50.1 112 112s-50.1 112-112 112zm0-16h48c53 0 96-43 96-96s-43-96-96-96h-48z"
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
                    d="M416 320h32c70.7 0 128-57.3 128-128S518.7 64 448 64h-64c17.7 0 32 14.3 32 32v32h32c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32z"
                  />
                  <Path

                    d="M32 96c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v256c0 53-43 96-96 96H128c-53 0-96-43-96-96z"
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
