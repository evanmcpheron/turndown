import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const LineHeightIcon: React.FC<
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

                    d="M118.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4v229.4l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4V141.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3zM288 64c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32zm-32 192c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-17.7 0-32 14.3-32 32"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M113.8 39.9c-4.6-5.1-11-7.9-17.8-7.9s-13.3 2.9-17.8 7.9l-72 80c-8.9 9.9-8.1 25 1.8 33.9s25 8.1 33.9-1.8L72 118.5v275l-30.2-33.6c-8.9-9.9-24-10.7-33.9-1.8s-10.7 24-1.8 33.9l72 80c4.6 5.1 11 7.9 17.8 7.9s13.3-2.9 17.8-7.9l72-80c8.9-9.9 8.1-25-1.8-33.9s-25-8.1-33.9 1.8l-30 33.6v-275l30.2 33.5c8.9 9.9 24 10.7 33.9 1.8s10.7-24 1.8-33.9l-72-80zM248 72c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 160c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-24 184c0 13.3 10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24H248c-13.3 0-24 10.7-24 24"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M107.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-80 80c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L80 86.6v338.8l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L112 425.4V86.6l52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zM272 80c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 160c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-16 176c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H272c-8.8 0-16 7.2-16 16"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M101.4 34.1c-3.1-2.8-7.7-2.8-10.8 0l-88 80c-3.3 3-3.5 8-.5 11.3s8 3.5 11.3.5L88 58.1v395.8l-74.6-67.8c-3.3-3-8.3-2.7-11.3.5s-2.7 8.3.5 11.3l88 80c3.1 2.8 7.7 2.8 10.8 0l88-80c3.3-3 3.5-8 .5-11.3s-8-3.5-11.3-.5L104 453.9V58.1l74.6 67.8c3.3 3 8.3 2.7 11.3-.5s2.7-8.3-.5-11.3zM264 88c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-8 160c-4.4 0-8 3.6-8 8s3.6 8 8 8h312c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 168c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8H264c-4.4 0-8 3.6-8 8"
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
                    d="M256 96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32m32 128h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32"
                  />
                  <Path

                    d="M73.4 41.4c12.5-12.5 32.8-12.5 45.3 0l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-9.4-9.4v229.4l9.4-9.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-12.5 12.5-32.8 12.5-45.3 0l-64-64c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l9.4 9.4V141.3l-9.4 9.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3z"
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
