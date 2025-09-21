import { showSuccessNotification } from "@/components/actions/notification/notification.helper";
import { Room } from "@/helpers/types";
import {
  get,
  post,
  update,
} from "../../../../src/services/firebase/firestore.helper";

export const getRoomsByPropertyId = async (property_id: string) => {
  try {
    const response = await get("Room", {
      where: [{ field: "property_id", op: "==", value: property_id }],
    });

    return response?.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPropertyById = async (id: string) => {
  try {
    const response = await get("Room", id);

    return response?.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const postRoom = async (data: Room, user_id = "") => {
  try {
    await post("Room", {
      ...data,
      user_id,
      low_stock_count: 0,
      open_issues_count: 0,
      is_active: true,
      photo_url: "",
      timezone: "",
    });

    showSuccessNotification("Room was successfully created");
  } catch (error) {
    console.error(error);
  }
};

export const updatePropertById = async (
  data: Partial<Room>,
  room_id: string
) => {
  try {
    await update("Room", room_id, data);
    showSuccessNotification("Room was successfully updated");
  } catch (error) {
    console.error(error);
  }
};
