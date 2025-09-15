import { BaseFonts, ClickActions, DomProperties } from "@/helpers/types/base/style.types";


export interface FontProperties extends DomProperties, ClickActions, BaseFonts {
  children?: React.ReactNode;
}
