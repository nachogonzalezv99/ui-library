import { ComponentProps, ReactNode } from "react";
import { FieldBase, FieldSizesType } from "./FieldBase";

export interface TextField extends ComponentProps<"input"> {
  id?: string;
  label?: string;
  error?: string;
  isLoading?: boolean;
  sz?: FieldSizesType;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  isLabelRequired?: boolean;
}

export function TextField({
  startAdornment,
  endAdornment,
  label,
  error,
  isLabelRequired,
  sz = "md",
}: TextField) {
  return (
    <FieldBase
      label={label}
      isLabelRequired={isLabelRequired}
      sz={sz}
      error={error}
    >
      <FieldBase.Content>
        <FieldBase.Input
          sz={sz}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
        />
      </FieldBase.Content>
    </FieldBase>
  );
}
