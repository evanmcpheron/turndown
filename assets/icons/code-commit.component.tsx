import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CodeCommitIcon: React.FC<
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
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M320 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160m156.8-48C462 361 397.4 416 320 416s-142-55-156.8-128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h131.2C178 151 242.6 96 320 96s142 55 156.8 128H608c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M320 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224m158.2-88c-11.6 77-78 136-158.2 136s-146.6-59-158.2-136H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h137.8c11.6-77 78-136 158.2-136s146.6 59 158.2 136H616c13.3 0 24 10.7 24 24s-10.7 24-24 24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192m127-80c-7.9 63.1-61.7 112-127 112s-119.1-48.9-127-112H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h177c7.9-63.1 61.7-112 127-112s119.1 48.9 127 112h177c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M320 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224m127.8-104C443.6 331 388 384 320 384s-123.6-53-127.8-120H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h184.2c4.2-67 59.8-120 127.8-120s123.6 53 127.8 120H632c4.4 0 8 3.6 8 8s-3.6 8-8 8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M476.8 288c2.1-10.3 3.2-21 3.2-32s-1.1-21.7-3.2-32H608c17.7 0 32 14.3 32 32s-14.3 32-32 32zm-313.6 0H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h131.2c-2.1 10.3-3.2 21-3.2 32s1.1 21.7 3.2 32"
                />
                <Path d="M320 176a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 240a160 160 0 1 0 0-320 160 160 0 1 0 0 320" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
