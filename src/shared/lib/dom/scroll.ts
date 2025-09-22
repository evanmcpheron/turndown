import { TurndownObject } from "@/src/types";

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
