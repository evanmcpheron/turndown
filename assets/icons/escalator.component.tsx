import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const EscalatorIcon: React.FC<
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
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m197.9 127.8c11.6-10.2 26.6-15.8 42.1-15.8h96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-72L234.1 496.2C222.5 506.4 207.5 512 192 512H96c-35.3 0-64-28.7-64-64s28.7-64 64-64h72zM320 192v16.4l-128 112V192c0-35.3 28.7-64 64-64s64 28.7 64 64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m182.1 85.8c16-14 36.6-21.8 57.9-21.8h104c48.6 0 88 39.4 88 88s-39.4 88-88 88h-70.9L249.9 490.2c-16 14-36.6 21.8-57.9 21.8H88c-48.6 0-88-39.4-88-88s39.4-88 88-88h70.9zM448 160c-9.7 0-19 3.5-26.3 9.9L183.8 378.1c-4.4 3.8-10 5.9-15.8 5.9H88c-22.1 0-40 17.9-40 40s17.9 40 40 40h104c9.7 0 19-3.5 26.3-9.9l237.9-208.2c4.4-3.8 10-5.9 15.8-5.9h80c22.1 0 40-17.9 40-40s-17.9-40-40-40zm-192-32c23.7 0 44.4 12.9 55.5 32L192 264.5V192c0-35.3 28.7-64 64-64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path d="M264 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m211.3 91.8C409.9 135 428.6 128 448 128h112c44.2 0 80 35.8 80 80s-35.8 80-80 80h-81.9L244.7 492.2C230.1 505 211.4 512 192 512H80c-44.2 0-80-35.8-80-80s35.8-80 80-80h81.9zM448 160c-11.6 0-22.9 4.2-31.6 11.9L178.5 380c-2.9 2.6-6.7 4-10.5 4H80c-26.5 0-48 21.5-48 48s21.5 48 48 48h112c11.6 0 22.9-4.2 31.6-11.9L461.5 260c2.9-2.6 6.7-4 10.5-4h88c26.5 0 48-21.5 48-48s-21.5-48-48-48zm-140.1 21.7-24.6 21.5c-7.7-16.1-24.2-27.2-43.3-27.2-26.5 0-48 21.5-48 48v59.2l-32 28V224c0-44.2 35.8-80 80-80 28.7 0 53.8 15.1 67.9 37.7" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path d="M280 56a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-96 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m216.6 105.8c13.1-11.5 30-17.8 47.4-17.8h120c39.8 0 72 32.2 72 72s-32.2 72-72 72h-92.9L239.4 494.2c-13.1 11.5-30 17.8-47.4 17.8H72c-39.8 0-72-32.2-72-72s32.2-72 72-72h92.9zM448 160c-13.6 0-26.7 4.9-36.9 13.9L173.2 382c-1.5 1.3-3.3 2-5.3 2H72c-30.9 0-56 25.1-56 56s25.1 56 56 56h120c13.6 0 26.7-4.9 36.9-13.9L466.8 274c1.5-1.3 3.3-2 5.3-2h96c30.9 0 56-25.1 56-56s-25.1-56-56-56zm-135.2 30.8-12.7 11.1c-9-24.5-32.5-41.9-60.1-41.9-35.3 0-64 28.7-64 64v86.5l-16 14V224c0-44.2 35.8-80 80-80 32.3 0 60.2 19.2 72.8 46.8" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M405.9 175.8c11.6-10.2 26.6-15.8 42.1-15.8h96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-72L234.1 496.2C222.5 506.4 207.5 512 192 512H96c-35.3 0-64-28.7-64-64s28.7-64 64-64h72z"
                />
                <Path d="M256 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96m64 192v16.4l-128 112V192c0-35.3 28.7-64 64-64s64 28.7 64 64" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
