import { FieldMetaBase } from "../FieldMeta";

export type EnumDataType = "string" | "number" | "boolean";

export type EnumValueType<T extends EnumDataType> = 
  T extends "number" ? number :
  T extends "boolean" ? boolean :
  string;

export interface EnumOption<T extends EnumDataType> {
  label: string;
  value: EnumValueType<T>;
  order?: number;
}
export interface EnumField<T extends EnumDataType> extends FieldMetaBase<"enum"> {
  dataType: T;

  options: EnumOption<T>[];
}
