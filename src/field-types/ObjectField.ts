import { Dictionary } from "../types/base";
import { FieldMetaBase } from "../FieldMeta";
import { FieldMeta } from "../FieldMeta";

export interface ObjectField<T extends {} = Dictionary<any>>
  extends FieldMetaBase<"object", T> {
  properties: {
    [P in keyof T]: FieldMeta;
  };
  /** 索引器，用于创建动态名称的属性 */
  indexer?: FieldMeta;
}
