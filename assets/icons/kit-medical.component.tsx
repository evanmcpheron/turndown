import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const KitMedicalIcon: React.FC<
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
                   
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h32V32zm64 0v448h320V32zm384 448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64h-32v448zM256 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M144 432h288V80H144zm-48 0V80H64c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16zM64 32h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64m416 400h32c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16h-32zM256 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M128 448h320V64H128zm-32 0V64H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32zM64 32h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64m416 416h32c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32h-32zM272 144h32c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32h-32c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h32v-32c0-17.7 14.3-32 32-32m0 32v48c0 4.2-1.7 8.3-4.7 11.3s-7.1 4.7-11.3 4.7h-48v32h48c8.8 0 16 7.2 16 16v48h32v-48c0-8.8 7.2-16 16-16h48v-32h-48c-8.8 0-16-7.2-16-16v-48z"
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
                   
                  d="M112 464h352V48H112zm-16 0V48H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48zM64 32h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64m416 432h32c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48h-32zM264 168v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h56c4.4 0 8 3.6 8 8v56c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-56c0-4.4 3.6-8 8-8h56c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-56c-4.4 0-8-3.6-8-8v-56c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8m8-24h32c13.3 0 24 10.7 24 24v48h48c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-48v48c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-48h-48c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h48v-48c0-13.3 10.7-24 24-24"
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
                  d="M96 480h32V32H96zM448 32v448h32V32z"
                />
                <Path
                   
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h32V32zm64 0v448h320V32zm384 448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64h-32v448zM256 176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48z"
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
