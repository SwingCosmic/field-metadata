import { FieldMetaBase } from "../FieldMeta";
import { FieldMeta } from "../FieldMeta";


export interface ArrayField extends FieldMetaBase<"array"> {
  elementType: FieldMeta;
}
