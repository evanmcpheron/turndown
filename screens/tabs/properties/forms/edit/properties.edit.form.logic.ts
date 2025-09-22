import { ValidationResult } from "@shared/forms";

export const formValidationSchema = {
  nickname: (nicknameValue: string): ValidationResult =>
    (nicknameValue ?? "").trim() === "" && "Property must have a nickname",
};
