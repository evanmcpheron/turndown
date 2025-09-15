import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const WalletIcon: React.FC<
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
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h368c17.7 0 32-14.3 32-32s-14.3-32-32-32zm352 240a32 32 0 1 1 0 64 32 32 0 1 1 0-64" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M88 32C39.4 32 0 71.4 0 120v272c0 48.6 39.4 88 88 88h336c48.6 0 88-39.4 88-88V216c0-48.6-39.4-88-88-88H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c22.1 0 40 17.9 40 40v176c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V120c0-22.1 17.9-40 40-40h368c13.3 0 24-10.7 24-24s-10.7-24-24-24zm296 304a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M80 32C35.8 32 0 67.8 0 112v288c0 44.2 35.8 80 80 80h352c44.2 0 80-35.8 80-80V176c0-44.2-35.8-80-80-80H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h384c8.8 0 16-7.2 16-16s-7.2-16-16-16zm304 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path d="M72 32C32.2 32 0 64.2 0 104v304c0 39.8 32.2 72 72 72h368c39.8 0 72-32.2 72-72V184c0-39.8-32.2-72-72-72H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h368c30.9 0 56 25.1 56 56v224c0 30.9-25.1 56-56 56H72c-30.9 0-56-25.1-56-56V104c0-30.9 25.1-56 56-56h400c4.4 0 8-3.6 8-8s-3.6-8-8-8zm304 264a24 24 0 1 1 48 0 24 24 0 1 1-48 0m64 0a40 40 0 1 0-80 0 40 40 0 1 0 80 0" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 512 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M0 80c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48v56.6c-9.4-5.4-20.3-8.6-32-8.6H48c-26.5 0-48-21.5-48-48"
                />
                <Path d="M48 128h401.3c11.2.2 21.6 3.6 30.7 8.9v-.3c19.1 11.1 32 31.7 32 55.4v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V80c0 26.5 21.5 48 48 48m368 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
