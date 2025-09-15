import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const LockKeyholeOpenIcon: React.FC<
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
                   
                  d="M432 64c-44.2 0-80 35.8-80 80v48h32c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h224v-48C288 64.5 352.5 0 432 0s144 64.5 144 144v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48c0-44.2-35.8-80-80-80M256 384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M432 48c-44.2 0-80 35.8-80 80v64h32c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h240v-64C304 57.3 361.3 0 432 0s128 57.3 128 128v72c0 13.3-10.7 24-24 24s-24-10.7-24-24v-72c0-44.2-35.8-80-80-80m-48 192H64c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V256c0-8.8-7.2-16-16-16M256 376h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64c13.3 0 24 10.7 24 24s-10.7 24-24 24"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M448 32c-53 0-96 43-96 96v64h16c44.2 0 80 35.8 80 80v160c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V272c0-44.2 35.8-80 80-80h240v-64C320 57.3 377.3 0 448 0s128 57.3 128 128v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-53-43-96-96-96M80 224c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48H80m184 144h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c8.8 0 16 7.2 16 16s-7.2 16-16 16"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 576 512"
              </Svg>sName="aps-icon-svg"
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M448 16c-61.9 0-112 50.1-112 112v64h48c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h256v-64C320 57.3 377.3 0 448 0s128 57.3 128 128v88c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88c0-61.9-50.1-112-112-112M64 208c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V256c0-26.5-21.5-48-48-48H64m192 160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16zm0-48c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              </Svg>
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M432 64c-44.2 0-80 35.8-80 80v48h-64v-48C288 64.5 352.5 0 432 0s144 64.5 144 144v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48c0-44.2-35.8-80-80-80"
                />
                <Path
                   
                  d="M64 192c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64zm192 192h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32"
                />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};</Svg>
