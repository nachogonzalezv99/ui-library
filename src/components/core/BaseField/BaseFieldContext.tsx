import { ReactElement, ReactNode, createContext, useContext } from "react";
import { FieldSizesType } from "./BaseField";

type BaseFieldContextType<T> = {
  id?: string;
  label?: string;
  sz: FieldSizesType;
  error?: string;
  children: ReactNode;
  required: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  min: string | number | undefined;
  max: string | number | undefined;
  defaultValue: string | number | readonly string[] | undefined;
};

export const BaseFieldContext = createContext<BaseFieldContextType<any> | null>(
  null
);

export function useBaseField<T>() {
  const context = useContext(BaseFieldContext) as BaseFieldContextType<T>;
  if (!context) new Error("useBaseField must be inside a BaseFieldProvider");
  return context;
}
