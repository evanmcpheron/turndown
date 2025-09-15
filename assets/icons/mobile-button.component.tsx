import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const MobileButtonIcon: React.FC<
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

                    d="M80 0C44.7 0 16 28.7 16 64v384c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm112 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M80 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zM16 64C16 28.7 44.7 0 80 0h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64zm176 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M96 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM32 64C32 28.7 60.7 0 96 0h192c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm160 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M96 16c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zM32 64C32 28.7 60.7 0 96 0h192c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm144 368a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
                  />
                </Svg >
              );

            case "duotone":
              return (
  <Svg viewBox="0 0 384 512"

    fill={colors[colorName || "text"]} 
    <Path
      fill={colors[colorName || "text"]}
      opacity={opacity || 0.5}
      d="M368 384H16v64c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64zm-176 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
    />
    <Path

      d="M16 64C16 28.7 44.7 0 80 0h224c35.3 0 64 28.7 64 64v320H16z"
    />
  </Svg >
    );

          default:
return null;
        }
      }) ()}
    </StyledIcon >
  );
};
