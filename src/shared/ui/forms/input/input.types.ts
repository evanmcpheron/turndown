import { TurndownObject } from "@/src/types";
import { ClickActions, DomProperties } from "@/src/types/common/style.types";

export interface InputContainerProperties extends DomProperties {
  disabled?: boolean;
}

export interface InputProps extends ClickActions, DomProperties {
  disabled?: boolean;
  autoComplete?: string;
  isFormField?: boolean;
  onBlur?: (e: TurndownObject) => void;
  onFocus?: (e: TurndownObject) => void;
  onChange?: (e: TurndownObject) => void;
  onInput?: (e: TurndownObject) => void;
  onIconClick?: (e: TurndownObject) => void;
  onKeyDown?: (e: TurndownObject) => void;
  placeholder?: string;
  value?: string;
  label?: string;
  defaultValue?: TurndownObject;
  errorMessage?: string;
  dirtyMessage?: string;
  name: string;
  type?: string;
  clear?: boolean;
  minNumber?: number;
  maxNumber?: number;
  ignoreError?: boolean;
  fullWidth?: boolean;
  readOnly?: boolean;
  numberFormat?: "INT" | "FLOAT" | "";
}
