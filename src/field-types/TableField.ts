import { AnyTuple, Dictionary } from "@/types/base";
import { FieldMeta, FieldMetaBase, TypeMeta } from "../FieldMeta";

export type TableDataType = AnyTuple | Dictionary<any>;
export type TableIndexType<T extends TableDataType> = T extends AnyTuple
  ? keyof T & number
  : keyof T & string;

export interface TableField<T extends TableDataType = TableDataType>
  extends FieldMetaBase<"table", T[]> {
  columns: {
    [C in TableIndexType<T>]: FieldMeta;
  };
}
