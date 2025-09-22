import { TurndownObject } from "@/src/types";
import { DomProperties } from "@/src/types/common/style.types";
import type { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { ValidationResult } from "../validations";

export interface FormErrors<T extends TurndownObject> {
  firstError: string | null;
  allErrors: TurndownObject<T>;
}

export interface FormProps<T extends TurndownObject> extends DomProperties {
  name: string;
  children: ReactNode;
  defaultValues?: TurndownObject<T>;
  editValues?: Partial<T>;
  validationModel?: Record<string, (value: TurndownObject) => ValidationResult>;
  stepperPlacement?: "header" | "footer";
  stepperContainerStyle?: StyleProp<ViewStyle>;
  initialStep?: number;
  hideStepper?: boolean;
}
