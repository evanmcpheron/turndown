import { ChecklistRow } from "@/screens/components";
import { useAuth } from "@/src/contexts/auth";
import { useTheme } from "@/src/contexts/theme";
import { checklistApi } from "@/src/services";
import { PlusIcon } from "@/src/shared/icons/plus.component";
import { normalCase } from "@/src/shared/lib/string";
import { TurndownEmptyState } from "@/src/shared/ui";
import { TurndownButton } from "@/src/shared/ui/actions";
import { Mode } from "@/src/shared/ui/forms";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { TurndownSection } from "@/src/shared/ui/surface/section";
import { Checklist } from "@/src/types/models/checklist.types";
import { useNavigation } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { ChecklistsTemplateCreateForm } from "../create/checklists.create.form.component";
import { ChecklistsTemplateEditForm } from "../edit/checklists.edit.form.component";

export const ChecklistsTemplateList = () => {
  const checklistsCreateFormRef = useRef<{
    submitData: (
      callback: (success: boolean, checklist_id?: string) => void
    ) => void;
  }>(null);
  const checklistsEditFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  const navigation = useNavigation();

  const { user } = useAuth();
  const { app } = useTheme();

  const [checklists, setChecklistTemplates] = useState<Checklist[]>([]);
  const [selectedId, setSelctedId] = useState<string | null>(null);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const modeRef = useRef<Mode>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchChecklists = async () => {
    setRefreshing(true);
    if (user?.id) {
      const res = await checklistApi.getAllTemplatesByCompanyId(user.id);

      setChecklistTemplates(res);
    } else {
      setChecklistTemplates([]);
    }
    setRefreshing(false);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      onRefresh();
    });

    return unsubscribe;
  }, [navigation, user]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchChecklists();
    setRefreshing(false);
  };

  const handleCancel = () => {
    onRefresh();
    setIsModalDisplayed(false);
    setSelctedId(null);
    modeRef.current = null;
  };

  const handleCreate = () => {
    if (checklistsCreateFormRef.current) {
      checklistsCreateFormRef.current.submitData(
        (success: boolean, id?: string) => {
          if (success && id) {
            modeRef.current = "EDIT";
            setSelctedId(id);
          }
        }
      );
    }
  };

  const handleEdit = () => {
    if (checklistsEditFormRef.current) {
      checklistsEditFormRef.current.submitData((success: boolean) => {
        if (success) {
          modeRef.current = null;
          onRefresh();
          setSelctedId(null);
          setIsModalDisplayed(false);
        }
      });
    }
  };

  const handleSave = () => {
    if (modeRef.current === "CREATE") {
      handleCreate();
    } else {
      handleEdit();
    }
  };

  return (
    <View>
      <TurndownSection
        title="Templates"
        hint="Maintain reusable checklists: add or remove templates, then edit item details within each."
        style={{ height: checklists.length === 0 ? "auto" : "100%" }}
        action={
          checklists.length ? (
            <TurndownButton
              width={50}
              circle
              onPress={() => {
                setIsModalDisplayed(true);
                modeRef.current = "CREATE";
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
          data={checklists}
          keyExtractor={(checklist) => checklist.id}
          renderItem={({ item }) => (
            <ChecklistRow
              name={item.name}
              id={item.id}
              onDelete={() => {
                checklistApi.delete(item.id).then(() => {
                  onRefresh();
                });
              }}
              onEdit={() => {
                setSelctedId(item.id);
                modeRef.current = "EDIT";
                setIsModalDisplayed(true);
              }}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 0 }} />}
          ListEmptyComponent={
            <TurndownEmptyState
              title="Checklists"
              description="Create your first checklist template"
              buttonText="Create a Checklist"
              onCreate={() => {
                modeRef.current = "CREATE";
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
          style={{ flexGrow: 1 }}
          contentContainerStyle={{
            gap: 10,
            flexGrow: 1,
          }}
          scrollEnabled={checklists.length > 0}
        />
      </TurndownSection>

      <Modal
        header={{
          primary: `${normalCase(modeRef.current as string)} Checklist`,
        }}
        scrollable={true}
        saveText={`${normalCase(modeRef.current as string)} Checklist`}
        isOpen={isModalDisplayed}
        onCancel={handleCancel}
        onSave={handleSave}
      >
        {modeRef.current === "CREATE" && (
          <ChecklistsTemplateCreateForm ref={checklistsCreateFormRef} />
        )}
        {modeRef.current === "EDIT" && selectedId && (
          <ChecklistsTemplateEditForm
            selectedId={selectedId}
            ref={checklistsEditFormRef}
          />
        )}
      </Modal>
    </View>
  );
};
