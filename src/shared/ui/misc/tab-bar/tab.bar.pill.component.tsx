// components/PillTabBar.tsx
import { useTheme } from "@/src/contexts/theme";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CalendarDaysIcon } from "@/src/shared/icons/calendar-days.component";
import { CommentIcon } from "@/src/shared/icons/comment.component";
import { GaugeIcon } from "@/src/shared/icons/gauge.component";
import { GearIcon } from "@/src/shared/icons/gear.component";
import { HouseIcon } from "@/src/shared/icons/house.component";

const HEIGHT = 64; // pill height
const INDICATOR_SIZE = HEIGHT + 5;
const H_PADDING = 12;

export default function PillTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();

  const [containerW, setContainerW] = useState(0);
  const segments = state.routes.length || 1;

  const innerW = Math.max(containerW - H_PADDING * 2, 0);
  const segmentW = innerW > 0 ? innerW / segments : 0;

  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!segmentW) return;
    const targetX =
      H_PADDING + state.index * segmentW + (segmentW - INDICATOR_SIZE) / 2;
    Animated.spring(translateX, {
      toValue: targetX,
      useNativeDriver: true,
      friction: 10,
      tension: 120,
    }).start();
  }, [state.index, segmentW, translateX]);

  const onLayout = (e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    setContainerW(width);

    const nextInnerW = Math.max(width - H_PADDING * 2, 0);
    const nextSegW = nextInnerW > 0 ? nextInnerW / segments : 0;

    translateX.setValue(
      H_PADDING + state.index * nextSegW + (nextSegW - INDICATOR_SIZE) / 2
    );
  };
  const iconFor = useMemo(
    () =>
      ({
        dashboard: GaugeIcon,
        turns: CalendarDaysIcon,
        messages: CommentIcon,
        properties: HouseIcon,
        settings: GearIcon,
      } as Record<string, React.ComponentType<any>>),
    []
  );

  return (
    <View
      style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 8) }]}
    >
      <View
        style={[
          styles.pill,
          {
            backgroundColor: colors.primary,
            borderColor: colors.onPrimary,
            borderWidth: 2,
          },
        ]}
        onLayout={onLayout}
      >
        <Animated.View
          style={[
            styles.indicator,
            {
              transform: [{ translateX }],
              backgroundColor: colors.onPrimary,
              opacity: 0.5,
              top: 2.5, // fills full height
            },
          ]}
        />

        <View style={styles.row}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? (options.tabBarLabel as string)
                : options.title !== undefined
                ? options.title
                : route.name;

            const Icon = iconFor[route.name] ?? (() => null);

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) return;

              navigation.navigate(route.name as never);
              Haptics.selectionAsync().catch(() => {});
            };

            const onLongPress = () => {
              navigation.emit({ type: "tabLongPress", target: route.key });
            };

            return (
              <Pressable
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarButtonTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={[styles.tab, { width: segmentW || undefined }]}
                hitSlop={12}
              >
                <View style={styles.iconLabel}>
                  <View style={styles.iconWrap}>
                    <Icon
                      type="duotone"
                      size="regular"
                      color={isFocused ? "primary" : "muted"}
                    />
                  </View>
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.label,
                      {
                        color: isFocused ? colors.primary : colors.background,
                      },
                    ]}
                  >
                    {label}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0, // pinned to bottom
    alignItems: "center",
  },
  pill: {
    height: HEIGHT,
    minWidth: 320,
    maxWidth: 640,
    width: "92%",
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: "hidden",
  },
  row: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    zIndex: 2, // above indicator
  },
  indicator: {
    position: "absolute",
    width: INDICATOR_SIZE, // square
    height: HEIGHT - 10, // full pill height
    borderRadius: 16, // rounded corners
    zIndex: 1,
  },
  tab: {
    height: HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLabel: {
    alignItems: "center",
    gap: 2,
  },
  iconWrap: {
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 11,
    fontWeight: "500",
  },
});
