import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const SignsPostIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M224 32H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h377.4c4.2 0 8.3-1.7 11.3-4.7l48-48c6.2-6.2 6.2-16.4 0-22.6l-48-48c-3-3-7.1-4.7-11.3-4.7H288c0-17.7-14.3-32-32-32s-32 14.3-32 32m256 224c0-17.7-14.3-32-32-32H288v-32h-64v32H70.6c-4.2 0-8.3 1.7-11.3 4.7l-48 48c-6.2 6.2-6.2 16.4 0 22.6l48 48c3 3 7.1 4.7 11.3 4.7H448c17.7 0 32-14.3 32-32zM288 480v-96h-64v96c0 17.7 14.3 32 32 32s32-14.3 32-32"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M232 24c0-13.3 10.7-24 24-24s24 10.7 24 24v8h160.3c4.9 0 9.5 2.2 12.5 6l51.2 64c4.7 5.8 4.7 14.1 0 20l-51.2 64c-3 3.8-7.6 6-12.5 6H280v32h168c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H280v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V384H71.7c-4.9 0-9.5-2.2-12.5-6L8 314c-4.7-5.8-4.7-14.1 0-20l51.2-64c3-3.8 7.6-6 12.5-6H232v-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h168zM80 80v64h344.9l25.6-32-25.6-32zm352 256v-64H87.1l-25.6 32 25.6 32z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M240 16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h168.3c4.9 0 9.5 2.2 12.5 6l51.2 64c4.7 5.8 4.7 14.1 0 20l-51.2 64c-3 3.8-7.6 6-12.5 6H272v32h176c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H272v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H71.7c-4.9 0-9.5-2.2-12.5-6L8 314c-4.7-5.8-4.7-14.1 0-20l51.2-64c3-3.8 7.6-6 12.5-6H240v-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h176zm192.6 48H64v96h368.6l38.4-48zM79.4 256 41 304l38.4 48H448v-96z"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"
              </Svg>sName="aps-icon-svg"
                fill={color}
              >
                <Path
                   
                  d="M248 8c0-4.4 3.6-8 8-8s8 3.6 8 8v40h176.8c4.6 0 8.9 2 12 5.4l49.8 56c5.4 6.1 5.4 15.2 0 21.3l-49.8 56c-3 3.4-7.4 5.4-12 5.4H264v48h184c17.7 0 32 14.3 32 32v80c0 17.7-14.3 32-32 32H264V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V384H71.2c-4.6 0-8.9-2-12-5.4l-49.8-56c-5.4-6.1-5.4-15.2 0-21.3l49.8-56c3-3.4 7.4-5.4 12-5.4H248V192H64c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32h184zm192.8 56H64c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h376.8l49.8-56zM71.2 256l-49.8 56 49.8 56H448c8.8 0 16-7.2 16-16v-80c0-8.8-7.2-16-16-16z"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              </Svg>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M224 32v32h64V32c0-17.7-14.3-32-32-32s-32 14.3-32 32m64 160h-64v32h64zm0 288V352h-64v128c0 17.7 14.3 32 32 32s32-14.3 32-32"
                />
                <Path
                   
                  d="M64 64h377.4c4.2 0 8.3 1.7 11.3 4.7l48 48c6.2 6.2 6.2 16.4 0 22.6l-48 48c-3 3-7.1 4.7-11.3 4.7H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32m384 160c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H70.6c-4.2 0-8.3-1.7-11.3-4.7l-48-48c-6.2-6.2-6.2-16.4 0-22.6l48-48c3-3 7.1-4.7 11.3-4.7z"
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
