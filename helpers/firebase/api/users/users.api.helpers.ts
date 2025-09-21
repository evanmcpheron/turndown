import { showSuccessNotification } from "@/components/actions/notification/notification.helper";
import { User } from "@/helpers/types";
import { get, post } from "../../../../src/services/firebase/firestore.helper";

export const getUserById = async (userId: string) => {
  try {
    const response = await get("User", userId);
    return response?.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const postUser = async (
  data: Omit<User, "created_at" | "updated_at" | "deleted">,
  userId: string
) => {
  try {
    await post("User", data, userId);
    showSuccessNotification("User was successfully created");
  } catch (error) {
    console.error(error);
  }
};
