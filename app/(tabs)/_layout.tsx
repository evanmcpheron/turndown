// app/(tabs)/_layout.tsx (or wherever your TabLayout lives)
import { useAuth } from "@/src/contexts/auth";
import { Redirect, router, Tabs } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

import { useTheme } from "@/src/contexts/theme";
import { BroomIcon } from "@/src/shared/icons/broom.component";
import { ClipboardIcon } from "@/src/shared/icons/clipboard.component";
import { GaugeIcon } from "@/src/shared/icons/gauge.component";
import { GearIcon } from "@/src/shared/icons/gear.component";
import PillTabBar from "@/src/shared/ui/navigation/tab-bar/tab.bar.pill.component";

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
      tabBar={(props) => {
        return <PillTabBar {...props} />;
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarStyle: { height: 40 },
          tabBarIcon: () => (
            <GaugeIcon type="duotone" color="primary" size="regular" />
          ),
        }}
        listeners={{
          focus: () => {
            router.replace("/(tabs)/dashboard");
          },
        }}
      />
      <Tabs.Screen
        name="turns"
        options={{
          title: "Turns",
          tabBarStyle: { height: 40 },
          tabBarIcon: () => (
            <BroomIcon type="duotone" color="primary" size="regular" />
          ),
        }}
        listeners={{
          focus: () => {
            router.replace("/(tabs)/turns");
          },
        }}
      />
      <Tabs.Screen
        name="properties"
        options={{
          title: "Properties",
          tabBarStyle: { height: 40 },
          tabBarIcon: () => (
            <ClipboardIcon type="duotone" color="primary" size="regular" />
          ),
        }}
        listeners={{
          focus: () => {
            router.replace("/(tabs)/properties");
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarStyle: { height: 40 },
          tabBarIcon: () => (
            <GearIcon type="duotone" color="primary" size="regular" />
          ),
        }}
        listeners={{
          focus: () => {
            router.replace("/(tabs)/settings");
          },
        }}
      />
    </Tabs>
  );
}
