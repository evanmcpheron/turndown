import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const MattressPillowIcon: React.FC<
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
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M256 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h192zm32 384h288c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H288zM64 160c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z"
                  />
                </Svg>
              );

            case "regular":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M240 112v288H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16zm48 0h288c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H288zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm16 112v160c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32"
                  />
                </Svg>
              );

            case "light":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M256 96v320H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zm32 0h288c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H288zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm112 96c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16zm-64-32c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"
                  />
                </Svg>
              );

            case "thin":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]}
                >
                  <Path

                    d="M256 80v352H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zm16 0h304c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H272zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm112 80c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V176c0-17.7 14.3-32 32-32zm-64-16c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"
                  />
                </Svg >
              );

            case "duotone":
              return (
                <Svg viewBox="0 0 640 512"

                  fill={colors[colorName || "text"]} >
                  <Path
                    fill={colors[colorName || "text"]}
                    opacity={opacity || 0.5}
                    d="M64 448h192V64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64m32-320h64c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32"
                  />
                  <Path

                    d="M256 64h320c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H256z"
                  />
                </Svg >
              );

            default:
              return null;
          }
        })()}
      </StyledIcon >
    );
  };
