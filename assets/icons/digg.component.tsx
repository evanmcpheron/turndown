import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";

export const DiggIcon: React.FC<
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
              <Svg viewBox="0 0 512 512" fill={colors[colorName || "text"]}>
                <Path d="M81.7 172.3H0v174.4h132.7V96h-51zm0 133.4H50.9v-92.3h30.8zm297.2-133.4v174.4h81.8v28.5h-81.8V416H512V172.3zm81.8 133.4h-30.8v-92.3h30.8zm-235.6 41h82.1v28.5h-82.1V416h133.3V172.3H225.1zm51.2-133.3h30.8v92.3h-30.8zM153.3 96h51.3v51h-51.3zm0 76.3h51.3v174.4h-51.3z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
