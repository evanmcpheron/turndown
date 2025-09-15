import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const TabletScreenButtonIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M0 64C0 28.7 28.7 0 64 0h320c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 384a32 32 0 1 0-64 0 32 32 0 1 0 64 0M384 64H64v320h320z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M48 448c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-80H48zm0-128h352V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM0 64C0 28.7 28.7 0 64 0h320c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M384 32c17.7 0 32 14.3 32 32v256H32V64c0-17.7 14.3-32 32-32zm32 320v96c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-96zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm184 416a24 24 0 1 0-48 0 24 24 0 1 0 48 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M384 16c26.5 0 48 21.5 48 48v288H16V64c0-26.5 21.5-48 48-48zm48 352v80c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-80zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm160 448a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M0 64C0 28.7 28.7 0 64 0h320c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 384a32 32 0 1 0-64 0 32 32 0 1 0 64 0M384 64H64v320h320z"
                />
                <Path d="M64 64h320v320H64z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
