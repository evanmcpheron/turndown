import {
  AppTheme,
  defaultImages,
  normalCase,
  Page,
  Property,
  Turn,
  TurndownButton,
  TurndownSection,
  turnsApi,
  useTheme,
} from "@/src";
import { propertiesApi } from "@/src/services/api/properties";
import {
  Label,
  TurndownInfoRow,
  TurndownPill,
} from "@/src/shared/ui/data-display";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { TurndownWorkerComponent } from "./components/turndown.worker.component";

export const TurnIdWorkerScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { app } = useTheme();
  const styles = useMemo(() => themedStyles(app), [app]);

  const [turn, setTurn] = useState<Turn>();
  const [property, setProperty] = useState<Property>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const turnData = await turnsApi.getById(id);
    setTurn(turnData);
    const propertyData = await propertiesApi.getById(turnData.property_id);

    setProperty(propertyData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const startTurn = async () => {
    if (turn && property) {
      await turnsApi.startTurn(property?.id, turn?.id);
      fetchData();
    }
  };

  return (
    <Page canGoBack scrollable>
      <View style={styles.hero}>
        <View style={styles.heroLeft}>
          <Label variant="h3">{property?.name ?? "Property"}</Label>
          <View style={styles.tagRow}>
            <TurndownPill
              label={
                (turn?.status === "completed" ? "Complete" : "To Do") as string
              }
              severity={turn?.status === "completed" ? "low" : "medium"}
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
      <TurndownSection>
        <TurndownInfoRow
          label={"Scheduled Start:"}
          value={turn?.scheduled_start_at.toString()}
        />
        <TurndownInfoRow
          label={"Scheduled Deadline:"}
          value={turn?.scheduled_end_at.toString()}
        />
        <TurndownInfoRow
          label={"Start At:"}
          value={turn?.started_at?.toString()}
        />
        <TurndownInfoRow
          label={"Finished At:"}
          value={turn?.finished_at?.toString()}
        />
      </TurndownSection>
      {!turn?.started_at ? (
        <TurndownButton onPress={startTurn}>Start Turndown</TurndownButton>
      ) : (
        <TurndownWorkerComponent property={property} turn={turn} />
      )}
    </Page>
  );
};

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
