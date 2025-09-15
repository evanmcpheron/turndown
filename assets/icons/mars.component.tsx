import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const MarsIcon: React.FC<
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

                    d="M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8h112c13.3 0 24 10.7 24 24v112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4-52.6 52.6c19.5 28.4 31 62.7 31 99.8 0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2M176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 448 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h54.1l-83.7 83.7C252.8 141.3 215.9 128 176 128 78.8 128 0 206.8 0 304s78.8 176 176 176 176-78.8 176-176c0-39.9-13.3-76.8-35.7-106.3l83.7-83.8V168c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24zM48 304a128 128 0 1 1 256 0 128 128 0 1 1-256 0"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 448 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M304 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h89.4L288.6 168.7C258.1 143.3 218.8 128 176 128 78.8 128 0 206.8 0 304s78.8 176 176 176 176-78.8 176-176c0-42.8-15.3-82.1-40.7-112.6L416 86.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zM32 304a144 144 0 1 1 288 0 144 144 0 1 1-288 0"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 448 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M288 40c0 4.4 3.6 8 8 8h124.7l-126 126c-31.3-28.6-72.9-46-118.7-46C78.8 128 0 206.8 0 304s78.8 176 176 176 176-78.8 176-176c0-45.7-17.4-87.4-46-118.7l126-126V184c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8M16 304a160 160 0 1 1 320 0 160 160 0 1 1-320 0"
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
                    d="M96 304a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
                  />
                  <Path

                    d="M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8h112c13.3 0 24 10.7 24 24v112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4-52.6 52.6c19.5 28.4 31 62.7 31 99.8 0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2M176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224"
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
