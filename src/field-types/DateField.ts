import { FieldMetaBase } from "../FieldMeta";


export type DateEditorType = "year" | "quarter" | "month" | "week" | "date" | "datetime" | "time";
export interface DateField extends FieldMetaBase<"date"> {
  editorType: DateEditorType;

  valueFormat?: string;
  displayFormat?: string;
  
  min?: string;
  max?: string;
}
