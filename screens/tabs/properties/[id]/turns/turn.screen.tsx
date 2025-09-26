// turns.screen.tsx

import { useTheme } from "@/src/contexts/theme";
import { turnsApi } from "@/src/services";
import { normalCase } from "@/src/shared/lib/string";
import { TurndownEmptyState } from "@/src/shared/ui";
import { Mode } from "@/src/shared/ui/forms";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { Turn } from "@/src/types/models";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { TurnRow } from "./components/turn-row";
import { TurnCreateForm } from "./create";
import { TurnEditForm } from "./edit";

export const TurnsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { app } = useTheme();

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
    if (id) {
      const res = await turnsApi.getByPropertyId(id);
      setTurns(res ?? []);
    } else {
      setTurns([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTurns();
  }, [id]);

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
    console.log(
      `🚀 ~ turn.screen.tsx:64 ~ handleCreate ~ turnsCreateFormRef.current: \n`,
      turnsCreateFormRef.current
    );

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
    <Page isLoading={isLoading} header="Turns" canGoBack>
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
          flex: 1,
        }}
      />

      <Modal
        saveText={`${normalCase(modeRef.current)} Turn`}
        header={{ primary: `${normalCase(modeRef.current)} Turn` }}
        isOpen={isModalDisplayed}
        onCancel={handleCancel}
        onSave={handleSave}
        mode={modeRef.current}
        selectedId={selectedId}
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
