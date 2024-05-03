import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ILabel extends ComponentProps<"label"> {
  required?: boolean;
  value?: string;
}
export function Label({
  required = false,
  value,
  className,
  id,
  ...props
}: ILabel) {
  return (
    value && (
      <label
        test-id="label"
        htmlFor={id}
        {...props}
        className={twMerge(
          "text-gray-500 text-sm flex items-center gap-2",
          className
        )}
      >
        {value} {required && <span className="text-red-500">*</span>}
      </label>
    )
  );
}
