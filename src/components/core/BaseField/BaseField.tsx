import { ComponentProps, ReactElement, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Label } from "../../Label/Label";
import { BaseFieldContext, useBaseField } from "./BaseFieldContext";

export type FieldSizesType = "sm" | "md" | "lg";

export const fieldSize: Record<FieldSizesType, string> = {
  sm: "px-3 py-2 text-base",
  md: "px-4 py-3 text-base",
  lg: "px-5 py-4 text-xl",
};

export interface BaseField extends ComponentProps<"input"> {
  label?: string;
  error?: string;
  isLoading?: boolean;
  sz?: FieldSizesType;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

export function BaseField({
  id,
  sz = "md",
  label,
  error,
  children,
  disabled,
  readOnly,
  min,
  max,
  defaultValue,
  required = false,
}: BaseField) {
  return (
    <BaseFieldContext.Provider
      value={{
        id,
        sz,
        label,
        error,
        children,
        required,
        disabled,
        readOnly,
        min,
        max,
        defaultValue
      }}
    >
      <div className="w-full flex flex-col gap-1">
        <Label htmlFor={id} value={label} required={required} />

        {children}

        {Boolean(error) && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </BaseFieldContext.Provider>
  );
}

BaseField.Content = ({
  isLoading,
  children,
}: {
  isLoading?: boolean;
  children: ReactElement | ReactElement[];
}) => {
  const { id, error, readOnly, disabled } = useBaseField();
  return isLoading ? (
    <FieldLoading />
  ) : (
    <label
      htmlFor={id}
      className={twMerge(
        "border border-gray-300 bg-white rounded-md overflow-hidden flex items-center divide-x divide-gray-300",
        error && "border-red-500",
        readOnly && "bg-gray-50 text-black",
        disabled && "bg-gray-50"
      )}
    >
      {children}
    </label>
  );
};

interface IFileBaseInput extends ComponentProps<"input"> {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

BaseField.Input = ({
  startAdornment,
  endAdornment,
  ...props
}: IFileBaseInput) => {
  const { sz, id, disabled, defaultValue,readOnly, min, max } = useBaseField();

  return (
    <div className="flex flex-1 items-center">
      {startAdornment && (
        <span className={twMerge("text-gray-500", fieldSize[sz], "pr-0")}>
          {startAdornment}
        </span>
      )}

      <input
        id={id}
        className={twMerge(
          "flex-1 w-full placeholder:text-gray-500 disabled:placeholder:text-gray-400 outline-none",
          disabled && "text-gray-400",
          readOnly && " text-black",
          fieldSize[sz],
        )}
        min={min}
        max={max}
        disabled={disabled}
        readOnly={readOnly}
        defaultValue={defaultValue}
        {...props}
      />

      {endAdornment && (
        <span className={twMerge("text-gray-500", fieldSize[sz], "pl-0")}>
          {endAdornment}
        </span>
      )}
    </div>
  );
};

function FieldLoading() {
  const { sz } = useBaseField();
  return (
    <div
      className={`bg-gray-100 w-full rounded-md animate-pulse ${fieldSize[sz]}`}
    >
      <p className="opacity-0"> a</p>
    </div>
  );
}
