// bottom.drawer.component.tsx

import { useTheme } from "@/src/contexts/theme";
import React, { useEffect, useMemo, useRef } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Modal,
  PanResponder,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { bottomDrawerComponentStyles } from "./bottom.drawer.styled";
import { BottomDrawerProps } from "./bottom.drawer.types";

export const BottomDrawer = ({
  open,
  onClose,
  height,
  children,
  backdropOpacity = 0.4,
}: BottomDrawerProps) => {
  const { app } = useTheme();

  const styles = useMemo(() => bottomDrawerComponentStyles(app), [app]);

  const win = Dimensions.get("window");
  const sheetHeight = useMemo(
    () => height ?? Math.min(520, Math.round(win.height * 0.6)),
    [height, win.height]
  );

  const y = useRef(new Animated.Value(sheetHeight)).current;

  const currentY = useRef(sheetHeight);

  useEffect(() => {
    const id = y.addListener(({ value }) => (currentY.current = value));
    return () => y.removeListener(id);
  }, [y]);

  // Open/close animation when `open` changes
  useEffect(() => {
    Animated.timing(y, {
      toValue: open ? 0 : sheetHeight,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      // If we animated closed ourselves (e.g., parent toggled), nothing else to do
    });
  }, [open, sheetHeight, y]);

  // Simple drag-to-close
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (_, g) => Math.abs(g.dy) > 6, // start on vertical drag
        onPanResponderMove: (_, g) => {
          const next = Math.max(0, Math.min(sheetHeight, g.dy)); // clamp
          y.setValue(next);
        },
        onPanResponderRelease: (_, g) => {
          const closingByVelocity = g.vy > 0.6;
          const closingByPosition = currentY.current > sheetHeight * 0.5;
          const shouldClose = closingByVelocity || closingByPosition;

          Animated.timing(y, {
            toValue: shouldClose ? sheetHeight : 0,
            duration: 180,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
          }).start(() => {
            if (shouldClose) onClose();
          });
        },
      }),
    [onClose, sheetHeight, y]
  );

  const backdropStyle = {
    opacity: y.interpolate({
      inputRange: [0, sheetHeight],
      outputRange: [backdropOpacity, 0],
      extrapolate: "clamp",
    }),
  };

  return (
    <Modal
      visible={open}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.backdrop, backdropStyle]}
      >
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
      </Animated.View>

      <Animated.View
        style={[styles.sheet, { transform: [{ translateY: y }] }]}
        {...panResponder.panHandlers}
      >
        <SafeAreaView style={styles.content} edges={["bottom"] as any}>
          {children}
        </SafeAreaView>
      </Animated.View>
    </Modal>
  );
};
