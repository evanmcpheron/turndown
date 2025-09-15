import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const PaperclipIcon: React.FC<
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

                    d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 448 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M375 73c-26-26-68.1-26-94.1 0L89 265c-43.7 43.6-43.7 114.4 0 158s114.4 43.6 158.1 0L399 271c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L281 457c-62.4 62.4-163.5 62.4-225.9 0S-7.4 293.4 55 231L247 39c44.7-44.7 117.2-44.7 162 0s44.7 117.2 0 161.9L225.2 384.7c-31.6 31.6-83.6 28.7-111.5-6.2-23.8-29.8-21.5-72.8 5.5-99.8L271 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L153.2 312.7c-9.7 9.7-10.6 25.1-2 35.8 10 12.5 28.7 13.6 40 2.2L375 167c26-26 26-68.1 0-94.1z"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 448 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M380.7 67.3c-29.1-29.1-76.3-29.1-105.4 0l-192 192c-46.8 46.8-46.8 122.6 0 169.4s122.6 46.8 169.4 0l152-152c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-152 152c-59.3 59.3-155.4 59.3-214.6 0S1.4 296 60.7 236.7l192-192c41.6-41.6 109-41.6 150.6 0s41.6 109 0 150.6L219.5 379.1c-28.2 28.2-74.6 25.6-99.6-5.5-21.3-26.6-19.2-65 4.9-89.1l151.9-151.8c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L147.5 307.1c-12.6 12.6-13.7 32.6-2.6 46.5 13 16.2 37.2 17.6 51.9 2.9l183.9-183.8c29.1-29.1 29.1-76.3 0-105.4"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 448 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M386.3 61.7c-32.2-32.2-84.5-32.2-116.7 0l-192 192c-49.9 49.9-49.9 130.8 0 180.7s130.8 49.9 180.7 0l152-152c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-152 152c-56.1 56.1-147.2 56.1-203.3 0s-56.1-147.2 0-203.3l192-192c38.5-38.5 100.8-38.5 139.3 0s38.5 100.8 0 139.3L213.9 373.4c-24.8 24.8-65.7 22.6-87.7-4.9-18.8-23.4-16.9-57.2 4.3-78.5l151.8-151.7c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L141.9 301.4c-15.5 15.5-16.8 40.1-3.2 57.2 16 20 45.8 21.6 63.9 3.5l183.7-183.8c32.2-32.2 32.2-84.5 0-116.7z"
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
                    d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4"
                  />
                  <Path d="" />
                </Svg >
              );

            default:
              return null;
          }
        })()}
      </StyledIcon >
    );
  };
