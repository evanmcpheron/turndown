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
import { Form, useForm } from "@/src/shared/ui/forms/form";
import { getFirstPropertyValue } from "@/src/shared/ui/forms/form/form.helpers";
import { Input } from "@/src/shared/ui/forms/input";
import { Row } from "@/src/shared/ui/surface/cell/row/row.layout.component";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { TurndownSection } from "@/src/shared/ui/surface/section";
import { TurndownObject } from "@/src/types";
import { ChecklistItem } from "@/src/types/models/checklist.types";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Alert, View } from "react-native";
import { ChecklistsFormRefHandler } from "../../checklists.template.types";
import { ChecklistItemCreateForm } from "../create/checklist-item/checklist-item.create.form.component";
import { ChecklistItemEditForm } from "./checklist-item/checklist-item.edit.form.component";
import { formValidationSchema } from "./checklists.edit.form.logic";
import { checklistsEditFormStyles } from "./checklists.edit.form.styles";
import { ChecklistsEditFormProps } from "./checklists.edit.form.types";

export const ChecklistsTemplateEditForm = forwardRef<
  ChecklistsFormRefHandler,
  ChecklistsEditFormProps
>(({ selectedId }, ref) => {
  const checklistsItemCreateFormRef = useRef<ChecklistsFormRefHandler>(null);
  const checklistsItemEditFormRef = useRef<ChecklistsFormRefHandler>(null);

  const { user } = useAuth();
  const { app } = useTheme();

  const styles = useMemo(() => checklistsEditFormStyles(app), [app]);

  const [submittingData, setSubmittingData] = useState(false);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [editingItem, setEditingItem] = useState<string | null>(null);
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

  useEffect(() => {
    fetchChecklistItems();
  }, [selectedId]);

  const saveData = async (data: TurndownObject) => {
    try {
      if (!user) return false;
      const cleaned = removeUndefined(data);
      const response = await checklistApi.post(
        { ...cleaned, is_template: true },
        user?.id
      );

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
    <View style={{ gap: 10 }}>
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
        right={
          checklistItems.length ? (
            <TurndownButton
              color="success"
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
        <Row rowDirection="column" gap={10}>
          {!checklistItems.length && (
            <TurndownEmptyState
              title={"Checklist Items"}
              description={
                "Add your first checklist item and start making progress."
              }
              buttonText={"Add your first checklist item"}
              onCreate={() => setIsModalDisplayed(true)}
            />
          )}
          {checklistItems.map((checklistItem) => {
            return (
              <View key={checklistItem.id}>
                {editingItem === checklistItem.id ? (
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
                    <View
                      style={{ display: "flex", flexDirection: "row", gap: 10 }}
                    >
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
                ) : (
                  <RowAction
                    text={checklistItem.text}
                    onEdit={() => {
                      setEditingItem(checklistItem.id);
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
                              await checklistItemApi
                                .delete(checklistItem.id)
                                .then(() => {
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
              </View>
            );
          })}
        </Row>
      </TurndownSection>

      {isModalDisplayed && (
        <Modal
          isOpen={isModalDisplayed}
          header={{
            primary: "Add Item",
            secondary: "Manage items that belong to a checklist template",
          }}
          saveText="Add Item"
          autoHeight
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
