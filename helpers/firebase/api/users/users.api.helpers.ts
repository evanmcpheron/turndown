import { showSuccessNotification } from "@/components/actions/notification/notification.helper";
import { User } from "@/helpers/types";
import { get, post } from "../../firestore.helper";

export const getUserById = async (userId: string) => {
  try {
    const response = await get("Users", userId);
    return response?.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const postUser = async (data: User, id: string) => {
  try {
    await post("Users", data, id);
    showSuccessNotification("User was successfully created");
  } catch (error) {
    console.error(error);
  }
};
