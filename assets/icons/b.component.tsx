import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BIcon: React.FC<
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
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h128c70.7 0 128-57.3 128-128 0-46.5-24.8-87.3-62-109.7 18.7-22.3 30-51 30-82.3 0-70.7-57.3-128-128-128zm96 192H64V96h96c35.3 0 64 28.7 64 64s-28.7 64-64 64m-96 64h128c35.3 0 64 28.7 64 64s-28.7 64-64 64H64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M56 32C25.1 32 0 57.1 0 88v336c0 30.9 25.1 56 56 56h140c68.5 0 124-55.5 124-124 0-48.9-28.3-91.1-69.3-111.3 23-22.5 37.3-53.9 37.3-88.7 0-68.5-55.5-124-124-124zm108 200H48V88c0-4.4 3.6-8 8-8h108c42 0 76 34 76 76s-34 76-76 76M48 280h148c42 0 76 34 76 76s-34 76-76 76H56c-4.4 0-8-3.6-8-8z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h144c70.7 0 128-57.3 128-128 0-52.8-32-98.2-77.7-117.7C270 213.9 288 181 288 144c0-61.9-50.1-112-112-112zm144 224c53 0 96 43 96 96s-43 96-96 96H48c-8.8 0-16-7.2-16-16V256h160m-16-32H32V80c0-8.8 7.2-16 16-16h128c44.2 0 80 35.8 80 80s-35.8 80-80 80" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path d="M32 32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h168c66.3 0 120-53.7 120-120 0-56.7-39.3-104.2-92.1-116.7 35.7-18.8 60.1-56.2 60.1-99.3 0-61.9-50.1-112-112-112zm144 208H16V64c0-8.8 7.2-16 16-16h144c53 0 96 43 96 96s-43 96-96 96M16 256h184c57.4 0 104 46.6 104 104s-46.6 104-104 104H32c-8.8 0-16-7.2-16-16z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h128c70.7 0 128-57.3 128-128 0-46.5-24.8-87.3-62-109.7 18.7-22.3 30-51 30-82.3 0-70.7-57.3-128-128-128zm96 192H64V96h96c35.3 0 64 28.7 64 64s-28.7 64-64 64m-96 64h128c35.3 0 64 28.7 64 64s-28.7 64-64 64H64z"
                />
                <Path d="" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
