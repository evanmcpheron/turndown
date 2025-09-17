import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";

export const SquareGitlabIcon: React.FC<
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
                <Path d="M0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96m337.5 12.5 44.6 116.4.4 1.2c5.6 16.8 7.2 35.2 2.3 52.5-5 17.2-15.4 32.4-29.8 43.3l-.2.1-68.4 51.2-54.1 40.9c-.5.2-1.1.5-1.7.8-2 1-4.4 2-6.7 2-3 0-6.8-1.8-8.3-2.8l-54.2-40.9-67.9-50.9-.4-.3-.2-.1c-14.3-10.8-24.8-26-29.7-43.3s-4.2-35.7 2.2-52.5l.5-1.2 44.7-116.4c.9-2.3 2.5-4.3 4.5-5.6 1.6-1 3.4-1.6 5.2-1.8 1.3-.7 2.1-.4 3.4.1.6.2 1.2.5 2 .7 1 .4 1.6.9 2.4 1.5.6.4 1.2 1 2.1 1.5 1.2 1.4 2.2 3 2.7 4.8l29.2 92.2H285l30.2-92.2c.5-1.8 1.4-3.4 2.6-4.8s2.8-2.4 4.5-3.1c1.7-.6 3.6-.9 5.4-.7s3.6.8 5.2 1.8c2 1.3 3.7 3.3 4.6 5.6" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
