import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const PalletBoxesIcon: React.FC<
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
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M64 32C64 14.3 78.3 0 96 0h192c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm320 64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32zM0 352c0-17.7 14.3-32 32-32h576c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-64H32c-17.7 0-32-14.3-32-32m128 96h160v-64H128zm224 0h160v-64H352z"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M272 48H112v160h160zM112 0h160c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48m416 112h-96v96h96zm-96-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48M0 344c0-13.3 10.7-24 24-24h592c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v96h40c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40v-96H24c-13.3 0-24-10.7-24-24m112 120h184v-96H112zm232 0h184v-96H344z"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M304 32H112c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16M112 0h192c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48m416 128h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16m-96-32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48M0 368c0-8.8 7.2-16 16-16h608c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v96h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-96H16c-8.8 0-16-7.2-16-16m96 112h208v-96H96zm240 0h208v-96H336z"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M272 16H112c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V48c0-17.7-14.3-32-32-32M112 0h160c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48m416 112h-96c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32m-96-16h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48M0 360c0-4.4 3.6-8 8-8h624c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72v128h72c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h72V368H8c-4.4 0-8-3.6-8-8m96 136h216V368H96zm232 0h216V368H328z"
                  />
                </Svg >
              );

            case "duotone":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]} >
                  <Path
                    fill={colors[colorName || "text"]}
                    opacity={opacity || 0.5}
                    d="M32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v-64h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H32m96 64h160v64H128zm224 0h160v64H352z"
                  />
                  <Path

                    d="M96 0C78.3 0 64 14.3 64 32v192c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm320 64c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z"
                  />
                </Svg >
              );

            default:
              return null;
          }
        })()}
      </StyledIcon >
    );
  };
