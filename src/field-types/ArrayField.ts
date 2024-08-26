import { FieldMetaBase, TypeMeta } from "../FieldMeta";


export interface ArrayField<E> extends FieldMetaBase<"array", E[]> {
  elementType: TypeMeta;
}
