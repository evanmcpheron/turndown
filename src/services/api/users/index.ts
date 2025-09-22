import { showSuccessNotification } from "@/src/shared/feedback/notification/notification.helper";
import { User } from "@/src/types/models";
import { get, post } from "../../firebase";

export const userApi = {
  getById: async (user_id: string) => {
    try {
      const response = await get("User", user_id);
      return response?.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  post: async (
    data: Omit<User, "created_at" | "updated_at" | "deleted">,
    userId: string
  ) => {
    try {
      await post("User", data, userId);
      showSuccessNotification("User was successfully created");
    } catch (error) {
      console.error(error);
    }
  },
  updateById: async (data: Partial<User>, user_id: string) => {},
  deleteById: async (user_id: string) => {},
};
