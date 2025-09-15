import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CrateEmptyIcon: React.FC<
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
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M48 224c-26.5 0-48 21.5-48 48v80h512v-80c0-26.5-21.5-48-48-48zm464 160H0v80c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48zM64 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32M48 448a16 16 0 1 1 32 0 16 16 0 1 1-32 0m400-176a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-16 176a16 16 0 1 1 32 0 16 16 0 1 1-32 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M56 272c-4.4 0-8 3.6-8 8v64h416v-64c0-4.4-3.6-8-8-8zm-8 120v64c0 4.4 3.6 8 8 8h400c4.4 0 8-3.6 8-8v-64zM0 280c0-30.9 25.1-56 56-56h400c30.9 0 56 25.1 56 56v176c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56zm400 24a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32M80 304a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M480 384v72c0 13.3-10.7 24-24 24H56c-13.3 0-24-10.7-24-24v-72zm0-32H32v-72c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24zm32 0v-72c0-30.9-25.1-56-56-56H56c-30.9 0-56 25.1-56 56v176c0 30.9 25.1 56 56 56h400c30.9 0 56-25.1 56-56V352M96 304a16 16 0 1 0-32 0 16 16 0 1 0 32 0m336 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32M96 432a16 16 0 1 0-32 0 16 16 0 1 0 32 0m336 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M496 376v80c0 22.1-17.9 40-40 40H56c-22.1 0-40-17.9-40-40v-80zm0-16H16v-80c0-22.1 17.9-40 40-40h400c22.1 0 40 17.9 40 40zm16 0v-80c0-30.9-25.1-56-56-56H56c-30.9 0-56 25.1-56 56v176c0 30.9 25.1 56 56 56h400c30.9 0 56-25.1 56-56v-96M96 304a16 16 0 1 0-32 0 16 16 0 1 0 32 0m336 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32M96 432a16 16 0 1 0-32 0 16 16 0 1 0 32 0m336 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M48 224c-26.5 0-48 21.5-48 48v80h512v-80c0-26.5-21.5-48-48-48zm464 160H0v80c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48zM64 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32M48 448a16 16 0 1 1 32 0 16 16 0 1 1-32 0m400-176a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-16 176a16 16 0 1 1 32 0 16 16 0 1 1-32 0"
                />
                <Path d="M64 304a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 160a16 16 0 1 0 0-32 16 16 0 1 0 0 32m400-176a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
