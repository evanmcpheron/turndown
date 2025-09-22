import { ValidationResult } from "@/src/shared/ui/forms";

export const formValidationSchema = {
  nickname: (nicknameValue: string): ValidationResult =>
    (nicknameValue ?? "").trim() === "" && "Property must have a nickname",
};
