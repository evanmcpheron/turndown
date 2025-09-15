import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const UtilityPoleIcon: React.FC<
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
                <Path d="M256 0c17.7 0 32 14.3 32 32v32h96v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h32v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v40c0 17.7-14.3 32-32 32h-51.2L288 221.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V221.9L83.2 128H32c-17.7 0-32-14.3-32-32V56c0-13.3 10.7-24 24-24s24 10.7 24 24v8h32v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h96V32c0-17.7 14.3-32 32-32M140.8 128l83.2 55.4V128zM288 183.4l83.2-55.4H288z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v56H128V56c0-13.3-10.7-24-24-24S80 42.7 80 56v24H48V56c0-13.3-10.7-24-24-24S0 42.7 0 56v32c0 22.1 17.9 40 40 40h43.2L232 227.2V488c0 13.3 10.7 24 24 24s24-10.7 24-24V227.2L428.8 128H472c22.1 0 40-17.9 40-40V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v24h-32V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v24H280zm91.2 104L280 188.8V128zM232 188.8 140.8 128H232z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M208 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v64h80V48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V48c0-8.8 7.2-16 16-16s16 7.2 16 16v48c0 17.7-14.3 32-32 32h-42.5L304 231.8V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V128h-32v368c0 8.8-7.2 16-16 16s-16-7.2-16-16V231.8L74.5 128H32c-17.7 0-32-14.3-32-32V48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h80zm-81.4 96 81.4 63.3V128zM304 191.3l81.4-63.3H304zM272 32h-32v64h32z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M248 16c-4.4 0-8 3.6-8 8v56h32V24c0-4.4-3.6-8-8-8zm-24 64V24c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v56h144V40c0-4.4 3.6-8 8-8s8 3.6 8 8v40h48V40c0-4.4 3.6-8 8-8s8 3.6 8 8v72c0 17.7-14.3 32-32 32h-69.5L288 228.2V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V144h-32v360c0 4.4-3.6 8-8 8s-8-3.6-8-8V228.2L101.5 144H32c-17.7 0-32-14.3-32-32V40c0-4.4 3.6-8 8-8s8 3.6 8 8v40h48V40c0-4.4 3.6-8 8-8s8 3.6 8 8v40zm-119.9 48H480c8.8 0 16-7.2 16-16V96H16v16c0 8.8 7.2 16 16 16h72.1m25.6 16 94.3 64.8V144h-94.2zm252.5 0H288v64.8z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M128 64v-8c0-13.3-10.7-24-24-24S80 42.7 80 56v8zm-80 0v-8c0-13.3-10.7-24-24-24S0 42.7 0 56v8zm35.2 64L224 221.9v-38.5L140.8 128zM288 183.4v38.5L428.8 128h-57.6zM384 64h48v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 0h48v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                />
                <Path d="M256 0c17.7 0 32 14.3 32 32v32h224v32c0 17.7-14.3 32-32 32H288v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V128H32c-17.7 0-32-14.3-32-32V64h224V32c0-17.7 14.3-32 32-32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
