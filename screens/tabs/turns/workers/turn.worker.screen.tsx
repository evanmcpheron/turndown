// turns.screen.tsx

import useAuth from "@/src/contexts/auth/auth.context";
import { useTheme } from "@/src/contexts/theme";
import { turnsApi } from "@/src/services";
import { normalCase } from "@/src/shared/lib/string";
import { TurndownSection } from "@/src/shared/ui";
import { Label } from "@/src/shared/ui/data-display";
import { Mode } from "@/src/shared/ui/forms";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { Turn } from "@/src/types/models";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { TurnWorkerRow } from "./components/turn-row/turn.row.component";

export const TurnWorkerScreen = () => {
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
    if (user?.id) {
      const res = await turnsApi.getAllByUserId(user?.id);
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
        hint="Complete turns here."
        style={{ flex: 1 }}
      >
        <FlatList
          data={turns}
          keyExtractor={(turn) => `turndown_turn_${turn.id}`}
          renderItem={({ item }) => (
            <TurnWorkerRow
              turn={item}
              onDelete={() => {
                turnsApi.decline(item.id).then(() => {
                  fetchTurns();
                });
              }}
              onView={() => {
                router.push(`/(tabs)/turns/${item.id}`);
              }}
            />
          )}
          ItemSeparatorComponent={() => (
            <View style={{ height: app.spacing[2] }} />
          )}
          ListEmptyComponent={
            <Label>You haven&apos;t been assigned any turns yet.</Label>
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
        onSave={handleSave}
        mode={modeRef.current}
        selectedId={selectedId}
        scrollable
      >
        <Modal.Actions mode="CREATE">
          <Label>CREATE</Label>
        </Modal.Actions>
        <Modal.Actions mode="EDIT">
          <Label>EDIT</Label>
        </Modal.Actions>
        <Modal.Actions mode="DETAILS">
          <Label>DETAILS</Label>
        </Modal.Actions>
      </Modal>
    </Page>
  );
};
