import { Dictionary } from "../types/base";
import { FieldMetaBase } from "../FieldMeta";
import { FieldMeta } from "../FieldMeta";

export type JsonElement =
  | string
  | number
  | boolean
  | null
  | JsonElement[]
  | { [key: string]: JsonElement };


export interface JsonField<T extends JsonElement = JsonElement>
  extends FieldMetaBase<"json", T> {
  
  /** 类型参数占位符 */
  readonly __type_holder__?: T;
}
