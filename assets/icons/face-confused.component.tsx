import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const FaceConfusedIcon: React.FC<
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
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-84.9-116.4-1.1.9c-6.9 5.5-17 4.4-22.5-2.5s-4.4-17 2.5-22.5l1.1-.9C205 327.5 272 304 341 304h11c8.8 0 16 7.2 16 16s-7.2 16-16 16h-11c-61.8 0-121.7 21-169.9 59.6M144.4 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m203.2 129.6-12.8 9.6c-10.6 8-25.6 5.8-33.6-4.8s-5.8-25.6 4.8-33.6l12.8-9.6c37.4-28 82.9-43.2 129.6-43.2h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40c-36.4 0-71.7 11.8-100.8 33.6M144.4 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m171.1 139.6-1.1.9c-6.9 5.5-17 4.4-22.5-2.5s-4.4-17 2.5-22.5l1.1-.9C205 327.5 272 304 341 304h11c8.8 0 16 7.2 16 16s-7.2 16-16 16h-11c-61.8 0-121.7 21-169.9 59.6M152.4 208a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m163 136.8-5.6 5.1c-3.3 3-8.3 2.7-11.3-.5s-2.7-8.3.5-11.3l5.6-5.1c54.5-49.5 125.5-77 199.1-77h8.7c4.4 0 8 3.6 8 8s-3.6 8-8 8h-8.7c-69.7 0-136.8 26-188.3 72.8M160.4 208a16 16 0 1 1 32 0 16 16 0 1 1-32 0m176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-84.9-116.4-1.1.9c-6.9 5.5-17 4.4-22.5-2.5s-4.4-17 2.5-22.5l1.1-.9C205 327.5 272 304 341 304h11c8.8 0 16 7.2 16 16s-7.2 16-16 16h-11c-61.8 0-121.7 21-169.9 59.6M144.4 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <Path d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
