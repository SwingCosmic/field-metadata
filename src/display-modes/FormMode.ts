import { DisplayModeInfoBase } from "../DisplayMode";

export interface FormModeInfo extends DisplayModeInfoBase<"form"> {
  readonly?: boolean;
  disabled?: boolean;

  placeholder?: string;
  span?: number;
  groupName?: string;
}