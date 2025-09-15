import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const MartiniGlassEmptyIcon: React.FC<
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
                   
                  d="M32 0C19.1 0 7.4 7.8 2.4 19.8S.2 45.5 9.3 54.7L224 269.3V448h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64V269.3L502.6 54.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 0 480 0zm224 210.7L109.3 64h293.4z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M0 35.3C0 15.8 15.8 0 35.3 0h441.4C496.2 0 512 15.8 512 35.3c0 9.4-3.7 18.3-10.3 25L280 281.9V464h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24h80V281.9L10.3 60.3C3.7 53.7 0 44.7 0 35.3m256 202.8L446.1 48H65.9z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M33 32c-.5 0-1 .4-1 1 0 .3.1.5.3.7L256 257.4 479.7 33.7c.2-.2.3-.4.3-.7 0-.5-.4-1-1-1zm207 254.6L9.7 56.3C3.5 50.1 0 41.7 0 33 0 14.8 14.8 0 33 0h446c18.2 0 33 14.8 33 33 0 8.7-3.5 17.1-9.7 23.3L272 286.6V480h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h96z"
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
                   
                  d="M25.5 16c-5.3 0-9.5 4.3-9.5 9.5 0 2.5 1 5 2.8 6.7L256 269.5 493.2 32.3c1.8-1.8 2.8-4.2 2.8-6.7 0-5.3-4.3-9.5-9.5-9.5h-461zM248 284.1 7.5 43.6C2.7 38.8 0 32.3 0 25.5 0 11.4 11.4 0 25.5 0h461C500.6 0 512 11.4 512 25.5c0 6.8-2.7 13.3-7.5 18.1L264 284.1V496h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H136c-4.4 0-8-3.6-8-8s3.6-8 8-8h112z"
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
                  d="M32 0C19.1 0 7.4 7.8 2.4 19.8S.2 45.5 9.3 54.7L224 269.3V448h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64V269.3L502.6 54.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 0 480 0zm224 210.7L109.3 64h293.4z"
                />
                <Path   d="" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};</Svg>
