import { TurndownObject } from "@/src/types";

export const getDomFromPointer = (obj: TurndownObject) => {
  if (obj?.current) {
    return obj.current.base || obj.current;
  }

  return null;
};
