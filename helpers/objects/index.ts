import { TurndownObject } from "../types";

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

export const find = (elem: TurndownObject, searchFor: TurndownObject) => {
  return elem?.querySelectorAll(searchFor) || [];
};

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

export const getDomFromPointer = (obj: TurndownObject) => {
  if (obj?.current) {
    return obj.current.base || obj.current;
  }

  return null;
};

export const isScrollable = (el: TurndownObject) => {
  const style = getComputedStyle(el);
  const canScrollY =
    (style.overflowY === "auto" ||
      style.overflowY === "scroll" ||
      style.overflowY === "overlay") &&
    el.scrollHeight > el.clientHeight;
  const canScrollX =
    (style.overflowX === "auto" ||
      style.overflowX === "scroll" ||
      style.overflowX === "overlay") &&
    el.scrollWidth > el.clientWidth;
  return {
    vertical: canScrollY,
    horizontal: canScrollX,
    any: canScrollY || canScrollX,
  };
};

export const getFirstScrollHeight = (element: TurndownObject) => {
  let maxScroll = 0;
  let canScroll = false;
  while (!canScroll && element) {
    canScroll = isScrollable(element).vertical;
    maxScroll = element.clientHeight;
    element = element.parentElement;
  }
  return maxScroll;
};

export const getFirstScrollWidth = (element: TurndownObject) => {
  let maxScroll = 0;
  let canScroll = false;
  while (!canScroll && element) {
    canScroll = isScrollable(element).horizontal;
    maxScroll = element.clientWidth;
    element = element.parentElement;
  }
  return maxScroll;
};

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
