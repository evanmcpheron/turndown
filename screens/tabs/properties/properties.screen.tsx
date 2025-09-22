import { PropertyRow } from "@/screens/tabs/properties/components/property-row/property.row.component"; // renamed export below
import { useProperty } from "@/screens/tabs/properties/context/property.context";
import { useAuth } from "@/src/contexts/auth";
import { useTheme } from "@/src/contexts/theme";
import { propertiesApi } from "@/src/services/api/properties";
import { PlusIcon } from "@/src/shared/icons/plus.component";
import { Button } from "@/src/shared/ui/actions/button";
import { Label } from "@/src/shared/ui/data-display/font";
import { Mode } from "@/src/shared/ui/forms";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { Property } from "@/src/types/models";
import { useNavigation } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { PropertiesCreateForm } from "./forms";

export const PropertiesScreen = () => {
  const propertiesCreateFormRef = useRef<{
    submitData: (cb: (ok: boolean) => void) => void;
  }>(null);

  const navigation = useNavigation();

  const { user } = useAuth();
  const { app } = useTheme();

  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [mode, setMode] = useState<Mode>(null);
  const [refreshing, setRefreshing] = useState(false);
  const { setPropertyId } = useProperty();

  const fetchProperties = async () => {
    setIsLoading(true);
    setPropertyId(null);
    if (user?.id) {
      const res = await propertiesApi.getByUserId(user.id);
      setProperties(res);
    } else {
      setProperties([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchProperties();
    });

    return unsubscribe;
  }, [navigation, user]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProperties();
    setRefreshing(false);
  };

  const handleCancel = () => {
    setIsModalDisplayed(false);
    setMode(null);
  };

  const handleSave = () => {
    if (propertiesCreateFormRef.current) {
      propertiesCreateFormRef.current.submitData((success: boolean) => {
        if (success) {
          fetchProperties();
        }
      });
    }
    setIsModalDisplayed(false);
    setMode(null);
  };

  const emptyState = useMemo(
    () => (
      <View
        style={{
          padding: app.spacing[4],
          borderRadius: app.radii.xl,
          borderWidth: 1,
          borderColor: app.colors.outline,
          backgroundColor: app.colors.surface,
          alignItems: "center",
          gap: 10,
        }}
      >
        <Label variant="h3">No Properties yet</Label>
        <Label
          variant="subtitle2"
          style={{ color: app.colors.textMuted, textAlign: "center" }}
        >
          Create your first property to start tracking rooms, checklists, and
          inventory.
        </Label>
        <Button
          onPress={() => {
            setMode("CREATE");
            setIsModalDisplayed(true);
          }}
          variant="filled"
        >
          Create Property
        </Button>
      </View>
    ),
    [app]
  );

  return (
    <Page
      isLoading={isLoading}
      header="Properties"
      headerButton={
        <Button
          width={50}
          circle
          onPress={() => {
            setMode("CREATE");
            setIsModalDisplayed(true);
          }}
        >
          <PlusIcon type="solid" size={"regular"} />
        </Button>
      }
    >
      <FlatList
        data={properties}
        keyExtractor={(p) => p.id}
        renderItem={({ item }) => <PropertyRow property={item} />}
        ItemSeparatorComponent={() => (
          <View style={{ height: app.spacing[2] }} />
        )}
        ListEmptyComponent={emptyState}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={app.colors.primary}
          />
        }
        contentContainerStyle={{
          gap: 10,
          flex: 1,
        }}
      />

      {mode === "CREATE" && (
        <Modal
          saveText="Create Property"
          header={{ primary: "Create Property" }}
          isOpen={isModalDisplayed}
          onCancel={handleCancel}
          onSave={handleSave}
        >
          <PropertiesCreateForm ref={propertiesCreateFormRef} />
        </Modal>
      )}
    </Page>
  );
};
