import { FieldMetaBase } from "../FieldMeta";


export type ColorFormat = "name" | "rgb" | "hex" | "hsl" | "hsb" | "yuv" | "cmyk";

export const commonFormats: ColorFormat[] = ["name", "rgb", "hex", "hsl"];
export interface ColorField extends FieldMetaBase<"color", string> {
  colorFormats?: ColorFormat | ColorFormat[];
  supportAlpha?: boolean;
  predefinedColors?: string[];
}
