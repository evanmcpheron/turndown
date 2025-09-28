// app/(tabs)/settings.tsx
import useAuth from "@/src/contexts/auth/auth.context";
import { useManagementMode } from "@/src/contexts/management-mode";
import { useTheme } from "@/src/contexts/theme";
import { showInfoNotification } from "@/src/shared/feedback/notification/notification.helper";
import { withOpacity } from "@/src/shared/styles";
import { AppTheme } from "@/src/shared/styles/general.styles";
import { TurndownButton } from "@/src/shared/ui/actions";
import { Label } from "@/src/shared/ui/data-display/font";
import { Confirmation } from "@/src/shared/ui/surface/confirmation";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { TurndownObject } from "@/src/types";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Linking,
  Pressable,
  Switch as RNSwitch,
  StyleSheet,
  View,
} from "react-native";

/* ------------------------------------------------------------------ */

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

export const SettingsScreen = () => {
  const { changeManagementMode, managementMode } = useManagementMode();
  const router = useRouter();
  const { app, colors, setScheme, mode } = useTheme();
  const { signOut } = useAuth();
  const [showSignOut, setShowSignOut] = useState(false);
  const s = useMemo(() => themedStyles(app), [app]);

  // Local MVP state
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
          key: "invite",
          label: "Invite",
          type: "link",
          route: "/settings/invite",
        },
        ...(managementMode
          ? [
              {
                key: "company",
                label: "Company",
                type: "link",
                route: "/settings/company",
              } as SettingRow,
            ]
          : []),
        {
          key: "reminders",
          label: "Management mode",
          type: "toggle",
          value: managementMode,
          onToggle: changeManagementMode,
        },
        { key: "theme", label: "Appearance", type: "button-group" },
      ],
    },
    ...(managementMode
      ? [
          {
            title: "Templates",
            data: [
              {
                key: "checklists",
                label: "Checklists",
                type: "link",
                route: "/settings/templates/checklists",
              },
            ],
          } as SettingSection,
        ]
      : []),
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
            setShowSignOut(true);
          },
        },
      ],
    },
  ];

  const renderRow = (item: SettingRow) => {
    switch (item.type) {
      case "toggle":
        return (
          <RowBase
            key={item.key}
            label={item.label}
            trailing={
              <RNSwitch
                value={!!item.value}
                onValueChange={(v) => item.onToggle?.(v)}
              />
            }
          />
        );

      case "button-group":
        return (
          <View key={item.key} style={s.btnGroup}>
            <View style={{ flex: 1 }}>
              <TurndownButton
                onPress={() => setScheme("system")}
                variant={mode === "system" ? "outline" : "filled"}
              >
                System
              </TurndownButton>
            </View>
            <View style={{ flex: 1 }}>
              <TurndownButton
                onPress={() => setScheme("dark")}
                variant={mode === "dark" ? "outline" : "filled"}
              >
                Dark
              </TurndownButton>
            </View>
            <View style={{ flex: 1 }}>
              <TurndownButton
                onPress={() => setScheme("light")}
                variant={mode === "light" ? "outline" : "filled"}
              >
                Light
              </TurndownButton>
            </View>
          </View>
        );

      case "link":
        return (
          <Pressable
            key={item.key}
            onPress={() =>
              item.route && router.push(item.route as TurndownObject)
            }
            style={({ pressed }) => [pressed && { opacity: 0.9 }]}
          >
            <RowBase label={item.label} />
          </Pressable>
        );

      case "action":
        return (
          <Pressable
            key={item.key}
            onPress={item.onPress}
            style={({ pressed }) => [pressed && { opacity: 0.9 }]}
          >
            <RowBase
              label={item.label}
              danger={!!item.danger}
              trailingText={item.trailingText}
            />
          </Pressable>
        );

      default:
        return null;
    }
  };

  return (
    <Page header="Settings" scrollable>
      {sections.map((section) => (
        <View key={section.title} style={{ gap: 10 }}>
          <View style={s.sectionHeaderWrap}>
            <Label variant="h6" style={{ color: colors.primary }}>
              {section.title}
            </Label>
          </View>

          <View style={{ gap: 10 }}>
            {section.data.map((row) => renderRow(row))}
          </View>
        </View>
      ))}
      <Confirmation
        visible={showSignOut}
        onCancel={() => setShowSignOut(false)}
        confirmationColor="danger"
        confirmText="Sign Out"
        onConfirm={async () => {
          try {
            await signOut();
            setShowSignOut(false);
          } catch {}
        }}
        title={"Sign Out"}
        body={"Are you sure you want to sign out?"}
      />
    </Page>
  );
};

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
  const { app } = useTheme();
  const s = useMemo(() => themedStyles(app), [app]);

  return (
    <View style={s.row}>
      <Label color={danger ? "danger" : "text"} numberOfLines={1}>
        {label}
      </Label>
      <View style={s.trailing}>
        {trailingText ? (
          <Label variant="subtitle2" style={{ color: app.colors.textMuted }}>
            {trailingText}
          </Label>
        ) : null}
        {trailing}
      </View>
    </View>
  );
}

const themedStyles = (t: AppTheme) => {
  const iosShadow = {
    shadowColor: "#000",
    shadowOpacity: t.elevation[1].ios.opacity,
    shadowRadius: t.elevation[1].ios.radius,
    shadowOffset: t.elevation[1].ios.offset,
  };
  return StyleSheet.create({
    sectionHeaderWrap: {
      paddingVertical: t.spacing[1],
      paddingHorizontal: t.spacing[2],
      alignSelf: "flex-start",
      backgroundColor: withOpacity(t.colors.primary, t.isDark ? 0.12 : 0.08),
      borderColor: withOpacity(t.colors.primary, 0.25),
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: t.radii.pill,
      marginBottom: t.spacing[1],
    },

    row: {
      minHeight: 56,
      paddingHorizontal: t.spacing[4],
      borderRadius: t.radii.xl,
      backgroundColor: t.colors.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: t.colors.outline,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      elevation: t.elevation[1].android,
      ...iosShadow,
    },
    trailing: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    btnGroup: {
      flexDirection: "row",
      gap: 10,
    },
  });
};
