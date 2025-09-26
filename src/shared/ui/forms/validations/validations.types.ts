import { TurndownObject } from "@/src/types";

export type Mode = "CREATE" | "EDIT" | "DELETE" | "DETAILS" | null;

export type ValidationResult = TurndownObject | undefined;

export const OptionalField = (): ValidationResult => undefined;
