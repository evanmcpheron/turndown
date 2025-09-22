import { useProperty } from "@/screens/tabs/properties/context/property.context";
import { useTheme } from "@/src/contexts/theme";
import { propertiesApi } from "@/src/services/api/properties";
import { roomsApi } from "@/src/services/api/rooms";
import { defaultImages } from "@/src/shared/config/base.consts";
import { withOpacity } from "@/src/shared/styles";
import { AppTheme } from "@/src/shared/styles/general.styles";
import { TurndownButton } from "@/src/shared/ui/actions";
import { Label } from "@/src/shared/ui/data-display/font";
import { TurndownInfoRow } from "@/src/shared/ui/data-display/info-row";
import { Mode } from "@/src/shared/ui/forms";
import { Row } from "@/src/shared/ui/surface/cell/row/row.layout.component";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { TurndownSection } from "@/src/shared/ui/surface/section";
import { Property } from "@/src/types/models";
import {
  ExternalPathString,
  RelativePathString,
  router,
  useLocalSearchParams,
} from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { PropertiesEditForm } from "../forms";

export const PropertyIdScreen = () => {
  const propertiesEditFormRef = useRef<{
    submitData: (cb: (ok: boolean) => void) => void;
  }>(null);

  const { id } = useLocalSearchParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [roomsCount, setRoomsCount] = useState(0);
  const [mode, setMode] = useState<Mode | null>(null);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { app } = useTheme();
  const { setPropertyId } = useProperty();

  const fetchProperty = () => {
    setIsLoading(true);
    propertiesApi.getById(id).then(setProperty);
    roomsApi.getAllByPropertyId(id).then((res) => setRoomsCount(res.length));

    setPropertyId(id);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProperty();
  }, [id]);

  const s = useMemo(() => themedStyles(app), [app]);

  const stats = useMemo(
    () => [
      {
        label: "Rooms",
        value: roomsCount,
        route: "/properties/rooms",
      },
      {
        label: "Checklists",
        value: (property as any)?.checklists?.length ?? 0,
        route: "/properties/checklists",
      },
      {
        label: "Open Tasks",
        value: (property as any)?.openTasks ?? 0,
        route: "/properties/tasks/tasks",
      },
      {
        label: "Inventory Items",
        value: (property as any)?.inventoryCount ?? 0,
        route: "/properties/inventory",
      },
    ],
    [property, roomsCount]
  );

  const handleCancel = () => {
    setMode(null);
    setIsModalDisplayed(false);
  };
  const handleSave = () => {
    if (propertiesEditFormRef.current) {
      propertiesEditFormRef.current.submitData((success: boolean) => {
        if (success) {
          fetchProperty();
        }
      });
    }
    setMode(null);
    setIsModalDisplayed(false);
  };

  return (
    <Page canGoBack isLoading={isLoading} scrollable>
      <View style={s.hero}>
        <View style={s.heroLeft}>
          <Label variant="h2" style={s.title}>
            {property?.nickname ?? "Property"}
          </Label>
          <View style={s.tagRow}>
            <Tag
              text={(property?.is_active ? "Active" : "Inactive") as string}
              tone={property?.is_active ? "success" : "warn"}
            />
            {/* <Tag text={"Residential"} tone="neutral" /> */}
            {property?.readiness_status && (
              <Tag
                text={property?.readiness_status}
                tone={
                  property?.readiness_status === "ready" ? "success" : "warn"
                }
              />
            )}
          </View>
          <Label variant="subtitle1" style={s.subtle}>
            {[
              property?.address_line1,
              property?.address_line2,
              property?.city &&
                `${property?.city}, ${property?.state} ${property?.postal_code}`,
            ]
              .filter(Boolean)
              .join(" · ")}
          </Label>
        </View>

        {/* hero thumb / map placeholder */}
        <View style={s.thumb}>
          <Image
            source={{
              uri:
                (property?.photo_url || "").trim() !== ""
                  ? property?.photo_url
                  : defaultImages.home,
            }}
            style={s.thumbImg}
          />
        </View>
      </View>

      {/* quick actions */}
      <Row justifyContent="space-between" style={s.actionsRow}>
        <TurndownButton
          variant="filled-secondary"
          style={{ flex: 1 }}
          onPress={() => {
            setMode("EDIT");
            setIsModalDisplayed(true);
          }}
        >
          Edit
        </TurndownButton>
      </Row>

      {/* ==== OVERVIEW / STATS ==== */}
      <TurndownSection title="Overview">
        <View style={s.statsGrid}>
          {stats.map((sItem, i) => (
            <StatPill
              key={i}
              value={String(sItem.value)}
              label={sItem.label}
              route={sItem.route as RelativePathString | ExternalPathString}
            />
          ))}
        </View>
      </TurndownSection>

      {/* ==== PROPERTY INFO ==== */}
      <TurndownSection title="Property Info">
        <TurndownInfoRow label="Address 1" value={property?.address_line1} />
        <TurndownInfoRow label="Address 2" value={property?.address_line2} />
        <TurndownInfoRow label="City" value={property?.city} />
        <TurndownInfoRow label="State" value={property?.state} />
        <TurndownInfoRow label="ZIP" value={property?.postal_code} />
        <TurndownInfoRow
          label="Manager"
          value={(property as any)?.managerName ?? "Unassigned"}
        />
        <TurndownInfoRow label="Phone" value={(property as any)?.phone} />
        <TurndownInfoRow label="Email" value={(property as any)?.email} />
      </TurndownSection>

      {/* ==== CHECKLISTS ==== */}
      <TurndownSection
        title="Checklists"
        hint="Track recurring tasks & compliance"
        right={
          <TurndownButton
            variant="link-button"
            onPress={() =>
              router.push({
                pathname: "/properties/checklists",
                params: { id },
              })
            }
          >
            View All
          </TurndownButton>
        }
      >
        <ListItem title="Monthly Safety" meta="3 open · due Sep 30" />
        <ListItem title="Pool Maintenance" meta="Next: Friday 9 AM" />
        <ListItem title="HVAC Inspection" meta="Scheduled Oct 10" />
      </TurndownSection>

      <TurndownSection
        title="Rooms"
        right={
          <TurndownButton
            variant="link-button"
            onPress={() =>
              router.push({
                pathname: "/properties/rooms",
                params: { id },
              })
            }
          >
            Manage Rooms
          </TurndownButton>
        }
      >
        <ChipRow
          chips={
            (property as any)?.rooms ?? [
              "Lobby",
              "Gym",
              "Pool",
              "Boiler",
              "Storage",
            ]
          }
        />
      </TurndownSection>

      <TurndownSection
        title="Inventory"
        hint="Key supplies & levels"
        right={
          <TurndownButton
            variant="link-button"
            onPress={() =>
              router.push({
                pathname: "/properties/inventory",
                params: { id },
              })
            }
          >
            Open Inventory
          </TurndownButton>
        }
      >
        <TurndownInfoRow label="Kureg Pods" quantity={722} />
        <TurndownInfoRow label="Toilet Paper" quantity={18} severity="low" />
        <TurndownInfoRow label="Paper Towls" quantity={8} severity="high" />
      </TurndownSection>

      {mode === "EDIT" && (
        <Modal
          saveText="Edit Property"
          header={{ primary: "Edit Property" }}
          isOpen={isModalDisplayed}
          onCancel={handleCancel}
          onSave={handleSave}
        >
          <PropertiesEditForm propertyId={id} ref={propertiesEditFormRef} />
        </Modal>
      )}
    </Page>
  );
};

