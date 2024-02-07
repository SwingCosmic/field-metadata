import { DisplayModeInfoBase } from "../DisplayMode";

export interface TableModeInfo extends DisplayModeInfoBase<"table"> {
  width?: string | number;
  fixed?: false | "left" | "right";
}