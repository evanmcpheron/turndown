import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const OIcon: React.FC<
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
                   
                  d="M224 96a160 160 0 1 0 0 320 160 160 0 1 0 0-320m224 160a224 224 0 1 1-448 0 224 224 0 1 1 448 0"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M224 80a176 176 0 1 0 0 352 176 176 0 1 0 0-352m224 176a224 224 0 1 1-448 0 224 224 0 1 1 448 0"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M224 64a192 192 0 1 0 0 384 192 192 0 1 0 0-384m224 192a224 224 0 1 1-448 0 224 224 0 1 1 448 0"
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
                   
                  d="M224 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416m224 208a224 224 0 1 1-448 0 224 224 0 1 1 448 0"
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
                  d="M224 96a160 160 0 1 0 0 320 160 160 0 1 0 0-320m224 160a224 224 0 1 1-448 0 224 224 0 1 1 448 0"
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
