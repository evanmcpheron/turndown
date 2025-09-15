import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowDownLeftIcon: React.FC<
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
                <Path d="M32 384c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32s-14.3-32-32-32H141.3l201.3-201.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L96 306.7V160c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M56 416c-13.3 0-24-10.7-24-24V152c0-13.3 10.7-24 24-24s24 10.7 24 24v182.1L311 103c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-231 231H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H56z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M48 416c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16v185.4l260.7-260.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L86.6 384H272c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M40 416c-4.4 0-8-3.6-8-8V168c0-4.4 3.6-8 8-8s8 3.6 8 8v220.7L338.3 98.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L59.3 400H280c4.4 0 8 3.6 8 8s-3.6 8-8 8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="m96 306.7 201.4-201.3c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L141.3 352H96z"
                />
                <Path d="M32 384c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V160c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
