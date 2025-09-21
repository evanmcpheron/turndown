import { Label } from "@/components/font";
import { defaultImages } from "@/constants/base.consts";
import { useTheme } from "@/context/theme/theme.context";
import { Property } from "@/helpers";
import { withOpacity } from "@/helpers/theme";
import { router } from "expo-router";
import { useMemo } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

/** If you adopted enums for type/subtype, you can map them here to labels/colors/icons */
const toTypeLabel = (t?: string) => {
  if (!t) return "Property";
  // simple start-case
  return String(t)
    .replace(/_/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
};

export interface PropertyLinkProps {
  property: Property;
}

export const PropertyRow = ({ property }: PropertyLinkProps) => {
  const { app } = useTheme();
  const s = useMemo(() => themedStyles(app), [app]);

  const {
    id,
    nickname,
    address_line1,
    address_line2,
    city,
    state,
    postal_code,
    photo_url,
    is_active,
    type,
    open_issues_count,
    low_stock_count,
    readiness_status,
  } = property;

  const addressCompact = [
    address_line1,
    address_line2,
    city && `${city}, ${state} ${postal_code}`,
  ]
    .filter(Boolean)
    .join(" · ");

  const statusTone = is_active ? "success" : "warn";
  const statusText = is_active ? "Active" : "Inactive";

  const readinessTone =
    readiness_status === "ready"
      ? "success"
      : readiness_status === "blocked"
      ? "warn"
      : "neutral";

  return (
    <Pressable
      onPress={() =>
        router.push({ pathname: "/properties/[id]", params: { id } })
      }
      style={({ pressed }) => [s.card, pressed && { opacity: 0.95 }]}
    >
      {/* Thumbnail */}
      <View style={s.thumb}>
        <Image
          source={{
            uri:
              (photo_url || "").trim() !== "" ? photo_url : defaultImages.home,
          }}
          style={s.thumbImg}
        />
      </View>

      {/* Main */}
      <View style={s.main}>
        <Label
          variant="h3"
          numberOfLines={1}
          style={{ marginBottom: app.spacing[1] }}
        >
          {nickname || "Property"}
        </Label>
        {!!addressCompact && (
          <Label
            variant="subtitle2"
            numberOfLines={1}
            style={{ color: app.colors.textMuted }}
          >
            {addressCompact}
          </Label>
        )}

        {/* Tags */}
        <View style={s.tags}>
          <Tag text={statusText} tone={statusTone} />
          {!!type && <Tag text={toTypeLabel(type)} tone="neutral" />}
          {!!readiness_status && (
            <Tag
              text={`Readiness: ${toTypeLabel(readiness_status)}`}
              tone={readinessTone as any}
            />
          )}
        </View>

        {/* Quick stats */}
        <View style={s.stats}>
          <Pill text={`Issues ${open_issues_count ?? 0}`} />
          <Pill text={`Low Stock ${low_stock_count ?? 0}`} />
        </View>
      </View>

      {/* Chevron */}
      <View style={s.chevron}>
        <Label variant="h3" style={{ color: app.colors.textMuted }}>
          ›
        </Label>
      </View>
    </Pressable>
  );
};

/* ---------- small themed atoms ---------- */

const Tag = ({
  text,
  tone = "neutral",
}: {
  text: string;
  tone?: "neutral" | "success" | "warn";
}) => {
  const { app } = useTheme();
  const bg =
    tone === "success"
      ? withOpacity(app.colors.success, app.isDark ? 0.2 : 0.16)
      : tone === "warn"
      ? withOpacity(app.colors.warning, app.isDark ? 0.2 : 0.16)
      : withOpacity(app.colors.text, app.isDark ? 0.14 : 0.08);
  const fg =
    tone === "success"
      ? app.colors.success
      : tone === "warn"
      ? app.colors.warning
      : app.colors.textMuted;

  return (
    <View
      style={{
        paddingVertical: app.spacing[1],
        paddingHorizontal: app.spacing[2],
        borderRadius: app.radii.pill,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: fg,
        backgroundColor: bg,
      }}
    >
      <Label variant="subtitle2" style={{ color: fg }}>
        {text}
      </Label>
    </View>
  );
};

const Pill = ({ text }: { text: string }) => {
  const { app } = useTheme();
  return (
    <View
      style={{
        paddingVertical: app.spacing[1],
        paddingHorizontal: app.spacing[2],
        borderRadius: app.radii.pill,
        backgroundColor: withOpacity(
          app.colors.primary,
          app.isDark ? 0.14 : 0.08
        ),
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: withOpacity(app.colors.primary, 0.25),
      }}
    >
      <Label variant="subtitle2" style={{ color: app.colors.primary }}>
        {text}
      </Label>
    </View>
  );
};

/* ---------- themed styles ---------- */

const themedStyles = (t: import("@/helpers/theme/general.styles").AppTheme) => {
  const iosShadow = {
    shadowColor: "#000",
    shadowOpacity: t.elevation[1].ios.opacity,
    shadowRadius: t.elevation[1].ios.radius,
    shadowOffset: t.elevation[1].ios.offset,
  };
  return StyleSheet.create({
    card: {
      flexDirection: "row",
      alignItems: "center",
      gap: t.spacing[3],
      padding: t.spacing[4],
      borderRadius: t.radii.xl,
      backgroundColor: t.colors.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: t.colors.outline,
      elevation: t.elevation[1].android,
      ...iosShadow,
    },
    thumb: {
      width: 56,
      height: 56,
      borderRadius: t.radii.lg,
      overflow: "hidden",
      backgroundColor: t.colors.surface2,
    },
    thumbImg: { width: "100%", height: "100%" },
    main: { flex: 1, gap: t.spacing[1] },
    tags: { flexDirection: "row", gap: t.spacing[2], marginTop: t.spacing[1] },
    stats: { flexDirection: "row", gap: t.spacing[2], marginTop: t.spacing[1] },
    chevron: { marginLeft: t.spacing[2] },
  });
};
