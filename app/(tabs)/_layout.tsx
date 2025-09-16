// app/(tabs)/_layout.tsx (or wherever your TabLayout lives)
import { useAuth } from "@/context";
import { Redirect, Tabs } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

import { GearIcon } from "@/assets/icons/gear.component";
import { HouseIcon } from "@/assets/icons/house.component";
import PillTabBar from "@/components/misc/switch/tab.bar.pill.component";
import { useTheme } from "@/context/theme/theme.context";

export default function TabLayout() {
  const { user, loading } = useAuth();
  const { colors } = useTheme();

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!user) {
    return <Redirect href="/(auth)/sign.in.screen" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: colors.background },
      }}
      tabBar={(props) => <PillTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <HouseIcon type="duotone" color="primary" size="regular" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <GearIcon type="duotone" color="primary" size="regular" />
          ),
        }}
      />
    </Tabs>
  );
}
