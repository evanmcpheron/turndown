import { showSuccessNotification } from "@/src/shared/feedback/notification/notification.helper";
import { Company } from "@/src/types/models/company.types";
import { get, post, update } from "../../firebase";

export const companyApi = {
  getById: async (company_id: string) => {
    console.log(`🚀 ~ index.ts:7 ~ company_id: \n`, company_id);
    try {
      const response = await get("Company", company_id);
      console.log(`🚀 ~ index.ts:10 ~ response: \n`, response);

      return response?.data || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  post: async (data: Company, user_id = "") => {
    try {
      const response = await post("Company", {
        ...data,
      });
      await update("User", user_id, { company_id: response?.data.id });

      showSuccessNotification("Company was successfully created");
    } catch (error) {
      console.error(error);
    }
  },
  updateById: async (data: Partial<Company>, company_id: string) => {
    try {
      await update("Company", company_id, data);
      showSuccessNotification("Company was successfully updated");
    } catch (error) {
      console.error(error);
    }
  },
  deleteById: async (company_id: string) => {},
};
