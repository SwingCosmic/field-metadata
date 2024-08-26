import { FieldMetaBase } from "../FieldMeta";

export type BooleanEditorType = "switch" | "checkbox";

export interface BooleanField extends FieldMetaBase<"boolean", boolean> {
  editorType?: BooleanEditorType;
  distinguishNull?: boolean;
}
