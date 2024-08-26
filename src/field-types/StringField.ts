import { FieldMetaBase } from "../FieldMeta";

export interface StringField extends FieldMetaBase<"string", string> {
  minLength?: number;
  maxLength?: number;
  /** textarea */
  multiline?: boolean;
  rows?: number | { min?: number, max?: number };
}