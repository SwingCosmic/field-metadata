import { Dictionary } from "../types/base";
import { FieldMetaBase } from "../FieldMeta";

export interface NamedTypeField<T, C extends {} = Dictionary<any>> extends FieldMetaBase<"type"> {
  typeName: string;
  editorConfig?: C;
}
