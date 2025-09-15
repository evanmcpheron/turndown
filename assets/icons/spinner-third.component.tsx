import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SpinnerThirdIcon: React.FC<
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
                <Path d="M224 32c0-17.7 14.3-32 32-32 141.4 0 256 114.6 256 256 0 46.6-12.5 90.4-34.3 128-8.8 15.3-28.4 20.5-43.7 11.7s-20.5-28.4-11.7-43.7c16.3-28.2 25.7-61 25.7-96 0-106-86-192-192-192-17.7 0-32-14.3-32-32" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M457 372c11.5 6.6 26.3 2.7 31.8-9.3C503.7 330.2 512 294.1 512 256 512 122.7 410.1 13.2 280 1.1c-13.2-1.2-24 9.6-24 22.9s10.8 23.9 24 25.4C383.5 61.2 464 149.2 464 256c0 29.3-6.1 57.3-17 82.6-5.3 12.2-1.5 26.8 10 33.5z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M463.9 376c7.6 4.4 17.5 1.8 21.4-6.1 17.1-34.3 26.7-73 26.7-113.9C512 120 405.9 8.8 272 .5c-8.8-.5-16 6.7-16 15.5s7.2 15.9 16 16.6C388.2 40.8 480 137.7 480 256c0 35.1-8.1 68.3-22.5 97.9-3.9 8-1.3 17.7 6.4 22.1" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M470.8 380c3.8 2.2 8.7.9 10.8-3C501 341 512 299.8 512 256 512 117.3 401.7 4.4 264 .1c-4.4-.1-8 3.5-8 7.9s3.6 8 8 8.1c128.8 4.2 232 110 232 239.9 0 40.9-10.2 79.3-28.2 113-2.1 3.9-.8 8.8 3 11" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 64C150 64 64 150 64 256s86 192 192 192c70.1 0 131.3-37.5 164.9-93.6l.1.1c-6.9 14.9-1.5 32.8 13 41.2 15.3 8.9 34.9 3.6 43.7-11.7.2-.3.4-.6.5-.9C434.1 460.1 351.1 512 256 512 114.6 512 0 397.4 0 256S114.6 0 256 0c-17.7 0-32 14.3-32 32s14.3 32 32 32"
                />
                <Path d="M224 32c0-17.7 14.3-32 32-32 141.4 0 256 114.6 256 256 0 46.6-12.5 90.4-34.3 128-8.8 15.3-28.4 20.5-43.7 11.7s-20.5-28.4-11.7-43.7c16.3-28.2 25.7-61 25.7-96 0-106-86-192-192-192-17.7 0-32-14.3-32-32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
