import { useTheme } from "@/src/contexts/theme";
import { companyMemberInvitesApi } from "@/src/services";
import {
  normalCase,
  Row,
  showInfoNotification,
  TurndownButton,
} from "@/src/shared";
import { ClipboardIcon } from "@/src/shared/icons/clipboard.component";
import { Label } from "@/src/shared/ui/data-display/font";
import { CompanyInvite } from "@/src/types";
import * as Clipboard from "expo-clipboard";
import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";

type Props = {
  inviteId: string;
};

export const CompanyInviteCard = ({ inviteId }: Props) => {
  const { app } = useTheme();
  const colors = app.colors;

  const [invite, setInvite] = useState<CompanyInvite | null>(null);

  useEffect(() => {
    companyMemberInvitesApi.getById(inviteId).then((response) => {
      setInvite(response);
    });
  }, [inviteId]);

  const statusStyles = (() => {
    const success = colors.success ?? colors.primary;
    const danger = colors.danger ?? "#D33";
    const warning = colors.warning ?? colors.primary;

    switch (invite?.status) {
      case "redeemed":
        return { bg: success, fg: colors.onPrimary };
      case "expired":
      case "revoked":
        return { bg: danger, fg: colors.onPrimary };
      default: // pending
        return { bg: warning, fg: colors.onPrimary };
    }
  })();

  return (
    <View
      style={[
        styles.card,
        {
          borderColor: colors.outline,
          backgroundColor: colors.onPrimary,
        },
      ]}
    >
      {/* Header row */}
      <View style={styles.header}>
        <Label style={[styles.title, { color: colors.text }]}>
          Invite Details
        </Label>

        <View
          style={[
            styles.statusPill,
            { backgroundColor: statusStyles.bg, borderColor: statusStyles.bg },
          ]}
        >
          <Label style={[styles.statusText, { color: statusStyles.fg }]}>
            {normalCase(invite?.status || "")}
          </Label>
        </View>
      </View>

      <Row justifyContent="space-between">
        <Label>Code</Label>
        <View style={styles.codeRow}>
          <Label style={[styles.code, { color: colors.text }]}>
            {invite?.code}
          </Label>
        </View>
      </Row>

      <Row justifyContent="space-between">
        <Label>Email</Label>
        <Label>{invite?.email}</Label>
      </Row>

      <Row justifyContent="space-between">
        <Label>Role</Label>
        <Label>{normalCase(invite?.role || "")}</Label>
      </Row>

      <Row justifyContent="space-between">
        <Label>Expires</Label>
        <Label>{invite?.expires_at?.toString()}</Label>
      </Row>
      <TurndownButton
        onPress={async () => {
          console.log("HIT");
          Clipboard.setStringAsync(invite?.code || "").then(() => {
            showInfoNotification("Copied Code to clipboard");
          });
        }}
      >
        <Row alignItems="center" justifyContent="center">
          <Label>Copy Code</Label>
          <ClipboardIcon type="regular" />
        </Row>
      </TurndownButton>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    gap: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  statusPill: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  label: {
    width: 96,
    fontSize: 12,
    fontWeight: "600",
    paddingTop: 2,
  },
  value: {
    flex: 1,
  },
  codeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  code: {
    fontFamily: Platform.select({ ios: "Menlo", android: "monospace" }),
    letterSpacing: 1,
  },
  copyBtn: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
