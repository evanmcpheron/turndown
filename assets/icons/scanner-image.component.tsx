import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ScannerImageIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone";
  }
> = ({
  type,
  size,
  color: colorName,
  active,
  style,
  opacity,
  haptic,
  ...more
}) => {
  const { colors } = useTheme();

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
    color: colors[colorName || "text"],
  });


  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M79.1 35.8c-15.6-8.3-35-2.4-43.3 13.2S33.4 84 49 92.3L416 288H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-76.8c0-23.6-13-45.3-33.9-56.5zM64 384a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M66.7 34.5c-11.9-5.9-26.3-1.1-32.2 10.7s-1.1 26.3 10.7 32.2L466.3 288H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-72.4c0-33.3-18.8-63.8-48.6-78.7zM528 352v64c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h448c8.8 0 16 7.2 16 16m-408 32a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M55.2 33.7c-7.9-4-17.5-.7-21.5 7.2s-.7 17.5 7.2 21.5L492.2 288H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-72.4c0-30.3-17.1-58-44.2-71.6zM544 352v64c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32m-440 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m104-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512"
              </Svg>sName="aps-icon-svg"
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M43.7 32.9c-3.9-2-8.8-.5-10.8 3.4s-.5 8.8 3.4 10.8L503.9 288H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-65c0-27-15.1-51.7-39-64zM560 352v64c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h448c26.5 0 48 21.5 48 48m-352 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0M96 400a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              </Svg>
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64zm0 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <Path
                   
                  d="M35.8 48.9c8.3-15.6 27.7-21.5 43.3-13.2l446.1 238c20.9 11.2 36.6 29.4 44.7 50.9C559.6 303 537.5 288 512 288h-96L48.9 92.2c-15.6-8.3-21.5-27.7-13.1-43.3M96 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
