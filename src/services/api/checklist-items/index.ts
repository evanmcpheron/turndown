import {
  showErrorNotification,
  showSuccessNotification,
} from "@/src/shared/feedback/notification/notification.helper";
import { Checklist, ChecklistItem } from "@/src/types/models/checklist.types";
import { get, post, remove, update } from "../../firebase";

export const checklistItemApi = {
  getById: async (item_id: string) => {
    try {
      const response = await get("ChecklistItem", item_id);
      return response.data || null;
    } catch (error) {
      showErrorNotification("Something went wrong loading Checklist Item");
      console.error(error);
    }
  },
  getAllByChecklistId: async (checklist_id: string) => {
    try {
      const response = await get("ChecklistItem", {
        where: [{ field: "checklist_id", op: "==", value: checklist_id }],
      });
      return response?.data || [];
    } catch (error) {
      showErrorNotification(
        "Something went wrong getting Checklist templates."
      );
      console.error(error);
    }
  },
  post: async (data: Checklist, user_id = "") => {
    try {
      const response = await post("ChecklistItem", {
        ...data,
        created_by: user_id,
        updated_by: user_id,
      });
      showSuccessNotification("Property was successfully created");
      return response;
    } catch (error) {
      showErrorNotification("Something went wrong creating this Checklist");

      console.error(error);
    }
  },
  update: async (data: Partial<ChecklistItem>, item_id: string) => {
    try {
      await update("ChecklistItem", item_id, data);
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong updating checklist item.");
    }
  },
  delete: async (item_id: string) => {
    try {
      await remove("ChecklistItem", item_id);
    } catch (error) {
      console.error(error);
      showErrorNotification(
        "Something went wrong deleting this checklist item."
      );
    }
  },
};
