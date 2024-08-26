import { FieldMetaBase } from "../FieldMeta";

export type EnumDataType = "string" | "number" | "boolean";


export interface EnumOption<T> {
  label: string;
  value: T;
  order?: number;
}
export interface EnumField<T> extends FieldMetaBase<"enum", T> {
  dataType: EnumDataType;

  options: EnumOption<T>[];
}
