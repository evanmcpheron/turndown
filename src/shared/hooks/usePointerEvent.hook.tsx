/* eslint-disable react-hooks/rules-of-hooks */

import { TurndownObject } from "@/src/types";
import { ClickActions } from "@/src/types/common/style.types";
import { useCallback, useEffect, useRef } from "react";
import { GestureResponderEvent } from "react-native";
import { attr, removeAttr } from "../lib/dom/attrs";
import { addClass, removeClass } from "../lib/dom/classlist";
import { find } from "../lib/dom/query";
import { getDomFromPointer } from "../lib/dom/ref";

const getEventDetails = (ev: GestureResponderEvent) => {
  // React Native touch event payload
  const e = ev.nativeEvent as any;

  // Absolute position on the screen (within the app window)
  const pageX = typeof e.pageX === "number" ? e.pageX : 0;
  const pageY = typeof e.pageY === "number" ? e.pageY : 0;

  // Position relative to the event target
  const locationX = typeof e.locationX === "number" ? e.locationX : 0;
  const locationY = typeof e.locationY === "number" ? e.locationY : 0;

  // Pressure/force (iOS: `force` 0..1, some platforms: `pressure`)
  const pressure =
    typeof e.force === "number"
      ? e.force
      : typeof e.pressure === "number"
      ? e.pressure
      : 0;

  return {
    elem: e.target ?? null,

    layerX: locationX,
    layerY: locationY,
    offsetX: locationX,
    offsetY: locationY,
    pageX,
    pageY,
    type: "touch",
    pressure,
    eventType: (ev as any).type ?? "unknown",
    x: pageX,
    y: pageY,
  };
};

export interface ClickProperties extends ClickActions {
  element: TurndownObject;
}

export const usePointerEvent = (props: ClickProperties) => {
  const hasActions = Object.values(props).some(
    (value) => typeof value === "function" && props.element !== undefined
  );

  if (!hasActions) {
    return;
  }

  const { element, active, onPress, onMove, onUp, onDown, groupId, selected } =
    props;

  const elemHelper = useRef(null);
  const clickingRef = useRef({ isClicking: false });
  const handlersRef = useRef<ClickProperties>({
    element,
    active: selected ? false : active,
    onPress,
    onMove,
    onUp,
    onDown,
    groupId,
    selected,
  });
  const onActionOver = useCallback((ev: TurndownObject) => {
    if (elemHelper.current) {
      addClass(elemHelper.current, "turndown-hover");
    }
    handlersRef.current?.onOver?.(ev);
  }, []);

  const onActionMove = useCallback((ev: TurndownObject) => {
    if (elemHelper.current) {
      addClass(elemHelper.current, "turndown-hover");
    }
    handlersRef.current?.onMove?.(ev);
  }, []);

  const onActionLeave = useCallback((ev: TurndownObject) => {
    if (elemHelper.current) {
      removeClass(elemHelper.current, "turndown-hover");
    }
    handlersRef.current?.onOut?.(ev);
  }, []);

  const onActionStart = useCallback(
    (ev: TurndownObject) => {
      if (clickingRef.current?.isClicking || ev.button > 0) {
        return;
      }
      if (elemHelper.current) {
        if (!handlersRef.current?.selected) {
          addClass(elemHelper.current, "turndown-active");
        }
      }
      onDown?.(ev);
      clickingRef.current.isClicking = true;
    },
    [onDown]
  );

  const onActionEnd = useCallback(
    (ev: TurndownObject) => {
      if (clickingRef.current?.isClicking) {
        onUp?.(ev);

        if (elemHelper.current) {
          removeClass(elemHelper.current, "turndown-active");
          removeClass(elemHelper.current, "turndown-hover");
        }

        if (groupId) {
          const items = find(
            document.documentElement,
            `[turndown-gid="${groupId}"]`
          );
          items.forEach((item: TurndownObject) => {
            try {
              item.classList.remove("turndown-group-active");
            } catch {
              /** */
            }
          });

          if (elemHelper.current) {
            if (!handlersRef.current?.selected) {
              addClass(elemHelper.current, "turndown-group-active");
            }
          }
        }

        clickingRef.current.isClicking = false;
      }
    },
    [groupId, onUp]
  );

  const onActionClick = useCallback(
    (ev: GestureResponderEvent) => {
      handlersRef.current?.onPress?.(getEventDetails(ev));

      if (elemHelper.current) {
        removeClass(elemHelper.current, "turndown-active");
        removeClass(elemHelper.current, "turndown-hover");
      }

      if (groupId) {
        const items = find(
          document.documentElement,
          `[turndown-gid="${groupId}"]`
        );
        items.forEach((item: TurndownObject) => {
          try {
            item.classList.remove("turndown-group-active");
          } catch {
            /** */
          }
        });

        if (elemHelper.current) {
          if (!handlersRef.current?.selected) {
            addClass(elemHelper.current, "turndown-group-active");
          }
        }
      }
    },
    [groupId]
  );

  useEffect(() => {
    if (element) {
      const elemCurrent = getDomFromPointer(element);
      if (elemCurrent) {
        if (groupId) {
          if (active) {
            if (!handlersRef.current?.selected) {
              addClass(elemCurrent, "turndown-group-active");
            }
          }
        }

        elemHelper.current = elemCurrent;
        addClass(elemCurrent, "turndown-click");

        if (handlersRef.current?.onPress) {
          addClass(elemCurrent, "turndown-click");
          if (
            handlersRef.current.onMove ||
            handlersRef.current.onOver ||
            handlersRef.current.onOut
          ) {
            addClass(elemCurrent, "turndown-interaction");
          }

          if (active) {
            if (!handlersRef.current?.selected) {
              addClass(elemCurrent, "turndown-group-active");
            }
          }

          if (groupId) {
            attr(elemCurrent, "turndown-gid", groupId);
          }
        }
      }
    }

    return () => {
      if (hasActions) {
        const elemCurrent = getDomFromPointer(element);
        if (elemCurrent) {
          removeClass(elemCurrent, "turndown-click");
          removeClass(elemCurrent, "turndown-hover");
          if (groupId) {
            removeAttr(elemCurrent, "turndown-gid");
          }

          elemCurrent.removeEventListener("pointerdown", onActionStart, false);
          elemCurrent.removeEventListener("pointerup", onActionEnd, false);
          elemCurrent.removeEventListener("click", onActionClick, false);
          elemCurrent.removeEventListener("pointerover", onActionOver, false);
          elemCurrent.removeEventListener("pointerleave", onActionLeave, false);
          elemCurrent.removeEventListener("pointermove", onActionMove, false);
        }
      }
    };
  }, [
    active,
    element,
    groupId,
    hasActions,
    onActionClick,
    onActionEnd,
    onActionLeave,
    onActionMove,
    onActionOver,
    onActionStart,
  ]);
};
