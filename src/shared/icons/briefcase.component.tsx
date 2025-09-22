import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const BriefcaseIcon: React.FC<
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
                <Path d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8m-56 8v40H64c-35.3 0-64 28.7-64 64v96h512v-96c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56m384 232H320v32c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-32H0v128c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M176 56v40h160V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m-48 40V56c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v40h64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM48 304v112c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V304H320v16c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-16zm144-48h272v-96c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v96z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M160 48v48h192V48c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16m-32 48V48c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v48h64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm240 32H64c-17.7 0-32 14.3-32 32v96h448v-96c0-17.7-14.3-32-32-32zm112 160H336v48c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-48H32v128c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32zm-272 0v48h96v-48z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M144 40v56h224V40c0-13.3-10.7-24-24-24H168c-13.3 0-24 10.7-24 24m-16 56V40c0-22.1 17.9-40 40-40h176c22.1 0 40 17.9 40 40v56h64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM16 272v144c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V272H336v48c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-48zm160-16h320v-96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v96zm16 16v48c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-48z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M192 288H0v128c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V288H320v32c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32z"
                />
                <Path d="M384 96h80c25.6 0 48 22.4 48 48v144H0V144c0-25.6 22.4-48 48-48h80V48c0-25.6 22.4-48 48-48h160c25.6 0 48 22.4 48 48v48m-48 0V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8v40z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
