import { ColorField } from "./field-types/ColorField";
import { NumberField } from "./field-types/NumberField";
import { StringField } from "./field-types/StringField";
import { ObjectField } from "./field-types/ObjectField";
import { DisplayMode, DisplayModeInfo } from "./DisplayMode";
import { DateField } from "./field-types/DateField";
import { EnumDataType, EnumField } from "./field-types/EnumField";
import { BooleanField } from "./field-types/BooleanField";
import { ArrayField } from "./field-types/ArrayField";
import { NamedTypeField } from "./field-types/NamedTypeField";
import { CodeField } from "./field-types/CodeField";
import { AnyFunction, Dictionary } from "./types/base";
import { JsonField } from "./field-types/JsonField";
import { TableField } from "./field-types/TableField";

export type DisplayModeMeta = {
  [M in DisplayMode]?: DisplayModeInfo<M>;
};

export interface FieldMetaBase<T extends string, D, C extends {} = Dictionary<any>>
  extends DisplayModeMeta {
  type: T;
  description?: string;
  required?: boolean;
  default?: D | (() => D);

  editorConfig?: C;
}

export interface FieldTypeMap {
  // primitive types
  string: StringField;
  number: NumberField;
  date: DateField;
  boolean: BooleanField;

  // basic types
  color: ColorField;
  enum: EnumField<unknown>;
  code: CodeField;

  // complex types
  object: ObjectField;
  array: ArrayField<unknown>;
  json: JsonField;
  table: TableField;

  //special types
  type: NamedTypeField<unknown>;
}

export type FieldType = keyof FieldTypeMap;
export type TypeMeta = FieldTypeMap[FieldType];
export type FieldMeta<T extends TypeMeta = TypeMeta> = T & {
  field: string;
  name: string;
};

/* prettier-ignore */
export type ExtractType<T extends TypeMeta> = T extends FieldMetaBase<string, infer R> ? R : unknown;


// export type ExtractType<T extends TypeMeta> = 
//   T["type"] extends "string" ? string :
//   T["type"] extends "number" ? number :
//   T["type"] extends "boolean" ? boolean :
//   T["type"] extends "date" ? string :
//   T["type"] extends "color" ? string :
//   T["type"] extends "code" ? string :
//   T extends EnumField<infer R> ? R :
//   T extends JsonField<infer R> ? R :
//   T extends TableField<infer R> ? R[] :
//   T extends ArrayField<infer R> ? 
//     R extends any ?
//       ExtractType<T["elementType"]>[] :
//     R :
//   T extends ObjectField<infer R> ? 
//     R extends any ? ({
//       [P in keyof T["properties"]]: ExtractType<T["properties"][P]>
//     }) :
//     R : 
//   T extends NamedTypeField<infer R> ? R :
//   any;
