import { Timestamp } from "firebase/firestore";
import { MediaKind } from ".";

export interface Conversation {
  id?: string;
  property_id?: string;
  turn_id?: string;
  created_by_user_id: string;
  is_broadcast: boolean;
  last_message_at?: Timestamp;
  created_at: Timestamp;
  updated_at: Timestamp;
}

export interface Message {
  id?: string;
  conversation_id: string;
  property_id?: string;
  turn_id?: string;

  sender_user_id: string;
  text?: string;
  has_attachments: boolean;

  created_at: Timestamp;
  updated_at: Timestamp;
}

export interface MessageAttachment {
  id?: string;
  message_id: string;
  url: string;
  media_kind: MediaKind;
  created_at: Timestamp;
}
