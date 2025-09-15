import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ChalkboardIcon: React.FC<
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
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M96 32c-35.3 0-64 28.7-64 64v288h64V96h384v288h64V96c0-35.3-28.7-64-64-64zm128 352v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H416v-32c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M80 88c0-4.4 3.6-8 8-8h400c4.4 0 8 3.6 8 8v312h48V88c0-30.9-25.1-56-56-56H88c-30.9 0-56 25.1-56 56v312h48zm144 320v24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24H416v-24c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56m144 0v24h-96v-24c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 88c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24v328h32V88c0-30.9-25.1-56-56-56H88c-30.9 0-56 25.1-56 56v328h32zm160 312v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16H416v-48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48m48-16h96c8.8 0 16 7.2 16 16v40H256v-40c0-8.8 7.2-16 16-16" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path d="M80 48c-17.7 0-32 14.3-32 32v352H32V80c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v352h-16V80c0-17.7-14.3-32-32-32zM0 472c0-4.4 3.6-8 8-8h248v-40c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40v40h152c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8m400-8v-40c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24v40z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M96 32c-35.3 0-64 28.7-64 64v320c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32V96c0-35.3-28.7-64-64-64zm384 384H96V96h384z"
                />
                <Path d="M480 96H96v320h128v-32c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v32h64z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
