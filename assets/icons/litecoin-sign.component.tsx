import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const LitecoinSignIcon: React.FC<
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
                   
                  d="M128 64c0-17.7-14.3-32-32-32S64 46.3 64 64v149.6l-40.8 11.6c-17 4.9-26.8 22.6-22 39.6s22.6 26.8 39.6 22l23.2-6.7V448c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V261.9l136.8-39.1c17-4.9 26.8-22.6 22-39.6s-22.6-26.8-39.6-22L128 195.3z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M112 56c0-13.3-10.7-24-24-24S64 42.7 64 56v164.5l-46.2 12.3C5 236.2-2.6 249.4.8 262.2s16.6 20.4 29.4 17l33.8-9V456c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24H112V257.4l158.2-42.2c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17L112 207.7z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M96 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v179.5l-51.9 13C3.5 242.6-1.7 251.3.5 259.9s10.8 13.8 19.4 11.6l44.1-11V440c0 22.1 17.9 40 40 40h264c8.8 0 16-7.2 16-16s-7.2-16-16-16H104c-4.4 0-8-3.6-8-8V252.5l179.9-45c8.6-2.1 13.8-10.8 11.6-19.4s-10.8-13.8-19.4-11.6L96 219.5z"
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
                   
                  d="M96 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v190.8L6.2 248.2c-4.3 1-7 5.3-6 9.6s5.3 7 9.6 6L80 247.3V440c0 22.1 17.9 40 40 40h256c4.4 0 8-3.6 8-8s-3.6-8-8-8H120c-13.3 0-24-10.7-24-24V243.5l185.8-43.7c4.3-1 7-5.3 6-9.6s-5.3-7-9.6-6L96 227.1z"
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
                  d="m64 213.6-40.8 11.6c-17 4.9-26.8 22.6-22 39.6s22.6 26.8 39.6 22l23.2-6.7zm64 48.3 136.8-39.1c17-4.9 26.8-22.6 22-39.6s-22.6-26.8-39.6-22L128 195.3z"
                />
                <Path
                   
                  d="M96 32c17.7 0 32 14.3 32 32v352h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32"
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
