import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const MarsStrokeUpIcon: React.FC<
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
                <Svg viewBox="0 0 320 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M148.7 4.7c6.2-6.2 16.4-6.2 22.6 0l64 64c4.6 4.6 5.9 11.5 3.5 17.4S230.5 96 224 96h-40v24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v24c0 .6 0 1.2-.1 1.8 77 11.6 136.1 78 136.1 158.2 0 88.4-71.6 160-160 160S0 440.4 0 352c0-80.2 59.1-146.7 136.1-158.2 0-.6-.1-1.2-.1-1.8v-24h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V96H96c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4zM256 352a96 96 0 1 0-192 0 96 96 0 1 0 192 0"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 320 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M175.6 5.8c-9-7.7-22.3-7.7-31.2 0l-56 48c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6l16.4-14V128h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v17.8C59 205.4 0 271.8 0 352c0 88.4 71.6 160 160 160s160-71.6 160-160c0-80.2-59-146.6-136-158.2V176h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32V76.2l16.4 14c10.1 8.6 25.2 7.5 33.8-2.6s7.5-25.2-2.6-33.8zM160 240a112 112 0 1 1 0 224 112 112 0 1 1 0-224"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 320 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M171.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L144 54.6V128H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v32.8C63.1 200.8 0 269 0 352c0 88.4 71.6 160 160 160s160-71.6 160-160c0-83-63.1-151.2-144-159.2V160h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V54.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zM160 480a128 128 0 1 1 0-256 128 128 0 1 1 0 256"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 320 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M165.7 2.3c-3.1-3.1-8.2-3.1-11.3 0l-64 64c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L152 27.3V128H96c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v48.2C67.4 196.4 0 266.3 0 352c0 88.4 71.6 160 160 160s160-71.6 160-160c0-85.7-67.4-155.6-152-159.8V144h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56V27.3l50.3 50.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-64-64zM160 496a144 144 0 1 1 0-288 144 144 0 1 1 0 288"
                  />
                </Svg >
              );

            case "duotone":
              return (
  <Svg viewBox="0 0 320 512"

    fill={colors[colorName || "text"]} 
    <Path
      fill={colors[colorName || "text"]}
      opacity={opacity || 0.5}
      d="M96 352a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
    />
    <Path

      d="M148.7 4.7c6.2-6.2 16.4-6.2 22.6 0l64 64c4.6 4.6 5.9 11.5 3.5 17.4S230.5 96 224 96h-40v24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v24c0 .6 0 1.2-.1 1.8 77 11.6 136.1 78 136.1 158.2 0 88.4-71.6 160-160 160S0 440.4 0 352c0-80.2 59.1-146.7 136.1-158.2 0-.6-.1-1.2-.1-1.8v-24h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V96H96c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4zM256 352a96 96 0 1 0-192 0 96 96 0 1 0 192 0"
    />
  </Svg >
    );

          default:
return null;
        }
      }) ()}
    </StyledIcon >
  );
};
