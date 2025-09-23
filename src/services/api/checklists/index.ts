import {
  showErrorNotification,
  showSuccessNotification,
} from "@/src/shared/feedback/notification/notification.helper";
import { Checklist } from "@/src/types/models/checklist.types";
import { get, post } from "../../firebase";

export const checklistApi = {
  get: async () => {},
  getAllTemplatesByCompanyId: async (company_id: string) => {
    try {
      const response = await get("Checklist", {
        where: [
          { field: "company_id", op: "==", value: "asdfasdfasdf" },
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
      showSuccessNotification("Property was successfully created");
      return response;
    } catch (error) {
      showErrorNotification("Something went wrong creating this Checklist");

      console.error(error);
    }
  },
  updateById: async (data: Partial<Checklist>, checklist_id: string) => {},
  deleteById: async (checklist_id: string) => {},
};
