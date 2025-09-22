import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const LaptopSlashIcon: React.FC<
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
                <Path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-14-10.9c14.3-13.9 23.2-33.4 23.2-55 0-10.6-8.6-19.2-19.2-19.2h-98.6L154.8 96H512v256h64V96c0-35.3-28.7-64-64-64H128c-14.4 0-27.8 4.8-38.5 12.9zM128 197l-64-50.4V352h64zm359.2 283-121.9-96H19.2C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-20.3-15.9c18.2-17.5 29.5-42 29.5-69.2 0-17.7-14.3-32-32-32H481.4l-347-272H512c8.8 0 16 7.2 16 16v224h48V96c0-35.3-28.7-64-64-64H128c-14.4 0-27.8 4.8-38.5 12.9zM542.6 400h46.6c-3.3 9.3-9.4 17.3-17.3 23l-29.4-23zM112 184.4l-48-37.8V320h48zM385.7 400l-60.9-48H32c-17.7 0-32 14.3-32 32 0 53 43 96 96 96h391.2l-60.9-48H96c-20.9 0-38.7-13.4-45.3-32z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zM500.3 480l-40.5-32h-383c-20.3 0-37.4-13.5-42.9-32h385.3l-40.5-32H19.2C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480zM544 351.5l.7.5H576V96c0-35.3-28.7-64-64-64H139.4l40.5 32H512c17.7 0 32 14.3 32 32zM64 135.6V352h32V160.8z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zM487.3 480 467 464H76.8C43.2 464 16 436.8 16 403.2c0-1.8 1.4-3.2 3.2-3.2H386l-20.3-16H19.2C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480zM560 352h16V96c0-35.3-28.7-64-64-64H152.3l20.3 16H512c26.5 0 48 21.5 48 48zM64 145.8V352h16V158.4z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 640 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M365.5 384H19.2C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480h410.6zM64 146.4V352h64V196.8zM522.2 384l94.6 74.2c14.3-13.9 23.2-33.4 23.2-55 0-10.6-8.6-19.2-19.2-19.2zM89.5 44.9 154.8 96H512v256h64V96c0-35.3-28.7-64-64-64H128c-14.4 0-27.8 4.8-38.5 12.9"
                />
                <Path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
