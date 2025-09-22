import { ValidationResult } from "@/src/shared/ui/forms";

export const formValidationSchema = {
  email: (emailValue: string): ValidationResult => {
    const v = (emailValue ?? "").trim();
    if (!v) return "Email is required.";
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    return isEmail ? undefined : "Enter a valid email address.";
  },
  password: (passwordValue: string): ValidationResult => {
    const v = passwordValue ?? "";
    if (!v) return "Password is required.";
    return v.length >= 6
      ? undefined
      : "Password must be at least 6 characters.";
  },
};
