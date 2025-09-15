import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const PipeIcon: React.FC<
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
                <Svg viewBox="0 0 64 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M32 0c17.7 0 32 14.3 32 32v448c0 17.7-14.3 32-32 32S0 497.7 0 480V32C0 14.3 14.3 0 32 0"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 64 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M32 0c13.3 0 24 10.7 24 24v464c0 13.3-10.7 24-24 24S8 501.3 8 488V24C8 10.7 18.7 0 32 0"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 64 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M32 0c8.8 0 16 7.2 16 16v480c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.8 7.2-16 16-16"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 64 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M32 0c4.4 0 8 3.6 8 8v496c0 4.4-3.6 8-8 8s-8-3.6-8-8V8c0-4.4 3.6-8 8-8"
                  />
                </Svg >
              );

            case "duotone":
              return (
  <Svg viewBox="0 0 64 512"

    fill={colors[colorName || "text"]} 
    <Path
      fill={colors[colorName || "text"]}
      opacity={opacity || 0.5}
      d="M32 0c17.7 0 32 14.3 32 32v448c0 17.7-14.3 32-32 32S0 497.7 0 480V32C0 14.3 14.3 0 32 0"
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
