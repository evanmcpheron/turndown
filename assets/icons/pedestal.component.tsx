import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const PedestalIcon: React.FC<
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
                   
                  d="M96 0C60.7 0 32 28.7 32 64v352h384V64c0-35.3-28.7-64-64-64zm24 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48m184 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M352 48H96c-8.8 0-16 7.2-16 16v368H32V64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64v368h-48V64c0-8.8-7.2-16-16-16M24 464h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24m96-352a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M352 32H96c-17.7 0-32 14.3-32 32v384H32V64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64v384h-32V64c0-17.7-14.3-32-32-32M16 480h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16m96-384a16 16 0 1 1 32 0 16 16 0 1 1-32 0m208-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                   
                  d="M352 16H96c-26.5 0-48 21.5-48 48v400H32V64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64v400h-16V64c0-26.5-21.5-48-48-48M8 496h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8M96 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m192-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m16 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M32 64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64v384H32zm112 24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m184 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
                />
                <Path
                   
                  d="M144 88a24 24 0 1 0-48 0 24 24 0 1 0 48 0m208 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
