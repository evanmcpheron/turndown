// SwipeUpNotice.tsx
import { useTheme } from "@/src/contexts/theme";
import { SquareCheckIcon } from "@/src/shared/icons/square-check.component";
import { SquareExclamationIcon } from "@/src/shared/icons/square-exclamation.component";
import { SquareInfoIcon } from "@/src/shared/icons/square-info.component";
import { TriangleExclamationIcon } from "@/src/shared/icons/triangle-exclamation.component";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { notificationStyles } from "./notification.styled";
import {
  IN_DURATION,
  NotificationProps,
  OUT_DURATION,
  SCREEN,
} from "./notification.types";

export const Notification = ({
  visible,
  title = "title",
  message = "",
  onClose,
  duration = 4000,
  type = "info",
  position = "top",
}: NotificationProps) => {
  const { colors: themeColors, app } = useTheme();

  const styles = useMemo(() => notificationStyles(app), []);

  const [mounted, setMounted] = useState(visible);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTop = position === "top";

  const baseOffset = useSharedValue(isTop ? -60 : 60);
  const dragOffset = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      dragOffset.value = 0;
      dragOffset.value = 0;
      baseOffset.value = isTop ? -60 : 60; // start slightly offscreen
      baseOffset.value = withTiming(0, { duration: IN_DURATION });

      if (duration && duration > 0) {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => dismiss(), duration);
      }
    } else if (mounted) {
      // animate out if parent hides it
      dismiss(true);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [visible, isTop]);

  const dismiss = (animate = true) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const done = () => {
      setMounted(false);
      onClose?.();
    };
    dragOffset.value = 0; // reset user drag
    const out = isTop ? -80 : 80;
    baseOffset.value = animate
      ? withTiming(out, { duration: OUT_DURATION }, () => runOnJS(done)())
      : out;
    if (!animate) done();
  };

  const translateY = useDerivedValue(() => baseOffset.value + dragOffset.value);
  const animStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: 1 - Math.min(Math.abs(dragOffset.value) / 120, 0.3),
  }));

  const colors = useMemo(() => {
    switch (type) {
      case "success":
        return {
          bg: themeColors.success,
          fg: themeColors.onSuccess,
          icon: (
            <SquareCheckIcon type="duotone" color="background" size={"large"} />
          ),
        };
      case "error":
        return {
          bg: themeColors.danger,
          fg: themeColors.onDanger,
          icon: (
            <SquareExclamationIcon
              type="duotone"
              color="background"
              size={"large"}
            />
          ),
        };
      case "warning":
        return {
          bg: themeColors.warning,
          fg: themeColors.onWarning,
          icon: (
            <TriangleExclamationIcon
              type="duotone"
              color="background"
              size={"large"}
            />
          ),
        };
      default:
        return {
          bg: themeColors.primary,
          fg: themeColors.onPrimary,
          icon: (
            <SquareInfoIcon type="duotone" color="background" size={"large"} />
          ),
        };
    }
  }, [type]);

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      // Track upward drags only (negative translationY)
      if (e.translationY < 0) {
        dragOffset.value = e.translationY;
      } else {
        dragOffset.value = 0;
      }
    })
    .onEnd((e) => {
      const THRESHOLD = -60;
      const FAST = -900;
      if (e.translationY < THRESHOLD || e.velocityY < FAST) {
        // fling up to dismiss
        dragOffset.value = withTiming(-SCREEN.height, { duration: 160 }, () =>
          runOnJS(dismiss)(false)
        );
      } else {
        // snap back
        dragOffset.value = withSpring(0, { damping: 18, stiffness: 180 });
      }
    });

  if (!mounted) return null;
  return (
    <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
      <View
        pointerEvents="box-none"
        style={[
          styles.container,
          {
            zIndex: app.zIndex.modal + 999999999,
          },
          isTop ? styles.top : styles.bottom,
        ]}
      >
        <GestureDetector gesture={pan}>
          <Animated.View
            style={[styles.card, animStyle, { backgroundColor: colors.bg }]}
          >
            <View style={styles.row}>
              <Text style={[styles.icon, { color: colors.fg }]}>
                {colors.icon}
              </Text>
              <View style={styles.texts}>
                {title ? (
                  <Text style={[styles.title, { color: colors.fg }]}>
                    {title}
                  </Text>
                ) : null}
                {message ? (
                  <Text style={[styles.message, { color: colors.fg }]}>
                    {message}
                  </Text>
                ) : null}
              </View>
              <Text
                accessibilityRole="button"
                onPress={() => dismiss()}
                style={[styles.close, { color: colors.fg }]}
              >
                ×
              </Text>
            </View>
          </Animated.View>
        </GestureDetector>
      </View>
    </View>
  );
};

/** Convenience wrappers */
export const SuccessNotice = (p: Omit<NotificationProps, "type">) => (
  <Notification type="success" {...p} />
);
export const NotificationNotice = (p: Omit<NotificationProps, "type">) => (
  <Notification type="info" {...p} />
);
