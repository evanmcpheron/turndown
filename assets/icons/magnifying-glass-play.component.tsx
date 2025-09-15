import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const MagnifyingGlassPlayIcon: React.FC<
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
                   
                  d="M376 330.7c25.2-34.4 40-76.8 40-122.7C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c45.9 0 88.3-14.9 122.7-40l126.7 126.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3zM161.8 130.1c5-2.9 11.1-2.8 16 0l110.2 64c4.9 2.9 8 8.1 8 13.8s-3 11-8 13.8l-110.2 64c-4.9 2.9-11.1 2.9-16 0s-8-8.1-8-13.9V144c0-5.7 3.1-11 8-13.9"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M368 208a160 160 0 1 0-320 0 160 160 0 1 0 320 0m-30.9 163.1C301.7 399.2 256.8 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0zm-175.3-241c5-2.9 11.1-2.8 16 0l110.2 64c4.9 2.9 8 8.1 8 13.8s-3 11-8 13.8l-110.2 64c-4.9 2.9-11.1 2.9-16 0s-8-8.1-8-13.9V144c0-5.7 3.1-11 8-13.9"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 512 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M208 32a176 176 0 1 1 0 352 176 176 0 1 1 0-352m0 384c51.7 0 99-18.8 135.3-50l141.4 141.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L366 343.3c31.2-36.4 50-83.7 50-135.3C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208m40.1-208-62.4 36.2v-72.4zm47.9 0c0-5.7-3-11-8-13.8l-110.2-64c-4.9-2.9-11.1-2.9-16 0s-8 8.1-8 13.9V272c0 5.7 3.1 11 8 13.9s11.1 2.8 16 0l110.2-64c4.9-2.9 8-8.1 8-13.8z"
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
                   
                  d="M208 16a192 192 0 1 1 0 384 192 192 0 1 1 0-384m0 400c54.6 0 104.2-21 141.3-55.4l149 149c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-149-149C395 312.2 416 262.6 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208m64-208-110.2 64V144zm-102.2-77.8c-10.5-6.1-24 1.7-24 13.8v128c0 12.1 13.6 19.9 24 13.8l110.2-64c10.4-6.1 10.4-21.6 0-27.7l-110.2-64z"
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
                  d="M0 208a208 208 0 1 1 416 0 208 208 0 1 1-416 0m161.8-77.9c-5 2.9-8 8.1-8 13.9v128c0 5.7 3.1 11 8 13.9s11.1 2.8 16 0l110.2-64c4.9-2.9 8-8.1 8-13.8s-3-11-8-13.8l-110.2-64c-4.9-2.9-11.1-2.9-16 0z"
                />
                <Path
                   
                  d="M161.8 130.1c-5 2.9-8 8.1-8 13.9v128c0 5.7 3.1 11 8 13.9s11.1 2.8 16 0l110.2-64c4.9-2.9 8-8.1 8-13.8s-3-11-8-13.8l-110.2-64c-4.9-2.9-11.1-2.9-16 0zM330.7 376l126.7 126.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L376 330.7c-12.7 17.3-28 32.6-45.3 45.3"
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
