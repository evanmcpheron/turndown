// loader.component.tsx

import { useTheme } from "@/src/contexts/theme";
import { useEffect, useMemo, useRef } from "react";
import { Animated, View } from "react-native";
import { turndownLoaderComponentStyles } from "./loader.styles";
import { TurndownLoaderProps } from "./loader.types";

export const TurndownLoader = (_props: TurndownLoaderProps) => {
  const { app } = useTheme();

  const dotSize = 20;
  const dotCount = 3;
  const spacing = 15;
  const durationMs = 1000;
  const dotColor = app.colors.primary;
  const accessibilityLabel = "Loading";

  const styles = useMemo(() => turndownLoaderComponentStyles(app), [app]);

  const animatedValues = useRef(
    Array.from({ length: Math.max(1, dotCount) }, () => new Animated.Value(0))
  ).current;

  useEffect(() => {
    const loops = animatedValues.map((val, i) => {
      const up = Animated.timing(val, {
        toValue: 1,
        duration: Math.max(100, durationMs / 2),
        useNativeDriver: true,
      });
      const down = Animated.timing(val, {
        toValue: 0.2,
        duration: Math.max(100, durationMs / 2),
        useNativeDriver: true,
      });

      // Stagger start via initial delay; then loop the same total duration each cycle
      return Animated.loop(
        Animated.sequence([
          Animated.delay(i * Math.max(60, durationMs / Math.max(1, dotCount))),
          up,
          down,
          // Balance out the remainder so each dot loops with roughly equal period
          Animated.delay(
            Math.max(
              0,
              Math.max(60, durationMs / Math.max(1, dotCount)) *
                (Math.max(1, dotCount) - 1 - i)
            )
          ),
        ])
      );
    });

    loops.forEach((anim) => anim.start());
    return () => loops.forEach((anim) => anim.stop());
  }, [animatedValues, dotCount, durationMs]);

  return (
    <View
      style={styles.container}
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel}
      accessibilityLiveRegion="polite"
    >
      <View style={styles.row}>
        {animatedValues.map((val, idx) => {
          const animatedStyle = {
            opacity: val.interpolate({
              inputRange: [0, 1],
              outputRange: [0.2, 1],
              extrapolate: "clamp",
            }),
            transform: [
              {
                translateY: val.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -20], // subtle bounce
                  extrapolate: "clamp",
                }),
              },
            ],
          };

          return (
            <Animated.View
              key={idx}
              style={[
                styles.dot,
                {
                  width: dotSize,
                  height: dotSize,
                  marginRight: idx === animatedValues.length - 1 ? 0 : spacing,
                  backgroundColor: dotColor,
                },
                animatedStyle,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};
