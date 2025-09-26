import { ValidationResult } from "@/src/shared/ui/forms";

export const formValidationSchema = {
  name: (nameValue: string): ValidationResult =>
    (nameValue ?? "").trim() === "" && "Property must have a name",
};
