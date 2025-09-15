import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const FrancSignIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone";
  }
> = ({ type, size, color, active, style, opacity, haptic, ...more }) => {
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
    color,
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M80 32c-17.7 0-32 14.3-32 32v256H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80v-64h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H112V96h176c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M72 32c-13.3 0-24 10.7-24 24v264H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v88c0 13.3 10.7 24 24 24s24-10.7 24-24v-88h104c13.3 0 24-10.7 24-24s-10.7-24-24-24H96v-80h168c13.3 0 24-10.7 24-24s-10.7-24-24-24H96V80h200c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M104 32c-22.1 0-40 17.9-40 40v248H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v112c0 8.8 7.2 16 16 16s16-7.2 16-16V352h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H96v-96h176c8.8 0 16-7.2 16-16s-7.2-16-16-16H96V72c0-4.4 3.6-8 8-8h200c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M96 32c-17.7 0-32 14.3-32 32v272H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v120c0 4.4 3.6 8 8 8s8-3.6 8-8V352h136c4.4 0 8-3.6 8-8s-3.6-8-8-8H80V224h200c4.4 0 8-3.6 8-8s-3.6-8-8-8H80V64c0-8.8 7.2-16 16-16h216c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M48 320H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h16zm64 64h80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80z"
                />
                <Path d="M80 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32s32-14.3 32-32V256h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H112V96h176c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
