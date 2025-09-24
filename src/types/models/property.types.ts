import { MetaData, ReadinessStatus } from ".";

export interface Property extends MetaData {
  id: string;
  name: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  timezone?: string;
  photo_url?: string; // Hero Image
  readiness_status: ReadinessStatus;
  checklist_template_id?: string;
  is_active: boolean;
}

export interface Room extends MetaData {
  id: string;
  deleted: boolean;
  name: string;
  checklist_template_id?: string;
  hero_photo?: string;
  photos?: string[];
  property_id: string;
}
