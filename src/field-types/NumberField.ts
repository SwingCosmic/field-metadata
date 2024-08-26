import { FieldMetaBase } from "../FieldMeta";

export interface NumberField extends FieldMetaBase<"number", number> {
  precision?: number;
  percentage?: boolean;
  unit?: string;
  seperator?: string;
  isCurrency?: boolean;

  min?: number;
  max?: number;
  step?: number;
}
