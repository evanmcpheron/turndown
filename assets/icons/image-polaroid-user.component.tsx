import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ImagePolaroidUserIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 32v192c0 17.7 14.3 32 32 32h16c0-35.3 28.7-64 64-64h96c35.3 0 64 28.7 64 64h16c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32m96 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M48 416c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-48H48zm286-96h66V96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v224h66c7.1-27.6 32.2-48 62-48h96c29.8 0 54.9 20.4 62 48M448 96v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64m-288 80a64 64 0 1 1 128 0 64 64 0 1 1-128 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M336 384H32v32c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-32zm-1.6-32H416V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v256h81.6c7.4-36.5 39.7-64 78.4-64h64c38.7 0 71 27.5 78.4 64m-187.7 0h154.6c-6.6-18.6-24.4-32-45.3-32h-64c-20.9 0-38.7 13.4-45.3 32M448 96v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64m-192 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M16 416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-64H16zm318.4-80H432V96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v240h97.6c7.4-36.5 39.7-64 78.4-64h64c38.7 0 71 27.5 78.4 64M130 336h188c-7.1-27.6-32.2-48-62-48h-64c-29.8 0-54.9 20.4-62 48M448 96v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64m-176 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 64h256c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32"
                />
                <Path d="M96 96c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h16c0-35.3 28.7-64 64-64h96c35.3 0 64 28.7 64 64h16c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zm64 96a64 64 0 1 1 128 0 64 64 0 1 1-128 0" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