const StatPill = ({
  value,
  label,
  route,
}: {
  value: string;
  label: string;
  route: RelativePathString | ExternalPathString;
}) => {
  const { app } = useTheme();
  const s = useMemo(() => themedStyles(app), [app]);
  return (
    <Pressable style={s.statPill} onPress={() => router.push(route)}>
      <Label variant="h2" style={{ textAlign: "center" }}>
        {value}
      </Label>
      <Label variant="subtitle2" style={[s.subtle, { textAlign: "center" }]}>
        {label}
      </Label>
    </Pressable>
  );
};

const Tag = ({
  text,
  tone = "neutral",
}: {
  text: string;
  tone?: "neutral" | "success" | "warn";
}) => {
  const { app } = useTheme();
  const s = useMemo(() => themedStyles(app), [app]);

  const toneBg =
    tone === "success"
      ? withOpacity(app.colors.success, 0.18)
      : tone === "warn"
      ? withOpacity(app.colors.warning, 0.18)
      : withOpacity(app.colors.text, 0.08);

  const toneFg =
    tone === "success"
      ? app.colors.success
      : tone === "warn"
      ? app.colors.warning
      : app.colors.textMuted;

  return (
    <View style={[s.tag, { backgroundColor: toneBg, borderColor: toneFg }]}>
      <Label style={{ color: toneFg }}>{text}</Label>
    </View>
  );
};

