import { useAuth } from "@/src/contexts/auth";
import { useTheme } from "@/src/contexts/theme";
import { checklistApi, checklistItemApi } from "@/src/services";
import { showErrorNotification } from "@/src/shared/feedback/notification/notification.helper";
import { PlusIcon } from "@/src/shared/icons/plus.component";
import { removeUndefined } from "@/src/shared/lib/object";
import { TurndownEmptyState } from "@/src/shared/ui";
import { TurndownButton } from "@/src/shared/ui/actions";
import { Label } from "@/src/shared/ui/data-display/font";
import { RowAction } from "@/src/shared/ui/data-display/row-action";
import { Mode } from "@/src/shared/ui/forms";
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { BottomDrawer } from "@/src/shared/ui/surface/bottom-drawer";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { TurndownSection } from "@/src/shared/ui/surface/section";
import { TurndownObject } from "@/src/types";
import { ChecklistItem } from "@/src/types/models/checklist.types";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Alert, View } from "react-native";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import { ChecklistsFormRefHandler } from "../checklists.template.types";
import { ChecklistItemCreateForm } from "../create/checklist-item/checklist-item.create.form.component";
import { ChecklistItemEditForm } from "./checklist-item/checklist-item.edit.form.component";
import { formValidationSchema } from "./checklists.edit.form.logic";
import { ChecklistsEditFormProps } from "./checklists.edit.form.types";

export const ChecklistsTemplateEditForm = forwardRef<
  ChecklistsFormRefHandler,
  ChecklistsEditFormProps
>(({ selectedId }, ref) => {
  const checklistsItemCreateFormRef = useRef<ChecklistsFormRefHandler>(null);
  const checklistsItemEditFormRef = useRef<ChecklistsFormRefHandler>(null);

  const { user } = useAuth();
  const { app } = useTheme();

  const [submittingData, setSubmittingData] = useState(false);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const modeRef = useRef<Mode>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([]);
  const { submitForm, setValue } = useForm({
    formName: "frmEditChecklists",
    validationModel: formValidationSchema,
    onFormErrors: () => {},
  });

  const fetchChecklistItems = async () => {
    if (selectedId) {
      await checklistApi.getById(selectedId).then((response) => {
        setValue("name", response.name);
      });
      await checklistItemApi
        .getAllByChecklistId(selectedId)
        .then((response) => {
          setChecklistItems(response);
        });
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchChecklistItems();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchChecklistItems();
  }, [selectedId]);

  const saveData = async (data: TurndownObject) => {
    try {
      if (!user) return false;
      const cleaned = removeUndefined(data);
      await checklistApi.update({ ...cleaned, is_template: true }, selectedId);

      return true;
    } catch {
      return false;
    }
  };

  useImperativeHandle(ref, () => ({
    submitData(callback: (success: boolean) => void) {
      if (submittingData) return;
      setSubmittingData(true);

      submitForm(async (data, errors) => {
        if (errors) {
          showErrorNotification(getFirstPropertyValue(errors));
          setSubmittingData(false);
          return;
        }
        const success = await saveData(data);
        if (success) callback(success);
        setSubmittingData(false);
      });
    },
  }));

  return (
    <View style={{ gap: 10, height: "100%" }}>
      <TurndownSection
        title="Checklist"
        hint="What is the name of this checklist template?"
      >
        <Form name="frmEditChecklists">
          <Input name="name" placeholder="Name" label="Name" />
        </Form>
      </TurndownSection>
      <TurndownSection
        title="Items"
        hint="What items are we going to put in this checklist?"
        style={{ height: checklistItems.length === 0 ? "auto" : "100%" }}
        action={
          checklistItems.length ? (
            <TurndownButton
              width={50}
              circle
              onPress={() => {
                setIsModalDisplayed(true);
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
          data={checklistItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RowAction
              text={item.text}
              onEdit={() => {
                setEditingItem(item.id);
              }}
              onDelete={() => {
                Alert.alert(
                  "Delete",
                  "Are you sure you want to delete this Item?",
                  [
                    { text: "Cancel", style: "cancel" },
                    {
                      text: "Delete",
                      style: "destructive",
                      onPress: async () => {
                        await checklistItemApi.delete(item.id).then(() => {
                          setEditingItem(null);
                          fetchChecklistItems();
                        });
                      },
                    },
                  ]
                );
              }}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 0 }} />}
          ListEmptyComponent={
            <TurndownEmptyState
              title={"Checklist Items"}
              description={
                "Add your first checklist item and start making progress."
              }
              buttonText={"Add your first checklist item"}
              onCreate={() => setIsModalDisplayed(true)}
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
          scrollEnabled={checklistItems.length > 0}
        />
      </TurndownSection>
      {editingItem && (
        <BottomDrawer open={!!editingItem} onClose={() => setEditingItem(null)}>
          <View
            style={{
              borderColor: app.colors.primary,
              borderWidth: 3,
              backgroundColor: app.colors.surface2,
              borderRadius: app.radii.lg,
              padding: app.spacing[4],
            }}
          >
            <ChecklistItemEditForm
              ref={checklistsItemEditFormRef}
              itemId={editingItem}
            />
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <TurndownButton
                color="danger"
                variant="outline"
                style={{ flex: 1 }}
                onPress={() => {
                  setEditingItem(null);
                  fetchChecklistItems();
                }}
              >
                <Label>Cancel</Label>
              </TurndownButton>
              <TurndownButton
                color="success"
                variant="outline"
                style={{ flex: 1 }}
                onPress={() => {
                  if (checklistsItemEditFormRef.current) {
                    checklistsItemEditFormRef.current.submitData(
                      (success: boolean) => {
                        if (success) {
                          setEditingItem(null);
                          fetchChecklistItems();
                        }
                      }
                    );
                  }
                }}
              >
                <Label>Edit</Label>
              </TurndownButton>
            </View>
          </View>
        </BottomDrawer>
      )}
      {isModalDisplayed && (
        <Modal
          isOpen={isModalDisplayed}
          scrollable={false}
          header={{
            primary: "Add Item",
            secondary: "Manage items that belong to a checklist template",
          }}
          saveText="Add Item"
          onCancel={() => {
            setIsModalDisplayed(false);
          }}
          onSave={() => {
            if (checklistsItemCreateFormRef.current) {
              checklistsItemCreateFormRef.current.submitData(
                (success: boolean) => {
                  if (success) {
                    fetchChecklistItems();
                    setIsModalDisplayed(false);
                  }
                }
              );
            }
          }}
        >
          <ChecklistItemCreateForm
            ref={checklistsItemCreateFormRef}
            checklistId={selectedId}
          />
        </Modal>
      )}
    </View>
  );
});
