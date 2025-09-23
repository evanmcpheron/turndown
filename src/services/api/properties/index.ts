import { showSuccessNotification } from "@/src/shared/feedback/notification/notification.helper";
import { Property } from "@/src/types/models/property.types";
import { get, post, update } from "../../firebase";

export const propertiesApi = {
  getByUserId: async (user_id: string) => {
    try {
      const response = await get("Property", {
        where: [{ field: "user_id", op: "==", value: user_id }],
      });

      return response?.data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  getById: async (property_id: string) => {
    try {
      const response = await get("Property", property_id);

      return response?.data || null;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  post: async (data: Property, user_id = "") => {
    try {
      await post("Property", {
        ...data,
        user_id,
        low_stock_count: 0,
        open_issues_count: 0,
        is_active: true,
        photo_url: "",
        timezone: "",
      });

      showSuccessNotification("Property was successfully created");
    } catch (error) {
      console.error(error);
    }
  },
  updateById: async (data: Partial<Property>, property_id: string) => {
    try {
      await update("Property", property_id, data);
      showSuccessNotification("Property was successfully updated");
    } catch (error) {
      console.error(error);
    }
  },
  deleteById: async (property_id: string) => {},
};
