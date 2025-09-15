import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowUpToDottedLineIcon: React.FC<
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
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M32 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0m128-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-9.4 233.4-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4V448c0 17.7 14.3 32 32 32s32-14.3 32-32V269.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M32 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0m128-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-142.5 87.6c-4.5-4.8-10.9-7.6-17.5-7.6s-12.9 2.7-17.5 7.6l-128 136c-9.1 9.7-8.6 24.8 1 33.9s24.8 8.6 33.9-1l86.6-92V440c0 13.3 10.7 24 24 24s24-10.7 24-24V228.5l86.5 91.9c9.1 9.7 24.3 10.1 33.9 1s10.1-24.3 1-33.9l-128-136z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="m363.3 292.7-128-128c-6.2-6.2-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L208 214.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V214.6l100.7 100.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6M32 40a24 24 0 1 0 0 48 24 24 0 1 0 0-48m384 0a24 24 0 1 0 0 48 24 24 0 1 0 0-48M152 64a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48m120 24a24 24 0 1 0-48 0 24 24 0 1 0 48 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M48 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m80 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m96 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32m96 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32m112-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-66.3 234.3-136-136c-3.1-3.1-8.2-3.1-11.3 0l-136 136c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L216 187.3V472c0 4.4 3.6 8 8 8s8-3.6 8-8V187.3l122.3 122.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M64 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m96 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128-32a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
                />
                <Path d="M201.4 169.4c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 269.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V269.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
