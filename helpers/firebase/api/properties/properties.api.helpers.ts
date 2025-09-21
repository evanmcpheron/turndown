import { showSuccessNotification } from "@/components/actions/notification/notification.helper";
import { Property } from "@/helpers/types";
import { get, post, update } from "../../firestore.helper";

export const getPropertiesByUserId = async (user_id: string) => {
  try {
    const response = await get("Property", {
      where: [{ field: "user_id", op: "==", value: user_id }],
    });

    return response?.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPropertyById = async (id: string) => {
  try {
    const response = await get("Property", id);

    return response?.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const postProperty = async (data: Property, user_id = "") => {
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
};

export const updatePropertById = async (
  data: Partial<Property>,
  property_id: string
) => {
  try {
    await update("Property", property_id, data);
    showSuccessNotification("Property was successfully updated");
  } catch (error) {
    console.error(error);
  }
};
