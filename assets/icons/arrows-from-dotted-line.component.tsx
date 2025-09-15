import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const ArrowsFromDottedLineIcon: React.FC<
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
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V128h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64zM192 352v32h-32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9S300.9 384 287.9 384H256v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32M32 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96-64a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M241 7c-9.4-9.4-24.6-9.4-33.9 0L135 79c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31V168c0 13.3 10.7 24 24 24s24-10.7 24-24V81.9l31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm7 337c0-13.3-10.7-24-24-24s-24 10.7-24 24v86.1l-31-31c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31V344zM32 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0m128-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M235.3 4.7c-3-3-7.1-4.7-11.3-4.7s-8.3 1.7-11.3 4.7l-80 80c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L208 54.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V54.6l52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zM8 256a24 24 0 1 0 48 0 24 24 0 1 0-48 0m384 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-72-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48m-120 24a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-72-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48m96 280c4.2 0 8.3-1.7 11.3-4.7l80-80c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L240 457.4V336c0-8.8-7.2-16-16-16s-16 7.2-16 16v121.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l80 80c3 3 7.1 4.7 11.3 4.7" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path d="M218.3 2.3c3.1-3.1 8.2-3.1 11.3 0l88 88c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L232 27.3V184c0 4.4-3.6 8-8 8s-8-3.6-8-8V27.3l-74.3 74.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l88-88zM32 240a16 16 0 1 1 0 32 16 16 0 1 1 0-32m80 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m96 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m96 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-98.3 181.7-88 88c-3.1 3.1-8.2 3.1-11.3 0l-88-88c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l74.3 74.3V328c0-4.4 3.6-8 8-8s8 3.6 8 8v156.7l74.3-74.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512"  fill={colors[colorName || "text"]} >
                <Path
                   fill={colors[colorName || "text"]} 
                  opacity={opacity || 0.5}
                  d="M64 256a32 32 0 1 1-64 0 32 32 0 1 1 64 0m96 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128-32a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
                />
                <Path d="M201.4 9.4c12.5-12.5 32.8-12.5 45.3 0l64 64c9.2 9.2 11.9 22.9 6.9 34.9S301 128.1 288 128.1h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V128h-32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l64-64zM192 384v-32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h32c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-64 64c-12.5 12.5-32.8 12.5-45.3 0l-64-64c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8h32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
