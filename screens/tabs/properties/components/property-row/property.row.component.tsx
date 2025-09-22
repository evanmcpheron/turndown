import { useTheme } from "@/src/contexts/theme";
import { defaultImages } from "@/src/shared/config/base.consts";
import { normalCase } from "@/src/shared/lib/string";
import { withOpacity } from "@/src/shared/styles";
import { Label } from "@/src/shared/ui/data-display/font";
import { router } from "expo-router";
import { useMemo } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { propertyRowStyles } from "./property.row.styled";
import { PropertyRowProps } from "./property.row.types";

export const PropertyRow = ({ property }: PropertyRowProps) => {
  const { app } = useTheme();
  const s = useMemo(() => propertyRowStyles(app), [app]);

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
          {!!type && <Tag text={normalCase(type)} tone="neutral" />}
          {!!readiness_status && (
            <Tag
              text={`Readiness: ${normalCase(readiness_status)}`}
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
