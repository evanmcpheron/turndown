import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const RoadIcon: React.FC<
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
                   
                  d="M256 32h-74.8c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2c-2 5.8-3.1 12-3.1 18.2C0 455.5 24.5 480 54.6 480H256v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64h201.4c30.2 0 54.6-24.5 54.6-54.6 0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32H320v64c0 17.7-14.3 32-32 32s-32-14.3-32-32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32"
                />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M185.7 32c-30.4 0-57.5 19-67.7 47.6L8.6 383.6C-8.3 430.5 26.4 480 76.3 480h423.4c49.9 0 84.6-49.5 67.7-96.4L458 79.6C447.7 51 420.6 32 390.3 32zm-22.5 63.9c3.4-9.5 12.5-15.9 22.6-15.9H264v24c0 13.3 10.7 24 24 24s24-10.7 24-24V80h78.3c10.1 0 19.2 6.3 22.6 15.9l109.4 304c5.6 15.6-6 32.1-22.6 32.1H312v-24c0-13.3-10.7-24-24-24s-24 10.7-24 24v24H76.3c-16.6 0-28.2-16.5-22.6-32.1l109.4-304zM312 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 13.3 10.7 24 24 24s24-10.7 24-24z"
                />
              </Svg>
            );

          case "light":
            re</Svg>
              <Svg viewBox="0 0 576 512"
                 
                 fill={colors[colorName || "text"]} 
              >
                <Path
                   
                  d="M185.6 32c-26.9 0-50.9 16.8-60.1 42L8.5 394c-15.3 41.8 15.7 86 60.1 86h438.8c44.5 0 75.4-44.2 60.1-86l-117-320c-9.2-25.2-33.2-42-60.1-42zm-30.1 53c4.6-12.6 16.6-21 30.1-21H272v48c0 8.8 7.2 16 16 16s16-7.2 16-16V64h86.4c13.4 0 25.4 8.4 30.1 21l116.9 320c7.6 20.9-7.8 43-30.1 43H304v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H68.6c-22.2 0-37.7-22.1-30.1-43zM304 208c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
                   
                  d="M185.4 32C162 32 141 46.6 132.9 68.6L8.4 404.6C-5.1 441.1 22 480 61 480h454c39 0 66.1-38.9 52.5-75.4l-124.4-336C435 46.6 414 32 390.6 32zm-37.5 42.1c5.8-15.7 20.8-26.1 37.5-26.1H280v56c0 4.4 3.6 8 8 8s8-3.6 8-8V48h94.6c16.7 0 31.7 10.4 37.5 26.1l124.4 336c9.7 26.1-9.6 53.9-37.5 53.9H296v-56c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H61c-27.9 0-47.2-27.8-37.5-53.9zM296 200c0-4.4-3.6-8-8-8s-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8z"
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
                  d="M256 32h64v64c0 17.7-14.3 32-32 32s-32-14.3-32-32zm32 160c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m0 192c17.7 0 32 14.3 32 32v64h-64v-64c0-17.7 14.3-32 32-32"
                />
                <Path
                   
                  d="M256 32h-74.8c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2c-2 5.8-3.1 12-3.1 18.2C0 455.5 24.5 480 54.6 480H256v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v64h201.4c30.2 0 54.6-24.5 54.6-54.6 0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32H320v64c0 17.7-14.3 32-32 32s-32-14.3-32-32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32"
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
