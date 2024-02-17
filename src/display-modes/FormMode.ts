import { DisplayModeInfoBase } from "../DisplayMode";

export interface FormModeInfo extends DisplayModeInfoBase {
  readonly?: boolean;
  disabled?: boolean;

  placeholder?: string;
  span?: number;
  groupName?: string;
}