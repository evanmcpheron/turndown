import { SelectOption } from "@/src/shared";
import { MetaData } from "./base.types";

export type MemberRole = "cleaner";
// "admin" | "manager" | "host" | "helper" |

export interface Company extends Omit<MetaData, "company_id"> {
  id: string;
  name: string;
  photo_url?: string;
}

export interface CompanyMember extends MetaData {
  id: string;
  user_id: string;
  role: MemberRole;
  company_id: string;
  is_active: boolean;
}

export interface CompanyInvite extends MetaData {
  id: string;
  role: MemberRole;
  code: string;
  code_id: string;
  email: string;
  expires_at?: Date;
  redeemed_by?: string;
  redeemed_at?: Date;
  status: "pending" | "redeemed" | "expired" | "revoked";
}

export const MEMBER_ROLE_OPTIONS = [
  // { label: "Admin", value: "admin" },
  // { label: "Manager", value: "manager" },
  // { label: "Host", value: "host" },
  { label: "Cleaner", value: "cleaner" },
  // { label: "Helper", value: "helper" },
] satisfies (SelectOption & { value: MemberRole })[];
