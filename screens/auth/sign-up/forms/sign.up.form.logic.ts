import { ValidationResult } from "@shared/forms";

export const formValidationSchema = {
  name: (nameValue: string): ValidationResult =>
    !(nameValue ?? "").trim() && "You must enter a name to sign up",
  email: (emailValue: string): ValidationResult => {
    const v = (emailValue ?? "").trim();
    if (!v) return "Email is required.";
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    return !isEmail && "Enter a valid email address.";
  },

  password: (passwordValue: string): ValidationResult => {
    const v = passwordValue ?? "";
    if (!v) return "Password is required.";
    return v.length < 6 && "Password must be at least 6 characters.";
  },
};
