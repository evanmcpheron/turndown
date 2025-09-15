import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const RightToLineIcon: React.FC<
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
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="m217.9 105.9 122.8 122.8c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9-18.7 0-33.9-15.2-33.9-33.9V320H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h128v-62.1c0-18.7 15.2-33.9 33.9-33.9 9 0 17.6 3.6 24 9.9M384 416V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M192 146.2 302 256 192 365.8V312c0-13.3-10.7-24-24-24H48v-64h120c13.3 0 24-10.7 24-24zM352 256c0-11.5-4.6-22.5-12.7-30.6L223.2 109.6c-8.7-8.7-20.5-13.6-32.8-13.6-25.6 0-46.4 20.8-46.4 46.4V176H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h96v33.6c0 25.6 20.8 46.4 46.4 46.4 12.3 0 24.1-4.9 32.8-13.6l116.1-115.8c8.1-8.1 12.7-19.1 12.7-30.6m48-168v336c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-13.3-10.7-24-24-24s-24 10.7-24 24"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M416 80v352c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16s-16 7.2-16 16m-96.8 174.2c.5.5.8 1.1.8 1.8s-.3 1.4-.8 1.8L187.3 382.2c-1.2 1.2-2.9 1.8-4.6 1.8-3.7 0-6.7-3-6.7-6.7V320c0-8.8-7.2-16-16-16H40c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8h120c8.8 0 16-7.2 16-16v-57.3c0-3.7 3-6.7 6.7-6.7 1.7 0 3.3.7 4.6 1.8zM352 256c0-9.5-3.9-18.6-10.8-25.1l-132-124.4C202 99.8 192.5 96 182.7 96c-21.4 0-38.7 17.3-38.7 38.7V176H40c-22.1 0-40 17.9-40 40v80c0 22.1 17.9 40 40 40h104v41.3c0 21.4 17.3 38.7 38.7 38.7 9.9 0 19.3-3.8 26.5-10.5l132-124.4c6.9-6.5 10.8-15.6 10.8-25.1"
                />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"
              </Svg>sName="aps-icon-svg"
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M432 72v368c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8s-8 3.6-8 8m-99.3 176c2.1 2.1 3.3 5 3.3 8s-1.2 5.9-3.3 8L200.6 395.8c-2.7 2.7-6.4 4.2-10.2 4.2-8 0-14.4-6.5-14.4-14.4V312c0-4.4-3.6-8-8-8H32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h136c4.4 0 8-3.6 8-8v-73.6c0-8 6.5-14.4 14.4-14.4 3.8 0 7.5 1.5 10.2 4.2zm19.3 8c0-7.2-2.9-14.2-8-19.3L211.9 104.9c-5.7-5.7-13.4-8.9-21.5-8.9-16.8 0-30.4 13.6-30.4 30.4V192H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h128v65.6c0 16.8 13.6 30.4 30.4 30.4 8.1 0 15.8-3.2 21.5-8.9L344 275.3c5.1-5.1 8-12.1 8-19.3"
                />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"
                 
                 fill={colors[colorName || "text"]} 
              </Svg>
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M384 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32"
                />
                <Path
                   
                  d="M340.7 228.7 217.9 105.9c-6.4-6.4-15-9.9-24-9.9-18.7 0-33.9 15.2-33.9 33.9V192H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h128v62.1c0 18.7 15.2 33.9 33.9 33.9 9 0 17.6-3.6 24-9.9l122.8-122.8c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3"
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
