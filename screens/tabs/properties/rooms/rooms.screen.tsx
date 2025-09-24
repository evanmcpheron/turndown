// rooms.screen.tsx

import { useProperty } from "@/screens/tabs/properties/context/property.context";
import { RoomRow } from "@/screens/tabs/properties/rooms/components/room-row/room.row.component";
import { useAuth } from "@/src/contexts/auth";
import { useTheme } from "@/src/contexts/theme";
import { roomsApi } from "@/src/services/api/rooms";
import { TurndownEmptyState } from "@/src/shared/ui";
import { Mode } from "@/src/shared/ui/forms";
import { Modal } from "@/src/shared/ui/surface/modal/modal.layout.component";
import { Page } from "@/src/shared/ui/surface/page/page.layout.component";
import { Room } from "@/src/types/models";
import { useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { RoomCreateForm } from "./forms";

export const RoomsScreen = () => {
  const { user } = useAuth();
  const { app } = useTheme();
  const { propertyId } = useProperty();

  const roomsCreateFormRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [mode, setMode] = useState<Mode>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchRooms = async () => {
    setIsLoading(true);
    if (propertyId) {
      const res = await roomsApi.getAllByPropertyId(propertyId);

      setRooms(res ?? []);
    } else {
      setRooms([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRooms();
  }, [user?.id]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchRooms();
    setRefreshing(false);
  };

  const handleCancel = () => {
    setIsModalDisplayed(false);
    setMode(null);
  };

  const handleSave = () => {
    if (roomsCreateFormRef.current) {
      roomsCreateFormRef.current.submitData((success: boolean) => {
        if (success) {
          fetchRooms();
          setIsModalDisplayed(false);
          setMode(null);
        }
      });
    }
  };

  return (
    <Page isLoading={isLoading} header="Rooms" canGoBack>
      <FlatList
        data={rooms}
        keyExtractor={(room) => `turndown_room_${room.id}`}
        renderItem={({ item }) => (
          <RoomRow
            room={item}
            onDelete={() => console.log("DELETE")}
            onEdit={() => console.log("EDIT")}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: app.spacing[2] }} />
        )}
        ListEmptyComponent={
          <TurndownEmptyState
            title="Rooms"
            description="Create your first room"
            buttonText="Create a Room"
            onCreate={() => {
              setMode("CREATE");
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

      {mode === "CREATE" && (
        <Modal
          saveText="Create Room"
          header={{ primary: "Create Room" }}
          isOpen={isModalDisplayed}
          onCancel={handleCancel}
          onSave={handleSave}
        >
          <RoomCreateForm ref={roomsCreateFormRef} />
        </Modal>
      )}
    </Page>
  );
};
