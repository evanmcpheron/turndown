import { TurndownObject } from "@/src/types/common";

export const JSONStringify = (obj: TurndownObject) => {
  let cache: TurndownObject = [];
  let str = JSON.stringify(obj, function (_key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        return;
      }
      cache.push(value);
    }
    return value;
  });
  cache = null;
  return str;
};

export const removeUndefined = (obj: TurndownObject) => {
  return JSON.parse(JSONStringify(obj));
};
