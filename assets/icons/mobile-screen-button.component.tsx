import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const MobileScreenButtonIcon: React.FC<
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
                   
                  d="M16 64C16 28.7 44.7 0 80 0h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64zm208 384a32 32 0 1 0-64 0 32 32 0 1 0 64 0m80-384H80v320h224z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M64 448c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-80H64zm0-128h256V64c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zM16 64C16 28.7 44.7 0 80 0h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64zm176 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 384 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M288 32c17.7 0 32 14.3 32 32v256H64V64c0-17.7 14.3-32 32-32zm32 320v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-96zM96 0C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm120 416a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                   
                  d="M288 16c26.5 0 48 21.5 48 48v288H48V64c0-26.5 21.5-48 48-48zm48 352v80c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48v-80zM96 0C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm96 448a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0"
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
                  d="M16 64C16 28.7 44.7 0 80 0h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64zm208 384a32 32 0 1 0-64 0 32 32 0 1 0 64 0m80-384H80v320h224z"
                />
                <Path   d="M80 64h224v320H80z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};</Svg>
