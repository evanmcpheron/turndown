import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const RectangleVerticalHistoryIcon: React.FC<
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

                    d="M256 0c-35.3 0-64 28.7-64 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM96 72v368c0 13.3 10.7 24 24 24s24-10.7 24-24V72c0-13.3-10.7-24-24-24S96 58.7 96 72M0 120v272c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24S0 106.7 0 120"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M256 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zm-64 16c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64zm-96 8c0-13.3 10.7-24 24-24s24 10.7 24 24v368c0 13.3-10.7 24-24 24s-24-10.7-24-24zM0 120c0-13.3 10.7-24 24-24s24 10.7 24 24v272c0 13.3-10.7 24-24 24S0 405.3 0 392z"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M256 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-64 32c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64zm-96 0c0-8.8 7.2-16 16-16s16 7.2 16 16v384c0 8.8-7.2 16-16 16s-16-7.2-16-16zM0 112c0-8.8 7.2-16 16-16s16 7.2 16 16v288c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M256 16c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zm-64 48c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64zm-96-8c0-4.4 3.6-8 8-8s8 3.6 8 8v400c0 4.4-3.6 8-8 8s-8-3.6-8-8zM0 104c0-4.4 3.6-8 8-8s8 3.6 8 8v304c0 4.4-3.6 8-8 8s-8-3.6-8-8z"
                  />
                </Svg >
              );

            case "duotone":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]} >
                  <Path
                    fill={colors[colorName || "text"]}
                    opacity={opacity || 0.5}
                    d="M120 48c-13.3 0-24 10.7-24 24v368c0 13.3 10.7 24 24 24s24-10.7 24-24V72c0-13.3-10.7-24-24-24M24 96c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24"
                  />
                  <Path

                    d="M192 64c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64z"
                  />
                </Svg >
              );

            default:
              return null;
          }
        })()}
      </StyledIcon >
    );
  };</Svg >
