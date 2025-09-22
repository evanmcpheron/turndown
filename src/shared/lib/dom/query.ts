import { TurndownObject } from "@/src/types";

export const find = (elem: TurndownObject, searchFor: TurndownObject) => {
  return elem?.querySelectorAll(searchFor) || [];
};
