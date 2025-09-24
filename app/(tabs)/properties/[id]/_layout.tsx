import { PropertiesEditForm, PropertyProvider, useProperty } from "@/screens";
import { useTheme } from "@/src/contexts/theme";
import { propertiesApi } from "@/src/services/api/properties";
import { AppTheme } from "@/src/shared";
import { defaultImages } from "@/src/shared/config/base.consts";
import { normalCase } from "@/src/shared/lib/string";
import { TurndownButton } from "@/src/shared/ui/actions";
import { Label } from "@/src/shared/ui/data-display/font";
import { TurndownPill } from "@/src/shared/ui/data-display/pill";
import { Mode } from "@/src/shared/ui/forms";
import { Tabs } from "@/src/shared/ui/navigation/tabs/tabs.layout.component";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { Property } from "@/src/types";
import {
  Href,
  router,
  Slot,
  useLocalSearchParams,
  usePathname,
} from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

interface TabsSections {
  label: string;
  href: string;
}

export default function PropertyStackLayout() {
  const propertiesEditFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);
  const pathname = usePathname();

  const { id } = useLocalSearchParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [mode, setMode] = useState<Mode | null>(null);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { app } = useTheme();
  const { setPropertyId } = useProperty();

  const sections: TabsSections[] = [
    {
      label: "Overview",
      href: `/properties/${id}`,
    },
    {
      label: "Rooms",
      href: `/properties/${id}/rooms`,
    },
    {
      label: "Checklists",
      href: `/properties/${id}/checklists`,
    },
    {
      label: "Schedule",
      href: `/properties/${id}/schedule`,
    },
    {
      label: "Notes",
      href: `/properties/${id}/notes`,
    },
  ];

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

  const fetchProperty = () => {
    setIsLoading(true);
    propertiesApi.getById(id).then(setProperty);

    setPropertyId(id);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProperty();
  }, [id]);

  const styles = useMemo(() => themedStyles(app), [app]);

  return (
    <PropertyProvider>
      <Page canGoBack scrollable>
        <View style={styles.hero}>
          <View style={styles.heroLeft}>
            <Label variant="h3">{property?.name ?? "Property"}</Label>
            <View style={styles.tagRow}>
              <TurndownPill
                label={(property?.is_active ? "Active" : "Inactive") as string}
                severity={property?.is_active ? "low" : "medium"}
              />
              {property?.readiness_status && (
                <TurndownPill
                  label={normalCase(property?.readiness_status)}
                  severity={
                    property?.readiness_status === "ready" ? "low" : "medium"
                  }
                />
              )}
            </View>
            <Label variant="subtitle1" style={styles.subtle}>
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

          <View style={styles.thumb}>
            <Image
              source={{
                uri:
                  (property?.photo_url || "").trim() !== ""
                    ? property?.photo_url
                    : defaultImages.home,
              }}
              style={styles.thumbImg}
            />
          </View>
        </View>

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

        <Tabs>
          {sections.map((section) => {
            return (
              <Tabs.Item
                default={pathname === section.href}
                onPress={() => router.replace(section.href as Href)}
                key={section.label}
                label={section.label}
              >
                <Slot />
              </Tabs.Item>
            );
          })}
        </Tabs>

        {mode === "EDIT" && (
          <Modal
            saveText="Edit Property"
            header={{ primary: "Edit Property" }}
            isOpen={isModalDisplayed}
            onCancel={handleCancel}
            onSave={handleSave}
            scrollable
          >
            <PropertiesEditForm propertyId={id} ref={propertiesEditFormRef} />
          </Modal>
        )}
      </Page>
    </PropertyProvider>
  );
}

const themedStyles = (t: AppTheme) => {
  return StyleSheet.create({
    hero: {
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
    },
    heroLeft: { flex: 1, gap: 10 },
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
  });
};
