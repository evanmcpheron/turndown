import { useAuth } from "@/src/contexts/auth";
import { useTheme } from "@/src/contexts/theme";
import { checklistApi } from "@/src/services";
import { PlusIcon } from "@/src/shared/icons/plus.component";
import { TurndownEmptyState } from "@/src/shared/ui";
import { TurndownButton } from "@/src/shared/ui/actions";
import { Mode } from "@/src/shared/ui/forms";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { Checklist } from "@/src/types/models/checklist.types";
import { useNavigation } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { ChecklistsFormRefHandler } from "./checklists.template.types";
import { ChecklistRow } from "./components";
import { ChecklistsTemplateCreateForm } from "./forms/create/checklists.create.form.component";
import { ChecklistsTemplateEditForm } from "./forms/edit/checklists.edit.form.component";

export const ChecklistsTemplateScreen = () => {
  const checklistsCreateFormRef = useRef<ChecklistsFormRefHandler>(null);
  const checklistsEditFormRef = useRef<ChecklistsFormRefHandler>(null);

  const navigation = useNavigation();

  const { user } = useAuth();
  const { app } = useTheme();

  const [checklists, setChecklistTemplates] = useState<Checklist[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelctedId] = useState<string | null>(null);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [mode, setMode] = useState<Mode>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchChecklists = async () => {
    setIsLoading(true);
    if (user?.id) {
      const res = await checklistApi.getAllTemplatesByCompanyId(user.id);

      setChecklistTemplates(res);
    } else {
      setChecklistTemplates([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchChecklists();
    });

    return unsubscribe;
  }, [navigation, user]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchChecklists();
    setRefreshing(false);
  };

  const handleCancel = () => {
    setIsModalDisplayed(false);
    setSelctedId(null);
    setMode(null);
  };

  const handleCreate = () => {
    if (checklistsCreateFormRef.current) {
      checklistsCreateFormRef.current.submitData(
        (success: boolean, id?: string) => {
          if (success && id) {
            setSelctedId(id);
            setMode("EDIT");
          }
        }
      );
    }
  };

  const handleEdit = () => {
    if (checklistsEditFormRef.current) {
      checklistsEditFormRef.current.submitData(
        (success: boolean, id?: string) => {
          if (success && id) {
            fetchChecklists();
          }
        }
      );
    }
    setIsModalDisplayed(false);
    setMode(null);
  };

  return (
    <Page
      header="Checklists"
      canGoBack
      isLoading={isLoading}
      headerButton={
        <TurndownButton
          width={50}
          circle
          onPress={() => {
            setMode("CREATE");
            setIsModalDisplayed(true);
          }}
        >
          <PlusIcon type="solid" size={"regular"} />
        </TurndownButton>
      }
    >
      <FlatList
        data={checklists}
        keyExtractor={(checklist) => checklist.id}
        renderItem={({ item }) => (
          <ChecklistRow
            name={item.name}
            id={item.id}
            onPress={() => {
              setSelctedId(item.id);
              setMode("EDIT");
              setIsModalDisplayed(true);
            }}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: app.spacing[2] }} />
        )}
        ListEmptyComponent={
          <TurndownEmptyState
            title="Checklists"
            description="Create your first checklist template"
            buttonText="Create a Checklist"
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
          flex: 1,
        }}
      />

      {mode === "CREATE" && (
        <Modal
          header={{ primary: "Create Checklist" }}
          saveText="Create Template"
          isOpen={isModalDisplayed}
          onCancel={handleCancel}
          onSave={handleCreate}
        >
          <ChecklistsTemplateCreateForm ref={checklistsCreateFormRef} />
        </Modal>
      )}
      {mode === "EDIT" && selectedId && (
        <Modal
          header={{ primary: "Edit Checklist" }}
          saveText="Edit Template"
          isOpen={isModalDisplayed}
          onCancel={handleCancel}
          onSave={handleEdit}
        >
          <ChecklistsTemplateEditForm
            selectedId={selectedId}
            ref={checklistsCreateFormRef}
          />
        </Modal>
      )}
    </Page>
  );
};
