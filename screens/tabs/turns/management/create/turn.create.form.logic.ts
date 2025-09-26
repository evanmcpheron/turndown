import { ValidationResult } from "@/src/shared/ui/forms";

export const formValidationSchema = {
  name: (nameValue: string): ValidationResult =>
    (nameValue ?? "").trim() === "" && "Turn must have a name",
};
