import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const JugDetergentIcon: React.FC<
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

                    d="M96 24c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v24h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-13.3 0-24-10.7-24-24s10.7-24 24-24h8zM0 256c0-70.7 57.3-128 128-128h128c70.7 0 128 57.3 128 128v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 0v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-17.7-14.3-32-32-32s-32 14.3-32 32"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M120 0c-13.3 0-24 10.7-24 24v24h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V24c0-13.3-10.7-24-24-24zm136 176c44.2 0 80 35.8 80 80v192c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V256c0-44.2 35.8-80 80-80zm-128-48C57.3 128 0 185.3 0 256v192c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V256c0-70.7-57.3-128-128-128zm128 96c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-17.7-14.3-32-32-32"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M128 64V32h64v32zm-32 0H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V24c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24zm32 96h128c53 0 96 43 96 96v192c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V256c0-53 43-96 96-96m0-32C57.3 128 0 185.3 0 256v192c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V256c0-70.7-57.3-128-128-128zm128 80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48s48-21.5 48-48v-96c0-26.5-21.5-48-48-48m-16 48c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 384 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M120 16h80c4.4 0 8 3.6 8 8v56h-96V24c0-4.4 3.6-8 8-8M96 80H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24V24c0-13.3-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24zm160 64c61.9 0 112 50.1 112 112v192c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V256c0-61.9 50.1-112 112-112zm-128-16C57.3 128 0 185.3 0 256v192c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V256c0-70.7-57.3-128-128-128zm152 80c-22.1 0-40 17.9-40 40v80c0 22.1 17.9 40 40 40s40-17.9 40-40v-80c0-22.1-17.9-40-40-40m-24 40c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
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
      d="M120 0c-13.3 0-24 10.7-24 24v24h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V24c0-13.3-10.7-24-24-24z"
    />
    <Path

      d="M128 128C57.3 128 0 185.3 0 256v224c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V256c0-70.7-57.3-128-128-128zm160 96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-17.7 14.3-32 32-32"
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
