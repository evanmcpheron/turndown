import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BracketRoundIcon: React.FC<
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
              <Svg viewBox="0 0 192 512" fill={color}>
                <Path d="M154.6 46.2c9.8 14.7 5.8 34.6-8.9 44.4C120.1 107.7 64 167 64 256s56.1 148.3 81.8 165.4c14.7 9.8 18.7 29.7 8.9 44.4s-29.7 18.7-44.4 8.9C71.9 449 0 371.8 0 256S71.9 62.9 110.2 37.4c14.7-9.8 34.6-5.8 44.4 8.9z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 192 512" fill={color}>
                <Path d="M156.6 43.7c6.8 11.4 3 26.1-8.3 32.9C115.3 96.3 48 160.7 48 256s67.3 159.7 100.3 179.4c11.4 6.8 15.1 21.5 8.3 32.9s-21.5 15.1-32.9 8.3C82 451.8 0 374.1 0 256S82 60.2 123.7 35.4c11.4-6.8 26.1-3 32.9 8.3" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 192 512" fill={color}>
                <Path d="M158.1 40.4c4.2 7.8 1.3 17.5-6.4 21.7C111.5 83.8 32 153.4 32 256s79.5 172.2 119.6 193.9c7.8 4.2 10.7 13.9 6.4 21.7s-13.9 10.7-21.7 6.4C91.2 453.6 0 375.3 0 256S91.2 58.4 136.4 33.9c7.8-4.2 17.5-1.3 21.7 6.4z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 192 512" fill={color}>
                <Path d="M159.2 36.4c2 4 .4 8.8-3.6 10.7-23.1 11.5-58.2 36.1-87.4 71.7C39 154.5 16 200.7 16 256s23 101.5 52.2 137.1c29.2 35.7 64.3 60.2 87.4 71.7 4 2 5.6 6.8 3.6 10.7s-6.8 5.6-10.7 3.6c-24.9-12.5-61.8-38.3-92.6-75.9C25 365.7 0 315.9 0 256s25-109.7 55.8-147.3c30.8-37.5 67.7-63.4 92.6-75.9 4-2 8.8-.4 10.7 3.6z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 192 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M154.6 46.2c9.8 14.7 5.8 34.6-8.9 44.4C120.1 107.7 64 167 64 256s56.1 148.3 81.8 165.4c14.7 9.8 18.7 29.7 8.9 44.4s-29.7 18.7-44.4 8.9C71.9 449 0 371.8 0 256S71.9 62.9 110.2 37.4c14.7-9.8 34.6-5.8 44.4 8.9z"
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
