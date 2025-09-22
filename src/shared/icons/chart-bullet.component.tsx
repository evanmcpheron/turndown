import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const ChartBulletIcon: React.FC<
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
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M264 32c13.3 0 24 10.7 24 24v8h176c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H288v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h192v-8c0-13.3 10.7-24 24-24m-104 96v32h80v-32zm128 0v32h160v-32zm48 256v-32h-80v32zm0 64H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h288v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h80c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-80v8c0 13.3-10.7 24-24 24s-24-10.7-24-24zm48-96v32h64v-32z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M264 32c13.3 0 24 10.7 24 24v8h176c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H288v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h192v-8c0-13.3 10.7-24 24-24m-104 80v64h80v-64zm128 0v64h176v-64zm-176 0H48v64h64zm248 144c13.3 0 24 10.7 24 24v8h80c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-80v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h288v-8c0-13.3 10.7-24 24-24m-136 80v64h112v-64zm160 0v64h80v-64zm-208 0H48v64h128z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M272 32c8.8 0 16 7.2 16 16v16h176c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H288v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h208V48c0-8.8 7.2-16 16-16M160 96v96h96V96zm128 0v96h176c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-160 0H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h80zm240 160c8.8 0 16 7.2 16 16v16h80c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-80v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h304v-16c0-8.8 7.2-16 16-16M224 416h128v-96H224zm160-96v96h80c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-192 0H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h144z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M280 32c4.4 0 8 3.6 8 8v24h176c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H288v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h224V40c0-4.4 3.6-8 8-8M160 80v128h112V80zm128 0v128h176c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm-144 0H48c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h96zm232 176c4.4 0 8 3.6 8 8v24h80c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-80v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h320v-24c0-4.4 3.6-8 8-8m-152 48v128h144V304zm160 0v128h80c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm-176 0H48c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h160z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M160 64v64h80V64zm288 96H288v64h176c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H288v64h160zm-288 0v64h80v-64zm224 224v64h80c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-80v64h64v32zm-48-32v-64h-80v64zm0 32h-80v64h80z"
                />
                <Path d="M264 32c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24M48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h112V64zm0 224c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h208V288zm336-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
