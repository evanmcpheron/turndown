// BottomDrawer.tsx
import React, { useEffect, useMemo, useRef } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Modal,
  PanResponder,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type BottomDrawerProps = {
  open: boolean;
  onClose: () => void;
  height?: number; // default = 60% of screen (max 520)
  children: React.ReactNode;
  backdropOpacity?: number; // default = 0.4
  testID?: string;
};

export const BottomDrawer: React.FC<BottomDrawerProps> = ({
  open,
  onClose,
  height,
  children,
  backdropOpacity = 0.4,
  testID,
}) => {
  const win = Dimensions.get("window");
  const sheetHeight = useMemo(
    () => height ?? Math.min(520, Math.round(win.height * 0.6)),
    [height, win.height]
  );

  // Animated value for the sheet's translateY (0 = fully open; sheetHeight = hidden)
  const y = useRef(new Animated.Value(sheetHeight)).current;

  // Keep a ref of the current y value during drag so we don't rely on __getValue()
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

  // Backdrop opacity maps to how far the sheet is open
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
      animationType="none" // we drive animations ourselves
      onRequestClose={onClose}
    >
      {/* Backdrop */}
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.backdrop, backdropStyle]}
      >
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
      </Animated.View>

      {/* Bottom sheet */}
      <Animated.View
        testID={testID}
        style={[
          styles.sheet,
          { height: sheetHeight, transform: [{ translateY: y }] },
        ]}
        {...panResponder.panHandlers}
      >
        {/* Grab handle */}
        <View style={styles.handleWrap} pointerEvents="none">
          <View style={styles.handle} />
        </View>

        <SafeAreaView style={styles.content} edges={["bottom"] as any}>
          {children}
        </SafeAreaView>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "#000",
  },
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
    // small drop shadow
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -4 },
    elevation: 10,
  },
  handleWrap: {
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 4,
  },
  handle: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
