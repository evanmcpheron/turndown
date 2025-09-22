import { TurndownObject } from "@/src/types";

export const attr = (
  elem: TurndownObject,
  key: TurndownObject,
  value?: TurndownObject
) => {
  if (!elem?.setAttribute || !elem?.getAttribute || typeof key !== "string")
    return;

  if (value !== undefined) {
    elem.setAttribute(key, value);
  } else {
    return elem.getAttribute(key);
  }
};

export const removeAttr = (elem: TurndownObject, key: TurndownObject) => {
  if (!elem?.removeAttribute || typeof key !== "string") return;

  try {
    elem.removeAttribute(key);
  } catch {
    /** Handle any potential exceptions */
  }
};
