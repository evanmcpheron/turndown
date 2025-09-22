// Stepper.tsx
import { useTheme } from "@/src/contexts/theme";
import { AngleLeftIcon } from "@/src/shared/icons/angle-left.component";
import { AngleRightIcon } from "@/src/shared/icons/angle-right.component";
import React, { useEffect, useMemo } from "react";
import {
  AccessibilityState,
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { TurndownButton } from "../../actions";

type StepperProps = {
  total: number;
  current: number; // 0-based index
  onChange?: (index: number) => void;

  containerStyle?: ViewStyle; // e.g., position at bottom
  animated?: boolean; // animate active dot scale
};

export const Stepper: React.FC<StepperProps> = ({
  total,
  current,
  onChange,
  containerStyle,
  animated = true,
}) => {
  const { colors } = useTheme();
  const scales = useMemo(
    () => Array.from({ length: total }, () => new Animated.Value(1)),
    [total]
  );

  // Animate on current change
  useEffect(() => {
    if (!animated) return;
    scales.forEach((sv, i) => {
      Animated.timing(sv, {
        toValue: i === current ? 1.6 : 1,
        duration: 160,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }).start();
    });
  }, [current, scales, animated]);

  return (
    <View
      style={[styles.container, containerStyle]}
      accessibilityLabel="Progress steps"
      accessibilityRole="tablist"
    >
      <TurndownButton
        circle
        onPress={() => onChange?.(Math.max(0, current - 1))}
        disabled={current === 0}
      >
        <AngleLeftIcon type="regular" />
      </TurndownButton>
      <View
        style={[
          styles.container,
          { columnGap: 10, justifyContent: "center" },
          containerStyle,
        ]}
      >
        {Array.from({ length: total }).map((_, i) => {
          const selected = i === current;
          const a11yState: AccessibilityState = { selected };
          const dotStyle = [
            styles.dot,
            {
              width: 8,
              height: 8,
              borderRadius: 8 / 2,
              backgroundColor: selected ? colors.primary : colors.onBackground,
            },
          ];

          const content = animated ? (
            <Animated.View
              style={[dotStyle, { transform: [{ scale: scales[i] }] }]}
            />
          ) : (
            <View style={dotStyle} />
          );

          return (
            <Pressable
              key={i}
              onPress={() => onChange?.(i)}
              hitSlop={10}
              style={styles.pressable}
              accessibilityRole="button"
              accessibilityLabel={`Step ${i + 1} of ${total}`}
              accessibilityState={a11yState}
              testID={`step-dot-${i}`}
            >
              {content}
            </Pressable>
          );
        })}
      </View>

      <TurndownButton
        circle
        onPress={() => onChange?.(Math.min(total - 1, current + 1))}
        disabled={current === total - 1}
      >
        <AngleRightIcon type="regular" />
      </TurndownButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    paddingHorizontal: 10,
  },
  pressable: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    opacity: 1,
  },
});
