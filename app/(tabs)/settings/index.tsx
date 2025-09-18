// app/(tabs)/settings.tsx
import { Button } from "@/components/actions";
import { showInfoNotification } from "@/components/actions/notification/notification.helper";
import { Label } from "@/components/font";
import { Page } from "@/components/layouts/page/page.layout.component";
import { useAuth } from "@/context";
import { useTheme } from "@/context/theme/theme.context";
import { TurndownObject } from "@/helpers";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Linking,
  Pressable,
  SectionList,
  StyleSheet,
  Switch,
  View,
} from "react-native";

type RowType = "link" | "toggle" | "action" | "button-group";
type SettingRow = {
  key: string;
  label: string;
  type: RowType;
  route?: string;
  href?: string;
  value?: boolean;
  onToggle?: (next: boolean) => void;
  onPress?: () => void;
  trailingText?: string;
  danger?: boolean;
};

type SettingSection = {
  title: string;
  data: SettingRow[];
};

export default function SettingsScreen() {
  const router = useRouter();
  const { colors, setScheme, scheme, mode } = useTheme();
  const { signOut, user } = useAuth();

  // Local MVP state (replace with your store later)
  const [notifJobReminders, setNotifJobReminders] = useState(true);
  const [notifNewAssignments, setNotifNewAssignments] = useState(true);

  const sections: SettingSection[] = [
    {
      title: "Account",
      data: [
        {
          key: "profile",
          label: "Profile",
          type: "link",
          route: "/settings/profile",
        },
        {
          key: "theme",
          label: "Dark mode",
          type: "button-group",
        },
      ],
    },
    {
      title: "Templates",
      data: [
        {
          key: "checklists",
          label: "Checklists",
          type: "link",
          route: "/settings/checklists",
        },
        {
          key: "inventory",
          label: "Inventory",
          type: "link",
          route: "/settings/inventory",
        },
      ],
    },
    {
      title: "Notifications",
      data: [
        {
          key: "reminders",
          label: "Job reminders",
          type: "toggle",
          value: notifJobReminders,
          onToggle: setNotifJobReminders,
        },
        {
          key: "assignments",
          label: "New assignment alerts",
          type: "toggle",
          value: notifNewAssignments,
          onToggle: setNotifNewAssignments,
        },
      ],
    },
    {
      title: "Privacy & Security",
      data: [
        {
          key: "privacy",
          label: "Privacy Policy",
          type: "action",
          onPress: () => showInfoNotification("Privacy Policy"),
          // Linking.openURL("https://example.com/privacy"),
        },
      ],
    },
    {
      title: "Support & About",
      data: [
        {
          key: "help",
          label: "Help & Support",
          type: "action",
          onPress: () => Linking.openURL("mailto:support@example.com"),
        },
        {
          key: "version",
          label: "Version",
          type: "action",
          trailingText: "0.1.0 (1)",
        },
        {
          key: "logout",
          label: "Sign out",
          type: "action",
          danger: true,
          onPress: () => {
            Alert.alert("Sign out", "Are you sure you want to sign out?", [
              { text: "Cancel", style: "cancel" },
              {
                text: "Sign out",
                style: "destructive",
                onPress: async () => {
                  try {
                    await signOut();
                  } catch (e) {
                    /* handle */
                  }
                },
              },
            ]);
          },
        },
      ],
    },
  ];

  const renderItem = ({ item }: { item: SettingRow }) => {
    switch (item.type) {
      case "toggle":
        return (
          <RowBase
            label={item.label}
            trailing={
              <Switch
                value={!!item.value}
                onValueChange={(v) => item.onToggle?.(v)}
              />
            }
          />
        );
      case "button-group":
        return (
          <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <Button
              onPress={() => setScheme("system")}
              variant={mode === "system" ? "outline" : "filled"}
            >
              System
            </Button>
            <Button
              onPress={() => setScheme("dark")}
              variant={mode === "dark" ? "outline" : "filled"}
            >
              Dark
            </Button>
            <Button
              onPress={() => setScheme("light")}
              variant={mode === "light" ? "outline" : "filled"}
            >
              Light
            </Button>
          </View>
        );
      case "link":
        return (
          <Pressable
            onPress={() =>
              item.route && router.push(item.route as TurndownObject)
            }
          >
            <RowBase label={item.label} />
          </Pressable>
        );
      case "action":
        return (
          <Pressable onPress={item.onPress}>
            <RowBase
              label={item.label}
              danger={item.danger}
              trailingText={item.trailingText}
            />
          </Pressable>
        );
      default:
        return null;
    }
  };

  return (
    <Page header="Settings">
      <SectionList
        sections={sections}
        keyExtractor={(row) => row.key}
        renderItem={renderItem}
        renderSectionHeader={({ section }) => (
          <Label
            color="onPrimary"
            style={[
              styles.sectionTitle,
              {
                backgroundColor: colors.primary,
                padding: 10,
                borderRadius: 12,
              },
            ]}
          >
            {section.title}
          </Label>
        )}
        ItemSeparatorComponent={() => <View style={[styles.sep]} />}
        SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
        contentContainerStyle={{ paddingBottom: 50 }}
        style={{ backgroundColor: "transparent" }}
      />
    </Page>
  );
}

function RowBase({
  label,
  trailing,
  trailingText,
  danger,
}: {
  label: string;
  trailing?: React.ReactNode;
  trailingText?: string;
  danger?: boolean;
}) {
  const { colors } = useTheme();
  return (
    <View
      style={[
        styles.row,
        {
          backgroundColor: colors.surface,
          borderColor: colors.outline,
          borderWidth: 1,
        },
      ]}
    >
      <Label color={danger ? "danger" : "text"} numberOfLines={1}>
        {label}
      </Label>
      <View style={styles.trailing}>
        {trailingText ? <Label>{trailingText}</Label> : null}
        {trailing}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginBottom: 8,
    textTransform: "uppercase",
  },
  row: {
    height: 56,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  trailing: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sep: { height: 8, opacity: 0.6, borderRadius: 4 },
});
