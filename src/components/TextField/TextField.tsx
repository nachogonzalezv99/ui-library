import React, { ComponentProps, forwardRef } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

interface TextFieldProps extends ComponentProps<"input"> {
  id: string;
  label?: string;
  error?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { id, label, type = "text", error, className, ...props },
    ref
  ) {
    return (
      <div className="flex flex-col w-full flex-1">
        {label && (
          <label htmlFor={id} className="mb-1">
            {label}
          </label>
        )}
        <span className="relative">
          <input
            ref={ref}
            id={id}
            name={id}
            type={type}
            className={twMerge(
              "w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-gray-500 disabled:placeholder:text-gray-400",
              error && "border-red-500",
              className
            )}
            {...props}
          />

          {Boolean(error) && (
            <AiOutlineExclamationCircle className="text-red-600 absolute right-2 top-1/2 transform -translate-y-1/2 text-xl" />
          )}
        </span>

        {Boolean(error) && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

export default TextField;
