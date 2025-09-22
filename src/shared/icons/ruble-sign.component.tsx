import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const RubleSignIcon: React.FC<
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

                    d="M96 32c-17.7 0-32 14.3-32 32v192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H128v-32h112c79.5 0 144-64.5 144-144S319.5 32 240 32zm144 224H128V96h112c44.2 0 80 35.8 80 80s-35.8 80-80 80"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M111.3 32C85.2 32 64 53.2 64 79.3V272H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h184c13.3 0 24-10.7 24-24s-10.7-24-24-24H112v-48h128c79.5 0 144-64.5 144-144S319.5 32 240 32zM240 272H112V80h128c53 0 96 43 96 96s-43 96-96 96"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M104.7 32C82.2 32 64 50.2 64 72.7V288H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h208c8.8 0 16-7.2 16-16s-7.2-16-16-16H96v-64h144c79.5 0 144-64.5 144-144S319.5 32 240 32zM96 288V72.7c0-4.8 3.9-8.7 8.7-8.7H240c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M96.7 32C78.6 32 64 46.6 64 64.7V288H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v64H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v80c0 4.4 3.6 8 8 8s8-3.6 8-8v-80h232c4.4 0 8-3.6 8-8s-3.6-8-8-8H80v-64h152c75.1 0 136-60.9 136-136S307.1 32 232 32zM232 288H80V64.7C80 55.5 87.5 48 96.7 48H232c66.3 0 120 53.7 120 120s-53.7 120-120 120"
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
      d="M64 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32zm64 64h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H128z"
    />
    <Path

      d="M64 64c0-17.7 14.3-32 32-32h144c79.5 0 144 64.5 144 144s-64.5 144-144 144H128v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32zm64 192h112c44.2 0 80-35.8 80-80s-35.8-80-80-80H128z"
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
