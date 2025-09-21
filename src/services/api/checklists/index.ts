import { Checklist } from "@/helpers/types/api/checklist.types";

export const checklistApi = {
  get: async () => {},
  getById: async (checklist_id: string) => {},
  post: async () => {},
  updateById: async (data: Partial<Checklist>, checklist_id: string) => {},
  deleteById: async (checklist_id: string) => {},
};
