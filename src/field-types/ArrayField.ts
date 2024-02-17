import { FieldMetaBase, TypeMeta } from "../FieldMeta";


export interface ArrayField extends FieldMetaBase<"array"> {
  elementType: TypeMeta;
}
