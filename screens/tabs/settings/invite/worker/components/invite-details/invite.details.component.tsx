import { useTheme } from "@/src/contexts/theme";
import { companyMemberInvitesApi } from "@/src/services";
import { normalCase, TurndownButton } from "@/src/shared";
import { Label } from "@/src/shared/ui/data-display/font";
import { CompanyInvite } from "@/src/types";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
dayjs.extend(customParseFormat);

type WorkerInviteCardProps = {
  inviteId: string;
  onAccept?: (data?: CompanyInvite) => void;
  onDecline?: (code: string) => void;
  accepting?: boolean;
  declining?: boolean;
  disabled?: boolean;
};

export const WorkerInviteCard = ({
  inviteId,
  onAccept,
  onDecline,
  accepting,
  declining,
  disabled,
}: WorkerInviteCardProps) => {
  const { app } = useTheme();
  const colors = app.colors;

  const [invite, setInvite] = useState<CompanyInvite | null>(null);

  useEffect(() => {
    companyMemberInvitesApi.getById(inviteId).then((response) => {
      setInvite(response);
    });
  }, [inviteId]);

  const nowExpired = invite?.expires_at
    ? dayjs().isAfter(invite.expires_at)
    : false;

  const actionable = invite?.status === "pending" && !nowExpired && !disabled;

  const statusStyles = (() => {
    const ok = colors.success ?? colors.primary;
    const bad = colors.danger ?? "#D33";
    const warn = colors.warning ?? colors.primary;

    switch (true) {
      case invite?.status === "redeemed":
        return { bg: ok, fg: colors.onPrimary, text: "Redeemed" };
      case invite?.status === "revoked":
        return { bg: bad, fg: colors.onPrimary, text: "Revoked" };
      case nowExpired || invite?.status === "expired":
        return { bg: bad, fg: colors.onPrimary, text: "Expired" };
      default:
        return { bg: warn, fg: colors.onPrimary, text: "Pending" };
    }
  })();

  const TitleText = `You're invited`;
  const SubText = `Role: ${normalCase(invite?.role)}`;

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
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Label style={[styles.title, { color: colors.text }]}>
            {TitleText}
          </Label>
          <Label style={[styles.subtitle, { color: colors.textMuted }]}>
            {SubText}
          </Label>
        </View>

        <View
          style={[
            styles.statusPill,
            { backgroundColor: statusStyles.bg, borderColor: statusStyles.bg },
          ]}
        >
          <Label style={[styles.statusText, { color: statusStyles.fg }]}>
            {statusStyles.text}
          </Label>
        </View>
      </View>

      {/* Body */}
      <Row label="Email">
        <Label style={{ color: colors.text }}>{invite?.email}</Label>
      </Row>

      <Row label="Code">
        <Label style={[styles.code, { color: colors.text }]}>
          {invite?.code}
        </Label>
      </Row>

      <Row label="Expires">
        <Label style={{ color: colors.textMuted }}>
          {invite?.expires_at?.toString()}
        </Label>
      </Row>

      <View style={styles.actions}>
        <TurndownButton
          color="danger"
          variant="outline"
          disabled={!actionable || !!declining || !!accepting}
          onPress={() => onDecline?.(invite?.code_id || "")}
        >
          {declining ? "Declining..." : "Decline"}
        </TurndownButton>
        <TurndownButton
          color="success"
          disabled={!actionable || !!accepting || !!declining}
          onPress={() => {
            if (invite && onAccept) {
              onAccept(invite);
            }
          }}
        >
          {accepting ? "Accepting..." : "Accept Invite"}
        </TurndownButton>
      </View>
    </View>
  );
};

// -- Small subcomponents & styles --

const Row = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  const { app } = useTheme();
  return (
    <View style={styles.row}>
      <Label style={[styles.label, { color: app.colors.textMuted }]}>
        {label}
      </Label>
      <View style={styles.value}>{children}</View>
    </View>
  );
};

const ActionButton = ({
  label,
  role,
  disabled,
  onPress,
}: {
  label: string;
  role: "primary" | "secondary";
  disabled?: boolean;
  onPress?: () => void;
}) => {
  const { app } = useTheme();
  const colors = app.colors;
  const isPrimary = role === "primary";

  const bg = isPrimary ? colors.primary : "transparent";
  const fg = isPrimary ? colors.onPrimary : colors.text;
  const border = isPrimary ? colors.primary : colors.outline;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.btn,
        {
          backgroundColor: disabled ? colors.backgroundDisabled : bg,
          borderColor: disabled ? colors.outlineStrong : border,
        },
      ]}
    >
      <Label
        style={{
          color: disabled ? colors.textMuted : fg,
          fontWeight: "600",
        }}
      >
        {label}
      </Label>
    </TouchableOpacity>
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
    marginBottom: 2,
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: "500",
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
    width: 84,
    fontSize: 12,
    fontWeight: "600",
    paddingTop: 2,
  },
  value: {
    flex: 1,
  },
  code: {
    letterSpacing: 1,
  },
  actions: {
    marginTop: 8,
    flexDirection: "row",
    gap: 8,
    justifyContent: "flex-end",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
  },
});
