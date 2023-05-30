import React, { ComponentProps } from "react";

interface TextFieldProps extends ComponentProps<"input"> {
  id: string;
  label?: string;
}
function TextField({
  id,
  label,
  type = "text",
  className,
  ...props
}: TextFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className=" mb-2">
          {label}
        </label>
      )}
      <input
        id={id}
        name={id}
        type={type}
        className={`border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
        {...props}
      />
    </div>
  );
}

export default TextField;
