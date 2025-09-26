import {
  showErrorNotification,
  showSuccessNotification,
} from "@/src/shared/feedback/notification/notification.helper";
import { Checklist } from "@/src/types/models/checklist.types";
import { get, post, remove, update } from "../../firebase";

export const checklistApi = {
  get: async () => {},
  getAllTemplatesByCompanyId: async (company_id: string) => {
    try {
      const response = await get("Checklist", {
        where: [
          { field: "company_id", op: "==", value: company_id },
          { field: "is_template", op: "==", value: true },
        ],
      });
      return response?.data || [];
    } catch (error) {
      showErrorNotification(
        "Something went wrong getting Checklist templates."
      );
      console.error(error);
    }
  },
  getById: async (checklist_id: string) => {
    try {
      const response = await get("Checklist", checklist_id);

      return response?.data || null;
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong fetching this Checklist");
    }
  },
  post: async (data: Checklist, user_id = "") => {
    try {
      const response = await post("Checklist", {
        ...data,
        created_by: user_id,
        updated_by: user_id,
      });
      showSuccessNotification("Checklist was successfully created");
      return response;
    } catch (error) {
      showErrorNotification("Something went wrong creating this Checklist");

      console.error(error);
    }
  },
  update: async (data: Partial<Checklist>, checklist_id: string) => {
    try {
      await update("Checklist", checklist_id, data);
      showSuccessNotification("Successfully edited checklist.");
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong updating checklist.");
    }
  },
  delete: async (checklist_id: string) => {
    try {
      await remove("Checklist", checklist_id);
      showSuccessNotification("Successfully deleted checklist");
    } catch (error) {
      showErrorNotification("Something went wrong deleting this Checklist");
      console.error(error);
    }
  },
};