const ListItem = ({ title, meta }: { title: string; meta?: string }) => {
  const { app } = useTheme();
  const s = useMemo(() => themedStyles(app), [app]);
  return (
    <View style={s.listItem}>
      <Label style={{ marginBottom: app.spacing[1] }}>{title}</Label>
      {!!meta && (
        <Label variant="subtitle2" style={s.subtle}>
          {meta}
        </Label>
      )}
    </View>
  );
};

const ChipRow = ({ chips }: { chips: string[] }) => {
  const { app } = useTheme();
  return (
    <Row style={{ flexWrap: "wrap", gap: app.spacing[2] }}>
      {chips.map((c, i) => (
        <View
          key={`${c}-${i}`}
          style={{
            paddingVertical: app.spacing[1] + 2,
            paddingHorizontal: app.spacing[2] + 2,
            borderRadius: app.radii.pill,
            backgroundColor: withOpacity(app.colors.text, 0.08),
          }}
        >
          <Label variant="subtitle2">{c}</Label>
        </View>
      ))}
    </Row>
  );
};

/* ---------- themed styles ---------- */
const themedStyles = (t: AppTheme) => {
  // light shadow vs dark elevation
  const iosShadow = {
    shadowColor: t.colors.onBackground,
    shadowOpacity: t.elevation[2].ios.opacity,
    shadowRadius: t.elevation[2].ios.radius,
    shadowOffset: t.elevation[2].ios.offset,
  };
  return StyleSheet.create({
    hero: {
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
    },
    heroLeft: { flex: 1, gap: 10 },
    title: {},
    subtle: { color: t.colors.textMuted },
    tagRow: {
      flexDirection: "row",
      gap: t.spacing[2],
      marginTop: t.spacing[1],
    },
    thumb: {
      width: 96,
      height: 96,
      borderRadius: t.radii.xl,
      overflow: "hidden",
      backgroundColor: t.colors.surface2,
    },
    thumbImg: { width: "100%", height: "100%" },

    actionsRow: { marginTop: t.spacing[1] },

    card: {
      borderRadius: t.radii.xl,
      padding: 10,
      backgroundColor: t.colors.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: t.colors.outline,
      ...iosShadow,
      elevation: t.elevation[2].android,
      gap: t.spacing[2],
    },

    statsGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: t.spacing[3],
    },
    statPill: {
      flexGrow: 1,
      minWidth: 120,
      paddingVertical: t.spacing[3],
      paddingHorizontal: t.spacing[3],
      borderRadius: t.radii.lg,
      backgroundColor: withOpacity(t.colors.primary, t.isDark ? 0.12 : 0.08),
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: withOpacity(t.colors.primary, 0.25),
    },

    infoRow: {
      paddingVertical: t.spacing[3] - 2,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: t.colors.outline,
    },

    tag: {
      borderWidth: 1,
      paddingHorizontal: t.spacing[3],
      paddingVertical: t.spacing[1],
      borderRadius: t.radii.pill,
    },

    actionBtn: {
      paddingVertical: t.spacing[3] - 2,
      paddingHorizontal: t.spacing[4],
      borderRadius: t.radii.lg,
      backgroundColor: withOpacity(t.colors.primary, t.isDark ? 0.16 : 0.1),
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: withOpacity(t.colors.primary, 0.25),
    },
    actionLabel: { color: t.colors.primary },

    linkBtn: {
      paddingVertical: t.spacing[1],
      paddingHorizontal: t.spacing[2],
      borderRadius: t.radii.md,
      backgroundColor: withOpacity(t.colors.primary, t.isDark ? 0.14 : 0.08),
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: withOpacity(t.colors.primary, 0.25),
    },

    listItem: {
      paddingVertical: t.spacing[3] - 2,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: t.colors.outline,
    },
  });
};
