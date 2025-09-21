// rooms.screen.tsx

import { PlusIcon } from "@/assets/icons/plus.component";
import { Button } from "@/components/actions";
import { Label } from "@/components/font";
import { Modal } from "@/components/layouts/modal/modal.layout.component";
import { Page } from "@/components/layouts/page/page.layout.component";
import { RoomCreateForm } from "@/components/screens/tabs/properties/rooms/forms/create";
import { RoomRow } from "@/components/screens/tabs/properties/rooms/rooms.row.component";
import { useAuth } from "@/context";
import { useProperty } from "@/context/property/property.context";
import { useTheme } from "@/context/theme/theme.context";
import { Room } from "@/helpers";
import { getRoomsByPropertyId } from "@/helpers/firebase/api/rooms/rooms.api.helpers";
import { Mode } from "@/helpers/types/base/base.types";
import { useEffect, useMemo, useRef, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";

const RoomsScreen = () => {
  const { user } = useAuth();
  const { app } = useTheme();
  const { propertyId } = useProperty();

  const roomsCreateFormRef = useRef<{
    submitData: (cb: (ok: boolean) => void) => void;
  }>(null);

  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [mode, setMode] = useState<Mode>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchRooms = async () => {
    setIsLoading(true);
    if (propertyId) {
      const res = await getRoomsByPropertyId(propertyId);
      console.log(`🚀 ~ rooms.tsx:38 ~ fetchRooms ~ res: \n`, res);

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

  const emptyState = useMemo(
    () => (
      <View
        style={{
          padding: app.spacing[4],
          borderRadius: app.radii.xl,
          borderWidth: 1,
          borderColor: app.colors.outline,
          backgroundColor: app.colors.surface,
          alignItems: "center",
          gap: 10,
        }}
      >
        <Label variant="h3">No Rooms yet</Label>
        <Label
          variant="subtitle2"
          style={{ color: app.colors.textMuted, textAlign: "center" }}
        >
          Create your first room to start tracking photos, notes, and
          checklists.
        </Label>
        <Button
          onPress={() => {
            setMode("CREATE");
            setIsModalDisplayed(true);
          }}
          variant="filled"
        >
          Create Room
        </Button>
      </View>
    ),
    [app]
  );

  return (
    <Page
      isLoading={isLoading}
      header="Rooms"
      canGoBack
      headerButton={
        <Button
          width={50}
          circle
          onPress={() => {
            setMode("CREATE");
            setIsModalDisplayed(true);
          }}
        >
          <PlusIcon type="regular" color="onPrimary" size={"medium"} />
        </Button>
      }
    >
      <FlatList
        data={rooms}
        keyExtractor={(room) => `turndown_room_${room.id}`}
        renderItem={({ item }) => <RoomRow room={item} />}
        ItemSeparatorComponent={() => (
          <View style={{ height: app.spacing[2] }} />
        )}
        ListEmptyComponent={emptyState}
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

export default RoomsScreen;
