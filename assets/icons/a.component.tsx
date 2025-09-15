import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const AIcon: React.FC<
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
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M221.5 51.7C216.6 39.8 204.9 32 192 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3.9 35 17.2 41.8s35-.9 41.8-17.2L93.3 384h197.4l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96zM264 320H120l72-172.8z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M214.1 46.7C210.4 37.8 201.7 32 192 32s-18.4 5.8-22.1 14.7l-168 400c-5.1 12.2.6 26.3 12.8 31.4s26.3-.6 31.4-12.8L80.3 384h223.4l34.1 81.3c5.1 12.2 19.2 18 31.4 12.8s18-19.2 12.8-31.4l-168-400zM283.6 336H100.4L192 118z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M206.7 41.8c-2.5-5.9-8.3-9.8-14.7-9.8s-12.2 3.8-14.7 9.8l-176 416c-3.4 8.1.4 17.5 8.5 21s17.5-.4 21-8.5L67.2 384h249.6l36.5 86.2c3.4 8.1 12.8 11.9 21 8.5s11.9-12.8 8.5-21l-176-416zM303.2 352H80.8L192 89.1z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path d="M199.4 36.9c-1.3-3-4.2-4.9-7.4-4.9s-6.1 1.9-7.4 4.9l-184 432c-1.7 4.1.2 8.8 4.2 10.5s8.8-.2 10.5-4.2L61 368h262l45.6 107.1c1.7 4.1 6.4 6 10.5 4.2s6-6.4 4.2-10.5l-184-432zM316.2 352H67.8L192 60.4z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M221.5 51.7C216.6 39.8 204.9 32 192 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3.9 35 17.2 41.8s35-.9 41.8-17.2L93.3 384h197.4l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96zM264 320H120l72-172.8z"
                />
                <Path d="" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
