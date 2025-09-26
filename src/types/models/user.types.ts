import { MetaData } from "./base.types";
import { MemberRole } from "./company.types";

export interface User extends Omit<MetaData, "created_by" | "updated_by"> {
  id: string;
  email: string;
  display_name: string;
  phone_number?: string;
  photo_url?: string;
  global_role?: MemberRole;
  is_active: boolean;
  company_id: string;
  is_admin: boolean;
}
