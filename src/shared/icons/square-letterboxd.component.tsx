import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styled";

export const SquareLetterboxdIcon: React.FC<
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
          case "brands":
            return (
              <Svg viewBox="0 0 448 512" fill={colors[colorName || "text"]}>
                <Path d="M384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM105.1 187C66.4 187 35 218.3 35 257s31.4 70 70.1 70c24.8 0 46.5-12.8 59-32.2l.5-.7-.4-.6c-6.5-10.6-10.2-23.1-10.2-36.5 0-13.6 3.9-26.3 10.6-37.1-12.4-19.8-34.4-32.9-59.5-32.9m118.9 0c-24.8 0-46.5 12.8-59 32.2l-.5.7.4.6c6.5 10.6 10.2 23.1 10.2 36.5 0 13.6-3.9 26.3-10.6 37.1 12.4 19.7 34.4 32.9 59.5 32.9 24.8 0 46.5-12.8 59-32.2l.5-.7-.4-.6c-6.5-10.6-10.2-23.1-10.2-36.5 0-13.6 3.9-26.3 10.6-37.1-12.4-19.7-34.4-32.9-59.5-32.9m118.9 0c-24.8 0-46.5 12.8-59 32.2l-.5.7.4.6c6.5 10.6 10.2 23.1 10.2 36.5 0 13.6-3.9 26.3-10.6 37.1 12.4 19.8 34.4 32.9 59.5 32.9 38.7 0 70.1-31.3 70.1-70s-31.4-70-70.1-70" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
