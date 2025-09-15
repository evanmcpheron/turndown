import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const NotdefIcon: React.FC<
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
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M64 390.3 153.5 256 64 121.7zm38.5 57.7h179L192 313.7zm128-192L320 390.3V121.7zm51-192h-179L192 198.3zM0 48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M48 421.8 162.8 256 48 90.2zM77.2 464h229.6L192 298.2zm144-208L336 421.8V90.2zm85.6-208H77.2L192 213.8zM0 48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M32 452.5 172.3 256 32 59.5zM51.7 480h280.6L192 283.5zm160-224L352 452.5v-393zM332.3 32H51.7L192 228.5zM0 48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512"
              </Svg>sName="aps-icon-svg"
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M32 16q-2.85 0-5.4.9L192 242.5 357.4 16.9q-2.55-.9-5.4-.9zm335.8 13.7L201.9 256l165.9 226.3c.1-.7.2-1.5.2-2.3V32c0-.8-.1-1.5-.2-2.3M182.1 256 16.2 29.7c-.1.7-.2 1.5-.2 2.3v448c0 .8.1 1.5.2 2.3zM26.6 495.1q2.55.9 5.4.9h320q2.85 0 5.4-.9L192 269.5zM0 32C0 14.3 14.3 0 32 0h320c17.7 0 32 14.3 32 32v448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              </Svg>
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M64 64v57.7L153.5 256 64 390.3V448h38.5L192 313.7 281.5 448H320v-57.7L230.5 256 320 121.7V64h-38.5L192 198.3 102.5 64z"
                />
                <Path
                   
                  d="M64 64v384h256V64zM0 48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"
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
