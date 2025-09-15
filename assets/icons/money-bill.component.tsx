import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const MoneyBillIcon: React.FC<
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

                    d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm64 320H64v-64c35.3 0 64 28.7 64 64M64 192v-64h64c0 35.3-28.7 64-64 64m384 192c0-35.3 28.7-64 64-64v64zm64-192c-35.3 0-64-28.7-64-64h64zm-224-32a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M112 112c0 35.3-28.7 64-64 64v160c35.3 0 64 28.7 64 64h352c0-35.3 28.7-64 64-64V176c-35.3 0-64-28.7-64-64zM0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm288 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M480 96c0 35.3 28.7 64 64 64v-32c0-17.7-14.3-32-32-32zm-32 0H128c0 53-43 96-96 96v128c53 0 96 43 96 96h320c0-53 43-96 96-96V192c-53 0-96-43-96-96M32 384c0 17.7 14.3 32 32 32h32c0-35.3-28.7-64-64-64zm512-32c-35.3 0-64 28.7-64 64h32c17.7 0 32-14.3 32-32zM64 96c-17.7 0-32 14.3-32 32v32c35.3 0 64-28.7 64-64zM0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm352 128a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-160 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 576 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M64 80c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zM0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm536 56h-8c-39.8 0-72-32.2-72-72v-8c0-4.4 3.6-8 8-8s8 3.6 8 8v8c0 30.9 25.1 56 56 56h8c4.4 0 8 3.6 8 8s-3.6 8-8 8m-504-8c0-4.4 3.6-8 8-8h8c30.9 0 56-25.1 56-56v-8c0-4.4 3.6-8 8-8s8 3.6 8 8v8c0 39.8-32.2 72-72 72h-8c-4.4 0-8-3.6-8-8m504 152c4.4 0 8 3.6 8 8s-3.6 8-8 8h-8c-30.9 0-56 25.1-56 56v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8c0-39.8 32.2-72 72-72zm-504 8c0-4.4 3.6-8 8-8h8c39.8 0 72 32.2 72 72v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8c0-30.9-25.1-56-56-56h-8c-4.4 0-8-3.6-8-8m336-80a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-176 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"
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
                    d="M448 128H128c0 35.3-28.7 64-64 64v128c35.3 0 64 28.7 64 64h320c0-35.3 28.7-64 64-64V192c-35.3 0-64-28.7-64-64m-160 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
                  />
                  <Path

                    d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm384 64c0 35.3 28.7 64 64 64v128c-35.3 0-64 28.7-64 64H128c0-35.3-28.7-64-64-64V192c35.3 0 64-28.7 64-64z"
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
