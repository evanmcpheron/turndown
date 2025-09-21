import { PlusIcon } from "@/assets/icons/plus.component";
import { Button } from "@/components/actions";
import { Label } from "@/components/font";
import { Modal } from "@/components/layouts/modal/modal.layout.component";
import { Page } from "@/components/layouts/page/page.layout.component";
import { PropertiesCreateForm } from "@/components/screens/tabs/properties/properties.create.form.component";
import { PropertyRow } from "@/components/screens/tabs/properties/property.row.component"; // renamed export below
import { useAuth } from "@/context";
import { useProperty } from "@/context/property/property.context";
import { useTheme } from "@/context/theme/theme.context";
import { Property } from "@/helpers";
import { getPropertiesByUserId } from "@/helpers/firebase/api/properties/properties.api.helpers";
import { Mode } from "@/helpers/types/base/base.types";
import { useNavigation } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";

const PropertyScreen = () => {
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
      const res = await getPropertiesByUserId(user.id);
      setProperties(res);
    } else {
      setProperties([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {}, [user]);

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

export default PropertyScreen;
