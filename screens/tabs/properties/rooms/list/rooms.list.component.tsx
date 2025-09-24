import { roomsApi } from "@/src/services/api/rooms";
import { PlusIcon } from "@/src/shared/icons/plus.component";
import { normalCase } from "@/src/shared/lib/string";
import { TurndownEmptyState } from "@/src/shared/ui";
import { TurndownButton } from "@/src/shared/ui/actions";
import { Mode } from "@/src/shared/ui/forms";
import { Row } from "@/src/shared/ui/surface/cell/row/row.layout.component";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { TurndownSection } from "@/src/shared/ui/surface/section";
import { Room } from "@/src/types";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { RoomRow } from "../components";
import { RoomCreateForm } from "../create";
import { RoomEditForm } from "../edit/room.edit.form.component";

export const RoomsListComponent = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const roomsCreateFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);
  const roomsEditFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [selectedId, setSelctedId] = useState<string | null>(null);
  const modeRef = useRef<Mode>(null);

  const fetchRooms = async () => {
    setIsLoading(true);
    if (id) {
      const res = await roomsApi.getAllByPropertyId(id);

      setRooms(res ?? []);
    } else {
      setRooms([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRooms();
  }, [id]);

  const handleCancel = () => {
    setIsModalDisplayed(false);
    modeRef.current = null;
  };

  const handleEdit = () => {
    if (roomsEditFormRef.current) {
      roomsEditFormRef.current.submitData((success: boolean) => {
        if (success) {
          modeRef.current = null;
          fetchRooms();
          setSelctedId(null);
          setIsModalDisplayed(false);
        }
      });
    }
  };

  const handleCreate = () => {
    if (roomsCreateFormRef.current) {
      roomsCreateFormRef.current.submitData((success: boolean) => {
        if (success) {
          modeRef.current = null;
          fetchRooms();
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
        title="Rooms"
        hint="Add, Remove, or Edit Rooms here."
        style={{ height: rooms.length === 0 ? "auto" : "100%" }}
        action={
          rooms.length ? (
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
          {rooms.map((room: Room) => {
            return (
              <RoomRow
                key={`room_item_${room.id}`}
                room={room}
                onDelete={() => {
                  roomsApi.delete(room.id).then(() => {
                    fetchRooms();
                  });
                }}
                onEdit={() => {
                  setSelctedId(room.id);
                  modeRef.current = "EDIT";
                  setIsModalDisplayed(true);
                }}
              />
            );
          })}
        </Row>
        {rooms.length === 0 && (
          <TurndownEmptyState
            title="Rooms"
            description="Create your first room to get started"
            buttonText="Create a Room"
            onCreate={() => {
              modeRef.current = "CREATE";
              setIsModalDisplayed(true);
            }}
          />
        )}
        <Modal
          header={{
            primary: `${normalCase(modeRef.current as string)} Room`,
          }}
          scrollable={false}
          saveText={`${normalCase(modeRef.current as string)} Room`}
          isOpen={isModalDisplayed}
          onCancel={handleCancel}
          onSave={handleSave}
        >
          {modeRef.current === "CREATE" && (
            <RoomCreateForm ref={roomsCreateFormRef} />
          )}
          {modeRef.current === "EDIT" && selectedId && (
            <RoomEditForm selectedId={selectedId} ref={roomsEditFormRef} />
          )}
        </Modal>
      </TurndownSection>
    </View>
  );
};
