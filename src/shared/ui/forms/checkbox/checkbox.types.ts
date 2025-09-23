import { TurndownObject } from "@/src/types";
import { ClickActions, DomProperties } from "@/src/types/common/style.types";

export interface ContainerProps extends DomProperties, ClickActions {
  disabled?: boolean;
}

export interface CheckboxProps extends DomProperties, ClickActions {
  onBlur?: (e: TurndownObject) => void;
  onFocus?: (e: TurndownObject) => void;
  onChange?: (value: TurndownObject) => void;
  checked?: boolean;
  defaultValue?: boolean;
  errorMessage?: string;
  dirtyMessage?: string;
  name: string;
  id?: string;
  label?: string;
  labelPosition?: "left" | "right";
  disabled?: boolean;
  labelNoWrap?: boolean;
}
