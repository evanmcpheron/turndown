import { get } from "../../firestore.helper";

export const getPropertiesByUserId = async (userId: string) => {
  try {
    const response = await get("Properties", {
      where: [{ field: "user_id", op: "==", value: userId }],
      orderBy: { field: "created_at", direction: "desc" },
    });

    return response?.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
