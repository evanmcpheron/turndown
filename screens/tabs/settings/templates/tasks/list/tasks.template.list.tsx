import { useAuth } from "@/src/contexts/auth";
import { useTheme } from "@/src/contexts/theme";
import { PlusIcon } from "@/src/shared/icons/plus.component";
import { TurndownButton } from "@/src/shared/ui/actions";
import { Mode } from "@/src/shared/ui/forms";
import { TurndownSection } from "@/src/shared/ui/surface/section";
import { useNavigation } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Task, View } from "react-native";

export const TasksTemplateList = () => {
  const tasksCreateFormRef = useRef<{
    submitData: (
      callback: (success: boolean, task_id?: string) => void
    ) => void;
  }>(null);
  const tasksEditFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  const navigation = useNavigation();

  const { user } = useAuth();
  const { app } = useTheme();

  const [tasks, setTaskTemplates] = useState<Task[]>([]);
  const [selectedId, setSelctedId] = useState<string | null>(null);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const modeRef = useRef<Mode>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchTasks = async () => {
    setRefreshing(true);
    if (user?.id) {
      //   const res = await tasksApi.getAllTemplatesByCompanyId(user.id);
      //   setTaskTemplates(res);
    } else {
      setTaskTemplates([]);
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
    await fetchTasks();
    setRefreshing(false);
  };

  const handleCancel = () => {
    onRefresh();
    setIsModalDisplayed(false);
    setSelctedId(null);
    modeRef.current = null;
  };

  const handleCreate = () => {
    if (tasksCreateFormRef.current) {
      tasksCreateFormRef.current.submitData((success: boolean, id?: string) => {
        if (success && id) {
          modeRef.current = "EDIT";
          setSelctedId(id);
        }
      });
    }
  };

  const handleEdit = () => {
    if (tasksEditFormRef.current) {
      tasksEditFormRef.current.submitData((success: boolean) => {
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
        hint="Maintain reusable tasks: add or remove templates, then edit item details within each."
        style={{ height: tasks.length === 0 ? "auto" : "100%" }}
        action={
          tasks.length ? (
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
        <></>
        {/* <FlatList
          data={tasks}
          keyExtractor={(task) => task.id}
          renderItem={({ item }) => (
            // <TaskRow
            //   name={item.name}
            //   id={item.id}
            //   onDelete={() => {
            //     taskApi.delete(item.id).then(() => {
            //       onRefresh();
            //     });
            //   }}
            //   onEdit={() => {
            //     setSelctedId(item.id);
            //     modeRef.current = "EDIT";
            //     setIsModalDisplayed(true);
            //   }}
            // />
            <View></View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 0 }} />}
          ListEmptyComponent={
            <TurndownEmptyState
              title={"Tasks"}
              description={
                "Manage reusable tasks for your turndowns for an even easier management experience."
              }
              buttonText={"Create a Task"}
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
          scrollEnabled={tasks.length > 0}
        /> */}
      </TurndownSection>
      {/* <Modal
                header={{
                  primary: `${normalCase(modeRef.current as string)} Task`,
                }}
                scrollable={false}
                saveText={`${normalCase(modeRef.current as string)} Task`}
                isOpen={isModalDisplayed}
                onCancel={handleCancel}
                onSave={handleSave}
              >
                {modeRef.current === "CREATE" && (
                  <TasksTemplateCreateForm ref={tasksCreateFormRef} />
                )}
                {modeRef.current === "EDIT" && selectedId && (
                  <TasksTemplateEditForm
                    selectedId={selectedId}
                    ref={tasksEditFormRef}
                  />
                )}
              </Modal> */}
    </View>
  );
};
