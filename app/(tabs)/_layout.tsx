// app/(tabs)/_layout.tsx (or wherever your TabLayout lives)
import { useAuth } from "@/context";
import { Redirect, Tabs } from "expo-router";
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
        console.log(props);
        return <PillTabBar {...props} />;
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: () => (
            <GaugeIcon type="duotone" color="primary" size="regular" />
          ),
        }}
      />
      <Tabs.Screen
        name="turns"
        options={{
          title: "Turns",
          tabBarIcon: () => (
            <BroomIcon type="duotone" color="primary" size="regular" />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: () => (
            <CommentIcon type="duotone" color="primary" size="regular" />
          ),
        }}
      />
      <Tabs.Screen
        name="properties"
        options={{
          title: "Properties",
          tabBarIcon: () => (
            <ClipboardIcon type="duotone" color="primary" size="regular" />
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
