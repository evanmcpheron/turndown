import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ParagraphIcon: React.FC<
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
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M192 32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V96h-32v352c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-32c-88.4 0-160-71.6-160-160S103.6 32 192 32"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M32 192c0-88.4 71.6-160 160-160h232c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v376c0 13.3-10.7 24-24 24s-24-10.7-24-24V80h-48v376c0 13.3-10.7 24-24 24s-24-10.7-24-24V352h-48c-88.4 0-160-71.6-160-160m208 112V80h-48c-61.9 0-112 50.1-112 112s50.1 112 112 112z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M32 192c0-88.4 71.6-160 160-160h240c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v400c0 8.8-7.2 16-16 16s-16-7.2-16-16V64h-64v400c0 8.8-7.2 16-16 16s-16-7.2-16-16V352h-64c-88.4 0-160-71.6-160-160m224 128V64h-64c-70.7 0-128 57.3-128 128s57.3 128 128 128z"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"
              </Svg>sName="aps-icon-svg"
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M32 176C32 96.5 96.5 32 176 32h256c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64v424c0 4.4-3.6 8-8 8s-8-3.6-8-8V48h-80v424c0 4.4-3.6 8-8 8s-8-3.6-8-8V320h-80c-79.5 0-144-64.5-144-144m224 128V48h-80c-70.7 0-128 57.3-128 128s57.3 128 128 128z"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              </Svg>
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M320 448V96h64v352c0 17.7-14.3 32-32 32s-32-14.3-32-32"
                />
                <Path
                   
                  d="M192 32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H288v352c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-32c-88.4 0-160-71.6-160-160S103.6 32 192 32"
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
