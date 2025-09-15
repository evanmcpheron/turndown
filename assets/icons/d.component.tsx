import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const DIcon: React.FC<
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
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 96c0-35.3 28.7-64 64-64h96c123.7 0 224 100.3 224 224S283.7 480 160 480H64c-35.3 0-64-28.7-64-64zm160 0H64v320h96c88.4 0 160-71.6 160-160S248.4 96 160 96" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M56 80c-4.4 0-8 3.6-8 8v336c0 4.4 3.6 8 8 8h104c97.2 0 176-78.8 176-176S257.2 80 160 80zM0 88c0-30.9 25.1-56 56-56h104c123.7 0 224 100.3 224 224S283.7 480 160 480H56c-30.9 0-56-25.1-56-56z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M48 64c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h112c106 0 192-86 192-192S266 64 160 64zM0 80c0-26.5 21.5-48 48-48h112c123.7 0 224 100.3 224 224S283.7 480 160 480H48c-26.5 0-48-21.5-48-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M32 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h128c114.9 0 208-93.1 208-208S274.9 48 160 48zM0 64c0-17.7 14.3-32 32-32h128c123.7 0 224 100.3 224 224S283.7 480 160 480H32c-17.7 0-32-14.3-32-32z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M0 96c0-35.3 28.7-64 64-64h96c123.7 0 224 100.3 224 224S283.7 480 160 480H64c-35.3 0-64-28.7-64-64zm160 0H64v320h96c88.4 0 160-71.6 160-160S248.4 96 160 96"
                />
                <Path d="" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
