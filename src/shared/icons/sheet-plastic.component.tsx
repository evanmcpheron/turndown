import { useTheme } from "@/src/contexts/theme";
import { TurndownObject } from "@/src/types";
import { IconProps } from "@/src/types/common/style.types";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { usePointerEvent } from "../hooks/usePointerEvent.hook";
import { removeUndefined } from "../lib/object";
import { StyledIcon } from "./shared/icon.styles";
export const SheetPlasticIcon: React.FC<
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
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M0 448c0 35.3 28.7 64 64 64h160V384c0-17.7 14.3-32 32-32h128V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64zM171.3 75.3l-96 96c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6m96 32-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6M384 384H256v128z" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M320 48c8.8 0 16 7.2 16 16v288h-80c-17.7 0-32 14.3-32 32v80H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM0 448c0 35.3 28.7 64 64 64h172.1c12.7 0 24.9-5.1 33.9-14.1l99.9-99.9c9-9 14.1-21.2 14.1-33.9V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64zM203.3 84.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l96-96c6.2-6.2 6.2-16.4 0-22.6m96 54.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-160 160c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M352 64v256H240c-26.5 0-48 21.5-48 48v112H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32m-.5 288c-.7 2.8-2.1 5.4-4.2 7.4L231.4 475.3c-2.1 2.1-4.6 3.5-7.4 4.2V368c0-8.8 7.2-16 16-16zM0 448c0 35.3 28.7 64 64 64h156.1c12.7 0 24.9-5.1 33.9-14.1l115.9-115.8c9-9 14.1-21.2 14.1-33.9V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64zM187.3 68.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l96-96c6.2-6.2 6.2-16.4 0-22.6m96 54.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-160 160c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path d="M320 16c26.5 0 48 21.5 48 48v268.1c0 1.3-.1 2.6-.2 3.9H248c-22.1 0-40 17.9-40 40v119.8c-1.3.2-2.6.2-3.9.2H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zm41.1 336q-1.2 1.5-2.4 2.7l-132 131.9q-1.35 1.35-2.7 2.4V376c0-13.3 10.7-24 24-24zM0 448c0 35.3 28.7 64 64 64h140.1c12.7 0 24.9-5.1 33.9-14.1l131.9-131.8c9-9 14.1-21.2 14.1-33.9V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64zM173.7 66.3c-3.1-3.1-8.2-3.1-11.3 0l-96 96c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l96-96c3.1-3.1 3.1-8.2 0-11.3m96 43.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-160 160c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0z" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 384 512" fill={colors[colorName || "text"]}>
                <Path
                  fill={colors[colorName || "text"]}
                  opacity={opacity || 0.5}
                  d="M64 512c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v288H256c-17.7 0-32 14.3-32 32v128zM171.3 75.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zm96 32c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-160 160c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z"
                />
                <Path d="m224 512 160-160H256c-17.7 0-32 14.3-32 32z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
