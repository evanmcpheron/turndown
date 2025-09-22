import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";
export const RoadBarrierIcon: React.FC<
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
                <Path d="M32 32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32s32-14.3 32-32V266.3L149.2 96H64V64c0-17.7-14.3-32-32-32m373.2 64h-74.4l-5.4 10.7L234.8 288h74.3l5.4-10.7zm-42.4 192h74.3l5.4-10.7L533.2 96h-74.4l-5.4 10.7zm-160-192-5.4 10.7L106.8 288h74.3l5.4-10.7L277.2 96zm288 192H576v160c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v53.7z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M24 32c13.3 0 24 10.7 24 24v24h544V56c0-13.3 10.7-24 24-24s24 10.7 24 24v400c0 13.3-10.7 24-24 24s-24-10.7-24-24V304H48v152c0 13.3-10.7 24-24 24S0 469.3 0 456V56c0-13.3 10.7-24 24-24m568 224V128h-21.2l-64 128zm-544 0h21.2l64-128H48zm341.2-128h-74.4l-64 128h74.3l64-128zm-10.4 128h74.3l64-128h-74.3zm-192-128-64 128h74.3l64-128z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M16 32c8.8 0 16 7.2 16 16v32h576V48c0-8.8 7.2-16 16-16s16 7.2 16 16v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V304H32v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.8 7.2-16 16-16m592 240V112h-38.1l-80 160zm-576 0h38.1l80-160H32zm374.1-160h-92.2l-80 160h92.2zm35.8 0-80 160h92.2l80-160zm-256 0-80 160h92.2l80-160z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M8 32c4.4 0 8 3.6 8 8v40h608V40c0-4.4 3.6-8 8-8s8 3.6 8 8v432c0 4.4-3.6 8-8 8s-8-3.6-8-8V304H16v168c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-4.4 3.6-8 8-8m616 256V96h-7.1l-1.8 3.6L520.9 288zm-608 0h7.1l1.8-3.6L119.1 96H16zM599.1 96H456.9l-1.8 3.6L360.9 288h142.2l1.8-3.6zm-462.2 0-1.8 3.6L40.9 288h142.2l1.8-3.6L279.1 96zm158.2 3.6L200.9 288h142.2l1.8-3.6L439.1 96H296.9z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M405.2 96h-74.4l-5.4 10.7L234.8 288h74.3l5.4-10.7zm-42.4 192h74.3l5.4-10.7L533.2 96h-74.4l-5.4 10.7zm-160-192-5.4 10.7L106.8 288h74.3l5.4-10.7L277.2 96zm288 192H576V117.7zM64 96v170.3L149.2 96z"
                />
                <Path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v384c0 17.7 14.3 32 32 32s32-14.3 32-32zm576 0c0-17.7-14.3-32-32-32s-32 14.3-32 32v384c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
