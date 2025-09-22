import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const WindowFrameOpenIcon: React.FC<
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
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M480 224V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v224h448zm-64 0H280V64h136zm-184 0H96V64h136zM96 448V320H32v128c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32V320h-64v128z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M432 240H280V48h136c8.8 0 16 7.2 16 16zm-200 0H80V64c0-8.8 7.2-16 16-16h136zm248 48V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v224h448M24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V320h-48v144H80V320H32v144z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M272 32h144c17.7 0 32 14.3 32 32v192H272zm208 256V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v224h448m-240-32H64V64c0-17.7 14.3-32 32-32h144zM16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V320h-32v160H64V320H32v160z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M264 16v256h200V64c0-26.5-21.5-48-48-48zm216 48v224H32V64C32 28.7 60.7 0 96 0h320c35.3 0 64 28.7 64 64M248 272V16H96c-26.5 0-48 21.5-48 48v208zM8 496h24V320h16v176h416V320h16v176h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M232 64H96v160h136zm48 160h136V64H280z"
                />
                <Path d="M480 224V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v224h448zm-64 0H280V64h136zm-184 0H96V64h136zM96 448V320H32v128c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32V320h-64v128z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
