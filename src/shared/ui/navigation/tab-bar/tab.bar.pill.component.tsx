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

import { useManagementMode } from "@/src/contexts/management-mode";
import { CalendarDaysIcon } from "@/src/shared/icons/calendar-days.component";
import { GaugeIcon } from "@/src/shared/icons/gauge.component";
import { GearIcon } from "@/src/shared/icons/gear.component";
import { HouseIcon } from "@/src/shared/icons/house.component";

const HEIGHT = 64;
const INDICATOR_SIZE = HEIGHT + 5;
const H_PADDING = 12;

export default function PillTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { managementMode } = useManagementMode();

  // 1) Filter routes the same way Expo Router’s default bar does:
  const visibleRoutes = useMemo(() => {
    return state.routes.filter((route) => {
      const options = descriptors[route.key]?.options as any;
      // Hide when Tabs.Screen has options.href = null
      if (options?.href === null) return false;
      // Belt & suspenders: also hide if a custom tabBarButton returns null
      if (options?.tabBarButton === null) return false;
      if (
        typeof options?.tabBarItemStyle === "object" &&
        options.tabBarItemStyle?.display === "none"
      )
        return false;
      return true;
    });
  }, [state.routes, descriptors]);

  // 2) If current route is hidden, push to the first visible one:
  useEffect(() => {
    const current = state.routes[state.index];
    const isCurrentVisible = visibleRoutes.some((r) => r.key === current?.key);
    if (!isCurrentVisible && visibleRoutes.length > 0) {
      navigation.navigate(visibleRoutes[0].name as never);
    }
  }, [state.index, state.routes, visibleRoutes, navigation]);

  const [containerW, setContainerW] = useState(0);
  const innerW = Math.max(containerW - H_PADDING * 2, 0);
  const segments = Math.max(visibleRoutes.length, 1);
  const segmentW = innerW > 0 ? innerW / segments : 0;

  // Map the current route’s index into the visible set:
  const visibleIndex = Math.max(
    visibleRoutes.findIndex((r) => r.key === state.routes[state.index]?.key),
    0
  );

  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!segmentW) return;
    const targetX =
      H_PADDING + visibleIndex * segmentW + (segmentW - INDICATOR_SIZE) / 2;
    Animated.spring(translateX, {
      toValue: targetX,
      useNativeDriver: true,
      friction: 10,
      tension: 120,
    }).start();
  }, [visibleIndex, segmentW, translateX]);

  const onLayout = (e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    setContainerW(width);

    const nextInnerW = Math.max(width - H_PADDING * 2, 0);
    const nextSegW = nextInnerW > 0 ? nextInnerW / segments : 0;
    translateX.setValue(
      H_PADDING + visibleIndex * nextSegW + (nextSegW - INDICATOR_SIZE) / 2
    );
  };

  // 3) Icons (re-evaluate when managementMode changes)
  const iconFor = useMemo(
    () =>
      ({
        dashboard: GaugeIcon,
        turns: CalendarDaysIcon,
        ...(managementMode && { properties: HouseIcon }),
        settings: GearIcon,
      } as Record<string, React.ComponentType<any>>),
    [managementMode]
  );

  if (visibleRoutes.length === 0) return null; // nothing to show

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
              top: 2.5,
            },
          ]}
        />

        <View style={styles.row}>
          {visibleRoutes.map((route, displayedIdx) => {
            const { options } = descriptors[route.key];
            const isFocused = route.key === state.routes[state.index]?.key;

            const label =
              (options.tabBarLabel as string) ??
              (options.title as string) ??
              route.name;

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
                      { color: isFocused ? colors.primary : colors.background },
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
    bottom: 0,
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
    zIndex: 2,
  },
  indicator: {
    position: "absolute",
    width: INDICATOR_SIZE,
    height: HEIGHT - 10,
    borderRadius: 16,
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
