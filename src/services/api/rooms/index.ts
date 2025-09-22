import { showSuccessNotification } from "@/src/shared/feedback/notification/notification.helper";
import { Room } from "@/src/types/models/property.types";
import { get, post, update } from "../../firebase";

export const roomsApi = {
  getAllByPropertyId: async (property_id: string) => {
    try {
      const response = await get("Room", {
        where: [{ field: "property_id", op: "==", value: property_id }],
      });

      return response?.data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getById: async (room_id: string) => {
    try {
      const response = await get("Room", room_id);

      return response?.data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  post: async (data: Room, property_id = "") => {
    try {
      await post("Room", {
        ...data,
        deleted: false,
        hero_photo: "",
        property_id,
      });

      showSuccessNotification("Room was successfully created");
    } catch (error) {
      console.error(error);
    }
  },
  updateById: async (data: Partial<Room>, room_id: string) => {
    try {
      await update("Room", room_id, data);
      showSuccessNotification("Room was successfully updated");
    } catch (error) {
      console.error(error);
    }
  },
  deleteById: async (room_id: string) => {},
};
