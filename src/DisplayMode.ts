import { CardModeInfo } from "./display-modes/CardMode";
import { FormModeInfo } from "./display-modes/FormMode";
import { TableModeInfo } from "./display-modes/TableMode";

export interface DisplayModeInfoBase {
  hidden?: boolean;
  order?: number;
}

export interface DisplayModeTypeMapping {
  "form": FormModeInfo;
  "table": TableModeInfo;
  "card": CardModeInfo;
}

export type DisplayMode = keyof DisplayModeTypeMapping;
export type DisplayModeInfo<T extends string> = T extends DisplayMode 
  ? DisplayModeTypeMapping[T]
  : unknown;