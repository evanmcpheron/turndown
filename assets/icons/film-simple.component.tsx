import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const FilmSimpleIcon: React.FC<
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
                <Path d="M384 32H128v48c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h256v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zM64 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm336-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16M64 304c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm336-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M160 432h192V80H160v352M112 80H64c-8.8 0-16 7.2-16 16v72h64zm0 136H48v80h64zm0 128H48v72c0 8.8 7.2 16 16 16h48zM400 80v88h64V96c0-8.8-7.2-16-16-16zm64 136h-64v80h64zm0 128h-64v88h48c8.8 0 16-7.2 16-16zM64 32h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M128 352v96h256V64H128v288m-32 16H32v48c0 17.7 14.3 32 32 32h32zm0-32v-64H32v64zm0-96v-64H32v64zm0-96V64H64c-17.7 0-32 14.3-32 32v48zm320 128v64h64v-64zm0 96v80h32c17.7 0 32-14.3 32-32v-48zm0-128h64v-64h-64zm0-96h64V96c0-17.7-14.3-32-32-32h-32zM64 32h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M112 104V48H64c-26.5 0-48 21.5-48 48v8zm-96 16v80h96v-80zM0 216V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216m16 80h96v-80H16zm0 16v80h96v-80zm96 96H16v8c0 26.5 21.5 48 48 48h48zm16 56h256V48H128v416M400 48v56h96v-8c0-26.5-21.5-48-48-48zm96 72h-96v80h96zm0 96h-96v80h96zm0 96h-96v80h96zm0 96h-96v56h48c26.5 0 48-21.5 48-48z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M160 32h192v448H160z"
                />
                <Path d="M160 32h-48v48c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V34C20.4 41.1 0 66.2 0 96v320c0 29.8 20.4 54.9 48 62v-46c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48zm192 448h48v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v46c27.6-7.1 48-32.2 48-62V96c0-29.8-20.4-54.9-48-62v46c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V32h-48zM64 160h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m336 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zM64 288h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m336 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
