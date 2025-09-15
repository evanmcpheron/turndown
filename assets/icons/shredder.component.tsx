import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ShredderIcon: React.FC<
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
                   
                  d="M64 64c0-35.3 28.7-64 64-64h226.7c17 0 33.3 6.7 45.3 18.7L429.3 48c12 12 18.7 28.3 18.7 45.3V192c35.3 0 64 28.7 64 64v96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-96c0-35.3 28.7-64 64-64zm320 29.3L354.7 64H128v128h256zM432 296a24 24 0 1 0 0-48 24 24 0 1 0 0 48M40 416h48v72c0 13.3-10.7 24-24 24s-24-10.7-24-24zm96 0h48v72c0 13.3-10.7 24-24 24s-24-10.7-24-24zm96 0h48v72c0 13.3-10.7 24-24 24s-24-10.7-24-24zm96 0h48v72c0 13.3-10.7 24-24 24s-24-10.7-24-24zm96 0h48v72c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M112 192V64c0-8.8 7.2-16 16-16h229.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c3 3 4.7 7.1 4.7 11.3V192zM64 64v128c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-35.3-28.7-64-64-64V90.5c0-17-6.7-33.3-18.7-45.3l-26.6-26.5C390.7 6.7 374.5 0 357.5 0H128C92.7 0 64 28.7 64 64m384 176c8.8 0 16 7.2 16 16v80H48v-80c0-8.8 7.2-16 16-16zM40 488c0 13.3 10.7 24 24 24s24-10.7 24-24v-72H40zm96 0c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h-48zm96 0c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h-48zm96 0c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h-48zm96 0c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h-48z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 512 512"
                 
                fill={color}
              >
                <Path
                   
                  d="M96 64v128h320V90.5c0-8.5-3.4-16.6-9.4-22.6l-26.5-26.5c-6-6-14.1-9.4-22.6-9.4H128c-17.7 0-32 14.3-32 32M64 192V64c0-35.3 28.7-64 64-64h229.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 18.7 28.3 18.7 45.3V192c35.3 0 64 28.7 64 64v96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-96c0-35.3 28.7-64 64-64m0 32c-17.7 0-32 14.3-32 32v96h448v-96c0-17.7-14.3-32-32-32zm344 48a24 24 0 1 1 48 0 24 24 0 1 1-48 0M96 496v-80h32v80c0 8.8-7.2 16-16 16s-16-7.2-16-16m96 0v-80h32v80c0 8.8-7.2 16-16 16s-16-7.2-16-16m96 0v-80h32v80c0 8.8-7.2 16-16 16s-16-7.2-16-16m96 0v-80h32v80c0 8.8-7.2 16-16 16s-16-7.2-16-16"
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
                   
                  d="M80 64v128h352V90.5c0-12.7-5.1-24.9-14.1-33.9l-26.5-26.5c-9-9-21.2-14.1-33.9-14.1H128c-26.5 0-48 21.5-48 48M64 192V64c0-35.3 28.7-64 64-64h229.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 18.7 28.3 18.7 45.3V192c35.3 0 64 28.7 64 64v96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-96c0-35.3 28.7-64 64-64m0 16c-26.5 0-48 21.5-48 48v96c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16v-96c0-26.5-21.5-48-48-48zm352 64a16 16 0 1 1 32 0 16 16 0 1 1-32 0M56 504v-88h16v88c0 4.4-3.6 8-8 8s-8-3.6-8-8m96 0v-88h16v88c0 4.4-3.6 8-8 8s-8-3.6-8-8m96 0v-88h16v88c0 4.4-3.6 8-8 8s-8-3.6-8-8m96 0v-88h16v88c0 4.4-3.6 8-8 8s-8-3.6-8-8m96 0v-88h16v88c0 4.4-3.6 8-8 8s-8-3.6-8-8"
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
                  d="M40 384v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384zM64 64v128h384V90.5c0-17-6.7-33.3-18.7-45.3l-26.6-26.5C390.7 6.7 374.5 0 357.5 0H128C92.7 0 64 28.7 64 64m72 320v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384zm96 0v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384zm96 0v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384zm96 0v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384z"
                />
                <Path
                   
                  d="M64 192c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-35.3-28.7-64-64-64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
