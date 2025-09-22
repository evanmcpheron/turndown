import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const GoalNetIcon: React.FC<
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
                <Path d="M64 128c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-53-43-96-96-96H96C43 32 0 75 0 128v320c0 17.7 14.3 32 32 32s32-14.3 32-32zm112 0c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-64h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-64h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64v-48c0-8.8-7.2-16-16-16m80 256h-64v-64h64zm96 0h-64v-64h64zm96 0h-64v-64h64zm0-96h-64v-64h64zm-96 0h-64v-64h64zm-96 0h-64v-64h64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M48 120c0-22.1 17.9-40 40-40h464c22.1 0 40 17.9 40 40v336c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-48.6-39.4-88-88-88H88C39.4 32 0 71.4 0 120v336c0 13.3 10.7 24 24 24s24-10.7 24-24zm128 8c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-64h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-64h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64v-48c0-8.8-7.2-16-16-16m80 256h-64v-64h64zm96 0h-64v-64h64zm96 0h-64v-64h64zm0-96h-64v-64h64zm-96 0h-64v-64h64zm-96 0h-64v-64h64z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M32 112c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48v352c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-44.2-35.8-80-80-80H80C35.8 32 0 67.8 0 112v352c0 8.8 7.2 16 16 16s16-7.2 16-16zm144 0c-8.8 0-16 7.2-16 16v64H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v64H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v64H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64v-64h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64v-64h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v64h-64v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v64h-64v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v64h-64v-64c0-8.8-7.2-16-16-16m16 112h64v64h-64zm96 0h64v64h-64zm96 0h64v64h-64zM192 384v-64h64v64zm96 0v-64h64v64zm96 0v-64h64v64z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M16 104c0-30.9 25.1-56 56-56h496c30.9 0 56 25.1 56 56v368c0 4.4 3.6 8 8 8s8-3.6 8-8V104c0-39.8-32.2-72-72-72H72C32.2 32 0 64.2 0 104v368c0 4.4 3.6 8 8 8s8-3.6 8-8zm136-8c-4.4 0-8 3.6-8 8v56H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h72v96H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h72v96H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h72v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h96v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h96v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h96v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h72c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72v-96h72c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72v-96h72c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72v-56c0-4.4-3.6-8-8-8s-8 3.6-8 8v56h-96v-56c0-4.4-3.6-8-8-8s-8 3.6-8 8v56h-96v-56c0-4.4-3.6-8-8-8s-8 3.6-8 8v56h-96v-56c0-4.4-3.6-8-8-8m8 80h96v96h-96zm112 0h96v96h-96zm112 0h96v96h-96zM160 384v-96h96v96zm112 0v-96h96v96zm112 0v-96h96v96z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M160 144c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v64h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v64h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-64h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-64h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48zm32 240h64v-64h-64zm96 0h64v-64h-64zm96 0h64v-64h-64zm64-160h-64v64h64zm-96 0h-64v64h64zm-96 0h-64v64h64z"
                />
                <Path d="M96 96c-17.7 0-32 14.3-32 32v320c0 17.7-14.3 32-32 32S0 465.7 0 448V128c0-53 43-96 96-96h448c53 0 96 43 96 96v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7-14.3-32-32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
