import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const OutdentIcon: React.FC<
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
                   
                  d="M0 64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64m192 128c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32m32 96h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32M0 448c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m.2-179.4c-8.2-6.4-8.2-18.9 0-25.3L102.1 164c10.5-8.2 25.8-.7 25.8 12.6v158.7c0 13.3-15.3 20.8-25.8 12.6z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M0 64c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 88 0 77.3 0 64m192 128c0-13.3 10.7-24 24-24h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24m24 104h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24M0 448c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m7-179.6C-.8 262-.8 250 7 243.6l94.8-78.1c10.4-8.6 26.2-1.2 26.2 12.4v156.2c0 13.5-15.7 20.9-26.2 12.4z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M0 64c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H16C7.2 48 0 55.2 0 64m192 128c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H208c-8.8 0-16 7.2-16 16m16 112c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16zM0 448c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16m96-236.2v88.4L42.3 256zM7 243.6C-.8 250-.8 262 7 268.4l94.8 78.1c10.4 8.6 26.2 1.2 26.2-12.4V177.9c0-13.5-15.7-20.9-26.2-12.4z"
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
                   
                  d="M0 64c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8m192 128c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8s-3.6-8-8-8H200c-4.4 0-8 3.6-8 8m8 120c-4.4 0-8 3.6-8 8s3.6 8 8 8h240c4.4 0 8-3.6 8-8s-3.6-8-8-8zM0 448c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8m17.2-192 94.8-78.1v156.2zM7 243.6C-.8 250-.8 262 7 268.4l94.8 78.1c10.4 8.6 26.2 1.2 26.2-12.4V177.9c0-13.5-15.7-20.9-26.2-12.4z"
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
                  d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32zm192 128c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32zm-32 160c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32H224c-17.7 0-32 14.3-32 32M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
                />
                <Path
                   
                  d="M.2 243.4c-8.2 6.4-8.2 18.9 0 25.3L102.1 348c10.5 8.2 25.8.7 25.8-12.6V176.7c0-13.3-15.3-20.8-25.8-12.6z"
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
