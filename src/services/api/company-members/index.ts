import { showErrorNotification } from "@/src/shared";
import { get } from "../../firebase";

export const companyMembersApi = {
  getById: async (company_id: string) => {
    try {
      const response = await get("CompanyMember", {
        where: [{ field: "company_id", op: "==", value: company_id }],
      });

      return response.data;
    } catch (error) {
      console.error(error);
      showErrorNotification(
        "Something went wrong with getting Company members."
      );
    }
  },
  getByUserId: async (user_id: string) => {
    try {
      const response = await get("CompanyMember", {
        where: [{ field: "user_id", op: "==", value: user_id }],
      });

      return response.data;
    } catch (error) {
      console.error(error);
      showErrorNotification(
        "Something went wrong with getting Company members."
      );
    }
  },
  getByCompanyId: async (company_id: string) => {
    console.log(`🚀 ~ index.ts:34 ~ company_id: \n`, company_id);

    try {
      const response = await get("CompanyMember", {
        where: [{ field: "company_id", op: "==", value: company_id }],
      });

      return response.data;
    } catch (error) {
      console.error(error);
      showErrorNotification(
        "Something went wrong with getting Company members."
      );
    }
  },
};
