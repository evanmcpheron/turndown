import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const RugIcon: React.FC<
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
              <Svg viewBox="0 0 640 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M24 64h56v384H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-40h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-32h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-32h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-40h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24m88 0h416v384H112zm528 24c0 13.3-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56V64h56c13.3 0 24 10.7 24 24"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M24 64C10.7 64 0 74.7 0 88s10.7 24 24 24h8v40h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v32h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v32h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v40h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h592c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-32h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-32h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24H24m56 48h48v288H80V112m384 288H176V112h288zm48 0V112h48v288z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 640 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M16 64C7.2 64 0 71.2 0 80s7.2 16 16 16h16v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h608c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-48h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-48h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V96h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H16m48 32h64v320H64V96m448 0h64v320h-64zm-32 0v320H160V96z"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512"
              </Svg>sName="aps-icon-svg"
                fill={color}
              >
                <Path
                   
                  d="M0 72c0-4.4 3.6-8 8-8h624c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v80h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v72h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v72h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v80h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-80H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-72H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-72H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V80H8c-4.4 0-8-3.6-8-8m48 96v264h80V80H48zm96 264h352V80H144zM512 80v352h80V80z"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512"
                 
                fill={color}
              </Svg>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M80 64v384h80V64zm400 0v384h80V64zm-32 0H192v384h256z"
                />
                <Path
                   
                  d="M24 64C10.7 64 0 74.7 0 88s10.7 24 24 24h8v40h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v32h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v32h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v40h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h56V64H24m592 0h-56v384h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-32h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-32h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24m-456 0v384h32V64zm320 0h-32v384h32z"
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
