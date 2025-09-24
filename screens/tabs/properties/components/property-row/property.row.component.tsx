import { useTheme } from "@/src/contexts/theme";
import { defaultImages } from "@/src/shared/config/base.consts";
import { normalCase } from "@/src/shared/lib/string";
import { withOpacity } from "@/src/shared/styles";
import { Label } from "@/src/shared/ui/data-display/font";
import { Card } from "@/src/shared/ui/surface/card/card.layout.component";
import { Row } from "@/src/shared/ui/surface/cell/row/row.layout.component";
import { SwipeRow } from "@/src/shared/ui/surface/swipe-row";
import { SwipeAction } from "@/src/shared/ui/surface/swipe-row/swipe.row.types";
import { useMemo, useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { propertyRowStyles } from "./property.row.styles";
import { PropertyRowProps } from "./property.row.types";

export const PropertyRow = ({
  property,
  onDelete,
  onEdit,
}: PropertyRowProps) => {
  const [isSwiping, setIsSwiping] = useState(false);
  const { app } = useTheme();
  const s = useMemo(() => propertyRowStyles(app), [app]);

  const {
    id,
    name,
    address_line1,
    address_line2,
    city,
    state,
    postal_code,
    photo_url,
    is_active,
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

  const rightActions: SwipeAction[] = [
    {
      severity: "danger",
      icon: <Label color="onDanger">Delete</Label>,
      onPress: () => onDelete?.(),
      width: 88,
    },
  ];

  return (
    <SwipeRow
      rightActions={rightActions}
      onSwipeStart={() => setIsSwiping(true)}
      onSwipeEnd={() => setIsSwiping(false)}
    >
      <Pressable onPress={onEdit}>
        <Card secondary rounded={!isSwiping}>
          <Row justifyContent="space-between" alignItems="center">
            {/* Thumbnail */}
            <View style={s.thumb}>
              <Image
                source={{
                  uri:
                    (photo_url || "").trim() !== ""
                      ? photo_url
                      : defaultImages.home,
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
                {name || "Property"}
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
                {!!readiness_status && (
                  <Tag
                    text={`Readiness: ${normalCase(readiness_status)}`}
                    tone={readinessTone as any}
                  />
                )}
              </View>
            </View>

            {/* Chevron */}
            <View style={s.chevron}>
              <Label variant="h3" style={{ color: app.colors.textMuted }}>
                ›
              </Label>
            </View>
          </Row>
        </Card>
      </Pressable>
    </SwipeRow>
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
