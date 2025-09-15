import { TurndownObject } from "@/helpers";
import { removeUndefined } from "@/helpers/objects";
import { IconProps } from "@/helpers/types/base/style.types";
import { usePointerEvent } from "@/hooks/usePointerEvent.hook";
import React, { useRef } from "react";
import Svg, { Path } from "react-native-svg";
import { StyledIcon } from "./shared/icon.styled";
export const BorderInnerIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone";
  }
> = ({ type, size, color, active, style, opacity, haptic, ...more }) => {
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
    color,
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M64 448a32 32 0 1 1-64 0 32 32 0 1 1 64 0m96 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m0-384a32 32 0 1 1-64 0 32 32 0 1 1 64 0m160 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64m32-352a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-384a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m352 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 352a32 32 0 1 1-64 0 32 32 0 1 1 64 0m352-224a32 32 0 1 1 0 64 32 32 0 1 1 0-64M64 160a32 32 0 1 1-64 0 32 32 0 1 1 64 0M0 256c0-17.7 14.3-32 32-32h160V64c0-17.7 14.3-32 32-32s32 14.3 32 32v160h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H256v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V288H32c-17.7 0-32-14.3-32-32" />
              </Svg>
            );

          case "regular":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M416 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-96a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-384 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64m352-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0M32 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m352-64a32 32 0 1 1 64 0 32 32 0 1 1-64 0M0 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64M288 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64M96 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64m96 64c-13.3 0-24-10.7-24-24V280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h176V56c0-13.3 10.7-24 24-24s24 10.7 24 24v176h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v176c0 13.3-10.7 24-24 24" />
              </Svg>
            );

          case "light":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M224 480c-8.8 0-16-7.2-16-16V272H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h192V48c0-8.8 7.2-16 16-16s16 7.2 16 16v192h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H240v192c0 8.8-7.2 16-16 16M32 424a24 24 0 1 1 0 48 24 24 0 1 1 0-48m384 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48M32 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48m384 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-24-168a24 24 0 1 1 48 0 24 24 0 1 1-48 0M32 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48m360-72a24 24 0 1 1 48 0 24 24 0 1 1-48 0M8 64a24 24 0 1 1 48 0 24 24 0 1 1-48 0m288 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 360a24 24 0 1 1 0 48 24 24 0 1 1 0-48M104 64a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 360a24 24 0 1 1 0 48 24 24 0 1 1 0-48" />
              </Svg>
            );

          case "thin":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path d="M216 472c0 4.4 3.6 8 8 8s8-3.6 8-8V264h208c4.4 0 8-3.6 8-8s-3.6-8-8-8H232V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v208H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h208zm-184-8a16 16 0 1 0 0-32 16 16 0 1 0 0 32m384 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 368a16 16 0 1 0 0-32 16 16 0 1 0 0 32m384 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16-208a16 16 0 1 0-32 0 16 16 0 1 0 32 0M32 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32M432 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0M48 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m288 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 400a16 16 0 1 0 0-32 16 16 0 1 0 0 32M144 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 400a16 16 0 1 0 0-32 16 16 0 1 0 0 32" />
              </Svg>
            );

          case "duotone":
            return (
              <Svg viewBox="0 0 448 512" fill={color}>
                <Path
                  fill={color}
                  opacity={opacity || 0.5}
                  d="M448 448a32 32 0 1 1-64 0 32 32 0 1 1 64 0m0-96a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-384 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320-192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-320 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320-96a32 32 0 1 1 64 0 32 32 0 1 1-64 0M0 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m64 384a32 32 0 1 1-64 0 32 32 0 1 1 64 0M288 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m64 384a32 32 0 1 1-64 0 32 32 0 1 1 64 0M96 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m64 384a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
                />
                <Path d="M192 448c0 17.7 14.3 32 32 32s32-14.3 32-32V288h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h160z" />
              </Svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
