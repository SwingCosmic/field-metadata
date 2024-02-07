import { Dictionary } from "../types/base";
import { FieldMetaBase } from "../FieldMeta";
import { FieldMeta } from "../FieldMeta";

export interface ObjectField<T extends {} = Dictionary<any>> extends FieldMetaBase<"object"> {
  properties: {
    [P in keyof T]: FieldMeta;
  };
}
