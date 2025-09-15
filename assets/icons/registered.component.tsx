import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const RegisteredIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-360c0-13.3 10.7-24 24-24h88c44.2 0 80 35.8 80 80 0 28-14.4 52.7-36.3 67l34.1 75.1c5.5 12.1.1 26.3-11.9 31.8s-26.3.1-31.8-11.9l-37.2-82H208v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V152m48 88h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64z"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-360v208c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h60.9l37.2 81.9c5.5 12.1 19.7 17.4 31.8 11.9s17.4-19.7 11.9-31.8l-34.1-75c21.8-14.3 36.3-39 36.3-67 0-44.2-35.8-80-80-80h-88c-13.3 0-24 10.7-24 24m48 88v-64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-336v192c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h71.4l59.3 88.9c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-50.5-75.7c31-11 53.2-40.6 53.2-75.4 0-44.2-35.8-80-80-80h-64c-26.5 0-48 21.5-48 48m32 80v-80c0-8.8 7.2-16 16-16h64c26.5 0 48 21.5 48 48s-21.5 48-48 48z"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"
              </Svg>sName="aps-icon-svg"
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-360v224c0 4.4 3.6 8 8 8s8-3.6 8-8v-88h96c3.8 0 7.5-.3 11.2-.8l62.1 93.2c2.5 3.7 7.4 4.7 11.1 2.2s4.7-7.4 2.2-11.1l-59-88.5c30.6-11.2 52.4-40.5 52.4-75 0-44.2-35.8-80-80-80h-88c-13.3 0-24 10.7-24 24m16 120V152c0-4.4 3.6-8 8-8h88c35.3 0 64 28.7 64 64s-28.7 64-64 64z"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              </Svg>
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-360c0-13.3 10.7-24 24-24h88c44.2 0 80 35.8 80 80 0 28-14.4 52.7-36.3 67l34.1 75.1c5.5 12.1.1 26.3-11.9 31.8s-26.3.1-31.8-11.9l-37.2-82H208v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V152m48 88h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64z"
                />
                <Path
                   
                  d="M184 128c-13.3 0-24 10.7-24 24v208c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h60.9l37.2 81.9c5.5 12.1 19.7 17.4 31.8 11.9s17.4-19.7 11.9-31.8l-34.1-75c21.8-14.3 36.3-39 36.3-67 0-44.2-35.8-80-80-80zm88 112h-64v-64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32"
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
