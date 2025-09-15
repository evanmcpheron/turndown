import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleSortIcon: React.FC<
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
                <Path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m267.3-155.3c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9h192c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4zm-22.6 310.6c6.2 6.2 16.4 6.2 22.6 0l96-96c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9H160c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m267.3-155.3 96 96c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9H160c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l96-96c6.2-6.2 16.4-6.2 22.6 0m-22.6 310.6-96-96c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9h192c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-96 96c-6.2 6.2-16.4 6.2-22.6 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m244.7-155.3c6.2-6.2 16.4-6.2 22.6 0l96 96c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9H160c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4zM198.6 192h114.7L256 134.6zm-49.9 123.3c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9h192c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-96 96c-6.2 6.2-16.4 6.2-22.6 0zM256 377.4l57.4-57.4H198.7z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m267.3 155.3c-6.2 6.2-16.4 6.2-22.6 0l-96-96c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9h192c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4zM352 304H160l96 96zm-84.7-203.3 96 96c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9H160c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l96-96c6.2-6.2 16.4-6.2 22.6 0M256 112l-96 96h192z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m267.3-155.3c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9h192c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4zm-22.6 310.6c6.2 6.2 16.4 6.2 22.6 0l96-96c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9H160c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4z"
                />
                <Path d="M244.7 100.7c6.2-6.2 16.4-6.2 22.6 0l96 96c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9H160c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4zm0 310.6-96-96c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9h192c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-96 96c-6.2 6.2-16.4 6.2-22.6 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
