import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SuperscriptIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M480 32c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9C393 73.5 404.3 80 416 80v80c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32zM32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h15.3l89.6 128-89.6 128H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c10.4 0 20.2-5.1 26.2-13.6L176 311.8l85.8 122.6c6 8.6 15.8 13.6 26.2 13.6h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-15.3l-89.6-128 89.6-128H320c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32c-10.4 0-20.2 5.1-26.2 13.6L176 200.2 90.2 77.6C84.2 69.1 74.4 64 64 64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M472 24c0-8-3.9-15.4-10.5-19.9s-15-5.4-22.4-2.4l-40 16c-12.3 4.9-18.3 18.9-13.4 31.2s18.9 18.3 31.2 13.4l7.1-2.8V176h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16zM24 64C10.7 64 0 74.7 0 88s10.7 24 24 24h27.2l96 144-96 144H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40c8 0 15.5-4 20-10.7l92-138 92 138c4.5 6.7 12 10.7 20 10.7h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-27.2l-96-144 96-144H328c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40c-8 0-15.5 4-20 10.7l-92 138-92-138C79.5 68 72 64 64 64z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M464 16c0-5.1-2.5-10-6.6-13S447.9-.8 443 .8l-48 16c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l26.9-9V160h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zM16 64C7.2 64 0 71.2 0 80s7.2 16 16 16h39.2L157 256 55.2 416H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c5.5 0 10.6-2.8 13.5-7.4L176 285.8l98.5 154.8c2.9 4.6 8 7.4 13.5 7.4h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-39.2L195 256 296.8 96H336c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48c-5.5 0-10.6 2.8-13.5 7.4L176 226.2 77.5 71.4c-2.9-4.6-8-7.4-13.5-7.4z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M464 8c0-2.7-1.3-5.1-3.5-6.6s-5-1.8-7.5-.8l-40 16c-4.1 1.6-6.1 6.3-4.5 10.4s6.3 6.1 10.4 4.5l29-11.6V144H416c-4.4 0-8 3.6-8 8s3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32zM8 64c-4.4 0-8 3.6-8 8s3.6 8 8 8h28l130.1 176L36 432H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h32c2.5 0 4.9-1.2 6.4-3.2L176 269.5l129.6 175.3c1.5 2 3.9 3.2 6.4 3.2h32c4.4 0 8-3.6 8-8s-3.6-8-8-8h-28L185.9 256 316 80h28c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32c-2.5 0-4.9 1.2-6.4 3.2L176 242.5 46.4 67.2c-1.5-2-3.9-3.2-6.4-3.2z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M0 96c0-17.7 14.3-32 32-32h32c10.4 0 20.2 5.1 26.2 13.6L176 200.2l85.8-122.6C267.8 69 277.6 64 288 64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-15.3l-89.6 128 89.6 128H320c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-10.4 0-20.2-5.1-26.2-13.6L176 311.8 90.2 434.4c-6 8.5-15.8 13.6-26.2 13.6H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h15.3l89.6-128-89.6-128H32c-17.7 0-32-14.3-32-32"
                />
                <Path d="M464.8 4.8C474.3 10.6 480 20.9 480 32v128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32V80c-11.7 0-23-6.5-28.6-17.7-7.9-15.8-1.5-35 14.3-42.9l32-16c9.9-5 21.7-4.4 31.1 1.4" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
