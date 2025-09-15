import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowDownIcon: React.FC<
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
                <Path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M174.6 472.6c4.5 4.7 10.8 7.4 17.4 7.4s12.8-2.7 17.4-7.4l168-176c9.2-9.6 8.8-24.8-.8-33.9s-24.8-8.8-33.9.8L216 396.1V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v340.1L41.4 263.4c-9.2-9.6-24.3-9.9-33.9-.8s-9.9 24.3-.8 33.9l168 176z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M180.7 475.3c6.2 6.2 16.4 6.2 22.6 0l176-176c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 425.4V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v377.4L27.3 276.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M197.8 477.5c-1.5 1.6-3.6 2.5-5.8 2.5s-4.3-.9-5.8-2.5l-184-192c-3.1-3.2-2.9-8.3.2-11.3s8.3-2.9 11.3.2L184 452.1V40c0-4.4 3.6-8 8-8s8 3.6 8 8v412.1l170.2-177.6c3.1-3.2 8.1-3.3 11.3-.2s3.3 8.1.2 11.3l-184 192z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M160 370.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32v306.7l-32 32z"
                />
                <Path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
