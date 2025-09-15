import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowLeftToArcIcon: React.FC<
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
                <Path d="M64 256c0-106 86-192 192-192 17.7 0 32-14.3 32-32S273.7 0 256 0C114.6 0 0 114.6 0 256s114.6 256 256 256c17.7 0 32-14.3 32-32s-14.3-32-32-32c-106 0-192-86-192-192m217.4-134.6-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 288H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H269.3l57.4-57.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M48 256c0-114.9 93.1-208 208-208 13.3 0 24-10.7 24-24S269.3 0 256 0C114.6 0 0 114.6 0 256s114.6 256 256 256c13.3 0 24-10.7 24-24s-10.7-24-24-24c-114.9 0-208-93.1-208-208m231.7-121.6-112 104c-4.9 4.5-7.7 10.9-7.7 17.6s2.8 13 7.7 17.6l112 104c9.7 9 24.9 8.5 33.9-1.3s8.5-24.9-1.3-33.9L245.1 280H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H245.1l67.2-62.4c9.7-9 10.3-24.2 1.3-33.9s-24.2-10.3-33.9-1.3" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M32 256C32 132.3 132.3 32 256 32c8.8 0 16-7.2 16-16s-7.2-16-16-16C114.6 0 0 114.6 0 256s114.6 256 256 256c8.8 0 16-7.2 16-16s-7.2-16-16-16C132.3 480 32 379.7 32 256m277.4-140-144 128c-3.4 3-5.4 7.4-5.4 12s2 8.9 5.4 12l144 128c6.6 5.9 16.7 5.3 22.6-1.3s5.3-16.7-1.3-22.6L218.1 272H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H218.1l112.5-100c6.6-5.9 7.2-16 1.3-22.6s-16-7.2-22.6-1.3z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M16 256C16 123.5 123.5 16 256 16c4.4 0 8-3.6 8-8s-3.6-8-8-8C114.6 0 0 114.6 0 256s114.6 256 256 256c4.4 0 8-3.6 8-8s-3.6-8-8-8C123.5 496 16 388.5 16 256m298.8-134.1-152 128c-1.8 1.5-2.8 3.8-2.8 6.1s1 4.6 2.8 6.1l152 128c3.4 2.8 8.4 2.4 11.3-1s2.4-8.4-1-11.3L189.9 264H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H189.9l135.3-113.9c3.4-2.8 3.8-7.9 1-11.3s-7.9-3.8-11.3-1z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32"
                />
                <Path d="M326.6 121.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 288H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H269.3l57.4-57.4c12.5-12.5 12.5-32.8 0-45.3z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
