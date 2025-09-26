import { turnsApi } from "@/src/services";
import { PlusIcon } from "@/src/shared/icons/plus.component";
import { normalCase } from "@/src/shared/lib/string";
import { TurndownEmptyState } from "@/src/shared/ui";
import { TurndownButton } from "@/src/shared/ui/actions";
import { Mode } from "@/src/shared/ui/forms";
import { Row } from "@/src/shared/ui/surface/cell/row/row.layout.component";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { TurndownSection } from "@/src/shared/ui/surface/section";
import { Turn } from "@/src/types";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { TurnRow } from "../components";
import { TurnCreateForm } from "../create";
import { TurnEditForm } from "../edit/turn.edit.form.component";

export const TurnsListComponent = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const turnsCreateFormRef = useRef<{
    submitData: (callback: (success: boolean, id: string) => void) => void;
  }>(null);
  const turnsEditFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  const [turns, setTurns] = useState<Turn[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [selectedId, setSelctedId] = useState<string | null>(null);
  const modeRef = useRef<Mode>(null);

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

  const handleCancel = () => {
    setIsModalDisplayed(false);
    modeRef.current = null;
  };

  const handleEdit = () => {
    if (turnsEditFormRef.current) {
      turnsEditFormRef.current.submitData((success: boolean) => {
        if (success) {
          modeRef.current = null;
          fetchTurns();
          setSelctedId(null);
          setIsModalDisplayed(false);
        }
      });
    }
  };

  const handleCreate = () => {
    if (turnsCreateFormRef.current) {
      turnsCreateFormRef.current.submitData((success: boolean) => {
        if (success) {
          modeRef.current = null;
          fetchTurns();
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
        title="Turns"
        hint="Add, Remove, or Edit Turns here."
        style={{ height: turns.length === 0 ? "auto" : "100%" }}
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
        <Row rowDirection="column">
          {turns.map((turn: Turn) => {
            return (
              <TurnRow
                key={`turn_item_${turn.id}`}
                turn={turn}
                onDelete={() => {
                  // turnsApi.delete(turn.id).then(() => {
                  //   fetchTurns();
                  // });
                }}
                onEdit={() => {
                  setSelctedId(turn.id);
                  modeRef.current = "EDIT";
                  setIsModalDisplayed(true);
                }}
              />
            );
          })}
        </Row>
        {turns.length === 0 && (
          <TurndownEmptyState
            title="Turns"
            description="Create your first turn to get started"
            buttonText="Create a Turn"
            onCreate={() => {
              modeRef.current = "CREATE";
              setIsModalDisplayed(true);
            }}
          />
        )}
        <Modal
          header={{
            primary: `${normalCase(modeRef.current as string)} Turn`,
          }}
          selectedId={selectedId}
          saveText={`${normalCase(modeRef.current as string)} Turn`}
          isOpen={isModalDisplayed}
          scrollable
          onCancel={handleCancel}
          mode={modeRef.current}
          onSave={handleSave}
        >
          {modeRef.current === "CREATE" && (
            <TurnCreateForm ref={turnsCreateFormRef} />
          )}
          {modeRef.current === "EDIT" && selectedId && (
            <TurnEditForm selectedId={selectedId} ref={turnsEditFormRef} />
          )}
        </Modal>
      </TurndownSection>
    </View>
  );
};
