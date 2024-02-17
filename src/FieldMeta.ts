import { ColorField } from "./field-types/ColorField";
import { NumberField } from "./field-types/NumberField";
import { StringField } from "./field-types/StringField";
import { ObjectField } from "./field-types/ObjectField";
import { DisplayMode, DisplayModeInfo } from "./DisplayMode";
import { DateField } from "./field-types/DateField";
import { EnumDataType, EnumField, EnumValueType } from "./field-types/EnumField";
import { BooleanField } from "./field-types/BooleanField";
import { ArrayField } from "./field-types/ArrayField";
import { NamedTypeField } from "./field-types/NamedTypeField";

export type DisplayModeMeta = {
  [M in DisplayMode]?: DisplayModeInfo<M>;
}

export interface FieldMetaBase<T extends string> extends DisplayModeMeta {
  type: T;
  description?: string;
  required?: boolean;
}

export interface FieldTypeMap {
  // primitive types
  "string": StringField;
  "number": NumberField;
  "date": DateField;
  "boolean": BooleanField;
  
  // basic types
  "color": ColorField;
  "enum": EnumField<EnumDataType>;

  // complex types
  "object": ObjectField;
  "array": ArrayField;

  //special types
  "type": NamedTypeField<unknown>;
};

export type FieldType = keyof FieldTypeMap;
export type TypeMeta = FieldTypeMap[FieldType];
export type FieldMeta = TypeMeta & {
  field: string;
  name: string;
};


export type ExtractType<T extends TypeMeta> = 
  T["type"] extends "string" ? string :
  T["type"] extends "number" ? number :
  T["type"] extends "boolean" ? boolean :
  T["type"] extends "date" ? string :
  T["type"] extends "color" ? string :
  T extends EnumField<infer R> ? EnumValueType<R> :
  T extends ArrayField ? ExtractType<T["elementType"]>[] :
  T extends ObjectField<infer R> ? 
    R extends any ? ({
      [P in keyof T["properties"]]: ExtractType<T["properties"][P]>
    }) :
    R : 
  T extends NamedTypeField<infer R> ? R :
  any;