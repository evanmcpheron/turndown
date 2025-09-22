import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const DiagramLeanCanvasIcon: React.FC<
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
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M512 96v208h64V96zm-48 0h-64v80h64zm-112 0h-64v208h64zm-112 0h-64v80h64zm-112 0H64v208h64zM64 352v64h232v-64zm280 64h232v-64H344zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm240 208v-80h-64v80zm224-80h-64v80h64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M512 80v216h80V96c0-8.8-7.2-16-16-16zm-48 0h-64v88h64zm-112 0h-64v216h64zm-112 0h-64v88h64zm-112 0H64c-8.8 0-16 7.2-16 16v200h80zM48 344v72c0 8.8 7.2 16 16 16h232v-88zm296 88h232c8.8 0 16-7.2 16-16v-72H344zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm240 200v-80h-64v80zm224-80h-64v80h64z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M512 64v256h96V96c0-17.7-14.3-32-32-32zm-32 0h-96v128h96zm-128 0h-64v256h64zm-96 0h-96v128h96zm-128 0H64c-17.7 0-32 14.3-32 32v224h96zM32 352v64c0 17.7 14.3 32 32 32h240v-96zm304 96h240c17.7 0 32-14.3 32-32v-64H336zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 224v-96h-96v96zm224-96h-96v96h96z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M512 48v288h112V96c0-26.5-21.5-48-48-48zm-16 0H384v144h112zm-128 0h-96v288h96zm-112 0H144v144h112zm-128 0H64c-26.5 0-48 21.5-48 48v240h112zM16 352v64c0 26.5 21.5 48 48 48h248V352zm312 112h248c26.5 0 48-21.5 48-48v-64H328zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 240V208H144v128zm240-128H384v128h112z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M128 96H64v208h64zm448 0h-64v208h64z"
                />
                <Path d="M512 96v208h64V96zm-48 0h-64v80h64zm-112 0h-64v208h64zm-112 0h-64v80h64zm-112 0H64v208h64zM64 352v64h232v-64zm280 64h232v-64H344zM0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm240 208v-80h-64v80zm224-80h-64v80h64z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
