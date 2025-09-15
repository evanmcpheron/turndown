import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const MonitorWaveformIcon: React.FC<
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
                   
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm16 64h416c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16m16 160h96c6.1 0 11.6 3.4 14.3 8.8l17.7 35.4 49.7-99.4c2.7-5.4 8.3-8.8 14.3-8.8s11.6 3.4 14.3 8.8l27.6 55.2H400c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80c-6.1 0-11.6-3.4-14.3-8.8L288 243.8l-49.7 99.4c-2.7 5.4-8.3 8.8-14.3 8.8s-11.6-3.4-14.3-8.8L182.1 288H96v96h384V128H96z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M64 80c-8.8 0-16 7.2-16 16v144h128c8.4 0 16.2 4.4 20.6 11.7l25.5 42.5 60.4-120.9c3.9-7.8 11.8-12.9 20.5-13.2s17 4.1 21.5 11.6l41 68.3H424c13.3 0 24 10.7 24 24s-10.7 24-24 24h-72c-8.4 0-16.2-4.4-20.6-11.7l-25.5-42.5-60.4 120.9c-3.9 7.8-11.8 12.9-20.5 13.2s-17-4.1-21.5-11.6l-41-68.3H48v128c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M64 64c-17.7 0-32 14.3-32 32v160h144c5.3 0 10.3 2.7 13.3 7.1l30.8 46.2 53-139c2.3-5.9 7.8-10 14.2-10.3s12.3 3.1 15.1 8.8l43.5 87.2H432c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-6.1 0-11.6-3.4-14.3-8.8L290 215.7l-51 134c-2.1 5.6-7.2 9.5-13.2 10.2s-11.8-2-15.1-7L167.4 288H32v128c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
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
                   
                  d="M512 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm215.6 128c-3.2.2-5.9 2.2-7.1 5.1L214 318.7l-39.4-59.1c-1.5-2.2-4-3.6-6.7-3.6H80V128c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V272h83.7l45.6 68.4c1.7 2.5 4.6 3.8 7.6 3.5s5.5-2.3 6.6-5.1l57.5-151 39.9 79.7c1.4 2.7 4.1 4.4 7.2 4.4h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-75.2l-45.8-91.6c-1.4-2.8-4.4-4.6-7.6-4.4zM64 128v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32"
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
                  d="M512 96H64v160h128c6.1 0 11.6 3.4 14.3 8.8l17.7 35.4 49.7-99.4c2.7-5.4 8.3-8.8 14.3-8.8s11.6 3.4 14.3 8.8l27.6 55.2H400c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80c-6.1 0-11.6-3.4-14.3-8.8L288 243.8l-49.7 99.4c-2.7 5.4-8.3 8.8-14.3 8.8s-11.6-3.4-14.3-8.8L182.1 288H64v128h448z"
                />
                <Path
                   
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm448 64v320H64V96z"
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
