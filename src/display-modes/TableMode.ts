import { DisplayModeInfoBase } from "../DisplayMode";

export interface TableModeInfo extends DisplayModeInfoBase {
  width?: string | number;
  fixed?: false | "left" | "right";
}