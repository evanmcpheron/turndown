// turns.screen.tsx

import useAuth from "@/src/contexts/auth/auth.context";
import { useTheme } from "@/src/contexts/theme";
import { turnsApi } from "@/src/services";
import { PlusIcon } from "@/src/shared/icons/plus.component";
import { normalCase } from "@/src/shared/lib/string";
import {
  TurndownButton,
  TurndownEmptyState,
  TurndownSection,
} from "@/src/shared/ui";
import { Mode } from "@/src/shared/ui/forms";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { Turn } from "@/src/types/models";
import { useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { TurnRow } from "./components/turn-row";
import { TurnCreateForm } from "./create";
import { TurnEditForm } from "./edit";

export const TurndownScreen = () => {
  const { app } = useTheme();
  const { user } = useAuth();

  const turnsCreateFormRef = useRef<{
    submitData: (callback: (success: boolean, id: string) => void) => void;
  }>(null);
  const turnsEditFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  const [turns, setTurns] = useState<Turn[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const modeRef = useRef<Mode>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchTurns = async () => {
    setIsLoading(true);
    if (user?.company_id) {
      const res = await turnsApi.getAll(user?.company_id);
      setTurns(res ?? []);
    } else {
      setTurns([]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchTurns();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchTurns();
    setRefreshing(false);
  };

  const handleCancel = () => {
    setIsModalDisplayed(false);
    modeRef.current = null;
  };

  const handleCreate = () => {
    if (turnsCreateFormRef.current) {
      turnsCreateFormRef.current.submitData(
        (success: boolean, turn_id: string) => {
          if (success && turn_id) {
            modeRef.current = "EDIT";
            setSelectedId(turn_id);
          }
        }
      );
    }
  };

  const handleEdit = async () => {
    if (turnsEditFormRef.current) {
      turnsEditFormRef.current.submitData((success: boolean) => {
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
    <Page header="Turns">
      <TurndownSection
        title="Turns"
        hint="Add, Remove, or Edit Turns here."
        style={{ flex: 1 }}
        action={
          turns.length ? (
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
          data={turns}
          keyExtractor={(turn) => `turndown_turn_${turn.id}`}
          renderItem={({ item }) => (
            <TurnRow
              turn={item}
              onDelete={() => {
                turnsApi.delete(item.id).then(() => {
                  fetchTurns();
                });
              }}
              onEdit={() => {
                modeRef.current = "EDIT";
                setIsModalDisplayed(true);
                setSelectedId(item.id);
              }}
            />
          )}
          ItemSeparatorComponent={() => (
            <View style={{ height: app.spacing[2] }} />
          )}
          ListEmptyComponent={
            <TurndownEmptyState
              title="Turns"
              description="Create your first turn"
              buttonText="Create a Turn"
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
          contentContainerStyle={{
            gap: 10,
            flexGrow: 1,
          }}
        />
      </TurndownSection>
      <Modal
        saveText={`${normalCase(modeRef.current)} Turn`}
        header={{ primary: `${normalCase(modeRef.current)} Turn` }}
        isOpen={isModalDisplayed}
        onCancel={handleCancel}
        selectedId={selectedId}
        onSave={handleSave}
        scrollable
      >
        {modeRef.current === "CREATE" && (
          <TurnCreateForm ref={turnsCreateFormRef} />
        )}
        {modeRef.current === "EDIT" && selectedId && (
          <TurnEditForm selectedId={selectedId} ref={turnsEditFormRef} />
        )}
      </Modal>
    </Page>
  );
};
