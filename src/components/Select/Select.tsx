import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectItemProps, SelectProps } from "@radix-ui/react-select";
import React, { ReactNode } from "react";
import { AiOutlineCheck, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

export interface CustomSelectProps extends SelectProps {
  placeholder?: string;
  label?: string;
  id: string;
  error?: string;
  defaultValue?: string;
  children: ReactNode;
  name?: string;
  disabled?:boolean;
  onChange: (a: any) => void;
}

export const Select = React.forwardRef<HTMLButtonElement, CustomSelectProps>(
  (
    {
      children,
      label,
      id,
      placeholder,
      value,
      disabled,
      error,
      name,
      defaultValue,
      onChange,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <div className="flex flex-col flex-1 w-full">
        {label && (
          <label htmlFor={id} className="block mb-1">
            {label}
          </label>
        )}
        <SelectPrimitive.Root
          disabled={disabled}
          name={name}
          {...props}
          onValueChange={(value) => onChange({ target: { name, value } })}
        >
          <SelectPrimitive.Trigger
            ref={forwardedRef}
            value={value}
            name={name}
            defaultValue={defaultValue}
            id={id}
            className={twMerge(
              "w-full flex gap-2 items-center justify-between border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 text-red-200",
              error && "border-red-500",
              disabled
                ? "text-gray-300"
                : placeholder && value === undefined
                ? "text-gray-500 "
                : "text-gray-900"
            )}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon>
              <AiOutlineDown />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content className="bg-white rounded-md shadow-lg border border-gray-300 z-50">
              <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-400 h-6 ">
                <AiOutlineUp />
              </SelectPrimitive.ScrollUpButton>
              <SelectPrimitive.Viewport className="p-1">
                {children}
              </SelectPrimitive.Viewport>
              <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-400 h-6">
                <AiOutlineDown />
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
        {Boolean(error) && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, value, className, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        className={twMerge(
          " text-gray-500 rounded-[3px] flex items-center pl-7 py-1 relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-800",
          className
        )}
        value={String(value)}
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <AiOutlineCheck />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    );
  }
);
