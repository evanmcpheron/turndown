import { PropertyRow } from "@/screens/tabs/properties/components/property-row/property.row.component"; // renamed export below
import { useProperty } from "@/screens/tabs/properties/context/property.context";
import useAuth from "@/src/contexts/auth/auth.context";
import { useTheme } from "@/src/contexts/theme";
import { propertiesApi } from "@/src/services/api/properties";
import { PlusIcon } from "@/src/shared/icons/plus.component";
import { TurndownEmptyState } from "@/src/shared/ui";
import { TurndownButton } from "@/src/shared/ui/actions";
import { Mode } from "@/src/shared/ui/forms";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { TurndownSection } from "@/src/shared/ui/surface/section";
import { Property } from "@/src/types/models";
import { router, useNavigation } from "expo-router";
import { useEffect, useRef, useState } from "react";
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

  return (
    <Page header="Properties">
      <TurndownSection
        title="Properties"
        hint="Add, Remove, or Edit Properties here."
        style={{ height: properties.length === 0 ? "auto" : "100%" }}
        action={
          properties.length ? (
            <TurndownButton
              width={50}
              circle
              onPress={() => {
                setIsModalDisplayed(true);
                setMode("CREATE");
              }}
            >
              <PlusIcon type="solid" size={"regular"} />
            </TurndownButton>
          ) : (
            <View />
          )
        }
      >
        <FlatList
          data={properties}
          keyExtractor={(property) => property.id}
          renderItem={({ item }) => (
            <PropertyRow
              property={item}
              onEdit={() =>
                router.push({
                  pathname: "/properties/[id]",
                  params: { id: item.id },
                })
              }
              onDelete={() => {
                console.log("DELETE", item.id);
              }}
            />
          )}
          ItemSeparatorComponent={() => (
            <View style={{ height: app.spacing[2] }} />
          )}
          ListEmptyComponent={
            <TurndownEmptyState
              title="Properties"
              description="Create your first property "
              buttonText="Create a Property"
              onCreate={() => {
                setMode("CREATE");
                setIsModalDisplayed(true);
              }}
            />
          }
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={app.colors.primary}
            />
          }
          contentContainerStyle={{
            gap: 10,
            flexGrow: 1,
          }}
        />
      </TurndownSection>

      {mode === "CREATE" && (
        <Modal
          saveText="Create Property"
          header={{ primary: "Create Property" }}
          isOpen={isModalDisplayed}
          onCancel={handleCancel}
          onSave={handleSave}
          mode={"CREATE"}
          selectedId={"modal"}
          scrollable
        >
          <PropertiesCreateForm ref={propertiesCreateFormRef} />
        </Modal>
      )}
    </Page>
  );
};
