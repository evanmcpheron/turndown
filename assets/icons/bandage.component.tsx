import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BandageIcon: React.FC<
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
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M480 416h96c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-96zM448 96H192v320h256zM64 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h96V96zm184 112a24 24 0 1 1 48 0 24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48M248 304a24 24 0 1 1 48 0 24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M448 144v224h112c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32zM192 96h368c44.2 0 80 35.8 80 80v160c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V176c0-44.2 35.8-80 80-80zm0 272V144H80c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32zm80-136a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0M272 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M480 128v256h80c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zm-32 0H192v256h256zM160 384V128H80c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48zm0-288h400c44.2 0 80 35.8 80 80v160c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V176c0-44.2 35.8-80 80-80zm112 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-72 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path d="M480 112v288h80c35.3 0 64-28.7 64-64V176c0-35.3-28.7-64-64-64zm-16 0H176v288h288zM160 400V112H80c-35.3 0-64 28.7-64 64v160c0 35.3 28.7 64 64 64zm0-304h400c44.2 0 80 35.8 80 80v160c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V176c0-44.2 35.8-80 80-80zm112 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32m80 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-80 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32m80 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M480 416h96c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-96zM448 96H192v320h256zM64 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h96V96zm184 112a24 24 0 1 1 48 0 24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48M248 304a24 24 0 1 1 48 0 24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
                <Path d="M192 96h-32v320h32zm288 0h-32v320h32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
