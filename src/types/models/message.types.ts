import { Timestamp } from "firebase/firestore";
import { MediaKind, MetaData } from ".";

export interface Conversation extends MetaData {
  id?: string;
  property_id?: string;
  turn_id?: string;
  created_by: string;
  is_broadcast: boolean;
  last_message_at?: Timestamp;
}

export interface Message extends MetaData {
  id?: string;
  conversation_id: string;
  property_id?: string;
  turn_id?: string;

  text?: string;
  has_attachments: boolean;
}

export interface MessageAttachment extends MetaData {
  id?: string;
  message_id: string;
  url: string;
  media_kind: MediaKind;
}
