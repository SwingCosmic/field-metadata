import { Dictionary } from "@/types/base";
import { FieldMetaBase } from "../FieldMeta";


export interface CodeField<C extends {} = Dictionary<any>> extends FieldMetaBase<"code"> {
  language: string;
  editorConfig?: C;
}
