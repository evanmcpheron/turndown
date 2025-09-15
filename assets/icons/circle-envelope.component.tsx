import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const CircleEnvelopeIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone";
  }
> = ({ type, size, color, active, style, opacity, haptic, ...more }) => {
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
    color,
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M128 192c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v9.3l-119.3 54.3c-2.7 1.2-5.7 1.9-8.7 1.9s-5.9-.6-8.7-1.9L128 201.3zm149.9 92.7L384 236.5V320c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-83.5l106.1 48.3c6.9 3.1 14.3 4.8 21.9 4.8s15-1.6 21.9-4.8z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-7.3-256.4c2.2 1.2 4.7 1.9 7.3 1.9s5.1-.6 7.3-1.9l120.6-66.4c-1.4-16.3-15.2-29.2-31.9-29.2H160c-16.7 0-30.5 12.9-31.9 29.3l120.6 66.4zm30 28c-7 3.8-14.8 5.8-22.7 5.8s-15.8-2-22.7-5.8L128 225.7V320c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-94.3z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m160-96h192c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32m192 48.5V192H160v16.5l88.5 47.1c2.3 1.2 4.9 1.9 7.5 1.9s5.2-.6 7.5-1.9zm0 36.2-73.4 39.1c-7 3.7-14.7 5.6-22.6 5.6s-15.6-1.9-22.6-5.6l-73.4-39V320h192v-75.2z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m160-80c-8.8 0-16 7.2-16 16v7.3l4.2 2.5 97.1 59.2c3.2 2 6.9 3 10.7 3s7.5-1 10.7-3l97.2-59.2 4.2-2.5V192c0-8.8-7.2-16-16-16zm208 42-93 56.6c-5.7 3.5-12.3 5.3-19 5.3s-13.3-1.8-19-5.3L144 218v102c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16zm-208-58h192c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M128 192c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v9.3l-119.3 54.3c-2.7 1.2-5.7 1.9-8.7 1.9s-5.9-.6-8.7-1.9L128 201.3zm149.9 92.7L384 236.5V320c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-83.5l106.1 48.3c6.9 3.1 14.3 4.8 21.9 4.8s15-1.6 21.9-4.8z"
                />
                <Path d="M160 160c-17.7 0-32 14.3-32 32v9.3l119.3 54.3c2.7 1.2 5.7 1.9 8.7 1.9s5.9-.6 8.7-1.9L384 201.3V192c0-17.7-14.3-32-32-32zm224 76.5-106.1 48.2c-6.9 3.1-14.3 4.8-21.9 4.8s-15-1.6-21.9-4.8L128 236.5V320c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
