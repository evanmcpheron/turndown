import {
  showErrorNotification,
  showSuccessNotification,
} from "@/src/shared/feedback";
import { Turn, TurnRunItem } from "@/src/types";
import { get, post, remove, update } from "../../firebase";
import { now } from "../../firebase/firestore.helper";

export const turnsApi = {
  getAll: async (company_id: string) => {
    try {
      const response = await get("Turn", {
        where: [{ field: "company_id", op: "==", value: company_id }],
      });

      return response.data || [];
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong getting your turns");
    }
  },
  getAllByUserId: async (user_id: string) => {
    try {
      const response = await get("Turn", {
        where: [{ field: "assigned_user_id", op: "==", value: user_id }],
      });

      return response.data || [];
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong getting your turns");
    }
  },
  getById: async (turn_id: string) => {
    try {
      const response = await get("Turn", turn_id);

      return response.data || null;
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong getting this turn.");
    }
  },
  getByPropertyId: async (property_id: string) => {
    try {
      const response = await get("Turn", {
        where: [{ field: "property_id", op: "==", value: property_id }],
      });

      return response?.data || [];
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong getting these turns.");
    }
  },
  updateById: async (data: Partial<Turn>, turn_id: string) => {
    try {
      await update("Turn", turn_id, data);
      showSuccessNotification("Turn was successfully updated");
    } catch (error) {
      console.error(error);
    }
  },
  startTurn: async (property_id: string, turn_id: string) => {
    try {
      const rooms = await get("Room", {
        where: [{ field: "property_id", op: "==", value: property_id }],
      });
      for (const room of rooms.data) {
        if (room.checklist_template_id) {
          await get("ChecklistItem", {
            where: [
              {
                field: "checklist_id",
                op: "==",
                value: room.checklist_template_id,
              },
            ],
          }).then((items) => {
            const itemsToCreate = [];
            for (const item of items.data) {
              itemsToCreate.push(
                post("TurnRunItem", {
                  turn_id,
                  room_id: room.id,
                  text: item.text,
                  photo_required: item.photo_required,
                  status: "pending",
                })
              );
            }

            Promise.all(itemsToCreate);
          });
        }
      }

      await update("Turn", turn_id, { status: "in_progress", started_at: now });
      showSuccessNotification("Turn was successfully updated");
    } catch (error) {
      console.error(error);
    }
  },
  getTurn: async (property_id: string, turn_id: string) => {
    try {
      const responseBody = [];

      const roomsData = await get("Room", {
        where: [{ field: "property_id", op: "==", value: property_id }],
      });

      for (const room of roomsData.data) {
        if (room.checklist_template_id) {
          const turnRunItemData = await get("TurnRunItem", {
            where: [
              {
                field: "room_id",
                op: "==",
                value: room.id,
              },
              { field: "turn_id", op: "==", value: turn_id },
            ],
          });
          responseBody.push({
            room: room.name,
            items: turnRunItemData.data,
          });
        }
        return responseBody;
      }
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong loading turn");
    }
  },
  updateTurnItem: async (data: Partial<TurnRunItem>, turn_run_id: string) => {
    try {
      await update("TurnRunItem", turn_run_id, data);
    } catch (error) {
      console.error(error);
    }
  },
  post: async (
    data: Partial<Turn>,
    property_id: string,
    company_id: string
  ) => {
    try {
      const response = await post("Turn", {
        ...data,
        status: "assigned",
        property_id,
      });

      showSuccessNotification("Room was successfully created");

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  decline: async (turn_id: string) => {
    try {
      await update("Turn", turn_id, {
        assigned_user_id: null,
        status: "unassigned",
      });
      showSuccessNotification("Turn was successfully updated");
    } catch (error) {
      console.error(error);
    }
  },
  delete: async (turn_id: string) => {
    try {
      await remove("Turn", turn_id);
    } catch (error) {
      console.error(error);
      showErrorNotification("Something went wrong deleting this turn.");
    }
  },
};
