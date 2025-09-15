import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const IntersectionIcon: React.FC<
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
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M32 480c17.7 0 32-14.3 32-32V224c0-70.7 57.3-128 128-128s128 57.3 128 128v224c0 17.7 14.3 32 32 32s32-14.3 32-32V224c0-106-86-192-192-192S0 118 0 224v224c0 17.7 14.3 32 32 32"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M24 480c13.3 0 24-10.7 24-24V224c0-79.5 64.5-144 144-144s144 64.5 144 144v232c0 13.3 10.7 24 24 24s24-10.7 24-24V224c0-106-86-192-192-192S0 118 0 224v232c0 13.3 10.7 24 24 24"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M16 480c8.8 0 16-7.2 16-16V224c0-88.4 71.6-160 160-160s160 71.6 160 160v240c0 8.8 7.2 16 16 16s16-7.2 16-16V224c0-106-86-192-192-192S0 118 0 224v240c0 8.8 7.2 16 16 16"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512"
              </Svg>sName="aps-icon-svg"
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M24 480c4.4 0 8-3.6 8-8V208c0-88.4 71.6-160 160-160s160 71.6 160 160v264c0 4.4 3.6 8 8 8s8-3.6 8-8V208c0-97.2-78.8-176-176-176S16 110.8 16 208v264c0 4.4 3.6 8 8 8"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              </Svg>
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M32 480c17.7 0 32-14.3 32-32V224c0-70.7 57.3-128 128-128s128 57.3 128 128v224c0 17.7 14.3 32 32 32s32-14.3 32-32V224c0-106-86-192-192-192S0 118 0 224v224c0 17.7 14.3 32 32 32"
                />
                <Path   d="" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};</Svg>
