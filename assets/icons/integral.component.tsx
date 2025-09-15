import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const IntegralIcon: React.FC<
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
              <Svg viewBox="0 0 320 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M216 64c-13.3 0-24 10.7-24 24v336c0 48.6-39.4 88-88 88s-88-39.4-88-88v-8c0-17.7 14.3-32 32-32s32 14.3 32 32v8c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-48.6 39.4-88 88-88s88 39.4 88 88v8c0 17.7-14.3 32-32 32s-32-14.3-32-32v-8c0-13.3-10.7-24-24-24"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 320 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M216 48c-17.7 0-32 14.3-32 32v352c0 44.2-35.8 80-80 80s-80-35.8-80-80v-16c0-13.3 10.7-24 24-24s24 10.7 24 24v16c0 17.7 14.3 32 32 32s32-14.3 32-32V80c0-44.2 35.8-80 80-80s80 35.8 80 80v16c0 13.3-10.7 24-24 24s-24-10.7-24-24V80c0-17.7-14.3-32-32-32"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 320 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M216 32c-22.1 0-40 17.9-40 40v368c0 39.8-32.2 72-72 72s-72-32.2-72-72v-24c0-8.8 7.2-16 16-16s16 7.2 16 16v24c0 22.1 17.9 40 40 40s40-17.9 40-40V72c0-39.8 32.2-72 72-72s72 32.2 72 72v24c0 8.8-7.2 16-16 16s-16-7.2-16-16V72c0-22.1-17.9-40-40-40"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 320 512"
              </Svg>sName="aps-icon-svg"
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M220 16c-28.7 0-52 23.3-52 52v376c0 37.6-30.4 68-68 68s-68-30.4-68-68v-20c0-4.4 3.6-8 8-8s8 3.6 8 8v20c0 28.7 23.3 52 52 52s52-23.3 52-52V68c0-37.6 30.4-68 68-68s68 30.4 68 68v20c0 4.4-3.6 8-8 8s-8-3.6-8-8V68c0-28.7-23.3-52-52-52"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 320 512"
                 
                 fill={colors[colorName || "text"]} 
              </Svg>
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M216 64c-13.3 0-24 10.7-24 24v336c0 48.6-39.4 88-88 88s-88-39.4-88-88v-8c0-17.7 14.3-32 32-32s32 14.3 32 32v8c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-48.6 39.4-88 88-88s88 39.4 88 88v8c0 17.7-14.3 32-32 32s-32-14.3-32-32v-8c0-13.3-10.7-24-24-24"
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
