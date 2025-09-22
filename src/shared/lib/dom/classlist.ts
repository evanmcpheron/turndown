import { TurndownObject } from "@/src/types";

export const addClass = (elem: TurndownObject, value: TurndownObject) => {
  if (!elem?.classList || typeof value !== "string") return;

  const classNames = value.split(" ");
  for (const className of classNames) {
    elem.classList.add(className);
  }
};

export const removeClass = (elem: TurndownObject, value: TurndownObject) => {
  if (!elem?.classList || typeof value !== "string") return;

  const classNames = value.split(" ");
  for (const className of classNames) {
    elem.classList.remove(className);
  }
};
