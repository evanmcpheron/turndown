import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const PlusMinusIcon: React.FC<
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
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v112H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h112v112c0 17.7 14.3 32 32 32s32-14.3 32-32V208h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H224zM0 480c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M216 32c0-13.3-10.7-24-24-24s-24 10.7-24 24v120H48c-13.3 0-24 10.7-24 24s10.7 24 24 24h120v120c0 13.3 10.7 24 24 24s24-10.7 24-24V200h120c13.3 0 24-10.7 24-24s-10.7-24-24-24H216zM8 488c0 13.3 10.7 24 24 24h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H32c-13.3 0-24 10.7-24 24"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M176 208v144c0 8.8 7.2 16 16 16s16-7.2 16-16V208h144c8.8 0 16-7.2 16-16s-7.2-16-16-16H208V32c0-8.8-7.2-16-16-16s-16 7.2-16 16v144H32c-8.8 0-16 7.2-16 16s7.2 16 16 16zM16 464c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16s-7.2-16-16-16H32c-8.8 0-16 7.2-16 16"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M184 200v160c0 4.4 3.6 8 8 8s8-3.6 8-8V200h160c4.4 0 8-3.6 8-8s-3.6-8-8-8H200V24c0-4.4-3.6-8-8-8s-8 3.6-8 8v160H24c-4.4 0-8 3.6-8 8s3.6 8 8 8zM8 472c0 4.4 3.6 8 8 8h352c4.4 0 8-3.6 8-8s-3.6-8-8-8H16c-4.4 0-8 3.6-8 8"
                  />
                </Svg >
              );

            case "duotone":
              return (
  <Svg viewBox="0 0 384 512"

    fill={colors[colorName || "text"]} 
    <Path
      fill={colors[colorName || "text"]}
      opacity={opacity || 0.5}
      d="M0 480c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"
    />
    <Path

      d="M224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v112H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h112v112c0 17.7 14.3 32 32 32s32-14.3 32-32V208h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H224z"
    />
  </Svg >
    );

          default:
return null;
        }
      }) ()}
    </StyledIcon >
  );
};
