import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ChartTreeMapIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M0 80c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48v112c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm0 240c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48v112c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zM304 32h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48m-48 208c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48zm48 112h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M176 80v112H48V80zM48 32C21.5 32 0 53.5 0 80v112c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm128 288v112H48V320zM48 272c-26.5 0-48 21.5-48 48v112c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V320c0-26.5-21.5-48-48-48zM304 80h160v32H304zm-48 0v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48m208 160v32H304v-32zm-160-48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48zm0 208h160v32H304zm-48 0v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M176 64c8.8 0 16 7.2 16 16v112c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16zM48 32C21.5 32 0 53.5 0 80v112c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm128 272c8.8 0 16 7.2 16 16v112c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V320c0-8.8 7.2-16 16-16zM48 272c-26.5 0-48 21.5-48 48v112c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V320c0-26.5-21.5-48-48-48zM304 64h160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H304c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16m-48 16v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48m208 144c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H304c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16zm-160-32c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48zm0 192h160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H304c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m-48 16v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M176 48c17.7 0 32 14.3 32 32v112c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32zM48 32C21.5 32 0 53.5 0 80v112c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm128 256c17.7 0 32 14.3 32 32v112c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM48 272c-26.5 0-48 21.5-48 48v112c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V320c0-26.5-21.5-48-48-48zM304 48h160c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H304c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32m-48 32v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48m208 128c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H304c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32zm-160-16c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48zm0 176h160c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H304c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32m-48 32v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H304c-26.5 0-48 21.5-48 48" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M304 192c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48zM48 272c-26.5 0-48 21.5-48 48v112c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V320c0-26.5-21.5-48-48-48z"
                />
                <Path d="M0 80c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48v112c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm256 0c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48zm48 272h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
