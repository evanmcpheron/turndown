import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const LocationCrosshairsIcon: React.FC<
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
                   
                  d="M256 0c17.7 0 32 14.3 32 32v34.7c80.4 13.4 143.9 76.9 157.3 157.3H480c17.7 0 32 14.3 32 32s-14.3 32-32 32h-34.7c-13.4 80.4-76.9 143.9-157.3 157.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-34.7C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h34.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32M128 256a128 128 0 1 0 256 0 128 128 0 1 0-256 0m128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M256 0c13.3 0 24 10.7 24 24v41.5c86.8 10.8 155.7 79.7 166.5 166.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24h-41.5c-10.8 86.8-79.7 155.7-166.5 166.5V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-41.5C145.2 435.7 76.3 366.8 65.5 280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h41.5C76.3 145.2 145.2 76.3 232 65.5V24c0-13.3 10.7-24 24-24M112 256a144 144 0 1 0 288 0 144 144 0 1 0-288 0m192 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-144 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M256 0c8.8 0 16 7.2 16 16v48.7c93.3 7.7 167.6 82.1 175.3 175.3H496c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48.7c-7.7 93.3-82.1 167.6-175.3 175.3V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48.7c-93.3-7.7-167.6-82-175.3-175.3H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h48.7c7.7-93.3 82-167.6 175.3-175.3V16c0-8.8 7.2-16 16-16M96 256a160 160 0 1 0 320 0 160 160 0 1 0-320 0m224 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-160 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"
              </Svg>sName="aps-icon-svg"
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M256 0c4.4 0 8 3.6 8 8v56.2c99.7 4.1 179.8 84.2 183.8 183.8H504c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56.2c-4.1 99.7-84.2 179.8-183.8 183.8V504c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56.2c-99.7-4-179.8-84.1-183.8-183.8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h56.2c4-99.7 84.1-179.8 183.8-183.8V8c0-4.4 3.6-8 8-8M80 256a176 176 0 1 0 352 0 176 176 0 1 0-352 0m256 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-176 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              </Svg>
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160"
                />
                <Path
                   
                  d="M256 0c17.7 0 32 14.3 32 32v34.7c80.4 13.4 143.9 76.9 157.3 157.3H480c17.7 0 32 14.3 32 32s-14.3 32-32 32h-34.7c-13.4 80.4-76.9 143.9-157.3 157.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-34.7C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h34.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32M128 256a128 128 0 1 0 256 0 128 128 0 1 0-256 0"
                />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};</Svg>
