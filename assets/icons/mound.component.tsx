import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const MoundIcon: React.FC<
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
                   
                  d="M144.1 179.2C173.8 127.7 228.6 96 288 96s114.2 31.7 143.9 83.2L540.4 368c12.3 21.3-3.1 48-27.7 48H63.3c-24.6 0-40-26.6-27.7-48z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M485 368H91l94.8-164.9c21-36.6 60-59.1 102.2-59.1s81.2 22.6 102.2 59.1zM288 96c-59.4 0-114.2 31.7-143.9 83.2L35.6 368c-12.3 21.3 3.1 48 27.7 48h449.4c24.6 0 40-26.6 27.7-48L431.9 179.2C402.2 127.7 347.4 96 288 96"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M512.7 384H63.3l108.6-188.8C195.8 153.6 240.1 128 288 128s92.2 25.6 116.1 67.2zM288 96c-59.4 0-114.2 31.7-143.9 83.2L35.6 368c-12.3 21.3 3.1 48 27.7 48h449.4c24.6 0 40-26.6 27.7-48L431.9 179.2C402.2 127.7 347.4 96 288 96"
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
                   
                  d="M526.6 376c6.1 10.7-1.6 24-13.9 24H63.3c-12.3 0-20-13.3-13.9-24L158 187.2c26.7-46.5 76.3-75.2 130-75.2s103.2 28.7 130 75.2zM288 96c-59.4 0-114.2 31.7-143.9 83.2L35.6 368c-12.3 21.3 3.1 48 27.7 48h449.4c24.6 0 40-26.6 27.7-48L431.9 179.2C402.2 127.7 347.4 96 288 96"
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
                  d="M144.1 179.2C173.8 127.7 228.6 96 288 96s114.2 31.7 143.9 83.2L540.4 368c12.3 21.3-3.1 48-27.7 48H63.3c-24.6 0-40-26.6-27.7-48z"
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
