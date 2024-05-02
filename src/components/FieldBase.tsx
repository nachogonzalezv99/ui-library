import { ComponentProps, ReactElement, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Label } from "./Label/Label";

export type FieldSizesType = "sm" | "md" | "lg";

export const fieldSize: Record<FieldSizesType, string> = {
  sm: "px-3 py-2 text-base",
  md: "px-4 py-3 text-base",
  lg: "px-5 py-4 text-xl",
};

export interface FieldBase extends ComponentProps<"input">{
  id?: string;
  label?: string;
  error?: string;
  isLoading?: boolean;
  sz: FieldSizesType;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  children: ReactElement;
  isLabelRequired?: boolean;
}

export function FieldBase({
  id,
  label,
  error,
  children,
  isLabelRequired = false,
}: FieldBase) {
  return (
    <div className="w-full flex flex-col gap-1">
      <Label htmlFor={id} value={label} required={isLabelRequired} />

      {children}

      {Boolean(error) && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

FieldBase.Content = ({
  id,
  isLoading,
  sz,
  children,
}: {
  id?: string;
  isLoading?: boolean;
  sz: FieldSizesType;
  children: ReactElement | ReactElement[];
}) => {
  return isLoading ? (
    <FieldLoading sz={sz} />
  ) : (
    <label
      htmlFor={id}
      className="border border-gray-300 rounded-md overflow-hidden flex items-center divide-x divide-gray-300"
    >
      {children}
    </label>
  );
};

interface IFileBaseInput extends ComponentProps<"input">{
  sz: FieldSizesType;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

FieldBase.Input = ({
  sz,
  startAdornment,
  endAdornment,
  ...props
}: IFileBaseInput) => {
  return (
    <div className="flex flex-1 items-center">
      {startAdornment && (
        <span className={twMerge("text-gray-500", fieldSize[sz], "pr-0")}>
          {startAdornment}
        </span>
      )}

      <input
        className={twMerge("flex-1 w-full outline-none", fieldSize[sz])}
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

function FieldLoading({ sz }: { sz: FieldSizesType }) {
  return (
    <div
      className={`bg-gray-100 w-full rounded-md animate-pulse ${fieldSize[sz]}`}
    >
      <p className="opacity-0"> a</p>
    </div>
  );
}
