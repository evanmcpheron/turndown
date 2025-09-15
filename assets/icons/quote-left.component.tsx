import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const QuoteLeftIcon: React.FC<
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
              <Svg viewBox="0 0 448 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216m256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M0 216C0 149.7 53.7 96 120 96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-39.8 0-72 32.2-72 72v10c5.1-1.3 10.5-2 16-2h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216m48 72v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16m336-16h-64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16m-128 48V216c0-66.3 53.7-120 120-120h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16c-39.8 0-72 32.2-72 72v10c5.1-1.3 10.5-2 16-2h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 448 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M0 208C0 146.1 50.1 96 112 96h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-44.2 0-80 35.8-80 80v24.6c9.4-5.4 20.3-8.6 32-8.6h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V208m32 80v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32m352-32h-64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32m-128 64V208c0-61.9 50.1-112 112-112h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-44.2 0-80 35.8-80 80v24.6c9.4-5.4 20.3-8.6 32-8.6h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64z"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"
              </Svg>sName="aps-icon-svg"
                fill={color}
              >
                <Path
                   
                  d="M0 216C0 149.7 53.7 96 120 96h16c4.4 0 8 3.6 8 8s-3.6 8-8 8h-16c-57.4 0-104 46.6-104 104v34.7C29.2 234.4 49.4 224 72 224h48c39.8 0 72 32.2 72 72v48c0 39.8-32.2 72-72 72H72c-39.8 0-72-32.2-72-72V216m16 96v32c0 30.9 25.1 56 56 56h48c30.9 0 56-25.1 56-56v-48c0-30.9-25.1-56-56-56H72c-30.9 0-56 25.1-56 56zm240-96c0-66.3 53.7-120 120-120h16c4.4 0 8 3.6 8 8s-3.6 8-8 8h-16c-57.4 0-104 46.6-104 104v34.7c13.2-16.3 33.4-26.7 56-26.7h48c39.8 0 72 32.2 72 72v48c0 39.8-32.2 72-72 72h-48c-39.8 0-72-32.2-72-72V216m16 96v32c0 30.9 25.1 56 56 56h48c30.9 0 56-25.1 56-56v-48c0-30.9-25.1-56-56-56h-48c-30.9 0-56 25.1-56 56z"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"
                 
                fill={color}
              </Svg>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M376 96c-66.3 0-120 53.7-120 120v136c0 35.3 28.7 64 64 64h64c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64h-64v-8c0-30.9 25.1-56 56-56h8c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
                <Path
                   
                  d="M120 96C53.7 96 0 149.7 0 216v136c0 35.3 28.7 64 64 64h64c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H64v-8c0-30.9 25.1-56 56-56h8c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};</Svg>
