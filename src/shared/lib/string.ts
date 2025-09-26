import { TurndownObject } from "@/src/types";

// Capitalize first letter of each word, rest lowercase
export const normalCase = (str?: TurndownObject): string => {
  if (!str) return "";

  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .split(/\s+/)
    .map(
      (word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
};

// Capitalize only the first character of the string
export const sentenceCase = (str?: TurndownObject): string => {
  if (!str) return "";

  const s = str.trim();
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};

// ALL CAPS
export const upperCase = (str?: TurndownObject): string => {
  return str ? str.toUpperCase() : "";
};

// all lowercase
export const lowerCase = (str?: TurndownObject): string => {
  return str ? str.toLowerCase() : "";
};

// camelCase
export const camelCase = (str?: TurndownObject): string => {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(/[\s_-]+/)
    .map((word: string, i: number) =>
      i === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
};

// PascalCase
export const pascalCase = (str?: TurndownObject): string => {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(/[\s_-]+/)
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

// kebab-case
export const kebabCase = (str?: TurndownObject): string => {
  if (!str) return "";
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

// snake_case
export const snakeCase = (str?: TurndownObject): string => {
  if (!str) return "";
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase();
};

export const snakeCaseToSpaces = (str?: TurndownObject): string => {
  if (!str) return "";
  return str.split("_").join(" ");
};

export const kebabToSpaces = (str?: TurndownObject): string => {
  if (!str) return "";
  return str.split("-").join(" ");
};
