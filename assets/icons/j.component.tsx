import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const JIcon: React.FC<
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
                <Svg viewBox="0 0 320 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M288 32c17.7 0 32 14.3 32 32v256c0 88.4-71.6 160-160 160S0 408.4 0 320v-32c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 53 43 96 96 96s96-43 96-96V64c0-17.7 14.3-32 32-32"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 320 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M296 32c13.3 0 24 10.7 24 24v264c0 88.4-71.6 160-160 160S0 408.4 0 320v-40c0-13.3 10.7-24 24-24s24 10.7 24 24v40c0 61.9 50.1 112 112 112s112-50.1 112-112V56c0-13.3 10.7-24 24-24"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 320 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M304 32c8.8 0 16 7.2 16 16v272c0 88.4-71.6 160-160 160S0 408.4 0 320v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48c0 70.7 57.3 128 128 128s128-57.3 128-128V48c0-8.8 7.2-16 16-16"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 320 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M312 32c4.4 0 8 3.6 8 8v280c0 88.4-71.6 160-160 160S0 408.4 0 320v-56c0-4.4 3.6-8 8-8s8 3.6 8 8v56c0 79.5 64.5 144 144 144s144-64.5 144-144V40c0-4.4 3.6-8 8-8"
                  />
                </Svg >
              );

            case "duotone":
              return (
  <Svg viewBox="0 0 320 512"

    fill={colors[colorName || "text"]} 
    <Path
      fill={colors[colorName || "text"]}
      opacity={opacity || 0.5}
      d="M288 32c17.7 0 32 14.3 32 32v256c0 88.4-71.6 160-160 160S0 408.4 0 320v-32c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 53 43 96 96 96s96-43 96-96V64c0-17.7 14.3-32 32-32"
    />
    <Path d="" />
  </Svg >
    );

          default:
return null;
        }
      }) ()}
    </StyledIcon >
  );
};
