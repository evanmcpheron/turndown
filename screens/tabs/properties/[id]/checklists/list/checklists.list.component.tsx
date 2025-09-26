import { ChecklistRow } from "@/screens/components";
import useAuth from "@/src/contexts/auth/auth.context";
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
import { View } from "react-native";
import { ChecklistsCreateForm } from "../create/checklists.create.form.component";
import { ChecklistsEditForm } from "../edit/checklists.edit.form.component";

export const ChecklistsListComponent = () => {
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

  const [checklists, setChecklists] = useState<Checklist[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const modeRef = useRef<Mode>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchChecklists = async () => {
    setRefreshing(true);
    if (user?.company_id) {
      const res = await checklistApi.getAllTemplatesByCompanyId(
        user.company_id
      );
      setChecklists(res);
    } else {
      setChecklists([]);
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
    setSelectedId(null);
    modeRef.current = null;
  };

  const handleCreate = () => {
    if (checklistsCreateFormRef.current) {
      checklistsCreateFormRef.current.submitData(
        (success: boolean, id?: string) => {
          if (success && id) {
            modeRef.current = "EDIT";
            setSelectedId(id);
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
          setSelectedId(null);
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
        title="Checklists"
        hint="Maintain checklists: add or remove checklists, then edit item details within each."
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
        {checklists.map((checklist: Checklist) => (
          <ChecklistRow
            key={`checklist_template_${checklist.id}`}
            name={checklist.name}
            id={checklist.id}
            onDelete={() => {
              checklistApi.delete(checklist.id).then(() => {
                onRefresh();
              });
            }}
            onEdit={() => {
              setSelectedId(checklist.id);
              modeRef.current = "EDIT";
              setIsModalDisplayed(true);
            }}
          />
        ))}
      </TurndownSection>
      {checklists.length === 0 && (
        <TurndownEmptyState
          title="Checklists"
          description="Create your first checklist "
          buttonText="Create a Checklist"
          onCreate={() => {
            modeRef.current = "CREATE";
            setIsModalDisplayed(true);
          }}
        />
      )}
      <Modal
        header={{
          primary: `${normalCase(modeRef.current as string)} Checklist`,
        }}
        scrollable
        saveText={`${normalCase(modeRef.current as string)} Checklist`}
        isOpen={isModalDisplayed}
        onCancel={handleCancel}
        onSave={handleSave}
        selectedId={selectedId}
      >
        {modeRef.current === "CREATE" && (
          <ChecklistsCreateForm ref={checklistsCreateFormRef} />
        )}
        {modeRef.current === "EDIT" && selectedId && (
          <ChecklistsEditForm
            selectedId={selectedId}
            ref={checklistsEditFormRef}
          />
        )}
      </Modal>
    </View>
  );
};
