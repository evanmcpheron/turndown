import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BillboardIcon: React.FC<
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
                <Path d="M448 32c0-17.7-14.3-32-32-32s-32 14.3-32 32H256c0-17.7-14.3-32-32-32s-32 14.3-32 32H80c-26.5 0-48 21.5-48 48v272c-17.7 0-32 14.3-32 32s14.3 32 32 32h256v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h256c17.7 0 32-14.3 32-32s-14.3-32-32-32V80c0-26.5-21.5-48-48-48zM320 352H96V96h96v32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32V96h128v32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32V96h96v256z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M440 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H248v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H80c-26.5 0-48 21.5-48 48v272h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h272v88c0 13.3 10.7 24 24 24s24-10.7 24-24v-88h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V80c0-26.5-21.5-48-48-48H440zM320 352H80V80h120v48h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V80h144v48h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V80h120v272z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M432 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H240V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H80c-26.5 0-48 21.5-48 48v272H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h288v104c0 8.8 7.2 16 16 16s16-7.2 16-16V384h288c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V80c0-26.5-21.5-48-48-48H432zM320 352H64V80c0-8.8 7.2-16 16-16h128v64h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V64h160v64h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V64h128c8.8 0 16 7.2 16 16v272z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M424 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v24H232V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v24H80c-26.5 0-48 21.5-48 48v288H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h304v120c0 4.4 3.6 8 8 8s8-3.6 8-8V384h304c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V80c0-26.5-21.5-48-48-48H424zM320 368H48V80c0-17.7 14.3-32 32-32h136v80h-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V48h176v80h-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V48h136c17.7 0 32 14.3 32 32v288z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M224 0c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32V32c0-17.7 14.3-32 32-32m192 0c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32V32c0-17.7 14.3-32 32-32M288 416h64v64c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
                />
                <Path d="M192 32H80c-26.5 0-48 21.5-48 48v272c-17.7 0-32 14.3-32 32s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32V80c0-26.5-21.5-48-48-48H448v64h96v256H96V96h96zm64 64h128V32H256z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
