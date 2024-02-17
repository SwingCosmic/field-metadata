import { FieldMetaBase } from "../FieldMeta";

export type EnumDataType = "string" | "number" | "boolean";


export interface EnumOption<T> {
  label: string;
  value: T;
  order?: number;
}
export interface EnumField<T extends string | number | boolean> extends FieldMetaBase<"enum"> {
  dataType: EnumDataType;

  options: EnumOption<T>[];
}
