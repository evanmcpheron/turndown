import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const PlugCircleMinusIcon: React.FC<
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
              <Svg viewBox="0 0 576 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M96 0C78.3 0 64 14.3 64 32v96h64V32c0-17.7-14.3-32-32-32m192 0c-17.7 0-32 14.3-32 32v96h64V32c0-17.7-14.3-32-32-32M32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 77.4 55 142 128 156.8V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-67.2c12.3-2.5 24.1-6.4 35.1-11.5-2.1-10.8-3.1-21.9-3.1-33.3 0-80.3 53.8-148 127.3-169.2.5-2.2.7-4.5.7-6.8 0-17.7-14.3-32-32-32zm544 208a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-64 0c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M128 24c0-13.3-10.7-24-24-24S80 10.7 80 24v88h48zm176 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v88h48zM24 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v64c0 80.2 59 146.6 136 158.2V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-73.8c15.2-2.3 29.7-6.7 43.1-12.9-2.1-10.8-3.1-21.9-3.1-33.3 0-7.1.4-14.1 1.2-20.9-18.3 13.1-40.9 20.9-65.2 20.9-61.9 0-112-50.1-112-112v-64h224v55.2c13.8-14.6 30-26.8 48-36V192h8c13.3 0 24-10.7 24-24s-10.7-24-24-24H24m552 224a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-64 0c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 576 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M128 16c0-8.8-7.2-16-16-16S96 7.2 96 16v96h32zm160 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v96h32zM16 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v64c0 83 63.1 151.2 144 159.2V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-96.8c17.3-1.7 33.7-6.2 48.9-12.9q-.9-9-.9-18.3c0-6 .3-11.8.9-17.6-19 11.2-41.2 17.6-64.9 17.6-70.7 0-128-57.3-128-128v-64h256v56.2c9.8-8.1 20.6-15.2 32-21V176h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H16m416 112a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m80-144c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512"
              </Svg>sName="aps-icon-svg"
                fill={color}
              >
                <Path
                   
                  d="M112 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v104h16zm176 0c0-4.4-3.6-8-8-8s-8 3.6-8 8v104h16zM8 144c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v80c0 81.3 63.8 147.6 144 151.8V504c0 4.4 3.6 8 8 8s8-3.6 8-8V391.8c20-1 39-6 56.3-14-.2-3.2-.3-6.5-.3-9.8 0-2.7.1-5.4.2-8.1-19.1 10.3-41 16.1-64.2 16.1-75.1 0-136-60.9-136-136v-80h272v66c5.1-3.8 10.5-7.3 16-10.5V160h32c4.4 0 8-3.6 8-8s-3.6-8-8-8H8m424 96a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m80-144c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512"
                 
                fill={color}
              </Svg>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M128 32v96H64V32C64 14.3 78.3 0 96 0s32 14.3 32 32m192 0v96h-64V32c0-17.7 14.3-32 32-32s32 14.3 32 32M0 192c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32 0 2.3-.3 4.6-.7 6.8C309.8 220 256 287.7 256 368c0 11.4 1.1 22.5 3.1 33.3-11.1 5.1-22.9 9-35.1 11.5V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-67.2C87 398 32 333.4 32 256v-32c-17.7 0-32-14.3-32-32"
                />
                <Path
                   
                  d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288m64-128H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16"
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
