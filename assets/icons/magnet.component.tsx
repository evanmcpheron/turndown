import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const MagnetIcon: React.FC<
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

                    d="M0 160v96c0 123.7 100.3 224 224 224s224-100.3 224-224v-96H320v96c0 53-43 96-96 96s-96-43-96-96v-96zm0-32h128V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64zm320 0h128V64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32z"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 448 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M48 256c0 97.2 78.8 176 176 176s176-78.8 176-176v-64h-64v64c0 61.9-50.1 112-112 112s-112-50.1-112-112v-64H48zM0 88c0-30.9 25.1-56 56-56h48c30.9 0 56 25.1 56 56v168c0 35.3 28.7 64 64 64s64-28.7 64-64V88c0-30.9 25.1-56 56-56h48c30.9 0 56 25.1 56 56v168c0 123.7-100.3 224-224 224S0 379.7 0 256z"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 448 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M48 64c-8.8 0-16 7.2-16 16v48h80V80c0-8.8-7.2-16-16-16zM32 256c0 106 86 192 192 192s192-86 192-192v-96h-80v96c0 61.9-50.1 112-112 112s-112-50.1-112-112v-96H32zm384-128V80c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v48zM0 80c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48v176c0 44.2 35.8 80 80 80s80-35.8 80-80V80c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48v176c0 123.7-100.3 224-224 224S0 379.7 0 256z"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 448 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M40 48c-13.3 0-24 10.7-24 24v72h112V72c0-13.3-10.7-24-24-24zM16 256c0 114.9 93.1 208 208 208s208-93.1 208-208v-96H320v96c0 53-43 96-96 96s-96-43-96-96v-96H16zm416-112V72c0-13.3-10.7-24-24-24h-64c-13.3 0-24 10.7-24 24v72zM0 72c0-22.1 17.9-40 40-40h64c22.1 0 40 17.9 40 40v184c0 44.2 35.8 80 80 80s80-35.8 80-80V72c0-22.1 17.9-40 40-40h64c22.1 0 40 17.9 40 40v184c0 123.7-100.3 224-224 224S0 379.7 0 256z"
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
                    d="M0 160h128V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64zm320 0h128V64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32z"
                  />
                  <Path

                    d="M0 160v96c0 123.7 100.3 224 224 224s224-100.3 224-224v-96H320v96c0 53-43 96-96 96s-96-43-96-96v-96z"
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
