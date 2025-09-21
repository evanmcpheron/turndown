// app/(tabs)/_layout.tsx (or wherever your TabLayout lives)
import { useAuth } from "@/context";
import { Redirect, router, Tabs } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

import { BroomIcon } from "@/assets/icons/broom.component";
import { ClipboardIcon } from "@/assets/icons/clipboard.component";
import { CommentIcon } from "@/assets/icons/comment.component";
import { GaugeIcon } from "@/assets/icons/gauge.component";
import { GearIcon } from "@/assets/icons/gear.component";
import PillTabBar from "@/components/misc/tab-bar/tab.bar.pill.component";
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
        name="messages"
        options={{
          title: "Messages",
          tabBarStyle: { height: 40 },
          tabBarIcon: () => (
            <CommentIcon type="duotone" color="primary" size="regular" />
          ),
        }}
        listeners={{
          focus: () => {
            router.replace("/(tabs)/messages");
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
